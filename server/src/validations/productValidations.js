import Joi from "joi";
import ApiError from "~/utils/ApiError";
import { StatusCodes } from "http-status-codes";
import { OBJECT_ID_RULE, OBJECT_ID_RULE_MESSAGE } from "~/utils/validators";

const createNew = async (req, res, next) => {
    try {
        const correctConditions = Joi.object({
            productName: Joi.string().max(100).required().trim().strict().messages({
                'any.required': 'Product name is required',
                'string.empty': 'Product name is not empty',
                'string.max': 'Product name lenght must be less than or equal to 100 chars long',
                'string.trim': 'Product name must not have leading or trailing whitespace'
            }),
            price: Joi.number().precision(2).positive().required().strict().messages({
                'any.required': 'Price is required',
                'string.empty': 'Price is not empty',
                'string.positive': 'Price must be positive integer'
            }),
            stockQuantity: Joi.number().integer().positive().required().strict().messages({
                'any.required': 'Stock is required',
                'string.empty': 'Stock is not empty',
                'string.integer': 'Stock must be integer',
                'string.positive': 'Stock must be positive integer'
            }),
            categoryId: Joi.string().required().pattern(OBJECT_ID_RULE).message(OBJECT_ID_RULE_MESSAGE),
            shopId: Joi.string().required().pattern(OBJECT_ID_RULE).message(OBJECT_ID_RULE_MESSAGE),
        })
        await correctConditions.validateAsync(req.body, { abortEarly: false })
        next()
    } catch (error) {
        console.log(error)
        next(new ApiError(StatusCodes.UNPROCESSABLE_ENTITY, new Error(error).message))
    }
}
export const productValidations = {
    createNew,
}