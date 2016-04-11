function sizer() {
    var gk = $('#gatekeeper').innerHeight();

    $('#box').css({ marginTop: gk * .2 });
};
sizer();
window.addEventListener('resize', function() {
    sizer()
});


// $('#yes').click(function(){
// 	$('#gatekeeper').addClass('clicked', 1000);
// });

 $('#yes').on('click', function () {
    $('#gatekeeper').fadeOut(1000);
    $('#entire').css({opacity: 1});
});

$(function(){  // $(document).ready shorthand
  $('#gatekeeper').fadeIn(3000);
});