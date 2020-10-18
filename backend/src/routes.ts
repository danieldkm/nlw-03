import {Router} from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';

import OrphanagesController from './controllers/OrphanagesController';
import RegisterUserController from './controllers/RegisterUserController';
import AuthenticateController from './controllers/AuthenticateController';

import authMiddleware from './middlewares/auth';

const routes = Router();
const upload = multer(uploadConfig);

routes.post('/orphanages', authMiddleware, upload.array('images'), OrphanagesController.create);
routes.get('/orphanages', authMiddleware, OrphanagesController.index);
routes.get('/orphanages/:id', authMiddleware, OrphanagesController.show);

routes.post('/register', RegisterUserController.create);
routes.get('/authenticate', AuthenticateController.index);
routes.get('/me', authMiddleware, AuthenticateController.show);


export default routes;