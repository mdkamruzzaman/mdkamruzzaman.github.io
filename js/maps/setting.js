(function($) {
	'use strict'; 
     $(".maps").each(function(){
        var setAdress = $(this).data("address"),
            setZoom = $(this).data("zoom"),
            setSaturation = -20;
         
            if( $(this).hasClass("map-primary") ){
                $(this).append("<i></i>");
                var getColor2 = $(".maps.map-primary i").css("backgroundColor"); 
                var rgb2hex2 = function(rgb){
                 rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
                 return (rgb && rgb.length === 4) ? "#" +
                  ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
                  ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
                  ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
                }
                var setHue = rgb2hex2( getColor2 );
            }else if( $(this).hasClass("map-purple") ){
                var setHue = "#704e7f";
            }else if( $(this).hasClass("map-purple") ){
                var setHue = "#704e7f";
            }else if( $(this).hasClass("map-blue") ){
                var setHue = "#00b0ff";
            }else if( $(this).hasClass("map-pink") ){
                var setHue = "#d96ba1";
            }else if( $(this).hasClass("map-yellow") ){
                var setHue = "#e3b041";
            }else if( $(this).hasClass("map-green") ){
                var setHue = "#5bc43e";
            }else if( $(this).hasClass("map-red") ){
                var setHue = "#e24040";
            }else if( $(this).hasClass("map-default") ){
                var setSaturation = -100;
            }else{
                var setHue = null;
            }
            
        //default
        $(this).prettyMaps({
            address: setAdress,
            image: 'js/maps/map-icon.png',
            saturation: setSaturation,
            hue : setHue,
            zoom: setZoom,
            panControl: true,
            zoomControl: true,
            mapTypeControl: true,
            scaleControl: true,
            streetViewControl: true,
            overviewMapControl: true,
            scrollwheel: false,
        });
    });
})(jQuery);