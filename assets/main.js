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

