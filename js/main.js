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
const links = [
    {
      label: "Week1 notes",
      url: "week1/index.html"
    }
  ]

for(var i=0;i < links.length;i++){
    listItem = document.createElement("li");
    a = document.createElement("a");
    link = document.createTextNode(links[i][label]);
    a.appendChild(link);
    a.setAttribute("title","go to "+links[i][label]);
    a.setAttribute("href",links[i][url]);

    listItem.appendChild(a);
    document.getElementById(portfolioLinks).appendChild(listItem);
}