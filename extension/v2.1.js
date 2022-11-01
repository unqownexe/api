// JavaScript kodlarini buraya yaz...

trysize = 0
let xw = setInterval(function(){
  if(trysize == 100) clearInterval(x)
  
    let table = document.querySelector('table[id="credits-cost"]')
  if(table){
    
    
    
let para6 = document.createElement("button")
para6.textContent = "Not Ekle"
para6.id = "addnote"
para6.className = "btn btn-sm btn-info waves-effect waves-light"
 let div = document.querySelector("body > div.wrapper.boxed-layout-ext > div > div:nth-child(1) > div > div > div")
div.appendChild(para6);
div.prepend(para6);
     clearInterval(xw)

let para7 = document.createElement("p")

let nmesaj = ""
let nbold = true
let notlar = localStorage.getItem('notlar') || "Not bulunamadı"

notlar.split("_NOT_").forEach(not => {
  
  not = not.replace(/\r\n/g,'<br>')
  if(nbold) {
      nmesaj = nmesaj + `<b>${not}</b><br>`
      nbold = false
  }
  else{
    nmesaj = nmesaj + `${not}<br>`
    nbold = true
  }
})

para7.innerHTML = nmesaj
table.appendChild(para7)
table.append(para7)

  if(para6){
    
   
    let tpara2 = document.createElement("textarea")
        tpara2.id = "addnot"
        tpara2.style ="visibility: hidden; height: 1px; width: 1px"
        div.appendChild(tpara2);
        div.prepend(tpara2);
        
        let firstclick = true
        para6.addEventListener("click", function(){    
        if(firstclick){
          tpara2.style = ""
          firstclick = false
            nmesaj = ""
          let textareamsg = ""
          notlar.split("_NOT_").forEach(not => {
            
            not = not.replace(/\r\n/g,'<br>')
  textareamsg = textareamsg + `${not}\n`
  if(nbold) {
      nmesaj = nmesaj + `<b>${not}</b><br>`
      nbold = false
  }
  else{
    nmesaj = nmesaj + `${not}<br>`

    nbold = true
  }
})
    tpara2.value = textareamsg
      
        }else{
        
         let yeninot = tpara2.value.replace(/\r\n/g,'\n').split('\n');
         let notkaydet = ""
         
         yeninot.forEach(not => {
           notkaydet = notkaydet + not + "_NOT_"
         })
        localStorage.setItem('notlar', notkaydet);
  
          alert("✅, notlar kaydedildi")
        }
      })
      
       document.querySelector("#urlupdate").addEventListener("click", function(){
  
    username = document.querySelector("#username")
  
  localStorage.removeItem(username.value)
  alert("✅")
})
}
  }

})

