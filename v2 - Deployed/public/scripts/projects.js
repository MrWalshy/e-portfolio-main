let projectCards = document.getElementsByClassName("project-card")
let expandButtons = document.getElementsByClassName("expand-btn")
let expandButtonText = document.getElementsByClassName("expand-btn-text")
let shrinkButtonText = document.getElementsByClassName("shrink-btn-text")

// init
addExpandButttons()

// functions
function addExpandButttons(){
    for(let i = 0; i < expandButtons.length; i++){
        expandButtons[i].addEventListener("click", function(){
            // add d-none to all
            displayNone()
            // remove d-none from current click
            projectCards[i].classList.toggle("d-none")
            // toggle size
            projectCards[i].classList.toggle("col-md-5")
            // change expand/shrink buttons
            expandButtonText[i].classList.toggle("d-none")
            shrinkButtonText[i].classList.toggle("d-none")
        })
    }
}

function displayNone(){
    for(let i = 0; i < projectCards.length; i++){
        projectCards[i].classList.toggle("d-none")
    }
}