import express from 'express';
import morgan from 'morgan';
import cors from 'cors'

import router from './routes/proyects.routes.js'

const app = express();

app.use(cors(
    {
        origin: 'http://localhost:3000',
        credentials: true,
    }
))
app.use(morgan('dev'));
app.use(express.json());
app.use('/api', router);

export default app;