// import express from "express";

// import "dotenv/config"
// import router from `./routes/publicRoutes.js`;

// const app= express();
// const port = process.env.PORT || 3000;

// app.use(`/`, router)

// app.get(`/servicios`, (req, res)=> {

//     res.json({
//         ok:true,
//         msg: `obteniendo servicios`
//     })
// })

// app.listen(port, ( => {
//     console.log(`servidor a la escucha del puerto ${port}`)
// }))


import express from "express";
// Carga las variables definidas en el archivo .env.
import "dotenv/config";
// Importa las rutas públicas de la aplicación.
import router from "./routes/publicRoutes.js";

// Crea la instancia principal de Express.
const app = express();
// Usa el puerto configurado o, si no existe, el 3000.
const port = process.env.PORT || 3000;

// Registra las rutas públicas desde la raíz del servidor.
app.use("/", router);

// Inicia el servidor y muestra el puerto en el que escucha.
app.listen(port, () => {
  console.log(`servidor a la escucha del puerto ${port}`);
});