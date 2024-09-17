import Joi, { required } from "joi";
import { GET_DB } from "~/config/mongodb";
import { ObjectId } from "mongodb";
import bcrypt from 'bcrypt'
import { OBJECT_ID_RULE, OBJECT_ID_RULE_MESSAGE, PHONENUMBER_RULE } from "~/utils/validators";
import ApiError from "~/utils/ApiError";
const USER_COLLECTION_NAME = 'users'
const USER_COLLECTION_SCHEMA = Joi.object({
    userName: Joi.string().required().min(3).max(50).trim().strict(),
    slug: Joi.string().required().min(3).trim().strict(),
    email: Joi.string().email().required().trim().strict(),
    password: Joi.string().required().min(8).trim().strict(),
    fullName: Joi.string().optional().min(3).trim().strict(),
    phoneNumber: Joi.string().required().pattern(PHONENUMBER_RULE).trim().strict(),
    roleId: Joi.string().required().pattern(OBJECT_ID_RULE).message(OBJECT_ID_RULE_MESSAGE),
    shopOrderIds: Joi.array().items(
        Joi.string().pattern(OBJECT_ID_RULE).message(OBJECT_ID_RULE_MESSAGE)
    ).default([]),
    userImg: Joi.string().uri().optional().default(''),
    createdAt: Joi.date().timestamp('javascript').default(Date.now),
    updateAt: Joi.date().timestamp('javascript').default(null),
    _destroy: Joi.boolean().default(false)
})
const createNew = async (data) => {
    try {
        const validData = await validateBeforeCreate(data)
        const createdUser = await GET_DB().collection(USER_COLLECTION_NAME).insertOne(validData)
        return createdUser
    } catch (error) {
        throw new Error(error)
    }
}


const validateBeforeCreate = async (data) => {
    return await USER_COLLECTION_SCHEMA.validateAsync(data, { abortEarly: false })
}
const findOneById = async (id) => {
    try {
        const result = await GET_DB().collection(USER_COLLECTION_NAME).findOne({
            _id: new ObjectId(id)
        })
        return result
    } catch (error) {
        throw new Error(error)
    }
}

const loginUser = async (data) => {
    try {
        const isUser = await findOneByEmail(data.email)
        if (!isUser) {
            throw new Error('User not found')
        }
        const isMatchPwd = await bcrypt.compare(data.password, isUser.password)
        if (!isMatchPwd) {
            throw new Error('Passsword is incorrect')
        }
        return isUser
    } catch (error) {
        throw new Error(error)
    }
}

const findOneByEmail = async (email) => {
    try {
        const result = await GET_DB().collection(USER_COLLECTION_NAME).findOne({
            email: email
        })
        return result
    } catch (error) {
        throw new Error(error)
    }
}


const getDetails = async () => {
    try {
        const result = await GET_DB().collection(USER_COLLECTION_NAME).findOne({
            _id: new ObjectId(id)
        })
        return result
    } catch (error) { throw new Error(error) }
}

export const userModel = {
    USER_COLLECTION_NAME,
    USER_COLLECTION_SCHEMA,
    createNew,
    getDetails,
    findOneById,
    findOneByEmail,
    loginUser
}