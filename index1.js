
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var thumbnail = document.getElementsByClassName("thumbnail");
var hero = document.getElementById("hero");

var backgroundImg = new Array(
"https://dwidude.com/wp-content/uploads/2016/11/Dwi-Dude-8.jpg",
"https://www.counseloroffices.net/wp-content/uploads/2015/12/best-utah-drunk-driving-accident-attorney-david-laurence-altman-st-george-drunk-driving-accident-lawyer.png",
"https://m.hindustantimes.com/rf/image_size_640x362/HT/p1/2014/12/22/Incoming/Pictures/1299171_Wallpaper2.jpg",
"https://www.jamesnewbylaw.com/media/k2/items/cache/731a6dc4318cf751dad3c115902032ed_XL.jpg",
"https://www.legacyhealing.com/wp-content/uploads/2020/03/Alcohol-Abuse-Help-in-Delray-Beach-FL-LegacyHealing.com_.jpg",
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
