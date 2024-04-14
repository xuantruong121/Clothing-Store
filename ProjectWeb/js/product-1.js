var Nobita = {
    minusQuantity: function () {
        var quantityInput = document.getElementById('quantity');
        var quantity = parseInt(quantityInput.value, 10);
        if (quantity > 1) {
            quantityInput.value = quantity - 1;
        }
    },
    plusQuantity: function () {
        var quantityInput = document.getElementById('quantity');
        var quantity = parseInt(quantityInput.value, 10);
        quantityInput.value = quantity + 1;
    }
};

// Get the id from the URL
var urlParams = new URLSearchParams(window.location.search);
var id = parseInt(urlParams.get('id'), 10);

// Get the product elements from the DOM
var productPic = document.querySelector('.product-pic img');
var productTitle = document.querySelector('.product-title h4');
var productPrice = document.querySelector('.product-price span:first-child');

// Get the products from localStorage
var products = JSON.parse(localStorage.getItem('products'));

// Update the product elements with the data from the products array
var product = products[id];
productPic.src = product[0];
productTitle.textContent = product[1];
var price = parseInt(product[2], 10);
productPrice.textContent = price.toLocaleString('vi-VN') + '₫';