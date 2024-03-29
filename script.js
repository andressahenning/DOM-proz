document.getElementById("titulo").innerText = "Produtos à Venda";


const produto = document.createElement("div");
produto.classList.add("produto");

const nomeProduto = document.createElement("h2");
nomeProduto.innerText = "Notebook Dell Inspiron 15";

const descricaoProduto = document.createElement("p");
descricaoProduto.innerText = "Desfrute de um desempenho ágil, porém silencioso, com processadores Intel® Core™ de até 12ª geração combinados com SSD PCIe. Conte também com configurações disponíveis com placa de vídeo integrada Intel® Iris Xe.";

const precoProduto = document.createElement("p");
precoProduto.innerText = "Preço: R$3.299,00";

const imagemProduto = document.createElement("img");
imagemProduto.src = "https://i.zst.com.br/thumbs/12/35/12/-1141233282.jpg";
imagemProduto.alt = "Imagem do Smartphone XYZ";


produto.appendChild(nomeProduto);
produto.appendChild(descricaoProduto);
produto.appendChild(precoProduto);
produto.appendChild(imagemProduto);


document.body.appendChild(produto);