//Custom JS
    //Home page
        // jQuery for Navbar active class
        $(document).ready(function () {
            $('.navbar-nav .nav-item .nav-link').click(function () {
                $('.navbar-nav .nav-item .nav-link').removeClass('active');
                $(this).addClass('active');
            });
        });

        // jQuery for smooth scrolling
        $('.navbar-nav .nav-link').click(function (e) {
            if (this.hash !== '') {
                e.preventDefault();

                const hash = this.hash;

                $('html, body').animate(
                    {
                        scrollTop: $(hash).offset().top,
                    },
                    800,
                    function () {
                        window.location.hash = hash;
                    }
                );
            }
        });

        // jQuery for Carousel
        $('.carousel').carousel({
            interval: 2000,
        });

    // Get the button
   // Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
    
    $(document).ready(function () {
        updateCart();
        const cartCount = JSON.parse(localStorage.getItem('cart'))?.length || 0;
        $('#cart-count').text(cartCount);
    });



    function changeQuantity(productId, delta) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        let item = cart.find(item => item.id === productId);
        if (item) {
            item.quantity = Math.max(1, item.quantity + delta);
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCart();
        }
    }

    function removeFromCart(productId) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart = cart.filter(item => item.id != productId);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCart();
    }

    $(document).ready(function () {
        updateCart();
        const cartCount = JSON.parse(localStorage.getItem('cart'))?.length || 0;
        $('#cart-count').text(cartCount);
    });
    /*product etails page*/
    $(document).ready(function () {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('id');
        const products = [
            { id: 1, name: "Green Hoodie", price: 299, category: "Fashion", rating: 3, image: "assets/images/green-dress.jpeg", image2: "assets/images/green2-dress.jpeg", image3: "assets/images/green3-dress.jpeg" },
            { id: 2, name: "Black Kurti", price: 899, category: "Fashion", rating: 4, image: "assets/images/w-dress.jpeg", image2: "assets/images/black2-kurti.jpeg", image3: "assets/images/black3-kurti.jpeg" },
            { id: 3, name: "Jacket", price: 299, category: "Fashion", rating: 4, image: "assets/images/jacket.jpeg", image2: "assets/images/jacket2.jpeg", image3: "assets/images/jacket3.jpeg" },
            { id: 4, name: "Blue Hoodie", price: 299, category: "Fashion", rating: 4, image: "assets/images/blue-dress.jpeg", image2: "assets/images/blue2-dress.jpeg", image3: "assets/images/blue3-dress.jpeg" },
            { id: 5, name: "Girl Outfit", price: 799, category: "Fashion", rating: 4, image: "assets/images/girl-dress.jpeg", image2: "assets/images/girl2-dress.jpeg", image3: "assets/images/girl3-dress.jpeg" },
            { id: 6, name: "Hoodie", price: 299, category: "Fashion", rating: 3, image: "assets/images/sweater.jpeg", image2: "assets/images/sweater2.jpeg", image3: "assets/images/sweater3.jpeg" },
            { id: 7, name: "iPhone", price: 119999, category: "Electronics", rating: 4, image: "assets/images/iphone.jpeg", image2: "assets/images/iphone2.jpeg", image3: "assets/images/iphone3.jpeg" },
            { id: 8, name: "Vivo", price: 19999, category: "Electronics", rating: 4, image: "assets/images/vivo.jpeg", image2: "assets/images/vivo2.jpeg", image3: "assets/images/vivo3.jpeg" },
            { id: 9, name: "Laptop", price: 49999, category: "Electronics", rating: 5, image: "assets/images/laptop.jpeg", image2: "assets/images/laptop2.jpeg", image3: "assets/images/laptop3.jpeg" },
            { id: 10, name: "Camera", price: 119999, category: "Electronics", rating: 4, image: "assets/images/camera.jpeg", image2: "assets/images/camera2.jpeg", image3: "assets/images/camera3.jpeg" },
            { id: 11, name: "Beauty Product", price: 1999, category: "Beauty Products", rating: 4, image: "assets/images/beauty1.jpeg", image2: "assets/images/beauty1-2.jpeg", image3: "assets/images/beauty1-3.jpeg" },
            { id: 12, name: "Beauty Product", price: 1999, category: "Beauty Products", rating: 4, image: "assets/images/beauty2.jpeg", image2: "assets/images/beauty2-2.jpeg", image3: "assets/images/beauty2-3.jpeg" },
        ];
        const product = products.find(product => product.id == productId);
        if (product) {
            $('#product-image').attr('src', product.image);
            $('#product-image2').attr('src', product.image2 || '');
            $('#product-image3').attr('src', product.image3 || '');
            $('#product-name').text(product.name);
            $('#product-price').text(`Price: ₹${product.price}`);
            $('#product-rating').text(`Rating: ${'★'.repeat(product.rating)}`);
            $('#product-description').text(product.description);
        } else {
            console.error('Product not found');
        }
    });

    function addToCart() {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('id');
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const products = [
            { id: 1, name: "Green Hoodie", price: 299, category: "Fashion", rating: 3, image: "assets/images/green-dress.jpeg", image2: "assets/images/green2-dress.jpeg", image3: "assets/images/green3-dress.jpeg" },
            { id: 2, name: "Black Kurti", price: 899, category: "Fashion", rating: 4, image: "assets/images/w-dress.jpeg", image2: "assets/images/black2-kurti.jpeg", image3: "assets/images/black3-kurti.jpeg" },
            { id: 3, name: "Jacket", price: 299, category: "Fashion", rating: 4, image: "assets/images/jacket.jpeg", image2: "assets/images/jacket2.jpeg", image3: "assets/images/jacket3.jpeg" },
            { id: 4, name: "Blue Hoodie", price: 299, category: "Fashion", rating: 4, image: "assets/images/blue-dress.jpeg", image2: "assets/images/blue2-dress.jpeg", image3: "assets/images/blue3-dress.jpeg" },
            { id: 5, name: "Girl Outfit", price: 799, category: "Fashion", rating: 4, image: "assets/images/girl-dress.jpeg", image2: "assets/images/girl2-dress.jpeg", image3: "assets/images/girl3-dress.jpeg" },
            { id: 6, name: "Hoodie", price: 299, category: "Fashion", rating: 3, image: "assets/images/sweater.jpeg", image2: "assets/images/sweater2.jpeg", image3: "assets/images/sweater3.jpeg" },
            { id: 7, name: "iPhone", price: 119999, category: "Electronics", rating: 4, image: "assets/images/iphone.jpeg", image2: "assets/images/iphone2.jpeg", image3: "assets/images/iphone3.jpeg" },
            { id: 8, name: "Vivo", price: 19999, category: "Electronics", rating: 4, image: "assets/images/vivo.jpeg", image2: "assets/images/vivo2.jpeg", image3: "assets/images/vivo3.jpeg" },
            { id: 9, name: "Laptop", price: 49999, category: "Electronics", rating: 5, image: "assets/images/laptop.jpeg", image2: "assets/images/laptop2.jpeg", image3: "assets/images/laptop3.jpeg" },
            { id: 10, name: "Camera", price: 119999, category: "Electronics", rating: 4, image: "assets/images/camera.jpeg", image2: "assets/images/camera2.jpeg", image3: "assets/images/camera3.jpeg" },
            { id: 11, name: "Beauty Product", price: 1999, category: "Beauty Products", rating: 4, image: "assets/images/beauty1.jpeg", image2: "assets/images/beauty1-2.jpeg", image3: "assets/images/beauty1-3.jpeg" },
            { id: 12, name: "Beauty Product", price: 1999, category: "Beauty Products", rating: 4, image: "assets/images/beauty2.jpeg", image2: "assets/images/beauty2-2.jpeg", image3: "assets/images/beauty2-3.jpeg" },
        ];
        const product = products.find(product => product.id == productId);

        if (product) {
            const existingProduct = cart.find(item => item.id == productId);
            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                cart.push({ ...product, quantity: 1 });
            }
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartCount();
        } else {
            console.error('Product not found');
        }
    }

    function updateCartCount() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        $('#cart-count').text(cart.length);
    }

/*checkout-*/
function updateCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartHtml = '';
    let total = 0;
    let shipmentCharges = 50; // Example fixed shipment charges
    let discountPercentage = 10; // 10% discount on every product
    let discount = 0; // Initialize total discount amount
    let savedMoney = 0; // Initialize total saved money

    if (cart.length === 0) {
        // Cart is empty
        $('#cart-items').html('<p>Your cart is empty.</p>');
        $('#cart-total').find('h4').text('Total: ₹0');
        $('#shipment-charges').text('Shipment Charges: ₹0');
        $('#discount').text(`Discount: ${discountPercentage}%`);
        $('#saved-money').text('You Saved: ₹0');
        $('#final-total').text('Final Total: ₹0');
        return; // Exit the function
    }

    cart.forEach(item => {
        let itemTotalPrice = item.price * item.quantity;
        let itemDiscount = itemTotalPrice * (discountPercentage / 100); // 10% discount on the total price of the item
        let itemSavedMoney = itemDiscount; // Money saved due to discount

        total += itemTotalPrice;
        discount += itemDiscount;
        savedMoney += itemSavedMoney;

        cartHtml += `
            <div class="cart-item mb-3">
                <div class="row">
                    <div class="col-md-4">
                        <img src="${item.image}" class="img-fluid" alt="${item.name}">
                    </div>
                    <div class="col-md-8">
                        <h5>${item.name}</h5>
                        <p>Price: ₹${item.price}</p>
                        <p>Discount: -₹${itemDiscount.toFixed(2)} (${discountPercentage}%)</p>
                        <div class="d-flex align-items-center">
                            <button class="btn btn-secondary btn-sm" onclick="changeQuantity(${item.id}, -1)">-</button>
                            <span class="mx-2">${item.quantity}</span>
                            <button class="btn btn-secondary btn-sm" onclick="changeQuantity(${item.id}, 1)">+</button>
                            <button class="btn btn-danger btn-sm ml-2" onclick="removeFromCart(${item.id})">Remove</button>
                        </div>
                        <p class="mt-2">Total: ₹${itemTotalPrice.toFixed(2)}</p>
                    </div>
                </div>
            </div>
            <hr>
        `;
    });

    $('#cart-items').html(cartHtml);
    $('#cart-total').find('h4').text(`Total: ₹${total.toFixed(2)}`);
    $('#shipment-charges').text(`Shipment Charges: ₹${shipmentCharges.toFixed(2)}`);
    $('#discount').text(`Discount: ₹${discount.toFixed(2)} (${discountPercentage}%)`);
    $('#saved-money').text(`You Saved: ₹${savedMoney.toFixed(2)}`);
    $('#final-total').text(`Final Total: ₹${(total + shipmentCharges - discount).toFixed(2)}`);
}

function changeQuantity(productId, change) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let productIndex = cart.findIndex(item => item.id === productId);

    if (productIndex !== -1) {
        cart[productIndex].quantity += change;

        if (cart[productIndex].quantity <= 0) {
            cart.splice(productIndex, 1);
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        updateCart();
    }
}

function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}

function proceedToCheckout() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    window.location.href = 'order.html';
}

document.addEventListener('DOMContentLoaded', updateCart);

function buyNow() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    window.location.href = `order.html?id=${productId}`;
}
