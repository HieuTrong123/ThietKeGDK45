import { shopModel } from "~/models/shopModels"
import { StatusCodes } from "http-status-codes"
import ApiError from "~/utils/ApiError"
import { slugify } from "~/utils/formatters"
const creatNew = async (reqBody) => {
    try {
        const shop = await shopModel.findOneByName(reqBody.shopName)
        if (shop) {
            throw new ApiError(StatusCodes.CONFLICT, 'Shop already existed')
        }
        const createdProd = await shopModel.createNew({
            ...reqBody,
            slug: slugify(reqBody.shopName)
        })
        console.log(createdProd)
        const getProd = await shopModel.findOneById(createdProd.insertedId)
        console.log(getProd)
        return getProd
    } catch (error) {
        throw error
    }
}

const getDetails = async (prodId) => {
    try {
        const prod = await shopModel.getDetails(prodId)
        if (!prod) { throw new ApiError(StatusCodes.NOT_FOUND, 'Shop not found') }
        return prod
    } catch (error) {
        throw error
    }
}

export const shopServices = {
    creatNew,
    getDetails
}