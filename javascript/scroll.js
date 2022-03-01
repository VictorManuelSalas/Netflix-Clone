const fila = document.querySelector(".slide-pelis");
const peliculas = document.querySelector(".card-pelis");

const flecha_izquierda = document.getElementById("flecha-izquierda");
const flecha_derecha = document.getElementById("flecha-derecha");

// Event listener para la felcha derecha
flecha_derecha.addEventListener("click", () => {
  fila.scrollLeft += fila.offsetWidth;

  const indicadorActivo = document.querySelector(".indicadores .active");
  if (indicadorActivo.nextSibling){
    indicadorActivo.nextSibling.classList.add("active");
    indicadorActivo.classList.remove("active");
  }
});

// Event listener para la felcha izquierda
flecha_izquierda.addEventListener("click", () => {
  fila.scrollLeft -= fila.offsetWidth;

  const indicadorActivo = document.querySelector(".indicadores .active");
  if (indicadorActivo.previousSibling){
    indicadorActivo.previousSibling.classList.add("active");
    indicadorActivo.classList.remove("active");
  }
});

// Paginacion de peliculas
const numeroPaginas = Math.ceil(peliculas.length / 5);
for (let i = 0; i < numeroPaginas; i++){
  const indicador = document.createElement("button");

  if (i === 0){
    indicador.classList.add("active");
  }
  document.querySelector(".indicadores").appendChild(indicador);
  indicador.addEventListener("click", (e) => {
    fila.scrollLeft = i * fila.offsetWidth;

    document.querySelector(".indicadores .active").classList.remove("active");
    e.target.classList.add("active");
  });
}
