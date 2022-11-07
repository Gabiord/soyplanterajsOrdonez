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
 
datosBusqueda={
    nombre:'',
    tamano:'',
    color:'',
    precioMin:'',
    precioMax:''

}

// FUNCIONES NECESARIAS

function mostrarMacetas(productos){
    productos.forEach(producto =>{
        console.log(`<p>${producto.nombre} - Tamaño: ${producto.tamano} - Colores Disponibles:${producto.color} - Precio:${producto.precio}</p>`)
        document.write(
            `   
                <div class="card tiendaProducto col-sm-6 col-md-4 col-lg-3" style="width: 18rem;">
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
                </div>`)
    });
}

function filtrarMacetas(){
    const resultado=productos.filter(filtroNombre).filter(filtroTamano).filter(filtroColor).filter(filtroPrecioMin).filter(filtroPrecioMax)
        if(resultado.length){
            mostrarMacetas(resultado)
        }
        else{
            noResultados()
        }
}

function noResultados(){
    console.log("NO HAY RESULTADO")
    document.write("No hay resultados")
}

function filtroNombre(producto){
    if(datosBusqueda.nombre){
        return producto.nombre === datosBusqueda.nombre;
    }
    return producto;
}

function filtroTamano(producto){
    if(datosBusqueda.tamano){
        return producto.tamano === datosBusqueda.tamano;
    }
    return producto;
}

function filtroColor(producto){
    if(datosBusqueda.color){
        return producto.color === datosBusqueda.color
    }
    return producto;
}

function filtroPrecioMin(producto){
    if(datosBusqueda.precioMin){
        return producto.precio >= datosBusqueda.precioMin
    }
    return producto;
}

function filtroPrecioMax(producto){
    if(datosBusqueda.precioMax){
        return producto.precio <= datosBusqueda.precioMax
    }
    return producto;
}


// EJECUTAR 

filtrarMacetas();