import express from 'express';
import { StatusCodes } from 'http-status-codes';
import { authRoutes } from './authRoutes';

const Router = express.Router();

Router.use('/auth', authRoutes);



export const APIs_V2 = Router;