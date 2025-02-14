const productsData = [
    { name: "Sofá Minimalista", image: "images/products/sofa.jpeg", price: 1500 },
    { name: "Decoração para o banheiro", image: "images/products/acessoriosbanheiro.jpeg", price: 300 },
    { name: "Cafeteira", image: "images/products/cafeteira.jpeg", price: 250 },
    { name: "Colcha", image: "images/products/colcha.jpeg", price: 200 },
    { name: "Lençóis", image: "images/products/lencol.jpeg", price: 200 },
    { name: "Jogo de Panelas", image: "images/products/panelas.jpeg", price: 600 },
    { name: "Poltrona", image: "images/products/poltrona.jpeg", price: 500 },
    { name: "Jogo de pratos", image: "images/products/pratos.jpeg", price: 500 },
    { name: "Quadro decorativo", image: "images/products/quadro.jpeg", price: 150 },
    { name: "Talheres", image: "images/products/talheres.jpeg", price: 200 }
];

const productList = document.getElementById("products");

// Dynamically create product elements
productsData.forEach(product => {
    const productElement = document.createElement("div");
    productElement.classList.add("product");
    productElement.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>Valor total: R$${product.price.toLocaleString('pt-BR')}</p>
        <p><strong>Quanto deseja contribuir?</strong></p>
        <div class="contribution">
            <input type="number" min="10" step="10" placeholder="Valor R$">
            <button onclick="redirectToPayment('${product.name}')">Contribuir</button>
        </div>
    `;
    productList.appendChild(productElement);
  });
};

// Fix scrolling for navigation arrows
function scrollLeft() {
    document.getElementById("products").scrollBy({ left: -350, behavior: 'smooth' });
}

function scrollRight() {
    document.getElementById("products").scrollBy({ left: 350, behavior: 'smooth' });
}

// Fix missing redirect function
function redirectToPayment(productName) {
    alert(`Você escolheu contribuir para: ${productName}`);
}
