//let backgroundImage = document.getElementById ('backgroundImage');
//console.log(backgroundImage);

//navbar change color start
let categoriesOffset= $("#categories").offset().top;
let productsOffset= $("#products").offset().top;
let discountOffset= $("#discount").offset().top;
$(window).scroll(function(){
    let tScroll = $(window).scrollTop();

    if ((tScroll >=categoriesOffset -50 ) && (tScroll<productsOffset)){
        $(".navbar").css({"backgroundColor":"rgba(17, 17, 17,.7)","transition":"all .8s"});
        $("#btnup").fadeIn(1000);
    }
    else if((tScroll >=productsOffset) && (tScroll<discountOffset)){
        $(".navbar").css({"backgroundColor":"rgba(240, 128, 128,.8)","transition":"all .8s"});
    }
    else if(tScroll >=discountOffset){
        $(".navbar").css({"backgroundColor":"rgba(17, 17, 17,.7)","transition":"all .8s"});
    }
    else{
        $(".navbar").css("backgroundColor","#111111");
        $("#btnup").fadeOut(1000);
    }
});
//navbar change color start

//smooth scroll start
$("#btnup").click(function(){
    $(window).scrollTop(0);
})
//smooth scroll end

//scroll behavior start
$("a").click(function(e){
    let attr=$(e.target).attr('href');
    let sectionOffset= $(attr).offset().top;
    $("html,body").animate({scrollTop:sectionOffset},{duration:2000},{easing:"easeInOutExpo"});
})
//scroll behavior end

//loading screen start
$(document).ready(function(){
    $(".loading .lds-heart").fadeOut(3000);
    $(".loading").fadeOut(3000);
    $("body").css("overflow","auto")
})
//loading screen end

//Owl carousel start
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items:1,
        loop:true,
        margin:0,
        dots:true,
        smartSpeed:1200,
        autoHeight: false,
        autoplay: true,
    });
  });

//Owl carousel end