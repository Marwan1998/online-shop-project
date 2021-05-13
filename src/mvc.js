//Mode
data = (function () {
  console.log("it's the model data");

  const images = [
    // Model
    "images/t-shirts.jpg",
    "images/bags.jpg",
    "images/shoes.jpg",
  ];
  // the h1 and p text for each image (it's array of objects).
  const clarifications = [
    // Model
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
    getAltByIndex: (index) => imageAlt[index],
    getIndex: (resiveAlt) => imageAlt.findIndex((value) => value == resiveAlt),
    getimage: (index) => images[index],
    clarificate: (index) => clarifications[index],
  };
})();

// View
view = (function () {
  console.log("it's the view");

  let img = document.getElementById("ContImg");

  return {
    setImage: function (newImage, newAlt) {
      // to the next image
      img.src = newImage; // set the new image.
      img.alt = newAlt; // set new alt
    },

    getAlt: () => img.alt,
    newImageIndex: (currentIndex, nextOrPrev) => {
      if (currentIndex === 0 && nextOrPrev === "next") return 1;
      else if (currentIndex === 1 && nextOrPrev === "next") return 2;
      else if (currentIndex === 2 && nextOrPrev === "next") return 0;
      else if (currentIndex === 0 && nextOrPrev === "prev") return 2;
      else if (currentIndex === 1 && nextOrPrev === "prev") return 0;
      else if (currentIndex === 2 && nextOrPrev === "prev") return 1;
    },
  };
})();

//Controller
controller = (function (data, view) {
  console.log("it's the controller");

  var startEvents = function () {
    console.log("you are inside startEvents");
    document.querySelector(".next").addEventListener("click", () => setNewIgmage("next"));
    document.querySelector(".prev").addEventListener("click", () => setNewIgmage("prev"));
    
  };

  let setNewIgmage = function (nextOrPrev) {
    let index = data.getIndex(view.getAlt());
    let nextIndex = view.newImageIndex(index, nextOrPrev);

    let newImage = data.getimage(nextIndex);
    let newAlt = data.getAltByIndex(nextIndex);

    view.setImage(newImage, newAlt);
  };

  return {
    init: () => startEvents(),
  };
})(data, view);

controller.init();
