//yGCDXVzDs5LMcaJz
//2115241

import { MongoClient,ServerApiVersion } from "mongodb";
import { env } from "./environment";

let e_commerceDBInstance=null;
const mongoClientInstance = new MongoClient(env.MONGODB_URI,{
    serverApi:{
        version:ServerApiVersion.v1,
        strict:true,
        deprecationErrors:true
    }
})

export const CONNECT_DB = async()=>{
    await mongoClientInstance.connect()
    e_commerceDBInstance=mongoClientInstance.db(env.DATABASE_NAME)
}

export const GET_DB=()=>{
    if(!e_commerceDBInstance) throw new Error('Must connect to database first !!!')
    return e_commerceDBInstance
}