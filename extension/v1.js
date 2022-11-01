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
     // operayı açar mısnıız


let veri = localStorage.getItem(username.value)

//https://arraythis.com
let urller = ["gfshstr.carsagicdn.buzz", "pbmaqf7.carsagicdn.buzz", "uvzyvsq.carsagicdn.buzz", "c96ek76.carsagicdn.buzz", "4x5795s.carsagicdn.buzz", "6n3qqk7.carsagicdn.buzz", "389vzgn.carsagicdn.buzz", "d3jdoij.carsagicdn.buzz", "9ozxjlm.carsagicdn.buzz", "9xc74ky.carsagicdn.buzz", "1np1b6x.carsagicdn.buzz", "a9272kn.carsagicdn.buzz", "lcxcofu.carsagicdn.buzz", "f3z1e8u.carsagicdn.buzz", "rt9hvqn.carsagicdn.buzz", "rlbj75p.carsagicdn.buzz", "wk1kpsm.carsagicdn.buzz", "u9cixsp.carsagicdn.buzz", "vff1jtt.carsagicdn.buzz", "fhd0z5b.carsagicdn.buzz", "4lflos5.carsagicdn.buzz", "68gwggw.carsagicdn.buzz", "am1y9ng.carsagicdn.buzz", "3mj3eyt.carsagicdn.buzz", "07unfed.carsagicdn.buzz", "w0vt3hp.carsagicdn.buzz", "pvjimtc.carsagicdn.buzz", "cdfmp02.carsagicdn.buzz", "usz99oi.carsagicdn.buzz", "uoolz77.carsagicdn.buzz", "qb23nks.carsagicdn.buzz", "d0fk278.carsagicdn.buzz", "1hk2sok.carsagicdn.buzz", "u63dq11.carsagicdn.buzz", "ztjdmam.carsagicdn.buzz", "kxwzll2.carsagicdn.buzz"]

let site = ""
if(!veri || veri == "undefined" || veri == undefined){
veri = localStorage.getItem('lastID') || 0;
localStorage.setItem('lastID', Number(veri) + 1);
site = urller[Number(veri)]
}else site = veri


localStorage.setItem(username.value, site);
para.id = "extraarea";
para.innerHTML = `<b>URL:</b> <a href="#">${site}</a> <br>
<b>Kullanıcı Adı:</b> ${username.value}<br>
<b>Şifre:</b> ${password.value}<br>
<hr>
<b><a href="#">http://${site}:80/playlist/${username.value}/${password.value}/m3u_plus</a><br>
<a href="#">http://${site}:80/playlist/${username.value}/${password.value}/m3u_plus?output=hls</a>
</b> <br>
` 
div.appendChild(para);
div.prepend(para)



//3nd Page\\
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
  
  
  
  

},500)
