// Store images in Array
var arrImg = [
    "./Images/pic1.jpeg",
    "./Images/pic2.jpeg",
    "./Images/pic3.jpeg",
    "./Images/pic4.jpeg",
    "./Images/pic5.jpeg",
    "./Images/pic7.jpeg",
    
]; // collect all images in one place

var img = document.querySelector(".slider img");
img.setAttribute("src",arrImg[0]);
var leftBtn = document.querySelector(".left");
var rightBtn = document.querySelector(".right");
var curIndex = 0;
var myInterval;

setInterval(function myFunInterval(){
    img.setAttribute("src",arrImg[curIndex]);
    curIndex = (curIndex+1)%arrImg.length;//circular increment
},2000);


leftBtn.addEventListener("click",function(){
    curIndex--;
    if(curIndex==-1){ //to stop the decrement if index equal 0 and make it start from the end
        curIndex = arrImg.length-1;
    }
    img.setAttribute("src",arrImg[curIndex]);
    
});

rightBtn.addEventListener("click",function(){

    img.setAttribute("src",arrImg[curIndex]);
    curIndex = (curIndex+1) % arrImg.length;
    
});

///////////////////////////////////////////////////////////
var divs=document.querySelectorAll(".cardcont .carddiv");
divs.forEach(animate=>{
    animate.addEventListener("mouseenter",function(){
        this.classList.remove("leave-animation");
        this.classList.add("focus-animation");
        // console.log("hiiiii");
    });
    animate.addEventListener("mouseleave",function(){
        this.classList.remove("focus-animation");
        this.classList.add("leave-animation");
                // console.log("bye");
    });
})
///////////////////////////////////////////////////////////
// Category slide menu
var slidemenu=document.querySelectorAll(".slidemenu");
var buttons=document.querySelectorAll(".slidemenu .slideitem");
buttons.forEach(element => {
    // element.style.backgroundColor="white";
    element.addEventListener("mouseenter",function()
    {
        buttons.forEach((e)=>{
            e.style.backgroundColor="white";
            
        });

        element.style.backgroundColor="rgb(238, 163, 157)";
    })

    element.addEventListener("mouseleave",function()
    {
        buttons.forEach((e)=>{
            e.style.backgroundColor="white";
           
        });
    })
    element.addEventListener("click",function()
    {
     divs.forEach(d => {
        d.style.display="none";
        if(element.getAttribute("data-category")==d.getAttribute("data-category"))
        {
            d.style.display="flex";
        }
        if(element.getAttribute("data-category")=="all")
        {
            divs.forEach(dev => {
                dev.style.display="flex";
            });
        }
    
        
      });});
})
////////////////////////////////////////////////////////////
// Category buttons
var Categcont=document.querySelectorAll(".collection");
var buttons2=document.querySelectorAll(".collection .categbtn");
console.log(Categcont);
console.log(buttons2);
buttons2.forEach(ele=>{
    ele.addEventListener("click",function(){
        divs.forEach(di =>{
            di.style.display="none";
            if(ele.getAttribute("data-category")==di.getAttribute("data-category"))
            {
                di.style.display="flex";
            }
            if(ele.getAttribute("data-category")=="all")
            {
                divs.forEach(dev => {
                    dev.style.display="flex";
                });
            }
        });
    });
});
/////////////////////////////////////////////////////////////
// Add To Cart (Local Storage)

var cartshop=document.querySelector("nav .cartshop .cc");
var cardbuttons=document.querySelectorAll(".cardcont .carddiv .cardcontent .add");
var cards= window.localStorage.getItem("cards") ||window.localStorage.setItem("cards",JSON.stringify([]));
var cards=JSON.parse(window.localStorage.getItem("cards"));

 if(window.localStorage.getItem("cards"))
 {
        // cards=[];
       cards=JSON.parse(window.localStorage.getItem("cards"));
 }
    else
    {
        cards=[];
    }
    cardbuttons.forEach((b)=>{
        b.addEventListener('click',function(event){
                event.preventDefault();
                // console.log(b.parentElement.parentElement.firstElementChild.getAttribute("src"));//image
                // console.log(b.parentElement.firstElementChild.innerHTML); // title
                //console.log(b.parentElement.querySelector(".price .oldprice").innerHTML);//price1
                //console.log(b.parentElement.querySelector(".price .newprice").innerHTML);//price2
                addCardToArray(b.parentElement.parentElement.firstElementChild.getAttribute("src"),
                b.parentElement.firstElementChild.innerHTML,
                b.parentElement.querySelector(".price .oldprice").innerHTML,
                b.parentElement.querySelector(".price .newprice").innerHTML);
                addArrayToLocalstorage(cards);
                cartshop.innerHTML = cards.length;
            })
        
        });

function addCardToArray(image,title,oldprice,newprice){
    var card={
        id:Date.now(),
        image:image,
        title:title,
        oldprice:oldprice, 
        newprice:newprice,
    }
    cards.push(card);

}

function addArrayToLocalstorage(arr){
    window.localStorage.setItem("cards",JSON.stringify(arr));
}

cartshop.innerHTML=cards.length;

////////////////////////////////////////
// store Details about Products
var showdetailsbtn=document.querySelectorAll(".showdetailsbtn");

showdetailsbtn.forEach((e)=>{
    e.addEventListener("click",function(event){
        event.preventDefault();
        var carddetails={
            id:Date.now(),
            image:e.parentElement.parentElement.firstElementChild.getAttribute("src"),
            title:e.parentElement.firstElementChild.innerHTML,
            oldprice:e.parentElement.querySelector(".price .oldprice").innerHTML, 
            newprice:e.parentElement.querySelector(".price .newprice").innerHTML,
            description:e.parentElement.querySelector(".para").innerHTML,
        }
        window.localStorage.setItem("details",JSON.stringify(carddetails));
        location.href="/showDetails.html";
    });
});


