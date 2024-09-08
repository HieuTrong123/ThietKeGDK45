import express, { json } from 'express'
import { StatusCodes } from 'http-status-codes'
import { categoryValidations } from '~/validations/categoryValidations'
import { categoryController } from '~/controllers/categoryController'
const Router = express.Router()

Router.route('/')
  .post(categoryValidations.createNew, categoryController.createNew)

Router.route('/:id')
  .get(categoryController.getDetails)
  .put()
  .delete()

export const categoryRoutes = Router