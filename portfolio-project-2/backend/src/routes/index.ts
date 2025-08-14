import { Router } from 'express';
import IndexController from '../controllers/index';

const router = Router();
const indexController = new IndexController();

export function setRoutes(app: any) {
    app.use('/api/portfolio', router);
    router.get('/', indexController.getPortfolio.bind(indexController));
    router.put('/', indexController.updatePortfolio.bind(indexController));
}