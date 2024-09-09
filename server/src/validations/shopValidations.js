import Joi from "joi";
import { StatusCodes } from "http-status-codes";
import ApiError from "~/utils/ApiError";
const createNew = async (req, res, next) => {
    try {
        const correctConditions = Joi.object({
            shopName: Joi.string().max(100).required().trim().strict().messages({
                'any.required': 'Product name is required',
                'string.empty': 'Product name is not empty',
                'string.max': 'Product name lenght must be less than or equal to 100 chars long',
                'string.trim': 'Product name must not have leading or trailing whitespace'
            }),
            description: Joi.string().max(256).trim().strict(),
            userId: Joi.string().required().trim().strict().messages({
                'any.required': 'User Id is required',
                'string.empty': 'User Id is not empty',
                'string.trim': 'User Id must not have leading or trailing whitespace'
            }),
        })
        await correctConditions.validateAsync(req.body, { abortEarly: false })
        next()
    } catch (error) {
        console.log(error)
        next(new ApiError(StatusCodes.UNPROCESSABLE_ENTITY, new Error(error).message))
    }
}

export const shopValidations = {
    createNew
}