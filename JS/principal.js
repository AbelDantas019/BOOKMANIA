const titleSite = document.querySelector('#titleSite')
const imagem = document.querySelector('#main_img')
const title = document.querySelector('#title')
const writer = document.querySelector('#writer')
const publisher = document.querySelector('#publisher')
const book_description = document.querySelector('#book_description')

const autor = document.getElementById('autor')
const genero = document.getElementById('genero')
const editora = document.getElementById('editora')
const ano = document.getElementById('ano')
const fichaEdicao = document.getElementById('edicao')
const fichaIdioma = document.getElementById('idioma')
const fichaIbsn = document.getElementById('ibsn')


let currentScroolPosition = 0
let scroolAmount = 320
const sCont = document.querySelector(".scrool-container")
const hScrool = document.querySelector(".horizantal-scrool")
const btnScroolLeft = document.querySelector("#btn-scrool-left")
const btnScroolRight = document.querySelector("#btn-scrool-right")

btnScroolLeft.style.opacity = "0"

let maxScrool = -sCont.offsetWidth + hScrool.offsetWidth

function scroolHorizontally(val){
    currentScroolPosition += (val * scroolAmount)

    if(currentScroolPosition >= 0){
        currentScroolPosition = 0
        btnScroolLeft.style.opacity = "0"
        
    } else {
        btnScroolLeft.style.opacity = "1"
    }

    if(currentScroolPosition <= maxScrool){
        currentScroolPosition = maxScrool
        btnScroolRight.style.opacity = "0"
    } else {
        btnScroolRight.style.opacity = "1"
    }
    sCont.style.left = currentScroolPosition + "px"
}



let currentScroolPosition2 = 0
const sCont2 = document.querySelector(".scrool-container2")
const hScrool2 = document.querySelector(".horizantal-scrool2")
const btnScroolLeft2 = document.querySelector("#btn-scrool-left2")
const btnScroolRight2 = document.querySelector("#btn-scrool-right2")

btnScroolLeft2.style.opacity = "0"

let maxScrool2 = -sCont2.offsetWidth + hScrool2.offsetWidth  

function scroolHorizontally2(val){
    currentScroolPosition2 += (val * scroolAmount)

    if(currentScroolPosition2 >= 0){
        currentScroolPosition2 = 0
        btnScroolLeft2.style.opacity = "0"
        
    } else {
        btnScroolLeft2.style.opacity = "1"
    }

    if(currentScroolPosition2 <= maxScrool2){
        currentScroolPosition2 = maxScrool2
        btnScroolRight2.style.opacity = "0"
    } else {
        btnScroolRight2.style.opacity = "1"
    }
    sCont2.style.left = currentScroolPosition2 + "px"
}