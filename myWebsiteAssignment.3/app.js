// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

//var tablinks = document.getElementsByClassName("tab-links")
//var tabcontents = document.getElementsByClassName("tab-contents")

//function opentab(tabname){
  //for ( tablink of tablinks){
   // tablink.classList.remove("active-link");
  //}

  //for ( tabcontent of tabcontents){
  //  tabcontent.classList.remove("active-tab");
  //}
  
 // event.currentTarget.classList.add("active-link");
 
  

 
//}

function openInformation(evt, informationName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(informationName).style.display = "block";
  evt.currentTarget.className += " active";
}

function myFunction() {
  return "Changes may be made if you leave";
}



