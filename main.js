let carts=document.querySelectorAll('.add-cart');
let products=[
    {
        name:'Orange juice',
        tag:'orangejuice',
        price:150,
        incart:0
    },
    {
        name:'Lime juice',
        tag:'limejuice',
        price:100,
        incart:0
    }
]
for(let i=0;i<carts.length;i++)
{
    carts[i].addEventListener('click',()=>{
        cartNumbers(products[i]);
        totalCost(products[i]);
      
    })
}
function onLoadCartNumbers(){
      let productNumbers=localStorage.getItem('cartNumbers');
      
      productNumbers=parseInt(productNumbers);
      
        if(productNumbers)
        {
           
            document.querySelector('.cart span').textContent=productNumbers;
        }
       
    
}
function cartNumbers(product)
{    
     productNumbers=localStorage.getItem('cartNumbers');
     productNumbers=parseInt(productNumbers);
     
    if(productNumbers)
    {
        localStorage.setItem('cartNumbers',productNumbers+1);
        document.querySelector('.cart span').textContent=productNumbers+1;
       
    }
    else{
        localStorage.setItem('cartNumbers',1);
        document.querySelector('.cart span').textContent=1;
       
    }

   setItems(product);
}
  
  onLoadCartNumbers();
  

  function setItems(product)
  {
    let cartItems=localStorage.getItem('productsInCart');
    cartItems=JSON.parse(cartItems);
    if(cartItems !=null)
    {
        
        if(cartItems[product.tag]==undefined)
        {
            cartItems={...cartItems,[product.tag]:product}
        }
        cartItems[product.tag].incart=cartItems[product.tag].incart+1;
    }
    else
    {
        product.incart=1;
        cartItems={[product.tag]:product}
    }
    localStorage.setItem('productsInCart',JSON.stringify(cartItems));
  }
  function totalCost(product)
  {
      let cartCost=localStorage.getItem('totalCost');
      if(cartCost!=null)
      {
          cartCost=parseInt(cartCost);
          localStorage.setItem('totalCost',cartCost+product.price);
      }
      else{
          localStorage.setItem('totalCost',product.price);
      }
  }
