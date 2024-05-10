import { Router } from "express";
import { 
    getProyects,
    createProyect,
    getProyect,
    deleteProyect,
    updateProyect
} from "../controllers/proyects.controler.js";
// import { UploadImage } from "../middlewares/storage.js";

const router = Router();

router.get('/ProyectRSU', getProyects);
router.get('/ProyectRSU/:id', getProyect);
router.post('/ProyectRSU', createProyect);
router.delete('/ProyectRSU/:id', deleteProyect);
router.put('/ProyectRSU/:id', updateProyect);


export default router;

// (req, res, next) => {
//     UploadImage.single('ImgProyect')(req, res, (err) => {
//         if (err) {
//             return res.status(400).json({ message: 'Error uploading file', error: err });
//         }
//         // Continuar con la ejecución normal
//         next();
//     });
// },