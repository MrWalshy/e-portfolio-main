let projectCards = document.getElementsByClassName("project-card")
let expandButtons = document.getElementsByClassName("expand-btn")

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
            projectCards[i].classList.toggle("col-xl-3")
            
        })
    }
}

function displayNone(){
    for(let i = 0; i < projectCards.length; i++){
        projectCards[i].classList.toggle("d-none")
    }
}