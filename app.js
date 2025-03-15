let nomes = [];
function adicionarAmigo() {
  let input = document.getElementById("amigo");
  let amigo = input.value.trim();
  if (amigo === "") {
    alert("Por favor, digite o nome antes de adicionar!");
    return;
  }
  nomes.push(amigo);
  atualizarLista();
  input.value = "";
}

function atualizarLista() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";
  nomes.forEach((amigo) => {
    let li = document.createElement("li");
    li.textContent = amigo;
    lista.classList.add("name-item");
    lista.appendChild(li);
  });
}

function sortearAmigo() {
  if (nomes.length === 0) {
    alert("Por favor, adicione os nomes antes de sortear!");
    return;
  }
  let sorteado = nomes[Math.floor(Math.random() * nomes.length)];
  document.getElementById("resultado").textContent =
    "Nome Sorteado: " + sorteado;
}
function zerar() {
  nomes = [];
  atualizarLista();
  document.getElementById("resultado").textContent = "";
}
