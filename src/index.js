const listProd = document.querySelector(".produtos");
const btnProd = document.querySelector(".btnprod");
const btnpedido = document.querySelector(".adicionarPedido");

btnProd.addEventListener("click", PegarValores);

function PegarValores() {
  const arr = [];
  const nome = document.querySelector(".Nome").value;
  const preco = document.querySelector(".Preco").value;
  const quantidade = document.querySelector(".quantidade").value;

  if (nome == "" || preco == "" || quantidade == "") {
    alert("Preencher todos os campos");
    return;
  }
  arr.push(nome, preco, quantidade);
  mostrarTela(arr);
  limparCampos();
}

function mostrarTela(arr) {
  const prodElement = document.createElement("li");
  prodElement.innerHTML = `<p>Nome: ${arr[0]}</p><p>Preço: ${arr[1]}</p><p>Quantidade: ${arr[2]}</p><button class"adicionarPedido">Adicionar Pedido</button><br>`;
  listProd.appendChild(prodElement);
}

function limparCampos() {
  document.querySelector(".Nome").value = "";
  document.querySelector(".Preco").value = "";
  document.querySelector(".quantidade").value = "";
}