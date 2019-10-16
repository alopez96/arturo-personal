$('#home-btn').addClass('animated fadeInRight');


const dropDown = function (list) {
    $(document).ready(function(){
        $('#'+list).fadeIn();
        $('#'+list).fadeIn("slow");
        $('#'+list).fadeIn(3000);
    });
}