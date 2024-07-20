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