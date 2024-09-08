import express from 'express'
import { shopControllers } from '~/controllers/shopController'
import { shopValidations } from '~/validations/shopValidations'

const Router = express.Router()
Router.route('/')
    .post(shopValidations.createNew, shopControllers.createNew)
    .get()

Router.route('/:id')
    .get(shopControllers.getDetails)
    .put()
    .delete()

export const shopRoutes = Router