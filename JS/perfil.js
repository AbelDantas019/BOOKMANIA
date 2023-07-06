function openPage(pageName,elmnt,color) {
  var i, tabcontent, tablinks
  tabcontent = document.getElementsByClassName("tabcontent")
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none"
  }
  tablinks = document.getElementsByClassName("tablink")
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = ""
    tablinks[i].style.color = "";
  }
  document.getElementById(pageName).style.display = "block"
  elmnt.style.backgroundColor = color
  elmnt.style.color = "#FFFFFF";
}

document.querySelector('#defaultOpen').click();

var foto = document.querySelector('#imgUser')
var local = document.querySelector('user')

local.setAttribute('src',`${foto}`)