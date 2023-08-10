let produto = "Livro";
let preco = 200;

const carro = {
  marca: "Audi",
  portas: 5,
};

const barato = 200 < 400 ? true : "produto caro";

function somar(a: number, b: number) {
  return a + b;
}

somar(4, 10);
// somar (4, "10")

const Nintendo = {
  nome: "Nintendo",
  preco: "2000",
};

function transformarPreco(produto: { nome: string; preco: string }) {
  produto.preco = "R$ " + produto.preco;
  return produto
}

const produtoNovo = transformarPreco(Nintendo)
console.log(produtoNovo);
