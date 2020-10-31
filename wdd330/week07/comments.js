export default class Comments {

    commentList = [];

    constructor() {
        // Sample Comments if there is no comment on the local storage yet.
        var comments = [
            {
                name: "Bechler Falls",
                date: new Date(),
                content: "I love this place."
            },
            {
                name: "Bechler Falls",
                date: new Date(),
                content: "This is amazing!"
            },
            {
                name: "Denanda Falls",
                date: new Date(),
                content: "Different name, same place."
            },
            {
                name: "Teton Canyon",
                date: new Date(),
                content: "Different name, same place as well"
            }
        ];

        this.commentList = JSON.parse(localStorage.getItem("comment")) || comments;
    }

    getAllComments(){
        return this.commentList;
    }

    renderCommentList(list, parent){
        for(var i=0; i<list.length; i++){
            const div = document.createElement("div");
            div.className = "comments";
            div.innerHTML = "<h3>"+list[i].name+"</h3>"+
                            "<p>"+list[i].date+"</p>"+
                            "<p>"+list[i].content+"</p>";
            parent.appendChild(div);
        }
        
    }

    filterCommentsByName(nameFilter){
        return this.commentList.filter(comment => comment.name == nameFilter);
    }

    addComment(comment){
        this.commentList.push(comment);
        this.saveComment();
        console.log(JSON.parse(localStorage.getItem("comment")));
    }

    saveComment(){
        localStorage.setItem("comment", JSON.stringify(this.commentList));
    }

    clearComments() {
        localStorage.clear("comment");
    }

}