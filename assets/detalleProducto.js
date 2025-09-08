// Leer el parámetro id de la URL
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));

  // Buscar producto
  const producto = productos.find(p => p.id === id);

  if (producto) {
    const formattedPrice = new Intl.NumberFormat("es-CL", {
      style: "currency",
      currency: "CLP"
    }).format(producto.precio);

    document.getElementById("detalle").innerHTML = `
      <img src="${producto.imagen}" class="img-fluid mb-3" style="max-height:300px; object-fit:contain;">
      <h2>${producto.nombre}</h2>
      <p class="text-success fw-bold fs-4">${formattedPrice}</p>
      <p>...</p>
      <button class="btn btn-primary" onclick="addToCart(${producto.id})">Agregar al carrito</button>
      <a href="productos.html" class="btn btn-secondary ms-2">Volver</a>
    `;
  } else {
    document.getElementById("detalle").innerHTML = `<p>Producto no encontrado</p>`;
  }