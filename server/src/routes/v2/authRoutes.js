import express from 'express';
import { authControllers } from '~/controllers/authControllers';
import { authValidations } from '~/validations/authValidations';
const Router = express.Router();

Router.route('/register')
    .post(authValidations.createNew, authControllers.registerUser)

Router.route('/login')
    .post(authValidations.loginUser, authControllers.loginUser)
export const authRoutes = Router;