const vazio = document.querySelector(".vazio");
const listProd = document.querySelector(".produtos");
const btnProd = document.querySelector(".btnprod");
const pedidos = document.querySelector(".pedidos");
const btnRemove = document.querySelector(".btnRemover");
const btnSalvar = document.querySelector(".btnSalvarcliente");
const adicionarProd = document.querySelector(".adicionarProdutos");
const carrinho = document.querySelector(".carrinho");
const pedcliente = document.querySelector(".pedcliente");
const cadCliente = document.querySelector(".cadrastroCliente");
const btn1 = document.querySelector("#link-1")
const btn2 = document.querySelector("#link-2")


const totalpedidos = [];
const cadastroCliente = [];
let total = 0;
btnProd.addEventListener("click", PegarValores);
btnSalvar.addEventListener("click", cadastrarCliente);


function finalizarCompra() {
  
  if (cadastroCliente.length !== 3) {
    alert("Por favor, preencha todos os campos do cadastro de cliente antes de finalizar a compra.");
    return;
  }

  
  const infoCliente = document.getElementById("infoCliente");
  infoCliente.innerHTML = `<h3>Informações do Cliente:</h3><p><span class="cinza">Nome:</span> ${cadastroCliente[0]}</p><p><span class="cinza">Email:</span> ${cadastroCliente[1]}</p><p><span class="cinza">Endereço:</span> ${cadastroCliente[2]}</p>`;

  
  const infoCompra = document.getElementById("infoCompra");
  infoCompra.innerHTML = `<h3>Informações da Compra:</h3><p><span class="azul">Total da Compra: R$ ${total.toFixed(2)}</span></p>`;

 
  const modal = document.getElementById("myModal");
  modal.style.display = "flex";
}


const span = document.getElementsByClassName("close")[0];
span.onclick = function () {
  const modal = document.getElementById("myModal");
  modal.style.display = "none";
}


window.onclick = function (event) {
  const modal = document.getElementById("myModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function cadastrarCliente() {
  const nomeCliente = document.querySelector(".NomeCliente").value;
  const emailCliente = document.querySelector(".emailCliente").value;
  const enderecoCliente = document.querySelector(".endCliente").value;

  if (nomeCliente == "" || emailCliente == "" || enderecoCliente == "") {
    alert("Preencher todos os campos!!!");
    return;
  }
  cadastroCliente.push(nomeCliente, emailCliente, enderecoCliente);

  cadCliente.style.display = "none";
  adicionarProd.style.display = "flex";
  carrinho.style.display = "flex";
  pedcliente.style.display = "flex";
  btn2.setAttribute("class", "ativo")
  btn1.setAttribute("class", "inativo")
}

function PegarValores() {
  const pedidos = [];
  const nome = document.querySelector(".Nome").value;
  const preco = document.querySelector(".Preco").value;
  const quantidade = document.querySelector(".Quantidade").value;

  if (nome == "" || preco == "" || quantidade == "") {
    alert("Preencher todos os campos!!!");
    return;
  }
  pedidos.push(nome, preco, quantidade);

  mostrarTela(pedidos);
  limparCampos();
  vazio.remove();
  alert("Pedido realizado com sucesso!");
}

function mostrarTela(pedidos) {
  const preco = parseFloat(pedidos[1]);
  const quantidade = parseInt(pedidos[2]);
  const subtotal = preco * quantidade; // Calculando o subtotal

  total += subtotal;
  const prodElement = document.createElement("li");

  prodElement.innerHTML = `<li class="pedidosCar"><p>Nome:<span class="cinza"> ${
    pedidos[0]
  }</span></p><p>Preço: <span class="cinza">R$ ${preco.toFixed(
    2
  )}</span></p><p>Quantidade: <span class="cinza"> ${quantidade}</span></p><br><p class="subtotal">Subtotal: R$ ${subtotal.toFixed(
    2
  )}</p><button class="btnRemover"><i class="fa-regular fa-trash-can"></i> Remover Pedido</button></li>`;
  listProd.appendChild(prodElement);

  totalpedidos.push(pedidos);
  valorTotal(total);

  const btnRemover = prodElement.querySelector(".btnRemover");

  btnRemover.addEventListener("click", (event) => {
    const pedidoASerRemovido = event.target.parentNode;
    console.log(pedidoASerRemovido);

    pedidoASerRemovido.remove();
    alert("Item removido com sucesso!");

    console.log(subtotal);
    valorTotal((total = total - subtotal));
  });
}

function valorTotal(total) {
  pedidos.innerHTML = `<li><p class="azul">Total: R$  ${total.toFixed(2)}</p></li><button class="btnFizalizar"><i class="fa-solid fa-check"></i> Finalizar Compra</button>`; 

  const btnFizalizar = document.querySelector(".btnFizalizar")
  btnFizalizar.addEventListener("click", finalizarCompra);
}



function limparCampos() {
  document.querySelector(".Nome").value = "";
  document.querySelector(".Preco").value = "";
  document.querySelector(".Quantidade").value = "";
}


