// https://expressjs.com/es/

import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import conectarDB from './config/db.js';
import usuarioRoutes from './routes/usuarioRoutes.js';
import registroRoutes from './routes/registroRoutes.js';
import productoRoutes from './routes/productoRoutes.js';
import fileupload from 'express-fileupload';
const PORT = process.env.PORT || 4000;
dotenv.config();
// Se le agrega toda la funcionalidad del servidor de express
const app = express();
app.use(express.json());
app.use(fileupload({
    useTempfiles: true,
    tempFileDir: '.files'
}));
conectarDB();
// middlewares
 //Se utiliza para realizar la comunicacion entre el servidor del frontend y el backend
 const dominiosPermitidos = [process.env.FRONTEND_URL];
 const corsOptions = {
     origin: function (origin, callback) {
         if (dominiosPermitidos.indexOf(origin) !== -1) {
             // El origen del Request esta permitido
             callback(null, true);
         } else {
             callback(new Error('No permitido por CORS'));
         }
     }
 };
 app.use(cors(corsOptions));
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/registro', registroRoutes);
app.use('/api/producto', productoRoutes);
app.listen(PORT, () => {
    console.log(`Servidor funcionando en el puerto 4001${PORT} `);
});