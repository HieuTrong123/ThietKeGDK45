/* eslint-disable no-useless-catch */
import { StatusCodes } from 'http-status-codes'
import ApiError from '~/utils/ApiError'
import { slugify } from '~/utils/formatters'
import { categoryModel } from '~/models/categoryModel'
import { cloneDeep } from 'lodash'
const createNew = async (reqBody) => {
  try {
    //Xử lý logic dữ liệu tùy đặc thù dự án
    const newCate = {
      ...reqBody,
      slug: slugify(reqBody.name)
    }
    const createdCate = await categoryModel.creatNew(newCate)
    console.log(createdCate)
    //Lấy bản ghi sau khi gọi 
    const getNewCate = await categoryModel.findOneById(createdCate.insertedId)
    console.log(getNewCate)
    /**
     * Gọi tới tầng Model để xử lý lưu bản ghi newCate vào trong DB
     * ...
     * Làm thêm các xử lý logic khác với các Collection khác tùy đặc thù dự án,...
     * Bắn email, notification về cho admin khi có 1 cái Cate mới được tạo
     * 
     * Trả kết quả vể, trong Services luôn phải có return
     */
    return getNewCate
  } catch (e) { throw e }
}

const getDetails = async (cateId) => {
  try {
    const cate = await categoryModel.getDetails(cateId)
    if (!cate) throw new ApiError(StatusCodes.NOT_FOUND, 'Category not found')
    //Deep clone ra 1 bản ghi mới để tránh bị thay đổi bản gốc
    // const resCate = cloneDeep(cate)
    // //Đưa product về đúng category
    // resCate.columns.forEach((col) => {
    //   col.products = resCate.products.filter((prod) => prod.categoryId.toString() === cateId)
    // })
    return cate
  } catch (e) { throw e }
}

export const categoryService = {
  createNew,
  getDetails
}