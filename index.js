const userName=document.querySelector(".user-name")
const userPass=document.querySelector(".password")
const submitButton=document.querySelector("#submit-btn")
const errorMessage=document.querySelector("#error")


submitButton.addEventListener("click",login)


function login(){
    let names=userName.value;
    let paswrd=userPass.value;
    
    if(paswrd==="testlog@1" && names==="abc@gmail.com"){
        return true
    }else{
        errorMessage.innerText=`Incorrect email or password!`
        errorMessage.style.color="red"
        userName.value="";
        userPass.value="";
        return false
    }
}

