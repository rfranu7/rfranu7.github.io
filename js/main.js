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

for(var i=0;i < links.length();i++){
    listItem = document.createElement("li");
    a = document.createElement("a");
    link = document.createTextNode(links[i][0]);
    a.appendChild(link);
    a.setAttribute("title","go to "+links[i][0]);
    a.setAttribute("href",links[i][1]);

    listItem.appendChild(a);
    document.getElementById(portfolioLinks).appendChild(listItem);
}