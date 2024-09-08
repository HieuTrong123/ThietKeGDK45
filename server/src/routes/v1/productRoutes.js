import express from 'express'
import { productValidations } from '~/validations/productValidations'
import { productControllers } from '~/controllers/productControllers'

const Router = express.Router()

Router.route('/')
    .post(productValidations.createNew, productControllers.createNew)

Router.route('/:id')
    .get(productControllers.getDetails)
    .get()

export const productRoutes = Router
