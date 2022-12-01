$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
	autoplayTimeout:5000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
});

$(document).ready(function(){
    $('#service-hide-content1').hide();
    $('#service-hide-content2').hide();
    $('#service-hide-content3').hide();
    $('#button1').hide();
    $('#button2').hide();
    $('#button3').hide();

// Click Slide One

    $('#service-img1').click(function(){
        $('#img-color-one').addClass('bg-color');
        $('#img-color-two').removeClass('bg-color');
        $('#img-color-three').removeClass('bg-color');
        $('#service-hide-content1').toggle();
        $('#service-hide-content2').hide();
        $('#service-hide-content3').hide();
        $('#button1').addClass('bg-color');
        $('#button2').removeClass('bg-color');
        $('#button3').removeClass('bg-color');
        $('#button1').toggle();
        $('#button2').hide();
        $('#button3').hide();
    });

    // Click Slide Two

    $('#service-img2').click(function(){
        $('#img-color-one').removeClass('bg-color');
        $('#img-color-two').addClass('bg-color');
        $('#img-color-three').removeClass('bg-color');
        $('#service-hide-content1').hide();
        $('#service-hide-content2').toggle();
        $('#service-hide-content3').hide();
        $('#button1').removeClass('bg-color');
        $('#button2').addClass('bg-color');
        $('#button3').removeClass('bg-color');
        $('#button1').hide();
        $('#button2').toggle();
        $('#button3').hide();
    });

    // Click Slider Three

    $('#service-img3').click(function(){
        $('#img-color-one').removeClass('bg-color');
        $('#img-color-two').removeClass('bg-color');
        $('#img-color-three').addClass('bg-color');
        $('#service-hide-content1').hide();
        $('#service-hide-content2').hide();
        $('#service-hide-content3').toggle();
        $('#button1').removeClass('bg-color');
        $('#button2').removeClass('bg-color');
        $('#button3').addClass('bg-color');
        $('#button1').hide();
        $('#button2').hide();
        $('#button3').toggle();
    });
   

});