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

for(entry in links){
    listItem = document.createElement("li");
    a = document.createElement("a");
    link = document.createTextNode(links[entry][0]);
    a.appendChild(link);
    a.title = "go to "+links[entry][0];
    a.href = links[entry][1];

    listItem.appendChild(a);
    document.getElementById(portfolioLinks).appendChild(listItem);
}