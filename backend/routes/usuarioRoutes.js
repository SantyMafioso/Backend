import express from 'express';
import {
    
    registrar,
    confirmar
} from '../controllers/usuarioController.js';
const router = express.Router();
// Rutas Publicas

router.post('/', registrar );
router.get('/confirmar/:token', confirmar);
export default router;