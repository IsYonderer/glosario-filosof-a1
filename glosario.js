document.addEventListener("DOMContentLoaded", () => {
  fetch("datos.json")
    .then(response => response.json())
    .then(data => mostrarGlosario(data));

  const buscador = document.getElementById("buscador");
  buscador.addEventListener("input", filtrarTarjetas);
});

function mostrarGlosario(entradas) {
  const contenedor = document.getElementById("contenedor-glosario");
  contenedor.innerHTML = "";

  entradas.forEach(entrada => {
    const tarjeta = document.createElement("div");
    tarjeta.className = "card";
    tarjeta.innerHTML = `
      <div class="term">${entrada.Termino}</div>
      <div class="definition">${entrada.Definicion}</div>
      <div class="author">— ${entrada.Autora}</div>
    `;
    contenedor.appendChild(tarjeta);
  });
}

function filtrarTarjetas() {
  const filtro = this.value.toLowerCase();
  const tarjetas = document.querySelectorAll(".card");
  tarjetas.forEach(t => {
    const texto = t.innerText.toLowerCase();
    t.style.display = texto.includes(filtro) ? "block" : "none";
  });
}
