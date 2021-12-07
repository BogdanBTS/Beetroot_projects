$(() => {
            // what we do animation

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
                responsive: [{
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 2,
                        },
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            arrows: false,
                        },
                    },
                    {
                        breakpoint: 576,
                        settings: {
                            slidesToShow: 1,
                            arrows: false,
                            dots: false,
                        },
                    },
                ],
            });
        })
        
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
                content: '<h4 style="font-weight: bold;">MONTICELLO COMPANY</h4>'
            });
          
            marker.addListener('click', function () {
                information.open(map, marker);
            });
          
          }