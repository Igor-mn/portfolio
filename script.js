document.addEventListener("DOMContentLoaded", function () {
  const titulos = document.querySelectorAll(".toggle-titulo");

  titulos.forEach(function (titulo) {
    titulo.style.cursor = "pointer";
    const conteudo = titulo.nextElementSibling;
    const seta = titulo.querySelector(".seta");

    titulo.addEventListener("click", function () {
      const isVisivel = conteudo.style.display === "block";
      conteudo.style.display = isVisivel ? "none" : "block";
      seta.style.transform = isVisivel ? "rotate(0deg)" : "rotate(180deg)";
    });
  });
});
