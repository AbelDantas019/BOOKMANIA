const imgCoracaoQuebrado1 = document.querySelector('#img_coracao1')
const imgCoracaoQuebrado2 = document.querySelector('#img_coracao2')
const imgCoracaoQuebrado3 = document.querySelector('#img_coracao3')

var click = false
var out = false
var moreClick = false

function clickCoracao() {
    click = true
    imgCoracaoQuebrado1.setAttribute('src','./IMG/imagens/Icones/icones_biblioteca/icon-coracao.png')
}

function entroCoracao() {
    imgCoracaoQuebrado1.setAttribute('src','./IMG/imagens/Icones/icones_biblioteca/icon-coracao.png')
}

function saiuCoracao() {
    out = true
    imgCoracaoQuebrado1.setAttribute('src','./IMG/imagens/Icones/icones_biblioteca/icon-coracao-borda.png')
    if(click == true && out == true) {
        imgCoracaoQuebrado1.setAttribute('src','./IMG/imagens/Icones/icones_biblioteca/icon-coracao.png')    
    }
}

var click2 = false
var out2 = false

function clickCoracao2() {
    click2 = true
    imgCoracaoQuebrado2.setAttribute('src','./IMG/imagens/Icones/icones_biblioteca/icon-coracao.png')
}

function entroCoracao2() {
    imgCoracaoQuebrado2.setAttribute('src','./IMG/imagens/Icones/icones_biblioteca/icon-coracao.png')
}

function saiuCoracao2() {
    out2 = true
    imgCoracaoQuebrado2.setAttribute('src','./IMG/imagens/Icones/icones_biblioteca/icon-coracao-borda.png')
    if(click2 == true && out2 == true) {
        imgCoracaoQuebrado2.setAttribute('src','./IMG/imagens/Icones/icones_biblioteca/icon-coracao.png')    
    }
}

var click3 = false
var out3 = false

function clickCoracao3() {
    click3 = true
    imgCoracaoQuebrado3.setAttribute('src','./IMG/imagens/Icones/icones_biblioteca/icon-coracao.png')
}

function entroCoracao3() {
    imgCoracaoQuebrado3.setAttribute('src','./IMG/imagens/Icones/icones_biblioteca/icon-coracao.png')
}

function saiuCoracao3() {
    out3 = true
    imgCoracaoQuebrado3.setAttribute('src','./IMG/imagens/Icones/icones_biblioteca/icon-coracao-borda.png')
    if(click3 == true && out3 == true) {
        imgCoracaoQuebrado3.setAttribute('src','./IMG/imagens/Icones/icones_biblioteca/icon-coracao.png')    
    }
}

const estrela1 = document.querySelector('#estrela1')
const estrela2 = document.querySelector('#estrela2')
const estrela3 = document.querySelector('#estrela3')
const estrela4 = document.querySelector('#estrela4')
const estrela5 = document.querySelector('#estrela5')

const estrela6 = document.querySelector('#estrela6')
const estrela7 = document.querySelector('#estrela7')
const estrela8 = document.querySelector('#estrela8')
const estrela9 = document.querySelector('#estrela9')
const estrela10 = document.querySelector('#estrela10')

const estrela11 = document.querySelector('#estrela11')
const estrela12 = document.querySelector('#estrela12')
const estrela13 = document.querySelector('#estrela13')
const estrela14 = document.querySelector('#estrela14')
const estrela15 = document.querySelector('#estrela15')

estrela1.addEventListener("click", function() {
    estrela1.setAttribute('src','./IMG/imagens/Icones/icones_biblioteca/icon-estrela-ouro.png')
    estrela2.setAttribute('src','./IMG/imagens/Icones/icones_biblioteca/icon-estrela-cinza.png')
    estrela3.setAttribute('src','./IMG/imagens/Icones/icones_biblioteca/icon-estrela-cinza.png')
    estrela4.setAttribute('src','./IMG/imagens/Icones/icones_biblioteca/icon-estrela-cinza.png')    
    estrela5.setAttribute('src','./IMG/imagens/Icones/icones_biblioteca/icon-estrela-cinza.png')
})
estrela2.addEventListener("click", function() {
    estrela1.setAttribute('src','./IMG/imagens/Icones/icones_biblioteca/icon-estrela-ouro.png')
    estrela2.setAttribute('src','./IMG/imagens/Icones/icones_biblioteca/icon-estrela-ouro.png')
    estrela3.setAttribute('src','./IMG/imagens/Icones/icones_biblioteca/icon-estrela-cinza.png')
    estrela4.setAttribute('src','./IMG/imagens/Icones/icones_biblioteca/icon-estrela-cinza.png')    
    estrela5.setAttribute('src','./IMG/imagens/Icones/icones_biblioteca/icon-estrela-cinza.png')
})
estrela3.addEventListener("click", function() {
    estrela1.setAttribute('src','./IMG/imagens/Icones/icones_biblioteca/icon-estrela-ouro.png')
    estrela2.setAttribute('src','./IMG/imagens/Icones/icones_biblioteca/icon-estrela-ouro.png')
    estrela3.setAttribute('src','./IMG/imagens/Icones/icones_biblioteca/icon-estrela-ouro.png')
    estrela4.setAttribute('src','./IMG/imagens/Icones/icones_biblioteca/icon-estrela-cinza.png')    
    estrela5.setAttribute('src','./IMG/imagens/Icones/icones_biblioteca/icon-estrela-cinza.png')
})
estrela4.addEventListener("click", function() {
    estrela1.setAttribute('src','./IMG/imagens/Icones/icones_biblioteca/icon-estrela-ouro.png')
    estrela2.setAttribute('src','./IMG/imagens/Icones/icones_biblioteca/icon-estrela-ouro.png')
    estrela3.setAttribute('src','./IMG/imagens/Icones/icones_biblioteca/icon-estrela-ouro.png')
    estrela4.setAttribute('src','./IMG/imagens/Icones/icones_biblioteca/icon-estrela-ouro.png')
    estrela5.setAttribute('src','./IMG/imagens/Icones/icones_biblioteca/icon-estrela-cinza.png')
})
estrela5.addEventListener("click", function() {
    estrela1.setAttribute('src','./IMG/imagens/Icones/icones_biblioteca/icon-estrela-ouro.png')
    estrela2.setAttribute('src','./IMG/imagens/Icones/icones_biblioteca/icon-estrela-ouro.png')
    estrela3.setAttribute('src','./IMG/imagens/Icones/icones_biblioteca/icon-estrela-ouro.png')
    estrela4.setAttribute('src','./IMG/imagens/Icones/icones_biblioteca/icon-estrela-ouro.png')
    estrela5.setAttribute('src','./IMG/imagens/Icones/icones_biblioteca/icon-estrela-ouro.png')
})

// ----------------------------------------------------------------------

estrela6.addEventListener("click", function() {
    estrela6.setAttribute('src','./IMG/imagens/Icones/icones_biblioteca/icon-estrela-ouro.png')
    estrela7.setAttribute('src','./IMG/imagens/Icones/icones_biblioteca/icon-estrela-cinza.png')
    estrela8.setAttribute('src','./IMG/imagens/Icones/icones_biblioteca/icon-estrela-cinza.png')
    estrela9.setAttribute('src','./IMG/imagens/Icones/icones_biblioteca/icon-estrela-cinza.png')    
    estrela10.setAttribute('src','./IMG/imagens/Icones/icones_biblioteca/icon-estrela-cinza.png')
})
estrela7.addEventListener("click", function() {
    estrela6.setAttribute('src','./IMG/imagens/Icones/icones_biblioteca/icon-estrela-ouro.png')
    estrela7.setAttribute('src','./IMG/imagens/Icones/icones_biblioteca/icon-estrela-ouro.png')
    estrela8.setAttribute('src','./IMG/imagens/Icones/icones_biblioteca/icon-estrela-cinza.png')
    estrela9.setAttribute('src','./IMG/imagens/Icones/icones_biblioteca/icon-estrela-cinza.png')    
    estrela10.setAttribute('src','./IMG/imagens/Icones/icones_biblioteca/icon-estrela-cinza.png')
})
estrela8.addEventListener("click", function() {
    estrela6.setAttribute('src','./IMG/imagens/Icones/icones_biblioteca/icon-estrela-ouro.png')
    estrela7.setAttribute('src','./IMG/imagens/Icones/icones_biblioteca/icon-estrela-ouro.png')
    estrela8.setAttribute('src','./IMG/imagens/Icones/icones_biblioteca/icon-estrela-ouro.png')
    estrela9.setAttribute('src','./IMG/imagens/Icones/icones_biblioteca/icon-estrela-cinza.png')    
    estrela10.setAttribute('src','./IMG/imagens/Icones/icones_biblioteca/icon-estrela-cinza.png')
})
estrela9.addEventListener("click", function() {
    estrela6.setAttribute('src','./IMG/imagens/Icones/icones_biblioteca/icon-estrela-ouro.png')
    estrela7.setAttribute('src','./IMG/imagens/Icones/icones_biblioteca/icon-estrela-ouro.png')
    estrela8.setAttribute('src','./IMG/imagens/Icones/icones_biblioteca/icon-estrela-ouro.png')
    estrela9.setAttribute('src','./IMG/imagens/Icones/icones_biblioteca/icon-estrela-ouro.png')
    estrela10.setAttribute('src','./IMG/imagens/Icones/icones_biblioteca/icon-estrela-cinza.png')
})
estrela10.addEventListener("click", function() {
    estrela6.setAttribute('src','./IMG/imagens/Icones/icones_biblioteca/icon-estrela-ouro.png')
    estrela7.setAttribute('src','./IMG/imagens/Icones/icones_biblioteca/icon-estrela-ouro.png')
    estrela8.setAttribute('src','./IMG/imagens/Icones/icones_biblioteca/icon-estrela-ouro.png')
    estrela9.setAttribute('src','./IMG/imagens/Icones/icones_biblioteca/icon-estrela-ouro.png')
    estrela10.setAttribute('src','./IMG/imagens/Icones/icones_biblioteca/icon-estrela-ouro.png')
})

// ----------------------------------------------------------------------

estrela11.addEventListener("click", function() {
    estrela11.setAttribute('src','./IMG/imagens/Icones/icones_biblioteca/icon-estrela-ouro.png')
    estrela12.setAttribute('src','./IMG/imagens/Icones/icones_biblioteca/icon-estrela-cinza.png')
    estrela13.setAttribute('src','./IMG/imagens/Icones/icones_biblioteca/icon-estrela-cinza.png')
    estrela14.setAttribute('src','./IMG/imagens/Icones/icones_biblioteca/icon-estrela-cinza.png')    
    estrela15.setAttribute('src','./IMG/imagens/Icones/icones_biblioteca/icon-estrela-cinza.png')
})
estrela12.addEventListener("click", function() {
    estrela11.setAttribute('src','./IMG/imagens/Icones/icones_biblioteca/icon-estrela-ouro.png')
    estrela12.setAttribute('src','./IMG/imagens/Icones/icones_biblioteca/icon-estrela-ouro.png')
    estrela13.setAttribute('src','./IMG/imagens/Icones/icones_biblioteca/icon-estrela-cinza.png')
    estrela14.setAttribute('src','./IMG/imagens/Icones/icones_biblioteca/icon-estrela-cinza.png')    
    estrela15.setAttribute('src','./IMG/imagens/Icones/icones_biblioteca/icon-estrela-cinza.png')
})
estrela13.addEventListener("click", function() {
    estrela11.setAttribute('src','./IMG/imagens/Icones/icones_biblioteca/icon-estrela-ouro.png')
    estrela12.setAttribute('src','./IMG/imagens/Icones/icones_biblioteca/icon-estrela-ouro.png')
    estrela13.setAttribute('src','./IMG/imagens/Icones/icones_biblioteca/icon-estrela-ouro.png')
    estrela14.setAttribute('src','./IMG/imagens/Icones/icones_biblioteca/icon-estrela-cinza.png')    
    estrela15.setAttribute('src','./IMG/imagens/Icones/icones_biblioteca/icon-estrela-cinza.png')
})
estrela14.addEventListener("click", function() {
    estrela11.setAttribute('src','./IMG/imagens/Icones/icones_biblioteca/icon-estrela-ouro.png')
    estrela12.setAttribute('src','./IMG/imagens/Icones/icones_biblioteca/icon-estrela-ouro.png')
    estrela13.setAttribute('src','./IMG/imagens/Icones/icones_biblioteca/icon-estrela-ouro.png')
    estrela14.setAttribute('src','./IMG/imagens/Icones/icones_biblioteca/icon-estrela-ouro.png')
    estrela15.setAttribute('src','./IMG/imagens/Icones/icones_biblioteca/icon-estrela-cinza.png')
})
estrela15.addEventListener("click", function() {
    estrela11.setAttribute('src','./IMG/imagens/Icones/icones_biblioteca/icon-estrela-ouro.png')
    estrela12.setAttribute('src','./IMG/imagens/Icones/icones_biblioteca/icon-estrela-ouro.png')
    estrela13.setAttribute('src','./IMG/imagens/Icones/icones_biblioteca/icon-estrela-ouro.png')
    estrela14.setAttribute('src','./IMG/imagens/Icones/icones_biblioteca/icon-estrela-ouro.png')
    estrela15.setAttribute('src','./IMG/imagens/Icones/icones_biblioteca/icon-estrela-ouro.png')
})
