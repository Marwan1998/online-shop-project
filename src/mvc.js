//Mode
data = (function () {
  console.log("it's the model data");

  const images = [ // all images addresses in the main container should be here.
    "images/t-shirts.jpg",
    "images/bags.jpg",
    "images/shoes.jpg",
  ];
  // the h1 and p text for each image (it's array of objects).
  const clarifications = [
    {
      h1: "Our T-Shirts Brand",
      p: "&#8681; here you can find all of our awesome T-Shirts! &#8681;",
    },
    {
      h1: "Our Bags Brand",
      p: "&#8681; here you can find all of our awesome Bags! &#8681;",
    },
    {
      h1: "Our Shoes Brand",
      p: "&#8681; here you can find all of our awesome Shoes! &#8681;",
    },
  ];
  const imageAlt = ["t-shirts", "bags", "shoes"]; 

  return {
    getAltByIndex: (index) => imageAlt[index], // get img alt to certain image
    getIndex: (resiveAlt) => imageAlt.findIndex((value) => value == resiveAlt), // get index for certain image alt
    getimage: (index) => images[index],
    getClarificate: (index) => clarifications[index],
  };
})();

// View
view = (function () {
  console.log("it's the view");

  let img = document.getElementById("ContImg");
  let dot = document.getElementsByClassName("dot");
  const DOMKeys = { // classes and id names
    nextClass: ".next",
    prevClass: ".prev",
    dot0ID: "dot0",
    dot1ID: "dot1",
    dot2ID: "dot2",
  };


  return {
    getDOMKeys: DOMKeys,

    getAlt: () => img.alt,

    // get the next index where what image should be, using what button was pressed
    getNextIndex: (currentIndex, nextOrPrev) => { 
      if (currentIndex === 0 && nextOrPrev === "next") return 1;
      else if (currentIndex === 1 && nextOrPrev === "next") return 2;
      else if (currentIndex === 2 && nextOrPrev === "next") return 0;
      else if (currentIndex === 0 && nextOrPrev === "prev") return 2;
      else if (currentIndex === 1 && nextOrPrev === "prev") return 0;
      else if (currentIndex === 2 && nextOrPrev === "prev") return 1;
    },

    setImage: function (newImage, newAlt) {
      // to the next image
      img.src = newImage; // set the new image.
      img.alt = newAlt; // set new alt
    },

    setClarification: (clarification) => {
      document.getElementById("imgH1").innerHTML = clarification.h1;
      document.getElementById("imgP").innerHTML = clarification.p;
    },

    // set DOT buttons classes, apply or remove active class
    setDotState: function(index){

      // loop through all dots.
      for(var i = 0; i < dot.length; i++){
        if(i == index){
          dot[i].className += " active"; // set dot class.
        }else {
          dot[i].className = dot[i].className.replace(" active", ""); // remove dot class.
        }
      }
    
    },

  };
})();

//Controller
controller = (function (data, view) {

  var indexFlag = 0; // flag to know if the dot button pressed two times
  var startEvents = function () {
    
    const DOM = view.getDOMKeys;
    
    // EventListener for each button
    document.querySelector(DOM.nextClass).addEventListener("click", () => setNewImage("next"));
    document.querySelector(DOM.prevClass).addEventListener("click", () => setNewImage("prev"));
    document.getElementById(DOM.dot0ID).addEventListener("click", () => setStateByIndex(0));
    document.getElementById(DOM.dot1ID).addEventListener("click", () => setStateByIndex(1));
    document.getElementById(DOM.dot2ID).addEventListener("click", () => setStateByIndex(2));

  };

  let setNewImage = function (nextOrPrev) {
    // defines which button pressed and call set image
    let index = data.getIndex(view.getAlt());
    let nextIndex = view.getNextIndex(index, nextOrPrev);
    setNewImageByIndex(nextIndex);
  };

  let setNewImageByIndex = (index) => {
    // set the new image by the index was sent
    let newImage = data.getimage(index);
    let newAlt = data.getAltByIndex(index);
    let newClarification = data.getClarificate(index);

    view.setImage(newImage, newAlt);
    view.setClarification(newClarification);
    setDot(index);
  }

  let setDot = function(index){
    // calling setdot to change the dot state
    view.setDotState(index);
    indexFlag = index;
  }

  let setStateByIndex = (index) => {
    // change the DOTState and set the image for the dot button that pressed
    if(index != indexFlag){
    setNewImageByIndex(index);
    setDot(index);
    indexFlag = index;
    }
  };


  return {
    // start funtion
    init: () => startEvents(),
  };
})(data, view);

// start the controller
controller.init();