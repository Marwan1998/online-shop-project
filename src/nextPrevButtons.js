// all javaScript code will be either here or in src folder.
const images = [
    "images/img1.jpg",
    "images/img2.jpg",
    "images/img3.jpg",
    //   "images/img4.png",
  ];
  
  const clarifications = [
    { h1: "Our T-Shirts Brand", p: "here you can find all of our awesome T-Shirts!" },
    { h1: "Our Shoes Brand", p: "here you can find all of our awesome Shoes!" },
    { h1: "Our Bags Brand", p: "here you can find all of our awesome Bags" },
  ];
  
  let img = document.getElementById("ContImg");
  let alt = img.alt;
  let i;
  
  
  let next = function () {
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
    
    img.src = images[i];
    changePandH1(i);
  };
  
  let prev = function () {
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
  
    img.src = images[i];
    changePandH1(i);
  };
  
  let changePandH1 = function (index){
      document.getElementById("imgH1").innerHTML = clarifications[index].h1;
      document.getElementById("imgP").innerHTML = clarifications[index].p;
  }
  