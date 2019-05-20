
    // Custom Theme JavaScript
    // Closes the Contact Box
    $("#messenger-close").click(function(m) {
        m.preventDefault();
        $("#messenger-box").toggleClass("active");
    });
    // Opens the Contact Box
    $("#messenger-open").click(function(m) {
        m.preventDefault();
        $("#messenger-box").toggleClass("active");
    });

    // Closes the sidebar menu
    $("#menu-close").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });
    // Opens the sidebar menu
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });
    
    // Scrolls to the selected menu item on the page
    $(function() {

        $('.sidebar-nav a[href*=#]:not([href=#],[data-toggle],[data-target],[data-slide])').click(function() {

            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    event.preventDefault();      
                    var targetHref = this.hash.slice(1);
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function() {
                        $('.sidebar-nav li').removeClass('active');
                        $('.sidebar-nav').find('[href=#' + targetHref  + ']').parents('li').addClass('active');   

                      });
                    
                    return false;
                }
            }
        });


        function onScroll(event){
            var scrollPos = $(document).scrollTop() + 300;
            $('.sidebar-nav a').each(function () {
                var currLink = $(this);
                var refElement = $(currLink.attr("href"));
                if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                    $('.sidebar-nav li').removeClass("active");
                    currLink.parents('li').addClass("active");
                }
                else{
                    currLink.removeClass("active");
                }
            });
        }

        $(document).on("scroll", onScroll);


    });


    //#to-top button appears after scrolling
    var fixed = false;
    $(document).scroll(function() {
        if ($(this).scrollTop() > 250) {
            if (!fixed) {
                fixed = true;
                // $('#to-top').css({position:'fixed', display:'block'});
                $('#to-top').show("slow", function() {
                    $('#to-top').css({
                        position: 'fixed',
                        display: 'block'
                    });
                });
            }
        } else {
            if (fixed) {
                fixed = false;
                $('#to-top').hide("slow", function() {
                    $('#to-top').css({
                        display: 'none'
                    });
                });
            }
        }
    });
    // Disable Google Maps scrolling
    // See http://stackoverflow.com/a/25904582/1607849
    // Disable scroll zooming and bind back the click event
    var onMapMouseleaveHandler = function(event) {
        var that = $(this);
        that.on('click', onMapClickHandler);
        that.off('mouseleave', onMapMouseleaveHandler);
        that.find('iframe').css("pointer-events", "none");
    }
    var onMapClickHandler = function(event) {
            var that = $(this);
            // Disable the click handler until the user leaves the map area
            that.off('click', onMapClickHandler);
            // Enable scrolling zoom
            that.find('iframe').css("pointer-events", "auto");
            // Handle the mouse leave event
            that.on('mouseleave', onMapMouseleaveHandler);
        }
        // Enable map zooming with mouse scroll when the user clicks the map
    $('.map').on('click', onMapClickHandler);

        // js for text input effects
                (function() {
                // trim polyfill : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
                if (!String.prototype.trim) {
                    (function() {
                        // Make sure we trim BOM and NBSP
                        var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
                        String.prototype.trim = function() {
                            return this.replace(rtrim, '');
                        };
                    })();
                }

                [].slice.call( document.querySelectorAll( 'input.input__field' ) ).forEach( function( inputEl ) {
                    // in case the input is already filled..
                    if( inputEl.value.trim() !== '' ) {
                        classie.add( inputEl.parentNode, 'input--filled' );
                    }

                    // events:
                    inputEl.addEventListener( 'focus', onInputFocus );
                    inputEl.addEventListener( 'blur', onInputBlur );
                } );

                function onInputFocus( ev ) {
                    classie.add( ev.target.parentNode, 'input--filled' );
                }

                function onBlur( ev ) {
                    if( ev.target.value.trim() === '' ) {
                        classie.remove( ev.target.parentNode, 'input--filled' );
                    }
                }

                function onInputBlur( ev ) {
                    if( ev.target.value.trim() === '' ) {
                        classie.remove( ev.target.parentNode, 'input--filled' );
                    }
                }
            })();

            
            //=== Custom js for owl carousel === 
            $(document).ready(function() {
                    $("#service-list").owlCarousel({
                    autoPlay: 3000, //Set AutoPlay to 3 seconds
                    items : 6,
                    navigation:true,
                    pagination:false,
                    stopOnHover : true,
                    itemsDesktop : [1199,6],
                    itemsDesktopSmall : [979,3]
                });
            });