$(function() {
    var selectedClass = "";
    $(".filter").click(function(){
    selectedClass = $(this).attr("data-rel");
    $("#gallery").fadeTo(100, 0.1);
    $("#gallery div").not("."+selectedClass).fadeOut().removeClass('animation');
    setTimeout(function() {
    $("."+selectedClass).fadeIn().addClass('animation');
    $("#gallery").fadeTo(300, 1);
    }, 300);
    });
    });


    
function modalExpansion(clicked_id){
  $('.imgcontainer').on('click', function() {
    $('.imagepreview').attr('src', $(this).find('img').attr('src'));
    $('#myModal').modal('show');   
  });
}
