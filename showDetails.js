var showproduct=document.querySelector(".showproduct");

let carddetails=JSON.parse(window.localStorage.getItem("details"));

// let parag=document.createElement("p");
// parag.innerHTML=carddetails.title;
// showproduct.append(parag);

var image=document.createElement("img");
image.src=`${carddetails.image}`;
image.className="card-img-top rounded-circle fa-flip";
image.style.cssText="--fa-animation-duration: 7s;";

var cardbody=document.createElement("div");
cardbody.className="card-body";

var h5=document.createElement("h5");
h5.className="card-title text-center";
h5.innerHTML=carddetails.title;

var h6=document.createElement("h6");
h6.className="card-title text-center price";

var oldpricespan=document.createElement("span");
oldpricespan.className="oldprice";
oldpricespan.style.cssText="text-decoration-line: line-through; color:red;margin-right: 15px;";
oldpricespan.innerHTML=carddetails.oldprice;

var newpricespan=document.createElement("span");
newpricespan.className="oldprice fa-fade";
newpricespan.style.cssText="color:green;font-size: larger;--fa-animation-duration: 2s;";
newpricespan.innerHTML=carddetails.newprice;

h6.append(oldpricespan,newpricespan);

var paragh=document.createElement("p");
paragh.style.cssText="color:#d53f6c;font-family:sans;font-size:larger;padding-top:20px;"
paragh.className="card-text  text-center";
paragh.innerHTML=carddetails.description;

cardbody.append(h5,h6,paragh);

showproduct.append(image,cardbody);


/////////////////////////////////////////////////////////


// {/* <div class="card mb-3 w-50 mx-auto mt-5">
// <img src="/Images/car6.jpeg" class="card-img-top" alt="...">
// <div class="card-body">
//   <h5 class="card-title">Card title</h5>
//<h6 class="card-title price">
//<span style="text-decoration-line: line-through; color:red;margin-right: 15px;" class="oldprice">25$</span>
//<span style="color:green;font-size: larger;--fa-animation-duration: 2s;"class="fa-fade newprice">19$</span>
//</h6>
//   <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
// </div>
// </div> */}