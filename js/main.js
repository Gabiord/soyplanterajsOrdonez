//   BASE DE DATOS DE MACETAS

class producto{
    constructor(nombre,tamano,color,precio,foto){
        this.nombre=nombre;
        this.tamano=tamano;
        this.color=color;
        this.precio=precio;
        this.vendido=false;
        this.foto=foto;
    }
    sumarIva(iva){
        this.precio=this.precio*iva;
    }
    vender(){
        this.vendido=true;
    }
}

const productos = []; 

productos.push(new producto("Maceta de Gatito","grande","verde",800,"./images/5ce512c4717d5aacc4af9159af562e57ab206490_original.jpeg"));
productos.push(new producto("Maceta de Calabaza","mediana","blanco",600,"./images/78d60b9f18fd258a2dd58f5dfeebaf71034af07c_original.jpeg"));
productos.push(new producto("Maceta de Planeta","chica","blanco",500,"./images/c8b93824a1d3ece5291de4dad093ede5207b68ca_original.jpeg"));
productos.push(new producto("Maceta de Roberto","grande","negro",650,"./images/5228340b26922c04d6c10f3a2ca6ac51c7577ebf_original.jpeg"));
productos.push(new producto("Maceta Redonda","chica","blanco",700,"./images/aa241e45ff33c00d2b93a8cb3b503e65d8b28f2e_original.jpeg"));
productos.push(new producto("Maceta de Bulbasur","chica","verde",900,"./images/af558046718f1cba3cbbdc0e50dcf7ee542903ce_original.jpeg"));
productos.push(new producto("Maceta de Dinosaurio","mediana","blanco",800,"./images/578b3312f8e915a7ae93e5cb5e01afe229b395cc_original.jpeg"));

 
// DATOS PARA BUSQUEDA

const formulario=document.querySelector("#formulario");
const nombre= document.querySelector("#fname");
const tamano= document.querySelector("#ftamano");
const color= document.querySelector("#fcolor");
const precioMin= document.querySelector("#fpmin");
const precioMax= document.querySelector("#fpmax");
const atras= document.querySelector("#fatras");


document.addEventListener("DOMContentLoaded",filtrarMacetas);
formulario.addEventListener("submit",filtrarMacetas);


// FUNCIONES NECESARIAS

function mostrarMacetas(productos){
    productos.forEach(producto =>{
        document.querySelector("#resultado").innerHTML+=
            `<div class="card tiendaProducto col-sm-8 col-md-6 col-lg-4" style="width: 18rem;">
                    <img src="${producto.foto}" class="card-img-top" alt="${producto.nombre}">
                    <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                      <p class="card-text"></p>
                    </div>
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">Tamano: ${producto.tamano}</li>
                      <li class="list-group-item">Color Disponible: ${producto.color}</li>
                      <li class="list-group-item">Precio: ${producto.precio}</li>
                    </ul>
                    <div class="card-body">
                      <a href="#" class="card-link">Comprar</a>
                      <a href="#" class="card-link">Recomendar</a>
                    </div>
                </div>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>`
        }    
    )  
}

function filtrarMacetas(evt){
    evt.preventDefault()
    document.querySelector("#resultado").innerHTML=""
    const resultado=productos.filter(filtroNombre).filter(filtroTamano).filter(filtroColor).filter(filtroPrecioMin).filter(filtroPrecioMax)
        if(resultado.length){
            mostrarMacetas(resultado)
        }
        else{
            noResultados()
        }
}

function noResultados(){
    document.querySelector("#resultado").innerHTML+= `No Hay resultado`
}

function filtroNombre(producto){
    if(nombre.value){
        return producto.nombre.includes(nombre.value)
    }
    return producto;
}

function filtroTamano(producto){
    if(tamano.value){
        return producto.tamano === tamano.value;
    }
    return producto;
}

function filtroColor(producto){
    if(color.value){
        return producto.color === color.value
    }
    return producto;
}

function filtroPrecioMin(producto){
    if(precioMin.value){
        return producto.precio >= precioMin.value
    }
    return producto;
}

function filtroPrecioMax(producto){
    if(precioMax.value){
        return producto.precio <= precioMax.value
    }
    return producto;
}