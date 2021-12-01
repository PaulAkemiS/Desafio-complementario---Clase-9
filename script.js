class Producto {
    constructor(id, nombre, precio, stock) {
        this.id = id;
        this.nombre = nombre;
        this.precio = parseInt(precio);
        this.stock = parseInt(stock);
    }
    sumaIva() {
        this.precio = Math.trunc(this.precio * 1.21);
    }
}

const avena = new Producto(1, "avena", 300, 25);
const harina = new Producto(2, "harina", 150, 30);
const mascabo = new Producto(3, "mascabo", 120, 10);
const coco = new Producto(4, "coco", 160, 20);
const nueces = new Producto(5, "nueces", 180, 50);
const almendras = new Producto(6, "almendras", 200, 60);

avena.sumaIva();
harina.sumaIva();
mascabo.sumaIva();
coco.sumaIva();
nueces.sumaIva();
almendras.sumaIva();

console.log(avena);
console.log(harina);
console.log(mascabo);
console.log(coco);
console.log(nueces);
console.log(almendras);

const lista = [avena, harina, mascabo, coco, nueces, almendras];

const carrito = []


let producto;


let btn1 = document.getElementById("producto1");
btn1.addEventListener("click", function (e) {
    e.preventDefault();
    agregarElemento(1);
})

let btn2 = document.getElementById("producto2");
btn2.addEventListener("click", function (e) {
    e.preventDefault();
    agregarElemento(2);
})

let btn3 = document.getElementById("producto3");
btn3.addEventListener("click", function (e) {
    e.preventDefault();
    agregarElemento(3);
})

let btn4 = document.getElementById("producto4");
btn4.addEventListener("click", function (e) {
    e.preventDefault();
    agregarElemento(4);
})

let btn5 = document.getElementById("producto5");
btn5.addEventListener("click", function (e) {
    e.preventDefault();
    agregarElemento(5);
})

let btn6 = document.getElementById("producto6");
btn6.addEventListener("click", function (e) {
    e.preventDefault();
    agregarElemento(6);
})


function agregarElemento(productoID) {
    producto = lista.find(function (producto) {
        if (producto.id == productoID)
            return true;
        else
            return false;
    })

    carrito.push(producto);

    mostrarCarrito();
}


function mostrarCarrito() {
    let contenedor = document.getElementById("carrito");
    let precioTotal = 0


    contenedor.innerHTML = "";
    htmlString = "CARRITO <ul>";
    for (const id in carrito) {
        let producto = carrito[id]
        htmlString += `
            <li> ${producto.nombre}, $ ${producto.precio}
            <button id="carrito_${id}" class="eliminar"> Eliminar</button>
            </li>`
        precioTotal += producto.precio;
    }
    htmlString += "</ul>";

    contenedor.innerHTML = htmlString;

    let contenedorPrecio = document.getElementById("precio");
    contenedorPrecio.innerHTML = `TOTAL: ${precioTotal}`

    loadEliminar();
}

function loadEliminar() {
    let botones = document.getElementsByClassName("eliminar");
    for (const boton of botones) {

        boton.onclick = () => {
            let id = boton.getAttribute("id");
            idNumber = id.split("_")[1]
            carrito.splice(idNumber, 1)

            mostrarCarrito()
        }
    }

}


// const btnEliminar = document.querySelector(".eliminar")


// btnEliminar.addEventListener("click", function (e) {
//     e.preventDefault();

//     function eliminarElemento(carrito) {
//         // let producto = carrito.indexOf(carrito.id)
//         // console.log(producto)

//         // if (producto !== -1) {
//         //     carrito.splice(producto, -1);

//             // let producto = carrito.find((elemento => elemento.id == producto))
//             // console.log(producto)

//             // producto = carrito.find(function (producto) {
//             //     if (producto.id == producto)
//             //         return true;
//             //     else
//             //         return false;
//             // })



//             mostrarCarrito();


//     }
//     eliminarElemento(carrito);
// })

// const detalle = document.querySelector(".listaProductos")
// const costo = document.querySelector(".listaPrecio")



// for (const productos of lista) {
//   let li = document.createElement("li");
//   li.innerHTML = productos.nombre.toUpperCase();
//   detalle.appendChild(li)
// }

// for (const precio of lista) {
//   let li = document.createElement("li");
//   li.innerHTML = ` $ ${precio.precio}`;
//   costo.appendChild(li)
// }











// let ingreso = prompt("Ingrese el producto que quiere comprar o fin para terminar de agregar").toLowerCase();
// // let ingresoCantidad = prompt("Ingrese cantidad que quiera comprar");

// function compra() {


// console.log(compraProductos)




// do{
//     if (ingreso === "fin" || ingreso === "Fin" || ingreso === "FIN") {
//      break;
//     }else {
//       ingreso = lista.nombre;
//       ingresoCantidad 
//       compraProductos.push(ingreso);

//     }
//     console.log(compraProductos);
//   }

//   while (ingreso != "fin" || ingreso != "Fin" || ingreso != "FIN" );
//   console.log(compraProductos);


// function compra() {

//     let producto1 = prompt("Ingrese producto 1");

//     if ((producto1 === "avena") || (producto1 === "Avena") || (producto1 === "AVENA")) {
//       producto1 = avena;
//     } else if ((producto1 === "harina") || (producto1 === "Harina") || (producto1 === "HARINA")) {
//       producto1 = harina;
//     } else if ((producto1 === "mascabo") || (producto1 === "mascabo") || (producto1 === "mascabo")) {
//       producto1 = mascabo;
//     } else if ((producto1 === "coco") || (producto1 === "Coco") || (producto1 === "COCO")) {
//       producto1 = coco;
//     } else if ((producto1 === "nueces") || (producto1 === "Nueces") || (producto1 === "NUECES")) {
//       producto1 = nueces;
//     } else if ((producto1 === "almendras") || (producto1 === "Almendras") || (producto1 === "ALMENDRAS")) {
//       producto1 = almendras;
//     } else {
//       alert("Por favor elija al menos un producto.");
//       producto1 = prompt("Ingrese producto 1");
//     }

//     let producto2 = prompt("Ingrese producto 2");

//     if ((producto2 === "avena") || (producto2 === "Avena") || (producto2 === "AVENA")) {
//       producto2 = avena;
//     } else if ((producto2 === "harina") || (producto2 === "Harina") || (producto2 === "HARINA")) {
//       producto2 = harina;
//     } else if ((producto2 === "mascabo") || (producto2 === "mascabo") || (producto2 === "mascabo")) {
//       producto2 = mascabo;
//     } else if ((producto2 === "coco") || (producto2 === "Coco") || (producto2 === "COCO")) {
//       producto2 = coco;
//     } else if((producto2 === "nueces") || (producto2 === "Nueces") || (producto2 === "NUECES")) {
//       producto2 = nueces;
//     } else if ((producto2 === "almendras") || (producto2 === "Almendras") || (producto2 === "ALMENDRAS")) {
//       producto2 = almendras;
//     } else {
//       alert("Por favor elija al menos un producto.");
//       producto2 = prompt("Ingrese producto 2");
//     }

//     producto1.stock = producto1.stock -1;
//     producto2.stock = producto2.stock-1;

//     console.log(producto1);
//     console.log(producto2);

//     let listaCompra = [];
//     listaCompra.push(producto1.nombre, producto2.nombre);

//     console.log(listaCompra);

//     return listaCompra.sort() + "\n" + "Por $ "+ (producto1.precio + producto2.precio);

// }

// alert("Estas comprando " + compra());