$('#landing').mousemove(function(event){
    $('#face').animate({
        right : '0' + (event.pageX / 50) 
    });
});