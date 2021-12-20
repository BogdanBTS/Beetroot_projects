$(() => {

    let header = $('#header');
    let introH = $('#intro').innerHeight();
    scrollOffset = $(window).scrollTop();


    /*FIXED HEADER*/
    checkScroll(scrollOffset);

    $(window).on('scroll', function () {
        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset);
    })

    function checkScroll() {
        if (scrollOffset >= introH) {
            header.addClass('fixed');
        } else {
            header.removeClass('fixed');
        }

        //console.log(scrollOffset)
    }


    /*SMOTH SCROLL*/

    $('[data-scroll]').on('click', function (event) {
        event.preventDefault();
        let _this = $(this);
        let blockId = $(this).data('scroll');
        let blockOffset = $(blockId).offset().top; //element position from top of the page.

        $('#nav a').removeClass('active');
        _this.addClass('active');

        $("html, body").animate({
            scrollTop: blockOffset
        }, 200);

        console.log(blockOffset)


    })

    // ---what we do animation---!

    $(document).scroll(() => {
        if ($(window).scrollTop() > 600) {
            $(".img-first").addClass("img-active");
        }
    });

    $(document).scroll(() => {
        if ($(window).scrollTop() > 1300) {
            $(".img-second").addClass("img-active");
        }
    });



    // SLIDER HEADER
    $(".about-slider-block").slick({
        dots: true,
        slidesToShow: 1,
        focusOnSelect: false,
        accessibility: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 1200,
        /*responsive: [
          {
            breakpoint:,
            settings: {
              dots: false,
            },
          },
        ],*/
    });


    // slider news

    $(".articles").slick({
        dots: true,
        arrows: true,
        slidesToShow: 3,
        focusOnSelect: false,
        accessibility: false,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 1200,
        /*responsive: [{
                breakpoint: ,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: ,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                },
            },
            {
                breakpoint: ,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: false,
                },
            },
        ],*/
    });

    // Address Links
    $('address').each(function() {
        var text = $(this).text();
    
        var q    = $.trim(text).replace(/\r?\n/, ',').replace(/\s+/g, ' ');
        var link = '<a class="address" href="http://maps.google.com/maps?q=' + encodeURIComponent(q) + '" target="_blank"></a>';
    
        return $(this).wrapInner(link);
    });
});

//---TOP ARROW---!
//Get the button
var mybutton = document.getElementById("topBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

//When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}






//---MAPS---!
function initMap() {
    var options = {
        zoom: 13,

        center: {
            lat: 40.659998,
            lng: -73.878293
        } //Coordinates of New York 
    }
    var map = new google.maps.Map(document.getElementById('map'), options);
    var marker = new google.maps.Marker({

        position: {
            lat: 40.678721,
            lng: -73.901128
        }, // Brooklyn Coordinates
        map: map, //Map that we need to add
        //icon:'img/Background.png',
        icon: 'img/custom_marker.png',
        zoom: 2,
        // adding custom icons (Here I used a Flash logo marker)
        draggarble: false // If set to true you can drag the marker
    });

    var information = new google.maps.InfoWindow({
        content: '<h4 style="font-weight: bold;">THE "MONTICELLO COMPANY"</h4>'
    });

    marker.addListener('click', function () {
        information.open(map, marker);
    });
}



//---CONTACT FORM VALIDATION---!
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs()
})

function checkInputs() {
    //get the values from the imputs
    const form = document.getElementById('form');
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();

    if (usernameValue === '') {
        //show error
        //add error class
        setErrorFor(username, 'Username cannot be blank');
    } else {
        setSuccessFor(username);
    }


    if (emailValue === '') {
        //show error
        //add error class
        setErrorFor(email, 'Email cannot be blank');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email is not valid');
    } else {
        setSuccessFor(email);
    }
}


function setErrorFor(input, message) {
    const formControl = input.parentElement; //.form-control
    const small = formControl.querySelector('small');

    //add error message inside small
    small.innerText = message;
    //add error class
    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement; //.form-control
    formControl.className = 'form-control success';
}

function isEmail(email) {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}