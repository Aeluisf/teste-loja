let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Atualizar a imagem ao selecionar a cor
document.querySelectorAll('.color-selector').forEach((selector, index) => {
    selector.addEventListener('change', function () {
        const selectedImage = this.value;
        const productImage = document.querySelectorAll('.product-image')[index];
        productImage.src = selectedImage;
    });
});

// Função para adicionar ao carrinho
document.querySelectorAll('.add-to-cart').forEach((button) => {
    button.addEventListener('click', function () {
        const productCard = button.closest('.card');
        const imageSrc = productCard.querySelector('.product-image').src;
        const colorName = productCard.querySelector('.color-selector').selectedOptions[0].text;
        const size = productCard.querySelector('.size-selector').value;
        const price = button.getAttribute('data-price');
        const productName = productCard.querySelector('.card-title').textContent.trim();  // Nome do produto

        const product = {
            image: imageSrc,
            color: colorName,
            size: size,
            price: price,
            name: productName,  // Nome do produto
        };

        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));
        alert("Produto adicionado ao carrinho!");
    });
});
