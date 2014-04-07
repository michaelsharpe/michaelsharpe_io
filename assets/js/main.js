$(document).ready(function(){
  if(screen.width < 768 || $(window).width() < 768){
    $(".social-icon").find("object").attr("width", 60).attr("height", 60);
    $(".social-icon").css("margin", "0 0.5rem");
  }

  //Prepare a MediaQueryList
  var phone = window.matchMedia("(max-width:768px)");
  var desktop = window.matchMedia("(min-width:768px");

  //Add a listener to the MediaQueryList
  phone.addListener(function(e){
    if(e.matches){
      $(".social-icon").find("object").attr("width", 60).attr("height", 60);
      $(".social-icon").css("margin", "0 0.5rem");
    }
  });

  desktop.addListener(function(e){
    if(e.matches) {
      $(".social-icon").find("object").attr("width", 80).attr("height", 80);
      $(".social-icon").css("margin", "0 1rem");
    }
  })

  // Make icons into links
  $(".social-icons li").on("click", function() {
    console.log("test")
  });
});
