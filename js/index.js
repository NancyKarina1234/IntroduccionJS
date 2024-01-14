precio = 400000;

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;


/*funciones agregar y restar */

function agregar() {
  var cantidad = document.querySelector(".cantidad");
  var cantidadActual = Number(cantidad.innerHTML);
  cantidad.innerHTML = cantidadActual + 1;

  var precioTotal = document.querySelector(".valor-total");
  precioTotal.innerHTML = precio * Number(cantidad.innerHTML);
}

function restar() {
  var cantidad = document.querySelector(".cantidad");
  var cantidadActual = Number(cantidad.innerHTML);
  cantidad.innerHTML = cantidadActual - 1;

  var precioTotal = document.querySelector(".valor-total");
  precioTotal.innerHTML = precio * Number(cantidad.innerHTML);
}