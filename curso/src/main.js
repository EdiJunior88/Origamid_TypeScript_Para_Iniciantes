//@ts-check

const frase = "Front End";
const total = 100.05;
const empresas = ["Apple", "Microsoft", "Google", "Facebook"];

console.log(frase.length);
console.log(frase.charAt(0));

console.log(frase.toLowerCase());

// console.log(total.toLowerCase());

const t = total.toFixed();

console.log(t + 10);

const array = empresas.map((empresa) => empresa.toUpperCase());

console.log(array);

const body = document.body;

body.style.background = "#eee";

const button = document.querySelector("button");

if (button) {
  button.click();
}

const operacao = 100 + 200;

console.log(operacao);
