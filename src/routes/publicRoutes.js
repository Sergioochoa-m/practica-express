// Importa Express para crear y configurar las rutas.
import express from "express";
// Importa los controladores que atenderán cada ruta.
import { getProducto, getServicio } from "../controllers/publicControllers.js";

// Crea un enrutador independiente para las rutas públicas.
const router = express.Router();

// Asocia la ruta de productos con su controlador.
router.get("/productos", getProducto);
// Asocia la ruta de servicios con su controlador.
router.get("/servicios", getServicio);

// Exporta el enrutador para montarlo en la aplicación.
export default router;