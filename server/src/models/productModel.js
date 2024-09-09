import Joi from "joi";
import { ObjectId } from "mongodb";
import { GET_DB } from "~/config/mongodb";
import { shopModel } from "./shopModels";
import { categoryModel } from "./categoryModel";
import { OBJECT_ID_RULE, OBJECT_ID_RULE_MESSAGE } from '~/utils/validators'
const PRODUCT_COLLECTION_NAME = 'products'
const PRODUCT_COLLECTION_SCHEMA = Joi.object({
    productName: Joi.string().max(100).required(),
    description: Joi.string().max(255).optional(),
    slug: Joi.string().required().min(3).trim().strict(),
    price: Joi.number().precision(2).positive().required(),
    stockQuantity: Joi.number().integer().positive().required(),
    productImg: Joi.string().uri().optional().default(''),
    categoryId: Joi.string().pattern(OBJECT_ID_RULE).message(OBJECT_ID_RULE_MESSAGE).required(),
    shopId: Joi.string().pattern(OBJECT_ID_RULE).message(OBJECT_ID_RULE_MESSAGE).required(),
    createdAt: Joi.date().timestamp('javascript').default(Date.now),
    updatedAt: Joi.date().timestamp('javascript').default(null),
    _destroy: Joi.boolean().default(false)
})

const createNew = async (data) => {
    try {
        const validProd = await validateBeforeCreate(data)
        const newProdToCreate = { ...validProd, categoryId: new ObjectId(validProd.categoryId), shopId: new ObjectId(validProd.shopId) }
        const createdProd = await GET_DB().collection(PRODUCT_COLLECTION_NAME).insertOne(newProdToCreate)
        return createdProd
    } catch (error) {
        throw new Error(error)
    }
}

const validateBeforeCreate = async (data) => {
    return await PRODUCT_COLLECTION_SCHEMA.validateAsync(data, { abortEarly: false })
}

const findOneById = async (id) => {
    try {
        const result = await GET_DB().collection(PRODUCT_COLLECTION_NAME).findOne({
            _id: new ObjectId(id)
        })
        return result
    } catch (error) {
        throw new Error(error)
    }
}

const getDetails = async (id) => {
    try {
        const result = await GET_DB().collection(PRODUCT_COLLECTION_NAME).aggregate([
            {
                $match: {
                    _id: new ObjectId(id),
                    _destroy: false
                }
            },
            {
                $lookup: {
                    from: shopModel.SHOP_COLLECTION_NAME,
                    localField: '_id',
                    foreignField: 'productId',
                    as: 'shop'
                }
            },
            {
                $lookup: {
                    from: categoryModel.CATEGORY_COLLECTION_NAME,
                    localField: '_id',
                    foreignField: 'productId',
                    as: 'category'
                }
            }
        ]).toArray()
        return result[0] || {}
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}
export const productModel = {
    PRODUCT_COLLECTION_NAME,
    PRODUCT_COLLECTION_SCHEMA,
    createNew,
    findOneById,
    getDetails
}