import bcrypt from 'bcrypt';
import { userModel } from '~/models/userModel';
import { slugify } from '~/utils/formatters';
import { StatusCodes } from 'http-status-codes';
import { env } from '~/config/environment';
import jwt from 'jsonwebtoken';
import ApiError from '~/utils/ApiError';
import { ObjectId } from 'mongodb';
const registerUser = async(reqBody) =>{
    try {
        const {userName,email,password,fullName,phoneNumber,roleId} = reqBody
        const user = await userModel.findOneByEmail(reqBody.email)
        if(user){
            throw new ApiError(StatusCodes.CONFLICT,'Email already existed')
        }
        const salt = await bcrypt.genSalt(10)
        const hashPwd = await bcrypt.hash(password,salt)
        const newUser = {
            userName:userName,
            email:email,
            password:hashPwd,
            fullName:fullName,
            phoneNumber:phoneNumber,
            roleId:roleId,    
            slug:slugify(reqBody.fullName)
        }
        const createdUser = await userModel.createNew(newUser)
        console.log(createdUser)
        const getNewUser = await userModel.findOneById(createdUser.insertedId)
        console.log(getNewUser)
        return getNewUser
    } catch (error) {
        throw error
    }
}

const loginUser = async(data) => {
    try {
        const user = await userModel.findOneByEmail(data.email)
        if (!user) {
            throw new ApiError(StatusCodes.NOT_FOUND,'User not found')
        } 
        const isMatchPwd = await bcrypt.compare(data.password, user.password)
        if (!isMatchPwd) {
            throw new ApiError(StatusCodes.UNAUTHORIZED,'Password is incorrect')
        }
        const payload = {
            _id: new ObjectId(user.id),
            email: user.email,
            userName:user.userName
        }
        
        const accessToken = jwt.sign(payload, env.JWT_SECRET_KEY, { expiresIn: '1d' })
        
        return {
            accessToken,
            user
        }

    } catch (error) {
        throw error
    }
}

const getDetails = async(userId)=>{
    try {
        const user = await categoryModel.getDetails(userId)
        if(!user) throw new ApiError(StatusCodes.NOT_FOUND,'User not found')
        return user
      } catch (e) {throw e}
}
export const authServices = {
    registerUser,
    getDetails,
    loginUser
}