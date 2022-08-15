export const products=[

    {
        id:1,
        name:"horlicks",
        qty:0
    },
    {
        id:2,
        name:"mango",
        qty:0
    },
    {
        id:3,
        name:"apple",
        qty:0
    },
    {
        id:4,
        name:"lab",
        qty:0
    },
    {
        id:5,
        name:"cookie",
        qty:0
    },

    {
        id:6,
        name:"mango",
        qty:0
    }
]
//console.log(products);
var add=document.querySelector("#add");
var remove=document.querySelector("#remove");
var cart=document.querySelector("#cart");
add.addEventListener("click", ()=>{
    var v = parseInt(prompt("Enter the id number"));
   let c= products.find((p) => p.id == v);
    c.qty++;  
})
remove.addEventListener("click",()=>{
    var v = parseInt(prompt("Enter the id number"));
    products.find((p) => p.id == v).qty = 0;
    //updateCart();
})
cart.addEventListener("click",()=>{
    cart = [];
    products.filter((p) => p.qty > 0).forEach((q) => cart.push(q));
    console.log(cart)
  })


// export default products