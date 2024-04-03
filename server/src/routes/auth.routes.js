import { Router } from "express";
import { newProyect }  from '../controllers/auth.controler.js'

const router = Router();

router.post('/ProyectNew', newProyect);

export default router;