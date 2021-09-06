const postInput=document.querySelector(".messageSender_input")
const postButton=document.querySelector(".post_btn")
const postMessage=document.querySelector(".message");
const hiding=document.querySelector(".hide");
const likeIncrease=document.querySelector(".like");
const showingLike=document.querySelector(".like-show");
const showingLikeOne=document.querySelector(".like-one")
const displayLikeOne=document.querySelector(".likeOne-show")
const userComment=document.querySelector(".comment-btn");
const userCommentInput=document.querySelector(".input-comment");
const showingComment=document.querySelector(".show-comment");
const newHide=document.querySelector(".hideComment");
const userCommnetBtnOne=document.querySelector(".comment-btnOne")
const userCommentInputOne=document.querySelector(".input-commentOne")
const showCommentOne=document.querySelector(".show-commentOne")
const hideOne=document.querySelector(".hideCommentOne")
const inputPhoto=document.querySelector('input[type="file"]')
const uploadImage=document.querySelector("#photo-U")
const hideMain=document.querySelector(".uploadHide")
const fileLike=document.querySelector(".like-two-btn")
const fileShowLike=document.querySelector(".like-show-two")
const fileCommentBtn=document.querySelector(".comment-btn-two")
const fileCommentIn=document.querySelector(".input-commentTwo")
const fileShowComment=document.querySelector(".show-commentTwo")
const hideFileComment=document.querySelector(".hideCommentTwo")


// posting users post
hiding.style.display="none"
postButton.addEventListener("click",postUserStatus)
function postUserStatus(){
    let userStatus=postInput.value;
    hiding.style.display="block"
    postMessage.innerText=userStatus;
    postInput.value=""
}

// like button one
likeIncrease.addEventListener("click",increaseLike)
let count=0 
function increaseLike(){ 
   count=count+1
   showingLike.innerText=count
    
 }

//  like button two
 showingLikeOne.addEventListener("click",increaseLikeOne)
let counts=0
function increaseLikeOne(){ 
    counts=counts+1
    displayLikeOne.innerText=counts
  }

// like button three 
fileLike.addEventListener("click",increaseLikeTwo)
let countTwo=0
function increaseLikeTwo(){ 
    countTwo=countTwo+1
    fileShowLike.innerText=countTwo
  }

// comment button one
newHide.style.display="none"
userComment.addEventListener("click",commentFun)
function commentFun(){
    newHide.style.display="block"
    let readComment=userCommentInput.value;
    showingComment.innerText=readComment
    userCommentInput.value="";
    if(readComment==0){
        newHide.style.display="none"
    }
}

// comment button two
hideOne.style.display="none"
userCommnetBtnOne.addEventListener("click",commentFunOne)
function commentFunOne(){
    hideOne.style.display="block"
    let readCommentOne=userCommentInputOne.value;
    showCommentOne.innerText=readCommentOne
    userCommentInputOne.value="";
    if(readCommentOne==0){
        hideOne.style.display="none"
    }
}
// comment button three
hideFileComment.style.display="none"
fileCommentBtn.addEventListener("click",commentFunTwo)
function commentFunTwo(){
    hideFileComment.style.display="block"
    let readCommentTwo=fileCommentIn.value;
    fileShowComment.innerText=readCommentTwo
    fileCommentIn.value="";
    if(readCommentTwo==0){
        hideFileComment.style.display="none"
    }
}


// photo upload
hideMain.style.display="none"
inputPhoto.addEventListener("change",upload,false)
function upload(){
    // file reader api
    const reader=new FileReader()
    reader.onload=function(){
        const img=new Image();
        img.src=reader.result;
        console.log(reader.result)
        hideMain.style.display="block"
        uploadImage.appendChild(img);
    }
    // readAsDataURL is going to base 64 encode the file as image representation
    // inputPhoto.files will get the file of selected image as object
   reader.readAsDataURL(inputPhoto.files[0])
}

