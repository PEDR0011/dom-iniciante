// window.alert("olá, mundo");

const href = window.location.href;
console.log(href)

if(href === "http://127.0.0.1:5500/oque-e-dom/index.html") {
  console.log("Igual");
}

// Usando o objeto doctument e o método querySelector.
var h1 = document.querySelector("h1");

function clickou() {
  console.log("CLICK no titulo")
}
h1.addEventListener("click", clickou)

/*
window / location / document : Os três objetos mais usado no dom. O window é um objeto global pode chamar as propriedade e métodos sem chama o objeto window antes. Os objetos pode ter outros obejtos na sua propriedade.
*/


// EXERCICIO

console.log(window.location.href);

let h2Ativo = document.querySelector(".ativo");
