window.onscroll = function() {scrollFunction()};

function scrollFunction() {

  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    var navfixed =document.getElementById("nav-bar-fixed");
    navfixed.classList.add("bg-nav");
  } 
  else {
    var navfixed =document.getElementById("nav-bar-fixed");
    navfixed.classList.remove("bg-nav");
  }


}


