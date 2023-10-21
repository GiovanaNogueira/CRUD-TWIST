let data = [{
    name: "Ana Britto",
    handle: "ana_britto",
  },
  {
    name: "Ricardo Costa",
    handle: "ricardocosta",
  },
  {
    name: "Tiago Montana",
    handle: "tiagomontana",
}];


let dataNova = JSON.parse(localStorage.getItem("data"))
if(dataNova){
    data = dataNova
}


const input = document.getElementById("search-input")
function pesquisa(){
    var filter, div
    filter = input.value.toUpperCase()
    div = document.getElementsByClassName("contatos")
    for(let i = 0; i<div.length;i++){
        var idx = div[i].name.indexOf(filter)
        if(idx!=-1){
            div[i].style.display = ""
        }
        else{
            div[i].style.display = "none"
        }
    }
  
}
input.onkeyup = pesquisa
imgSearch = document.getElementById("iconSearch")




// function searchContact() {  
//     var input, filter, ul, li, i;
//     input = document.getElementById("search-input");
//     filter = input.value.toUpperCase();
//     filter.length <= 0 ? document.getElementById("showing-contacts").style.display = "none" : document.getElementById("showing-contacts").style.display = "";
//     ul = document.getElementById("contact-list");
//     li = ul.getElementsByTagName("li");
//     for (i = 0; i < li.length; i++) {
//         if (li[i].textContent.toUpperCase().indexOf(filter) > -1) {
//             li[i].style.display = "";
//         } else {
//             li[i].style.display = "none";
//         }
//     }
// }

function addContact(){
    localStorage.setItem("data", JSON.stringify(data))
    window.location.href="./createcontact.html"
}

var add = document.getElementById("add")
add.onclick = addContact

var pessoa = JSON.parse(localStorage.getItem("pessoa"))
if(pessoa){
    let index = -1
    for(var i = 0; i<data.length; i++){
        if(data[i].handle === pessoa.handle){
            index = i
            break 
        }
    }

   if(index===-1){
    data.push(pessoa)
   }
   else{
    data[index] = pessoa
   }
    localStorage.setItem("data", JSON.stringify(data))
    localStorage.removeItem("pessoa")
}


var divPrincipal = document.getElementById("principal")
function listaContato(){
    data.forEach((pessoa)=>{
        var div = document.createElement("div")
        div.className = "contatos"
        div.name = pessoa.name.toUpperCase()

        var divNomes = document.createElement("div")
        divNomes.className="divNomes"
    

        var pnome = document.createElement("p")
        pnome.innerText=pessoa.name
        pnome.id = "cont"

        var phandle = document.createElement("p")
        phandle.innerText=pessoa.handle

        var edit =document.createElement('img')
        edit.src = "icons/edit.svg"
        edit.className = "edit"
        edit.onclick=()=>{
            localStorage.setItem('contAtual', JSON.stringify(pessoa))
            window.location.href="createcontact.html"
        }

        var cancel =document.createElement('img')
        cancel.src = "icons/cancel.svg"
        cancel.className = "cancel"
        cancel.onclick=()=>{
            data=data.filter(cont=>(cont.name!=pessoa.name))
            divPrincipal.innerHTML = ""
            localStorage.setItem("data", JSON.stringify(data))
            listaContato()
        }
    
        divNomes.appendChild(pnome)
        divNomes.appendChild(phandle)
        div.appendChild(divNomes)
        div.appendChild(edit)
        div.appendChild(cancel)
        divPrincipal.appendChild(div)

    })
}

listaContato()



