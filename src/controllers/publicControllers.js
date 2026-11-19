// Controlador que atiende la solicitud para obtener un producto.
export const getProducto = (req, res) => {
  // Envía al cliente una respuesta en formato JSON.
  res.json({
    // Indica que la solicitud se procesó correctamente.
    ok: true,
    // Describe la operación realizada.
    msg: "obteniendo producto",
    // Incluye los datos del producto solicitado.
    producto: {
      // Identificador único del producto.
      id: 1,
      // Nombre visible del producto.
      nombre: "Camiseta",
      // Precio del producto.
      precio: 20
    }
  });
};

// Controlador que atiende la solicitud para obtener un servicio.
export const getServicio = (req, res) => {
  // Envía al cliente una respuesta en formato JSON.
  res.json({
    // Indica que la solicitud se procesó correctamente.
    ok: true,
    // Describe la operación realizada.
    msg: "obteniendo servicio",
    // Incluye los datos del servicio solicitado.
    servicio: {
      // Identificador único del servicio.
      id: 1,
      // Nombre visible del servicio.
      nombre: "Reparación",
      // Precio del servicio.
      precio: 50
    }
  });
}