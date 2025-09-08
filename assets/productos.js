// Definir productos internos (JSON embebido en el JS)
const productos = [
  { id: 0, nombre: "RTX 6080 Marca Blanca", precio: 5000000, imagen: "img/RTX6080MarcaBlanca.png" },
  { id: 1, nombre: "Pasta Térmica Pastero", precio: 15000, imagen: "img/PastaTermicaPastero.png" },
  { id: 2, nombre: "Gabinete Negro", precio: 58000, imagen: "img/GabineteNegroNegro.png" },
  {id:3,nombre:"RTX 5060",precio:600000,imagen:"img/rtx5.jpg"},
  {id:4,nombre:"RTX 4060ti",precio:400000,imagen:"img/rtx4.jpg"},
  {id:5,nombre:"RTX 8090ti",precio:4000000,imagen:"img/rtx3.jpg"},
  {id:6,nombre:"RTX 5080",precio:1500000,imagen:"img/rtx2.jpg"},
  {id:7,nombre:"Ram ddr5 4gb",precio:30000,imagen:"img/ram1.jpg"},
  {id:8,nombre:"Ram ddr5 8gb",precio:45000,imagen:"img/ram2.jpg"},
  {id:9,nombre:"Ryzen 9",precio:3000000,imagen:"img/amd1.jpg"},
  {id:10,nombre:"Ryzen 5",precio:400000,imagen:"img/amd2.jpg"},
  {id:11,nombre:"Ryzen 7",precio:400000,imagen:"img/amd3.jpg"},
  {id:12,nombre:"AMD Threadripper",precio:5000000,imagen:"img/amdt.jpg"},
  {id:13,nombre:"Intel Core i5",precio:600000,imagen:"img/intel1.jpg"},
  {id:14,nombre:"Intel Core i9",precio:1000000,imagen:"img/intel2.jpg"}
];


function displayProducts() {
  const container = document.getElementById("product-list");
  container.innerHTML = "";

  productos.forEach((producto, index) => {
    const card = document.createElement("div");
    card.className = "col-md-4";

    // Formatear precio CLP
    const formattedPrice = new Intl.NumberFormat("es-CL", {
      style: "currency",
      currency: "CLP"
    }).format(producto.precio);

    card.innerHTML = `
      <div class="card h-100 shadow-sm">
        <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
        <div class="card-body text-center">
          <h5 class="card-title">${producto.nombre}</h5>
          <p class="card-text text-success fw-bold">${formattedPrice}</p>
          <a href="detalleProducto.html?id=${producto.id}" class="btn btn-secondary">Ver más</a>
          <button class="btn btn-primary" onclick="addToCart(${index})">Agregar al carrito</button>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

// Simulación de carrito
function addToCart(index) {
  alert(`Agregado al carrito: ${productos[index].nombre}`);
}

// Mostrar productos al cargar
displayProducts();

//=================================================================================================
//=================================================================================================
//=================================================================================================
//=================================================================================================


let carrito = [];

function addToCart(index) {
  carrito.push(productos[index]); // Agrega producto
  actualizarCarrito();
}

// Actualizar carrito
function actualizarCarrito() {
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");

  cartItems.innerHTML = "";
  let total = 0;

  carrito.forEach((producto, i) => {
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";
    li.innerHTML = `
      ${producto.nombre} - ${new Intl.NumberFormat("es-CL",{style:"currency",currency:"CLP"}).format(producto.precio)}
      <button class="btn btn-sm btn-danger" onclick="eliminarDelCarrito(${i})">❌</button>
    `;
    cartItems.appendChild(li);
    total += producto.precio;
  });

  cartTotal.textContent = new Intl.NumberFormat("es-CL",{style:"currency",currency:"CLP"}).format(total);
}

// Eliminar producto individual
function eliminarDelCarrito(index) {
  carrito.splice(index, 1);
  actualizarCarrito();
}

// Vaciar carrito
function vaciarCarrito() {
  carrito = [];
  actualizarCarrito();
}

// Finalizar compra
function finalizarCompra() {
  alert("¡Gracias por tu compra! 🛒");
  vaciarCarrito();
}

