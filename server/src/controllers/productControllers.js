import { StatusCodes } from 'http-status-codes'
import { productService } from '~/services/productServices';

const createNew = async (req, res, next) => {
    try {
        console.log(req.body)
        const createdProd = await productService.createNew(req.body)
        res.status(StatusCodes.CREATED).json(createdProd)
    } catch (error) {
        next(error)
    }
}

const getDetails = async (req, res, next) => {
    try {
        const prodId = req.params.id;
        const prod = await productService.getDetails(prodId)
        console.log(prod)
        res.status(StatusCodes.OK).json(prod)
    } catch (error) {
        next(error)
    }
}


export const productControllers = {
    createNew,
    getDetails
}