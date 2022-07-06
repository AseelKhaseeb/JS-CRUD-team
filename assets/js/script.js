//let backgroundImage = document.getElementById ('backgroundImage');
//console.log(backgroundImage);

let categoriesSection= $("#categories").offset().top;
let productsSection= $("#products").offset().top;
let discountSection= $("#discount").offset().top;
$(window).scroll(function(){
    let tScroll = $(window).scrollTop();

    if ((tScroll >=categoriesSection -50 ) && (tScroll<productsSection)){
        $(".navbar").css({"backgroundColor":"rgba(17, 17, 17,.7)","transition":"all .8s"});
    }
    else if((tScroll >=productsSection) && (tScroll<discountSection)){
        $(".navbar").css({"backgroundColor":"rgba(240, 128, 128,.8)","transition":"all .8s"});
    }
    else if(tScroll >=discountSection){
        $(".navbar").css({"backgroundColor":"rgba(17, 17, 17,.7)","transition":"all .8s"});
    }
    else{
        $(".navbar").css("backgroundColor","#111111");
    }
});