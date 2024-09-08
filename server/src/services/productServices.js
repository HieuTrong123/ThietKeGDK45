import { StatusCodes } from "http-status-codes"
import ApiError from "~/utils/ApiError"
import { slugify } from "~/utils/formatters"
import { productModel } from "~/models/productModel"
import { shopModel } from "~/models/shopModels"
import { cloneDeep } from "lodash"

const createNew = async (reqBody) => {
    try {
        const newProd = {
            ...reqBody,
            slug: slugify(reqBody.productName)
        }
        const createdProd = await productModel.createNew(newProd)
        console.log(createdProd)
        const getNewProd = await productModel.findOneById(createdProd.insertedId)

        if (getNewProd) {
            getNewProd.shop = []
            //Cập nhật mảng productOrderIds cho collection shops
            await shopModel.pushProductOrderIds(getNewProd)
        }
        return getNewProd
    } catch (error) {
        throw error
    }
}

const getDetails = async (prodId) => {
    try {
        const prod = await productModel.getDetails(prodId)
        if (!prod) { throw new ApiError(StatusCodes.NOT_FOUND, 'Production not found') }
        const resProd = cloneDeep(prod)
        resProd.shops.forEach((shop) => {
            shop.products = resProd.products.filter((prod) => prod.shopId.toString() === shop._id.toString())
        })
        return prod
    } catch (error) {
        throw error
    }
}

export const productService = {
    createNew,
    getDetails
}