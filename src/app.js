import 'dotenv/config';
import express  from 'express';

import routes from './routes';
import './database';

class app{
    constructor(){
        this.server = express();

        this.routes();
    }

    routes(){
    this.server.use(routes);
    }

}

export default new app().server;