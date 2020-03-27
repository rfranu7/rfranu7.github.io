//----------------- Responsive Menu -----------------

const hambutton = document.getElementsByClassName('hamburger')[0];
hambutton.addEventListener("click", toggleMenu, false);

function toggleMenu() {
	document.getElementsByClassName("navBar")[0].classList.toggle("responsive");
};

//-----------------Trips Data---------------------

  const requestURL = 'https://rfranu7.github.io/project/objects/fulltrips.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing

    const tripz = jsonObject['tripData'];

    const tableName = document.querySelectorAll('td.table-name');
    const tableData = document.querySelectorAll('td.table-data');
    const tableHead = document.querySelectorAll('th.table-data');
    const adventureOptions = document.querySelector('.adventure');

    console.log(tableName);
    console.log(tableData);
    console.log(tableHead);

    tableName[0].innerHTML = "<strong> Destination </strong>";
    tableName[1].innerHTML = "<strong> Trips and Price </strong>";
    tableName[2].innerHTML = "<strong> Departure Dates </strong>";
    tableName[3].innerHTML = "<strong> Minimum Age </strong>";
    tableName[4].innerHTML = "<strong> Skill Level </strong>";
    tableName[5].innerHTML = "<strong> River Rating </strong>";
    tableName[6].innerHTML = "<strong> Accomodation </strong>";

    for (let i = 0; i < tripz.length; i++ ) {

        tableHead[i].textContent = tripz[i].name;
        for (let x = 0; x < tripz[i].long.length; x++ ) {
          tableData[i].textContent = tripz[i].long[x] + " $" + tripz[i].cost[x];
        }
        tableData[i+4].textContent = tripz[i].dates[0];
        tableData[i+8].textContent = tripz[i].minAge;
        tableData[i+12].textContent = tripz[i].skill;
        tableData[i+16].textContent = tripz[i].riverRate;
        tableData[i+20].textContent = tripz[i].accomodation;

        let x = document.createElement('option');
        x.textContent =  tripz[i].name;
        adventureOptions.options.add(x, i+1);
        x.setAttribute("value", tripz[i].name);
    }

    $("#first-choice").change(function() {

      var $dropdown = $(this);

      $.getJSON("https://rfranu7.github.io/project/objects/book.json", function(data) {

        var key = $dropdown.val();
        var vals1 = [];
        var vals2 = [];

        switch(key) {
          case "Middle Fork of the Salmon Rafting":
            vals1 = data.long1.split(",");
            vals2 = data.dates1.split(",");
            break;
          case "Middle Fork | Main Salmon River Rafting Combo":
            vals1 = data.long2.split(",");
            vals2 = data.dates2.split(",");
            break;
          case "Main Salmon | Lower Salmon River Rafting Combo":
            vals1 = data.long2.split(",");
            vals2 = data.dates2.split(",");
            break;
          case "Ultimate Salmon River Experience":
            vals1 = data.long2.split(",");
            vals2 = data.dates2.split(",");
            break;
        }

        var $secondChoice = $("#second-choice");
        $secondChoice.empty();
        $.each(vals1, function(index, value) {
          $secondChoice.append("<option>" + value + "</option>");
          $('#second-choice option:nth-child(1)').attr('disabled', 'disabled');
        });

        var $thirdChoice = $("#third-choice");
        $thirdChoice.empty();
        $.each(vals2, function(index, value) {
          $thirdChoice.append("<option>" + value + "</option>");
          $('#third-choice option:nth-child(1)').attr('disabled', 'disabled');
        });
      });
    });


  }
);