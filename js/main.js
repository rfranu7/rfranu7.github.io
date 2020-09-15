/************************************************
               LAST MODIFIED DATE
************************************************/

let date = new Date();
let year = date.getFullYear();

let lastModify = document.lastModified

document.getElementById("currentYear").textContent = year;
document.getElementById("lastModif").textContent = "Last Updated: " + lastModify;

/************************************************
                 DYNAMIC LIST
************************************************/

// collection of portfolio links

const requestURL = 'https://rfranu7.github.io/js/items.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing

    const links = jsonObject['links'];

    for(var i=0;i < links.length;i++){
        listItem = document.createElement("li");
        a = document.createElement("a");
        link = document.createTextNode(links[i].label);
        a.appendChild(link);
        a.setAttribute("title","go to "+links[i].label);
        a.setAttribute("href",links[i].url);
        a.setAttribute("target","blank");

        listItem.appendChild(a);
        
        
        document.getElementById("portfolio").appendChild(listItem);
    }
});