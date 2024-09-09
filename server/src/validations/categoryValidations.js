import Joi from "joi";
import { StatusCodes } from "http-status-codes";
import ApiError from "~/utils/ApiError";

const createNew = async(req,res,next)=>{
    /**
     * Note: Mặc định chúng ta không cần phải custom message ở phía BE vì để FE tự validate cho đẹp
     * BE chỉ cần validate để đảm bảo dữ liệu chuẩn xác và trả về message mặc định từ thư viện
     * Quan trọng: Việc validate dữ liệu là BẮT BUỘC phải có ở phía BE vì đây là điểm cuối để lưu trữ dữ liệu vào DB
     * Và thông thường trong thực tế, điều tốt nhất cho hệ thống là hãy luôn validate dữ liệu ở cả BE và FE.
     */
    const correctConditions = Joi.object({
        name:Joi.string().required().min(3).max(50).trim().strict().messages({
            'any.required':'Name is required',
            'string.empty':'Name is not empty',
            'string.min':'Name lenght must be least 3 chars long',
            'string.max':'Name lenght must be less than or equal to 50 chars long',
            'string.trim':'Name must not have leading or trailing whitespace'
        }),
        description:Joi.string().optional().max(256).trim().strict(),
    })
    try{
        
        //set abortEarly false trường hợp có >1 lỗi thì trả về tất cả
        await correctConditions.validateAsync(req.body,{abortEarly:false})
        //validatiosn dữ liệu hợp lệ thì cho request đi tiếp sang controller
        next()    
    }catch(e){
        // const errorMessage = new Error(e).message
        // const customError = new ApiError(StatusCodes.UNPROCESSABLE_ENTITY,errorMessage)
        next(new ApiError(StatusCodes.UNPROCESSABLE_ENTITY,new Error(e).message))
    }
}

export const categoryValidations = {
    createNew
}