
	let trysize = 0,
		x = setInterval(function() {
			let e = document.querySelector('a[href="#user-details"]');
			if (console.log("Searching...", e.href), 100 == trysize && clearInterval(x), e) {
				clearInterval(x);
				let t = document.querySelector("#user-details > div > div"),
					l = document.createElement("p"),
					r = document.querySelector("#username"),
					i = document.querySelector("#password"),
					d = localStorage.getItem(r.value),
					a = localStorage.getItem("urller");
				(void 0 == a || "undefined" == a) && (a = "URL Bulunamadı"), a = a.split(",");
				let n = "";
				d && "undefined" != d && void 0 != d ? n = d : (d = localStorage.getItem("lastID") || 0, localStorage.setItem("lastID", Number(d) + 1), "undefined" != (n = a[Number(d)]) && void 0 != n && n || (localStorage.setItem("lastID", "0"), n = a[Number(d)])), (void 0 == n || "undefined" == n) && (localStorage.setItem("lastID", "0"), n = a[0]), "URL Bulunamadı" !== a[0] && localStorage.setItem(r.value, n), l.id = "extraarea", l.innerHTML = `<b>URL:</b> <a href="${n}">${n}</a> <br>
<b>Kullanıcı Adı:</b> ${r.value}<br>
<b>Şifre:</b> ${i.value}<br>
<hr>
<b><a href="#">http://${n}:80/get.php?username=${r.value}&password=${i.value}&type=m3u_plus</a><br>
<b><a href="#">http://${n}:80/get.php?username=${r.value}&password=${i.value}&type=m3u_plus&output=ts</a><br>
</b> <br>

<p id="urlupdate">
<b>URL G\xfcncelle<b>
</p>
`, t.appendChild(l),
 t.prepend(l),
 t = document.querySelector('div[class="page-title-right"]');
 (l = document.createElement("button")).className = "btn btn-sm btn-info waves-effect waves-light";
 
 (para2 = document.createElement("textarea")).id = "addurl";
  para2.style = "visibility: hidden; height: 1px; width: 1px";
  l.textContent = "URL Ekle";
  l.id = "addurlbtn";

   t.appendChild(l), t.prepend(l), t.appendChild(para2), t.prepend(para2);

				let u = !1;
				l.addEventListener("click", function() {
					let e = document.querySelector("#addurl");
					if (u) {
						let t = e.value.replace(/\r\n/g, "\n").split("\n");
						localStorage.setItem("urller", t), localStorage.setItem("lastID", "0"), alert("✅")
					} else {
						e.style = "", u = !0, (para5 = document.createElement("p")).id = "urller";
						let l = "",
							r = !0;
						a.forEach(e => {
							r ? (l += `<b><a href="${e}">${e}</a></b><br>`, r = !1) : (l += `<a href="${e}">${e}</a><br>`, r = !0)
						}), 
            para5.innerHTML = l,
            document.querySelector('div[class="page-title-right"]').appendChild(para5),
            document.querySelector('div[class="page-title-right"]').prepend(para5)
					}
				}), document.querySelectorAll("#datatable-review > tbody > tr > td.sorting_1").forEach((e, t) => {
					e.textContent = `[${t}] ${e.textContent}]`
				})
			
        trysize = 0;
        let xw = setInterval(function() {
            100 == trysize && clearInterval(x);
            let e = document.querySelector('table[id="credits-cost"]');
            
                clearInterval(xw);
                
                    let a = document.createElement("textarea");
                    a.id = "addnot", a.style = "visibility: hidden; height: 1px; width: 1px", l.appendChild(a), l.prepend(a);
                    //let c = !0;
                        document.querySelector("#urlupdate").addEventListener("click", function() {
                        username = document.querySelector("#username"), localStorage.removeItem(username.value), alert("✅")
                    })
                
            
        });
			}
		

    });






