import {CONNECT_DB,GET_DB} from '~/config/mongodb'
import express from 'express'
import cors from 'cors'
import { env } from './config/environment'
import {APIs_V1} from '~/routes/v1'
import {errorHandlingMiddleware} from '~/middlewares/errorHandlingMiddleware'
const app = express()
app.use(cors())
const START_SERVER=()=>{
  //Enable req.body json data
  app.use(express.json())
  //Sử dụng APIs_V1
  app.use('/v1',APIs_V1)
  //Middleware xử lý lỗi tập trung
  app.use(errorHandlingMiddleware)
  
  app.listen(env.APP_PORT, env.APP_HOST, () => {
    // eslint-disable-next-line no-console
    console.log(`Hello ${env.AUTHOR}, I am running at http://${ env.APP_HOST }:${ env.APP_PORT }/`)
  })
}

CONNECT_DB()
.then(()=>console.log('Connected to MongoDB Cloud Atlas'))
.then(()=>START_SERVER())
.catch(error=>{
  console.error(error)
  process.exit(0)
})
