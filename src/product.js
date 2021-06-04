import product from './productsData.js';
var products = new product();



products.forEach(element => {
    setValues(element);
});

function setValues(values) {
  let colDiv = document.createElement("div");
  colDiv.className = "column";
  colDiv.innerHTML = `<div class='card'><h3>${values.text1}</h3><p>${values.text2}</p><p>${values.text2}</p></div>`;
  
  let div = document.getElementById("mainProduct");
  div.appendChild(colDiv);
}











// function setValues(values) {
//   let h3 = document.createElement("h3");
//   h3.innerText = values.text1;
//   let p1 = document.createElement("p");
//   p1.innerText = values.text2;
//   let p2 = document.createElement("p");
//   p2.innerHTML = "<a class='a' id='id'> hello </a>";

//   let carDiv = document.createElement("div");
//   carDiv.className = values.class2;
//   carDiv.appendChild(h3);
//   carDiv.appendChild(p1);
//   carDiv.appendChild(p2);

//   let colDiv = document.createElement("div");
//   colDiv.className = values.class1;
//   colDiv.appendChild(carDiv);

//   let div = document.getElementById("mainProduct");
//   div.appendChild(colDiv);
// }

