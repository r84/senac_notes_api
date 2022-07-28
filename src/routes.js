import { Router } from "express";
import UserController from './app/controllers/UserController';

const routes = new Router();

//user controller

routes.get('/user/store' , UserController.store);

export default routes;