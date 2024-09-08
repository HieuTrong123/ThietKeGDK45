import { StatusCodes } from "http-status-codes"
import { authServices } from "~/services/authServices"

const registerUser=async(req,res,next)=>{
    try {
        console.log(req.body)
        const createdUser = await authServices.registerUser(req.body)
        res.status(StatusCodes.CREATED).json(createdUser)
    } catch (error) {
        next(error)
    }
}
const loginUser=async(req,res,next)=>{
    try {
        // console.log(req.body)
        const logedInUser = await authServices.loginUser(req.body)
        res.status(StatusCodes.OK).json(logedInUser)
    } catch (error) {
        next(error)
    }
}


export const authControllers = {
    registerUser,
    loginUser
}