
// all images addresses in the main container should be here.
const images = [
  "images/img1.jpg",
  "images/img2.jpg",
  "images/img3.jpg",
  //   "images/img4.png",
];

// the h1 and p text for each image (it's array of objects).
const clarifications = [
  { h1: "Our T-Shirts Brand", p: "here you can find all of our awesome T-Shirts!",},
  { h1: "Our Shoes Brand", p: "here you can find all of our awesome Shoes!" },
  { h1: "Our Bags Brand", p: "here you can find all of our awesome Bags" },
];

// some globle declaration.
let img = document.getElementById("ContImg");
let alt = img.alt;
let i;

// when pressing on next button this function will triggered.
let next = function () {
  // defining which image should display.
  if (alt == "img1") {
    i = 1;
    alt = "img2";
  } else if (alt == "img2") {
    i = 2;
    alt = "img3";
  } else if (alt == "img3") {
    i = 0;
    alt = "img1";
  }

  img.src = images[i]; // set the image.
  setDotState(i); // set dot class activity.
  changePandH1(i); // set the h1 and p for the image.
};

// when pressing on prev button this function will triggered.
let prev = function () {
  // defining which image should display.
  if (alt == "img1") {
    i = 2;
    alt = "img3";
  } else if (alt == "img2") {
    i = 0;
    alt = "img1";
  } else if (alt == "img3") {
    i = 1;
    alt = "img2";
  }

  img.src = images[i]; // set the image.
  setDotState(i); // set dot class activity.
  changePandH1(i); // set the h1 and p for the image.
};

// set the h1 and p for the specefic image.
let changePandH1 = (index) => {
  document.getElementById("imgH1").innerHTML = clarifications[index].h1;
  document.getElementById("imgP").innerHTML = clarifications[index].p;
};

// set image for the dot button that pressed.
let setImgNumber = (index) => {
  img.src = images[index];
  changePandH1(index);
  setDotState(index);
};

// to change to three dot active class to set or remove it.
let setDotState = function(setIndex){

  let dot = document.getElementsByClassName("dot");

  // loop through all dots.
  for(var index = 0; index < dot.length; index++){
    if(index == setIndex){
      dot[index].className += " active"; // set dot class.
      console.log(dot);
    }else {
      dot[index].className = dot[index].className.replace(" active", ""); // remove dot class.
    }
  }

}

