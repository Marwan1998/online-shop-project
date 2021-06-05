export default function view(){




    return{

      renderProducts: (product) => {
  
        let colDiv = document.createElement("div");
        colDiv.className = "card";
        colDiv.innerHTML = `<div class="imgBx"><img src=${product.prodImg} /></div><div class="contentBx"><h2>${product.prodName}</h2><span class="color">${product.price}$</span><a id=${product.id}>Add To Cart</a></div>`;
        
        let div = document.getElementById("productsContainer");
        div.appendChild(colDiv);  
      },
      
  
    }
  
  }
  