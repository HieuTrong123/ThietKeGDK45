import Joi from "joi";
import { ObjectId } from "mongodb";
import { GET_DB } from "~/config/mongodb";
import { productModel } from '~/models/productModel'
import { OBJECT_ID_RULE, OBJECT_ID_RULE_MESSAGE } from '~/utils/validators'
const SHOP_COLLECTION_NAME = 'shops'
const SHOP_COLLECTION_SCHEMA = Joi.object({
    shopName: Joi.string().max(100).required(),
    description: Joi.string().max(255).optional(),
    slug: Joi.string().required().min(3).trim().strict(),
    userId: Joi.string().pattern(OBJECT_ID_RULE).message(OBJECT_ID_RULE_MESSAGE).required(),
    productOrderIds: Joi.array().items(
        Joi.string().pattern(OBJECT_ID_RULE).message(OBJECT_ID_RULE_MESSAGE)
    ).default([]),
    createdAt: Joi.date().timestamp('javascript').default(Date.now),
    updatedAt: Joi.date().timestamp('javascript').default(null),
    _destroy: Joi.boolean().default(false)
})

const createNew = async (data) => {
    try {
        const validShop = await validateBeforeCreate(data)
        const newShopToCreate = { ...validShop, userId: new ObjectId(validShop.userId) }
        const createdShop = await GET_DB().collection(SHOP_COLLECTION_NAME).insertOne(newShopToCreate)
        return createdShop
    } catch (error) {
        throw new Error(error)
    }
}

const validateBeforeCreate = async (data) => {
    return await SHOP_COLLECTION_SCHEMA.validateAsync(data, { abortEarly: false })
}

const findOneById = async (id) => {
    try {
        const result = await GET_DB().collection(SHOP_COLLECTION_NAME).findOne({
            _id: new ObjectId(id)
        })
        return result
    } catch (error) {
        throw new Error(error)
    }
}

const findOneByName = async (name) => {
    try {
        const result = await GET_DB().collection(SHOP_COLLECTION_NAME).findOne({
            shopName: name
        })
        return result
    } catch (error) {
        throw new Error(error)
    }
}
const getDetails = async (id) => {
    try {
        const result = await GET_DB().collection(SHOP_COLLECTION_NAME).aggregate([
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
                    foreignField: 'shopId',
                    as: 'products'
                }
            },
        ]).toArray()
        return result[0] || {}
    } catch (error) {
        throw new Error(error)
    }
}
//Push productId vào cuối mảng productOrderIds của shop
const pushProductOrderIds = async (product) => {
    try {
        const result = await GET_DB().collection(SHOP_COLLECTION_NAME).findOneAndUpdate(
            { _id: new ObjectId(product.shopId) },
            { $push: { productOrderIds: new ObjectId(product._id) } },
            { returnDocument: 'after' }
        )
        console.log(result)
        return result.value
    } catch (error) {
        throw new Error(error)
    }
}
export const shopModel = {
    SHOP_COLLECTION_NAME,
    SHOP_COLLECTION_SCHEMA,
    createNew,
    findOneById,
    findOneByName,
    getDetails,
    pushProductOrderIds
}