document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("btn-email");
  const email = document.getElementById("email");

  btn.addEventListener("click", function () {
    if (email.style.display === "none") {
      email.style.display = "block";
    } else {
      email.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Botão de e-mail
  const btn = document.getElementById("btn-email");
  const email = document.getElementById("email");

  btn.addEventListener("click", function () {
    email.style.display = email.style.display === "none" ? "block" : "none";
  });

  // Títulos interativos com setas
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
