let input = document.querySelector("input")
let form = document.querySelector("form")
let ul = document.querySelector("ul")

function mytodo(e){
    e.preventDefault()
     let todotext = input.value    
     let listgroup = document.createElement("li")
     listgroup.className ="list"
     listgroup.innerText = todotext
     let delbtn = document.createElement("button")
     delbtn.className = "btn"
     delbtn.innerText = "delete"
     listgroup.appendChild(delbtn)
     ul.appendChild(listgroup)

     form.reset()

}

ul.addEventListener("click",deltodo)

function deltodo(e){
    if(e.target.className.includes("btn")){
        let deleteli = e.target.parentElement
        ul.removeChild(deleteli)
    }
    
}

form.addEventListener("submit",mytodo)



