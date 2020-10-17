
import HikeList from './hike-list.js'

const imgBasePath = "//byui-cit.github.io/cit261/examples/";

const list = new HikeList();
const hikeList = list.list;

export default class Hikes {
  
  showHikeList() {
    const hikeListElement = document.getElementById("hikes");
    hikeListElement.innerHTML = "";
    this.renderHikeList(hikeList, hikeListElement);
  }
  
  renderHikeList(hikes, parent) {
    hikes.forEach(hike => {
      parent.appendChild(this.renderOneHike(hike));
    });
  }

  renderOneHike(hike) {
    const item = document.createElement("li");
    item.innerHTML = ` <h2>${hike.name}</h2>
          <div class="image"><img src="${imgBasePath}${hike.imgSrc}" alt="${hike.imgAlt}"></div>
          <div>
                  <div>
                      <h3>Distance</h3>
                      <p>${hike.distance}</p>
                  </div>
                  <div>
                      <h3>Difficulty</h3>
                      <p>${hike.difficulty}</p>
                  </div>
          </div>`;
  
    return item;
  }


  showDescription(name){

    let hike = this.getHikeByName(name);
    let item = document.getElementById("fullDisplay");

    if(item==null) {
      item = document.createElement('div');
      item.id='fullDisplay';
    }

    item.innerHTML = ` <h2>${name}</h2>
            <div class="image"><img src="${imgBasePath}${hike.imgSrc}" alt="${hike.imgAlt}"></div>
            <div>
                    <div>
                        <h3>Distance</h3>
                        <p>${hike.distance}</p>
                    </div>
                    <div>
                        <h3>Difficulty</h3>
                        <p>${hike.difficulty}</p>
                    </div>
                    <div>
                        <h3>Description</h3>
                        <p>${hike.description}</p>
                    </div>
                    <div>
                        <h3>Directions</h3>
                        <p>${hike.directions}</p>
                    </div>
            </div>`;

    document.getElementById('hikes').parentElement.appendChild(item);
    this.createButton();
    this.hideList();
  }


  hideList(){
    let list = document.getElementById('hikes');
    list.style.display= 'none';
  }

  getHikeByName(name){
    let index = hikeList.findIndex(function(hikes){
      return hikes.name = name;
    });
    return hikeList[index];
  }

  createButton(){
    let buttonHolder = document.createElement("div");
    let button = document.createElement('button');
    buttonHolder.className = "btn-holder";
    button.className = "btn";
    button.textContent = "Go back"  ;

    button.onclick = function(){
      document.getElementById('fullDisplay').remove();
      let list = document.getElementById('hikes');
      list.style.display='block';
      button.remove();
    }
    
    buttonHolder.appendChild(button);
    document.getElementById('hikes').parentElement.appendChild(buttonHolder);
  }
}
