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
let scrollToTopBtn = document.getElementById("scrollToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction();
};

/*function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}
*/
// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//Product page
$(document).ready(function () {
    const products = [
        { id: 1, name: "Green Hoodie with details", price: 299, category: "Fashion", rating: 3, image: "assets/images/green-dress.jpeg" },
        { id: 2, name: "Black Kurti with details", price: 899, category: "Fashion", rating: 4, image: "assets/images/w-dress.jpeg" },
        { id: 3, name: "Blue Jacket with details", price: 599, category: "Fashion", rating: 3, image: "assets/images/jacket.jpeg" },
        { id: 4, name: "Blue Hoodie with details", price: 299, category: "Fashion", rating: 3, image: "assets/images/blue-dress.jpeg" },
        { id: 5, name: "Girl Outfit with details", price: 799, category: "Fashion", rating: 4, image: "assets/images/girl-dress.jpeg" },
        { id: 6, name: "Hoodie with details", price: 399, category: "Fashion", rating: 4, image: "assets/images/sweater.jpeg" },
        // Add more product details here as needed
    ];

    function displayProducts(productList) {
        $("#product-list").empty();
        productList.forEach(product => {
            const productHtml = `
                <div class="col-md-4 col-12">
                    <div class="single_product shadow text-center p-1">
                        <div class="product_img">
                            <a href="product_detail.html"><img src="${product.image}" class="img img-fluid" alt=""></a>
                        </div>
                        <div class="product-caption my-3">
                            <div class="product-ratting">
                                ${getStarRating(product.rating)}
                            </div>
                            <h5><a href="product_detail.html">${product.name}</a></h5>
                            <div class="price">
                                <b><span class="mr-1">₹</span><span>${product.price}</span></b>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            $("#product-list").append(productHtml);
        });
    }

    function getStarRating(rating) {
        let stars = '';
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars += '<i class="fas fa-star"></i>';
            } else {
                stars += '<i class="far fa-star"></i>';
            }
        }
        return stars;
    }

    function filterByCategory(category) {
        return category === 'All' ? products : products.filter(product => product.category === category);
    }

    function filterByPrice(maxPrice) {
        return products.filter(product => product.price <= maxPrice);
    }

    function sortProducts(criteria) {
        return [...products].sort((a, b) => {
            if (criteria === 'a-z') {
                return a.name.localeCompare(b.name);
            } else if (criteria === 'z-a') {
                return b.name.localeCompare(a.name);
            } else if (criteria === 'low-high') {
                return a.price - b.price;
            } else if (criteria === 'high-low') {
                return b.price - a.price;
            }
            return 0;
        });
    }

    $("#category-filter a").click(function (e) {
        e.preventDefault();
        const category = $(this).text();
        displayProducts(filterByCategory(category));
    });

    $("#price-range").on("input change", function () {
        const maxPrice = $(this).val();
        displayProducts(filterByPrice(maxPrice));
    });

    $("#sort-options").change(function () {
        const sortOption = $(this).val();
        displayProducts(sortProducts(sortOption));
    });

    // Initially display all products
    displayProducts(products);
});
