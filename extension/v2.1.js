// JavaScript kodlarini buraya yaz...
let trysize = 0
let x = setInterval(function(){
  

let check = document.querySelector('a[href="#user-details"]')
console.log("Searching...", check.href)
if(trysize == 100) clearInterval(x)
if(check){
     clearInterval(x)
    let div = document.querySelector("#user-details > div > div"), 
    para = document.createElement("p"),
    username = document.querySelector("#username"), 
    password = document.querySelector("#password")
    


let veri = localStorage.getItem(username.value)
let urller = localStorage.getItem('urller')
if(urller == undefined || urller == "undefined") urller = "URL Bulunamadı";
urller = urller.split(",") 




let site = ""
if(!veri || veri == "undefined" || veri == undefined){
veri = localStorage.getItem('lastID') || 0;
localStorage.setItem('lastID', Number(veri) + 1);
site = urller[Number(veri)]
if(site == "undefined" || site == undefined || !site){
localStorage.setItem('lastID', "0");  
site = urller[Number(veri)]
}
}else site = veri

if(site == undefined || site == "undefined"){
  localStorage.setItem('lastID', "0");
  site = urller[0]  
}


if(urller[0] !== "URL Bulunamadı") localStorage.setItem(username.value, site);
para.id = "extraarea";
para.innerHTML = `<b>URL:</b> <a href="${site}">${site}</a> <br>
<b>Kullanıcı Adı:</b> ${username.value}<br>
<b>Şifre:</b> ${password.value}<br>
<hr>
<b><a href="#">http://${site}:80/playlist/${username.value}/${password.value}/m3u_plus</a><br>
<a href="#">http://${site}:80/playlist/${username.value}/${password.value}/m3u_plus?output=hls</a>
</b> <br>
<p id="urlupdate">
<b>URL Güncelle<b>
</p>
` 


div.appendChild(para);
div.prepend(para)

//3nd Page\\
div = document.querySelector("body > div.wrapper.boxed-layout-ext > div > div:nth-child(1) > div > div > div")
para = document.createElement("button")
para.className = "btn btn-sm btn-info waves-effect waves-light"
para2 = document.createElement("textarea")
para2.id = "addurl"
para2.style ="visibility: hidden; height: 1px; width: 1px"


para.textContent = "URL Ekle"
para.id = "addurlbtn"





div.appendChild(para);
div.prepend(para);


div.appendChild(para2);
div.prepend(para2);



//Not area\\



 
 
 

let add = false
para.addEventListener("click", function(){
  let textarea = document.querySelector('#addurl')
  if(!add){
  textarea.style = ""
  add = true
  
  para5 = document.createElement("p")
  para5.id = "urller"
  
  let mesaj = ""
  let bold = true
  urller.forEach(url => {
    if(bold) {
      mesaj = mesaj + `<b><a href="${url}">${url}</a></b><br>`
      bold = false
    }
    else{
      mesaj = mesaj + `<a href="${url}">${url}</a><br>`
      bold = true
    }
  })
  para5.innerHTML = mesaj
  document.querySelector("body > div.wrapper.boxed-layout-ext > div > div:nth-child(1) > div > div > div").appendChild(para5)
  document.querySelector("body > div.wrapper.boxed-layout-ext > div > div:nth-child(1) > div > div > div").prepend(para5)
  }else{
  let urller = textarea.value.replace(/\r\n/g,'\n').split('\n');
  localStorage.setItem('urller', urller);
  localStorage.setItem("lastID", "0")
  alert("✅")
  
  }
  
})

document.querySelectorAll("#datatable-review > tbody > tr > td.sorting_1").forEach((text, index) => {
  text.textContent = `[${index}] ${text.textContent}]`
})

div = document.querySelector("#datatable-review_wrapper > div:nth-child(2) > div")
para = document.createElement("div")




para.id = "extraarea_selectall";
para.innerHTML = `
<input placeholder="1,7,8,9,10" id="filter_input">

<b><p id="setfilter">Filtreyi uygula / kaldır</p></b>
<hr>
<b><p id="selectall">Tümünü seç</p></b>
<b><p id="disableall">Tümünü kaldır</p></b>
`

div.appendChild(para);
div.prepend(para)


let input = document.querySelector("#filter_input"),
    setfilter = document.querySelector('#setfilter'),
    selectall = document.querySelector('#selectall'),
    disableall = document.querySelector('#disableall')

setfilter.addEventListener("click", function(){
    
      let filtrele = input.value.split(",")
    if(filtrele.length == 0 || filtrele[0] == "") return alert("Geçersiz filtreleme yönetmi")
      document.querySelectorAll("tr > td > input").forEach((newinput, index) => {
          if(filtrele.includes(index.toString())) newinput.click()
      })
})


selectall.addEventListener("click", function(){    
      document.querySelectorAll("tr > td > input").forEach((newinput, index) => {
          if(!newinput.checked) newinput.click()
          
      })
})

disableall.addEventListener("click", function(){    
      document.querySelectorAll("tr > td > input").forEach((newinput, index) => {
          if(newinput.checked) newinput.click()
      })
})


};
  
  
  
  

})
