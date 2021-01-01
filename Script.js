$(document).ready(function () 
{
   $(".menus li a").click(function(e)
   {
   	
      let b= $(this).attr("href");
      $("html,body").animate(
      {

      	scrollTop:$(b).offset().top -58,


      },1000);

      e.preventDefault();
   });
});