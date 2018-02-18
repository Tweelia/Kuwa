(function($){
  "use strict";

  $(document).ready(function(){

    // Hero
    $('#slider2').revolution({
      sliderLayout:"fullscreen",
      sliderType:"hero",
      delay:12000,
      responsiveLevels:[4096,1024,778,420],
      gridwidth:[1200,1024,778,420],
      gridheight:[900,800,600,600],
      minHeight: 300,

      hideThumbs:10,
      fullScreenAutoWidth:"on",
      fullScreenOffsetContainer: ".rev-offset",

      parallax:{
        type:"scroll",
        levels:[5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85],
        origo:"slidercenter",
        speed:2000,
        bgparallax:"on",
        disable_onmobile:"on"
      },

      spinner:"spinner4",
      disableProgressBar: "on"
    });

  });

})(jQuery);
