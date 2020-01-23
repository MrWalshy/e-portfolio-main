let mainImage = document.querySelector("#mainImage")
let contentList = document.getElementsByClassName("content-item")
let previous = document.getElementById("goBack")
let next = document.getElementById("goForward")
let contentIndex = 0;

// content slider
previous.addEventListener("click", function(){
    if(contentIndex > 0){
        contentIndex = contentIndex - 1;
        removeActiveClass();
        addActiveClass();
        console.log(contentIndex);
    }
});

next.addEventListener("click", function(){
    if(contentIndex + 1 < contentList.length){
        contentIndex = contentIndex + 1;
        removeActiveClass();
        addActiveClass();
        console.log(contentIndex);
    }
});

function removeActiveClass(){
    for(let i = 0; i < contentList.length; i++){
        contentList[i].classList.remove("active");
        contentList[i].classList.add("d-none");
    }
}

function addActiveClass(){
    // adds active class to current item
    contentList[contentIndex].classList.add("active");
    contentList[contentIndex].classList.remove("d-none");
}