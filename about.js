var donateButton = document.getElementById('donate');
var donateLink = "https://www.madd.org/donate-now/?utm_expid=.bKPQwiK9RLGomb7kUTM9hQ.0&utm_referrer="

donateButton.onclick = () => {
  window.open(donateLink)
}

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

var sendButton = document.getElementById('send');
var sendLink = "https://www.madd.org/about-us/contact-us/"

sendButton.onclick = () => {
  window.open(sendLink)
}
