function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/oculos.jpg")
    img.setAttribute(
      "alt",
      "Foto de uma pessoa de óculos escuros, com roupa preta e fundo gradiente do roxo para o azul"
    )
  } else {
    img.setAttribute("src", "./assets/sem-oculos.jpg")
    img.setAttribute(
      "alt",
      "Foto de uma pessoa de óculos, com roupa preta e fundo gradiente do roxo para o azul"
    )
  }
}
