const hambutton=document.getElementsByClassName("hamburger")[0];function toggleMenu(){document.getElementsByClassName("navBar")[0].classList.toggle("responsive")}hambutton.addEventListener("click",toggleMenu,!1);const apiURL="https://api.openweathermap.org/data/2.5/weather?id=4092267&units=imperial&APPID=35b12c8d999fdda2699d5d2204b76ea4";fetch(apiURL).then(e=>e.json()).then(e=>{console.log(e);const t=e;let n=document.createElement("div"),a=document.createElement("div"),d=document.createElement("h4"),s=document.createElement("div"),r=document.createElement("strong"),i=document.createElement("p"),l=document.createElement("div"),o=document.createElement("p"),c=document.createElement("span"),m=document.createElement("span"),p=document.createElement("span");n.appendChild(a),n.appendChild(s),n.appendChild(l),n.classList.add("weather-data"),d.textContent="CURRENT",a.appendChild(d),r.innerHTML=t.main.temp.toFixed(0)+"&#8457;",i.textContent=t.weather[0].main,s.appendChild(r),s.appendChild(i),o.innerHTML="Feels like "+t.main.feels_like.toFixed(1)+"&#8457;",c.innerHTML="H "+t.main.temp_max.toFixed(1)+"&#8457;",m.textContent=" / ",p.innerHTML="L "+t.main.temp_min.toFixed(1)+"&#8457;",l.appendChild(o),l.appendChild(c),l.appendChild(m),l.appendChild(p),document.querySelector("section.weather").appendChild(n)});const apiForecastURL="https://api.openweathermap.org/data/2.5/forecast?id=4092267&units=imperial&APPID=35b12c8d999fdda2699d5d2204b76ea4";fetch(apiForecastURL).then(e=>e.json()).then(e=>{console.log(e);var t=new Date,n=(t=new Date,new Date(t));n.setDate(n.getDate()+1);var a=new Date(n);a.setDate(a.getDate()+1);const d=["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"];var s=0;for(let o=0;o<e.list.length;o++){var r=new Date(e.list[o].dt_txt);if(12==r.getHours()&&r.getDate()==t.getDate()){var i=e.list[o];let t=document.createElement("div"),n=document.createElement("div"),a=document.createElement("h4"),d=document.createElement("p"),r=document.createElement("img"),c=document.createElement("div"),m=document.createElement("div"),p=document.createElement("p"),u=document.createElement("strong");const h=i.weather[0].main;if("Clear"==h)var l="assets/sunny.png";else if("Clouds"==h)l="assets/cloud.png";else if("Snow"==h)l="assets/snow.png";else if("Rain"==h||"Drizzle"==h)l="assets/rain.png";else if("Thunderstorm"==h)l="assets/thunderstorm.png";else l="assets/mist.png";t.appendChild(n),t.appendChild(c),t.appendChild(m),t.classList.add("weather-data"),a.textContent="TODAY",d.textContent=i.weather[0].main,n.appendChild(a),n.appendChild(d),r.setAttribute("src",l),r.setAttribute("alt",i.weather[0].description),c.appendChild(r),p.textContent="MAX",u.innerHTML=i.main.temp_max.toFixed(0)+"&#8457;",m.appendChild(u),document.querySelector("section.weather").appendChild(t),s+=1}else if(18==r.getHours()&&r.getDate()==t.getDate()){i=e.list[o];let t=document.createElement("div"),n=document.createElement("div"),a=document.createElement("h4"),d=document.createElement("p"),r=document.createElement("img"),c=document.createElement("div"),m=document.createElement("div"),p=document.createElement("p"),u=document.createElement("strong");const h=i.weather[0].main;if("Clear"==h)l="assets/sunny.png";else if("Clouds"==h)l="assets/cloud.png";else if("Snow"==h)l="assets/snow.png";else if("Rain"==h||"Drizzle"==h)l="assets/rain.png";else if("Thunderstorm"==h)l="assets/thunderstorm.png";else l="assets/mist.png";t.appendChild(n),t.appendChild(c),t.appendChild(m),t.classList.add("weather-data"),a.textContent="TONIGHT",d.textContent=i.weather[0].main,n.appendChild(a),n.appendChild(d),r.setAttribute("src",l),r.setAttribute("alt",i.weather[0].description),c.appendChild(r),p.textContent="MIN",u.innerHTML=i.main.temp_min.toFixed(0)+"&#8457;",m.appendChild(u),document.querySelector("section.weather").appendChild(t),s+=1}else if(12==r.getHours()&&r.getDate()==n.getDate()){i=e.list[o];let t=document.createElement("div"),n=document.createElement("div"),a=document.createElement("h4"),r=document.createElement("p"),c=document.createElement("img"),m=document.createElement("div"),p=document.createElement("div"),u=document.createElement("p"),h=document.createElement("strong");const g=i.weather[0].main;if("Clear"==g)l="assets/sunny.png";else if("Clouds"==g)l="assets/cloud.png";else if("Snow"==g)l="assets/snow.png";else if("Rain"==g||"Drizzle"==g)l="assets/rain.png";else if("Thunderstorm"==g)l="assets/thunderstorm.png";else l="assets/mist.png";t.appendChild(n),t.appendChild(m),t.appendChild(p),t.classList.add("weather-data"),a.textContent=d[new Date(i.dt_txt).getDay()],r.textContent=i.weather[0].main,n.appendChild(a),n.appendChild(r),c.setAttribute("src",l),c.setAttribute("alt",i.weather[0].description),m.appendChild(c),u.textContent="MAX",h.innerHTML=i.main.temp_max.toFixed(0)+"&#8457;",p.appendChild(h),document.querySelector("section.weather").appendChild(t),s+=1}else if(18==r.getHours()&&r.getDate()==n.getDate()){i=e.list[o];let t=document.createElement("div"),n=document.createElement("div"),a=document.createElement("h4"),r=document.createElement("p"),c=document.createElement("img"),m=document.createElement("div"),p=document.createElement("div"),u=document.createElement("p"),h=document.createElement("strong");const g=i.weather[0].main;if("Clear"==g)l="assets/sunny.png";else if("Clouds"==g)l="assets/cloud.png";else if("Snow"==g)l="assets/snow.png";else if("Rain"==g||"Drizzle"==g)l="assets/rain.png";else if("Thunderstorm"==g)l="assets/thunderstorm.png";else l="assets/mist.png";t.appendChild(n),t.appendChild(m),t.appendChild(p),t.classList.add("weather-data"),a.textContent=d[new Date(i.dt_txt).getDay()]+" NIGHT",r.textContent=i.weather[0].main,n.appendChild(a),n.appendChild(r),c.setAttribute("src",l),c.setAttribute("alt",i.weather[0].description),m.appendChild(c),u.textContent="MIN",h.innerHTML=i.main.temp_max.toFixed(0)+"&#8457;",p.appendChild(h),document.querySelector("section.weather").appendChild(t),s+=1}else if(4!=s&&12==r.getHours()&&r.getDate()==a.getDate()){i=e.list[o];let t=document.createElement("div"),n=document.createElement("div"),a=document.createElement("h4"),s=document.createElement("p"),r=document.createElement("img"),c=document.createElement("div"),m=document.createElement("div"),p=document.createElement("p"),u=document.createElement("strong");const h=i.weather[0].main;if("Clear"==h)l="assets/sunny.png";else if("Clouds"==h)l="assets/cloud.png";else if("Snow"==h)l="assets/snow.png";else if("Rain"==h||"Drizzle"==h)l="assets/rain.png";else if("Thunderstorm"==h)l="assets/thunderstorm.png";else l="assets/mist.png";t.appendChild(n),t.appendChild(c),t.appendChild(m),t.classList.add("weather-data"),a.textContent=d[new Date(i.dt_txt).getDay()],s.textContent=i.weather[0].main,n.appendChild(a),n.appendChild(s),r.setAttribute("src",l),r.setAttribute("alt",i.weather[0].description),c.appendChild(r),p.textContent="MAX",u.innerHTML=i.main.temp_max.toFixed(0)+"&#8457;",m.appendChild(u),document.querySelector("section.weather").appendChild(t)}}});const requestURL="https://rfranu7.github.io/project/objects/trips.json";fetch(requestURL).then(function(e){return e.json()}).then(function(e){console.table(e);const t=e.trips;for(let e=0;e<t.length;e++){let n=document.createElement("div"),a=document.createElement("div"),d=document.createElement("img"),s=document.createElement("div"),r=document.createElement("h3"),i=document.createElement("p"),l=document.createElement("a"),o=document.createElement("button");d.setAttribute("src","assets/"+t[e].photo),d.setAttribute("alt",t[e].name),r.textContent=t[e].name,i.textContent=t[e].desc,o.textContent="Explore",n.appendChild(a),n.appendChild(s),n.classList.add("trip-data"),a.appendChild(d),s.appendChild(r),s.appendChild(i),s.appendChild(l),l.appendChild(o),o.classList.add("book-btn"),l.setAttribute("href","adventures-trip-number"+[e+1]+".html"),document.querySelector("section.trips").appendChild(n)}});const images=document.querySelectorAll("[data-src]");function preloadImage(e){const t=e.getAttribute("data-src"),n=e.getAttribute("data-srcset");t&&(e.src=t,n&&(e.srcset=n))}function removeImg(e){e.removeAttribute("data-src"),e.removeAttribute("data-srcset")}const ImgOptions={rootMargin:"0px 0px -300px 0px"},ImgObserver=new IntersectionObserver((e,t)=>{e.forEach(e=>{e.isIntersecting&&(preloadImage(e.target),t.unobserve(e.target),removeImg(e.target))})},ImgOptions);images.forEach(e=>{ImgObserver.observe(e)});const month=["January","February","March","April","May","June","July","August","September","October","November","December"],week=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];let date=new Date,year=date.getFullYear();document.getElementById("currentYear").textContent=year;