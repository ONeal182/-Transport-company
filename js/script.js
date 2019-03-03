
(function() {
 
  "use strict";
 
  var toggles = document.querySelectorAll(".c-hamburger");
 
  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };
 
  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
    });
  }



  $('.c-hamburger').on('click', function(){
    
      $('.overlay').toggleClass('active');


   
  })


$(window).resize(function(){
  if($(this).width() < 1024){
    $('.overlay').removeClass('active');
     $('.c-hamburger').removeClass('is-active');
  }
});
      
  




 
})();