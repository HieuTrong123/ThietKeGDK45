import Joi from "joi";
import { StatusCodes } from "http-status-codes";
import ApiError from "~/utils/ApiError";
import { PHONENUMBER_RULE, OBJECT_ID_RULE, OBJECT_ID_RULE_MESSAGE } from "~/utils/validators";
import { userModel } from "~/models/userModel";

const createNew = async (req, res, next) => {
    const correctConditions = Joi.object({
        userName: Joi.string().required().min(3).max(50).trim().strict().messages({
            'any.required': 'Username is required',
            'string.empty': 'Username is not empty',
            'string.min': 'Username lenght must be least 3 chars long',
            'string.max': 'Username lenght must be less than or equal to 50 chars long',
            'string.trim': 'Username must not have leading or trailing whitespace'
        }),
        email: Joi.string().email().required().trim().strict().messages({
            'any.required': 'Email is required',
            'string.empty': 'Email is not empty',
            'string.trim': 'Email must not have leading or trailing whitespace'
        }),
        password: Joi.string().required().min(8).trim().strict().messages({
            'any.required': 'Password is required',
            'string.empty': 'Password is not empty',
            'string.min': 'Password lenght must be least 3 chars long',
            'string.trim': 'Password must not have leading or trailing whitespace'
        }),
        fullName: Joi.string().required().min(3).trim().strict().messages({
            'any.required': 'Your name is required',
            'string.empty': 'Your name is not empty',
            'string.min': 'Your name lenght must be least 3 chars long',
            'string.trim': 'Your name must not have leading or trailing whitespace'
        }),
        phoneNumber: Joi.string().required().pattern(PHONENUMBER_RULE).trim().strict().messages({
            'any.required': 'Phone number is required',
            'string.empty': 'Phone number is not empty',
            'string.trim': 'Phone number must not have leading or trailing whitespace',
            'string.pattern': 'Phone number is invalid'
        }),
        roleId: Joi.string().required().pattern(OBJECT_ID_RULE).message(OBJECT_ID_RULE_MESSAGE),
    })
    try {
        //set abortEarly false trường hợp có >1 lỗi thì trả về tất cả
        await correctConditions.validateAsync(req.body, { abortEarly: false })
        //validatiosn dữ liệu hợp lệ thì cho request đi tiếp sang controller
        next()
    } catch (e) {
        // console.log(e)
        // const errorMessage = new Error(e).message
        // const customError = new ApiError(StatusCodes.UNPROCESSABLE_ENTITY,errorMessage)
        next(new ApiError(StatusCodes.UNPROCESSABLE_ENTITY, new Error(e).message))
    }
}

const loginUser = async (req, res, next) => {
    const correctConditions = Joi.object({
        email: Joi.string().email().required().trim().strict().messages({
            'any.required': 'Email is required',
            'string.empty': 'Email is not empty',
            'string.trim': 'Email must not have leading or trailing whitespace'
        }),
        password: Joi.string().required().min(8).trim().strict().messages({
            'any.required': 'Password is required',
            'string.empty': 'Password is not empty',
            'string.min': 'Password lenght must be least 8 chars long',
            'string.trim': 'Password must not have leading or trailing whitespace'
        }),
    })
    try {
        //set abortEarly false trường hợp có >1 lỗi thì trả về tất cả
        await correctConditions.validateAsync(req.body, { abortEarly: false })
        //validatiosn dữ liệu hợp lệ thì cho request đi tiếp sang controller
        next()
    } catch (e) {
        // console.log(e)
        // const errorMessage = new Error(e).message
        // const customError = new ApiError(StatusCodes.UNPROCESSABLE_ENTITY,errorMessage)
        next(new ApiError(StatusCodes.UNPROCESSABLE_ENTITY, new Error(e).message))
    }
}
const getDetails = async (userId) => {
    try {
        const user = await userModel.getDetails(userId)
        if (!user) {
            throw new ApiError(StatusCodes.NOT_FOUND, 'User not found')
        }
        return user
    } catch (e) { throw e }
}

export const authValidations = {
    createNew,
    getDetails,
    loginUser
}