
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var thumbnail = document.getElementsByClassName("thumbnail");
var hero = document.getElementById("hero");

var backgroundImg = new Array(
"https://dwidude.com/wp-content/uploads/2016/11/Dwi-Dude-8.jpg",
"file:///Users/23aganesan/Downloads/bg2.png",
"file:///Users/23aganesan/Downloads/bg3.png",
"file:///Users/23aganesan/Downloads/bg4.png",
"file:///Users/23aganesan/Downloads/bg5.png",
);

let i = 0;
next.onclick = function(){


if(i < 4){
  hero.style.backgroundImage = 'url("'+backgroundImg[i+1]+'")';
  thumbnail[i+1].classList.add("active");
  thumbnail[i].classList.remove("active");
  i++;
  }
}

prev.onclick = function(){


if(i > 0){
  hero.style.backgroundImage = 'url("'+backgroundImg[i-1]+'")';
  thumbnail[i-1].classList.add("active");
  thumbnail[i].classList.remove("active");
  i--;
  }
}
