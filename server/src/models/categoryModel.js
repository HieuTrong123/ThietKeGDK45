import Joi from "joi";
import { OBJECT_ID_RULE, OBJECT_ID_RULE_MESSAGE } from '~/utils/validators'
import { GET_DB } from '~/config/mongodb'
import { ObjectId } from 'mongodb'
import { productModel } from "./productModel";
const CATEGORY_COLLECTION_NAME = 'categories'
const CATEGORY_COLLECTION_SCHEMA = Joi.object({
    name: Joi.string().required().min(3).max(50).trim().strict(),
    slug: Joi.string().required().min(3).trim().strict(),
    description: Joi.string().required().min(3).max(256).trim().strict(),
    cateImg: Joi.string().uri().optional().default(''),
    productOrderIds: Joi.array().items(
        Joi.string().pattern(OBJECT_ID_RULE).message(OBJECT_ID_RULE_MESSAGE)
    ).default([]),
    createdAt: Joi.date().timestamp('javascript').default(Date.now),
    updatedAt: Joi.date().timestamp('javascript').default(null),
    _destroy: Joi.boolean().default(false)
})

const creatNew = async (data) => {
    try {
        const validData = await validateBeforeCreate(data)
        const createdCate = await GET_DB().collection(CATEGORY_COLLECTION_NAME).insertOne(validData)
        return createdCate
    } catch (e) { throw new Error(e) }
}

const validateBeforeCreate = async (data) => {
    return await CATEGORY_COLLECTION_SCHEMA.validateAsync(data, { abortEarly: false })
}

const findOneById = async (id) => {
    try {
        const result = await GET_DB().collection(CATEGORY_COLLECTION_NAME).findOne({
            _id: new ObjectId(id)
        })
        return result
    } catch (error) { throw new Error(error) }
}
//Query tổng hợp(aggregate) để lấy toàn bộ Sub-Category và Products thuộc về Category
const getDetails = async (id) => {
    try {
        const result = await GET_DB().collection(CATEGORY_COLLECTION_NAME).aggregate([
            {
                $match: {
                    _id: new ObjectId(id),
                    _destroy: false
                }
            },
            {
                $lookup: {
                    from: productModel.PRODUCT_COLLECTION_NAME,
                    localField: '_id',
                    foreignField: 'categoryId',
                    as: 'products'
                }
            },
        ]).toArray()
        return result[0] || {}
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}
export const categoryModel = {
    CATEGORY_COLLECTION_NAME,
    CATEGORY_COLLECTION_SCHEMA,
    creatNew,
    findOneById,
    getDetails
}