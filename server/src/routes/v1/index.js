import express, { json } from 'express'
import { StatusCodes } from 'http-status-codes'
import { categoryRoutes } from '~/routes/v1/categoryRoutes'
import { authRoutes } from './authRoutes'
import { productRoutes } from './productRoutes'
import { shopRoutes } from './shopRoutes'
const Router = express.Router()
/**Check APIs V1 status */
Router.get('/status', (req, res) => {
    res.status(StatusCodes.OK).json({ message: 'All v1 are already' })
})
/**Categories APIs */
Router.use('/categories', categoryRoutes)
/**Authentication APIs */
Router.use('/auth', authRoutes)
//Prod APIs
Router.use('/products',productRoutes)

Router.use('/shops',shopRoutes)

export const APIs_V1 = Router