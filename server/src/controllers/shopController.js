import { StatusCodes } from 'http-status-codes'
import { shopServices } from '~/services/shopServices'
const createNew = async(req,res,next) => {
    try {
        console.log(req.body)
        const createdProd = await shopServices.creatNew(req.body)
        res.status(StatusCodes.CREATED).json(createdProd)
    } catch (error) {
        console.log(error)
        next(error)
    }
}

const getDetails = async (req,res,next) => {
    try {
        const prodId = req.params.id;
        const prod = await shopServices.getDetails(prodId)
        console.log(prod)
        res.status(StatusCodes.OK).json(prod)
    } catch (error) {
        next(error)
    }
}


export const shopControllers = {
    createNew,
    getDetails
}