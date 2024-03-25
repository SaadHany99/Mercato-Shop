var incart=document.querySelector(".incart");
var cards=window.localStorage.getItem("cards");



if(cards.length>2)
{
    var newcards=JSON.parse(cards);
    newcards.forEach(element => {
        var carddiv=document.createElement("div");
carddiv.className="card carddiv";
carddiv.style.width="18rem";
carddiv.setAttribute("data-id",element.id);

var image=document.createElement("img");
image.className="card-img-top cardimages fa-beat";
image.src=`${element.image}`;
image.style.cssText="--fa-animation-duration: 3.5s;";

var cardcontent=document.createElement("div");
cardcontent.className="card-body text-center cardcontent";

var h5=document.createElement("h5");
h5.className="card-title";
h5.innerHTML=`${element.title}`;

var h6=document.createElement("h6");
h6.className="card-title price";

var oldprice=document.createElement("span");
oldprice.style.cssText="text-decoration-line: line-through; color:red;margin-right: 15px;";
oldprice.className="oldprice";
oldprice.innerText=`${element.oldprice}`;

var newprice=document.createElement("span");
newprice.style.cssText="color:green;font-size: larger;--fa-animation-duration: 2s;";
newprice.className="fa-fade newprice";
newprice.innerText=`${element.newprice}`;

h6.append(oldprice,newprice);
cardcontent.append(h5,h6);


var delcart=document.createElement("span");
delcart.style.cssText="margin:auto;margin-bottom:5px;cursor:pointer;";
var icon=document.createElement("i");
icon.className="fa-solid fa-trash fs-2";
icon.style.color="#030637";
delcart.append(icon);

delcart.addEventListener("click",function(){         
    delcart.parentElement.remove();            
    newcards = newcards.filter( e => e.id != delcart.parentElement.getAttribute("data-id"))         
    addArrayToLocalstorage(newcards);
});

carddiv.append(image,cardcontent,delcart);
incart.append(carddiv);
    });//for each


}//if
function addArrayToLocalstorage(arr){
    window.localStorage.setItem("cards",JSON.stringify(arr));
}