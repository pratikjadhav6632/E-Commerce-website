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
    var goToTopBtn = document.getElementById("goToTopBtn");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {
        scrollFunction();
    };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            goToTopBtn.style.display = "block";
        } else {
            goToTopBtn.style.display = "none";
        }
    }

    // When the user clicks on the button, scroll to the top of the document
    goToTopBtn.onclick = function() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
    };



