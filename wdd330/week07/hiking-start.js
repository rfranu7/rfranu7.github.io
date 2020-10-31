
import HikeList from './hike-list.js';
import Comments from './comments.js';

const imgBasePath = "//byui-cit.github.io/cit261/examples/";

const list = new HikeList();
const hikeList = list.list;

const comments = new Comments();
const commentList = comments.getAllComments();

export default class Hikes {
  
  /* Shows all hikes in the main screen */
  showHikeList() {
    const hikeListElement = document.getElementById("hikes");
    const commentParent = document.getElementById("comments");
    hikeListElement.innerHTML = "";
    this.renderHikeList(hikeList, hikeListElement);
    comments.renderCommentList(commentList, commentParent)
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
  /****************************************/


  /* Shows the hike that was clicked on in the main screen */
  showDescription(name){
    
    this.hideList();
    let hike = this.getHikeByName(name);
    let item = document.getElementById("fullDisplay");
    const commentList = comments.filterCommentsByName(name);

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

    const commentParent = document.createElement("div");
    commentParent.id = "filteredComment";
    commentParent.innerHTML = "<h1>Comments</h1>"
    const commentInput = document.createElement("textarea");
    commentInput.id = "commentInput";
    commentParent.appendChild(commentInput);
    this.createCommentButton(name, commentParent);
    
    comments.renderCommentList(commentList, commentParent)

    document.getElementById('hikes').parentElement.appendChild(item);
    document.getElementById('hikes').parentElement.appendChild(commentParent);
    this.createButton();
  }

  // HELPERS
  hideList(){
    let list = document.getElementById('hikes');
    let title = document.getElementById("commentTitle");

    const renderedComments = document.querySelectorAll(".comments");
    renderedComments.forEach(element => {
      element.parentNode.removeChild(element);
    });
    
    list.style.display= 'none';
    title.style.display= 'none';
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
      document.getElementById('filteredComment').remove();
      let list = document.getElementById('hikes');
      let title = document.getElementById("commentTitle");
      
      let commentParent = document.getElementById("comments");
      const commentList = comments.getAllComments();
      comments.renderCommentList(commentList, commentParent)

      list.style.display='block';
      title.style.display='block';
      button.remove();
    }
    
    buttonHolder.appendChild(button);
    document.getElementById('hikes').parentElement.appendChild(buttonHolder);
  }

  createCommentButton(hikeName, parent){
    let buttonHolder = document.createElement("div");
    let button = document.createElement('button');
    buttonHolder.className = "btn-holder";
    button.className = "btn";
    button.textContent = "Add Comment"  ;

    button.onclick = function(){
      const commentInput = document.getElementById("commentInput");
      // Create comment object
      const commentObject = {
        name: hikeName,
        date: new Date(),
        content: commentInput.value,
      }
      comments.addComment(commentObject);
      const renderedComments = document.querySelectorAll(".comments");
      renderedComments.forEach(element => {
        element.parentNode.removeChild(element);
      });

      const commentList = comments.filterCommentsByName(hikeName);
      comments.renderCommentList(commentList, parent);
    }
    
    buttonHolder.appendChild(button);
    parent.appendChild(buttonHolder);
  }
  /****************************************/
}
