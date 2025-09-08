
//Json productos
//En el campo imagen necesito poner la imagen dentro de la carpeta assets y luego nombrarla dentro del campo correspondiente.
//Todas las imagenes deberian estar en la misma resolución -> 250 x 250 px probar con 300 o 350 para ver como queda.
// https://www.img2go.com/es/cambiar-tamano-de-imagen
const productos=[
    {id:0,nombre:"RTX 6080 Marca Blanca",precio:5000000,imagen:"assets/img/RTX6080MarcaBlanca.png"},
    {id:1,nombre:"Pasta Termica Pastero",precio:15000,imagen:"assets/img/PastaTermicaPastero.png"},
    {id:2,nombre:"Gabinete Negro",precio:58000,imagen:"assets/img/GabineteNegroNegro.png"}
]

//Función del profe
/*function displayProducts(){
    const container=document.getElementById("product-list");
    container.innerHTML="";
    productos.forEach((productos,index)=>{
        const card=document.createElement("div");
        card.className="col-md-4 mb-4";

        card.innerHTML=`
            <div class="card">
                <img src="${productos.imagen}" class="card-img-top" alt="${productos.nombre}">
                <div class="card-body">
                    <h5 class="card-title">${productos.nombre}</h5>
                    <p class="card-text>${productos.precio}</p>
                    <button class="btn-primary" onclick="addToCart"(${index})">Agregar al carrtio</button>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}
displayProducts()*/
//Función con agregado de precio a CLP y boton de agregar al carrito
function displayProducts(){
    const container = document.getElementById("product-list");
    container.innerHTML = "";
            
    productos.forEach((producto, index) => {
        const card = document.createElement("div");
        card.className = "col-md-4";
                
        // Formatear el precio en CLP (pesos chilenos)
        const formattedPrice = new Intl.NumberFormat('es-CL', {
            style: 'currency',
            currency: 'CLP'
        }).format(producto.precio);
                
        card.innerHTML = `
            <div class="product-card">
                <img src="${producto.imagen}" class="product-image" alt="${producto.nombre}">
                <h3 class="h5 mt-3">${producto.nombre}</h3>
                <p class="product-price">${formattedPrice}</p>
                <button class="btn btn-primary" onclick="addToCart(${index})">Agregar al carrito</button>
            </div>
            `;
        container.appendChild(card);
    });
    }
    displayProducts()

