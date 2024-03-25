var submitbtn=document.querySelector(".btnSubmit");
var fullname=document.querySelector(".nameInput");
var validationName = /^\S{3,}$/;

var Email=document.querySelector(".emailInput");
const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

var password=document.querySelector(".passwordInput");

var customerMessage=document.querySelector(".msgInput");

submitbtn.addEventListener("click",function(e){
    e.preventDefault();
    displayNonAll();
if(fullname.value=="")
{
    document.querySelector(".nameRequired").style.display="block";
}
else if(fullname.value==Number(fullname.value))
{
    document.querySelector(".nameNotNumber").style.display="block";

}
else if(!fullname.value.match(validationName))
{
document.querySelector(".nameNoSpaces").style.display="block";
}
else if(Email.value=="")
{
    document.querySelector(".emailRequired").style.display="block";

}
else if(!Email.value.match(emailPattern))
{
    document.querySelector(".emailNotCorrect").style.display="block";
}
else if(password.value=="")
{
    document.querySelector(".passwordRequired").style.display="block";
}
else if(password.value.length<8)
{
    document.querySelector(".passwordShort").style.display="block";
}
else if(customerMessage.value=="")
{
    document.querySelector(".Msg").style.display="block";  
}
else
{
    alert("Your Message Has been Sent Successfuly");
    fullname.value="";
    Email.value="";
    password.value="";
    customerMessage.value="";
}

});



// function to dispaly all span error none
function displayNonAll(){
    //set all spans display none
    document.querySelector(".nameRequired").style.display="none";
    document.querySelector(".nameNotNumber").style.display="none";
    document.querySelector(".nameNoSpaces").style.display="none";
    document.querySelector(".emailRequired").style.display="none";
    document.querySelector(".emailNotCorrect").style.display="none";
    document.querySelector(".passwordRequired").style.display="none";
    document.querySelector(".passwordShort").style.display="none";
    document.querySelector(".Msg").style.display="none";
}