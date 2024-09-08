import { StatusCodes } from 'http-status-codes'
import { categoryService } from '~/services/categoryService'
const createNew = async (req, res, next) => {
  try {
    console.log(req.body)
    //Điều hướng dữ liệu về Service
    const createdCategory = await categoryService.createNew(req.body)
    // throw new ApiError(StatusCodes.BAD_REQUEST,"Handler error")
    //Có kết quả thì trả về phía client
    res.status(StatusCodes.CREATED).json(createdCategory)
  } catch (e) { next(e) }
}

const getDetails = async (req, res, next) => {
  try {
    // console.log(req.params)
    const cateId = req.params.id
    //Điều hướng dữ liệu về Service
    const cate = await categoryService.getDetails(cateId)
    // throw new ApiError(StatusCodes.BAD_REQUEST,"Handler error")
    //Có kết quả thì trả về phía client
    res.status(StatusCodes.OK).json(cate)
  } catch (e) { next(e) }
}

export const categoryController = {
  createNew,
  getDetails
}