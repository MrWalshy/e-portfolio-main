let mainImage = document.querySelector("#mainImage")

mainImage.addEventListener("click", function(){
    this.classList.toggle("main-image")
    this.classList.toggle("full-size-image")
})