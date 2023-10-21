var buttonAdd = document.getElementById("buttonAdd")
var nome = document.getElementById("name")
var handle = document.getElementById("handle")

function addContact(){
    localStorage.setItem("pessoa", JSON.stringify({name: nome.value, handle:handle.value}));
    window.location.href="./index.html"
}
buttonAdd.onclick = addContact


function editContact(){
    var contAtual = JSON.parse(localStorage.getItem("contAtual"))
    if (contAtual){
        nome.value = contAtual["name"]
        handle.value = contAtual["handle"]
    }
    localStorage.removeItem("contAtual")  
}
editContact()
