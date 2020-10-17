import HikeList from './hike-list.js';
import Hikes from './hiking-start.js'

const hikes = new Hikes();

window.addEventListener("load", () => {
    hikes.showHikeList();
  });

let ul = document.getElementById('hikes');

ul.addEventListener("click", function(e){
  console.log(e.target.tagName);

  if(e.target.tagName == 'H2'){
    hikes.showDescription(e.target.parentNode.childNodes[1].textContent);
  }
  else if(e.target.tagName == 'IMG'){
    hikes.showDescription(e.target.parentNode.parentNode.childNodes[1].textContent);
  }
  else{
    hikes.showDescription(e.target.parentNode.parentNode.parentNode.childNodes[1].textContent);
  }
});
      


