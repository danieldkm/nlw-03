import {Router} from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';

import OrphanagesController from './controllers/OrphanagesController';
import RegisterUserController from './controllers/RegisterUserController';
import AuthenticateController from './controllers/AuthenticateController';

import authMiddleware from './middlewares/auth';

const routes = Router();
const upload = multer(uploadConfig);

routes.post('/orphanages', upload.array('images'), OrphanagesController.create);
routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);

routes.post('/orphanages/:id', authMiddleware, upload.array('images'), OrphanagesController.update);

routes.post('/register', RegisterUserController.create);
routes.get('/authenticate', AuthenticateController.index);
routes.get('/me', authMiddleware, AuthenticateController.show);


export default routes;