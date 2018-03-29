jQuery(document).ready(function(){
    $("#right-side").delay(750).animate({
        left : '20px'
    },1000);   
    $("#right-side").animate({
        top : '-20px',
        left : '20px',
        fontSize : '80px'
    },500);
    $("#left-side").delay(1750).animate({
        top: '-20px',
        left : '20px',
           fontSize : '80px'
    },500);
});