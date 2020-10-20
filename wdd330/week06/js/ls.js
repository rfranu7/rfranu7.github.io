export class TaskHandler {
    tasklist;

    constructor(){
        // gets list or creates an empty one if none is found
        this.tasklist = JSON.parse(localStorage.getItem("tasklist") || "[]");
    }

    saveTask(item) {
        this.tasklist.push(item);
        localStorage.setItem("tasklist", JSON.stringify(this.tasklist));
        return this.updatedList();
    }

    removeTask(id) {
        var itemIndex;
        for (var i=0; i < this.tasklist.length; i++) {
            if (this.tasklist[i].id == id) {
                itemIndex = i;
            }
        }
        this.tasklist.splice(itemIndex, 1);
        localStorage.setItem("tasklist", JSON.stringify(this.tasklist));
        return this.updatedList();
    }

    completeTask(id) {
        for (var i=0; i < this.tasklist.length; i++) {
            if (this.tasklist[i].id == id) {
                this.tasklist[i].completed = true;
            }
        }
        localStorage.setItem("tasklist", JSON.stringify(this.tasklist));
        return this.updatedList();
    }

    uncompleteTask(id) {
        for (var i=0; i < this.tasklist.length; i++) {
            if (this.tasklist[i].id == id) {
                this.tasklist[i].completed = false;
            }
        }
        localStorage.setItem("tasklist", JSON.stringify(this.tasklist));
        return this.updatedList();
    }

    updatedList(){
        return this.tasklist = JSON.parse(localStorage.getItem("tasklist"));
    }

    getTaskList() {
        return this.tasklist;
    }

    countList() {
        var count = 0;
        for (var i=0; i < this.tasklist.length; i++) {
            if (!(this.tasklist[i].completed)) {
                count++;
            }
        }
        return count;
    }

    filterList(filter) {
        var filter = filter || "All";
        var filteredList;
        if(filter == "Completed"){
            filteredList = this.tasklist.filter(task => task.completed == true);
        } else if(filter == "Active"){
            filteredList = this.tasklist.filter(task => task.completed == false);
        } else {
            filteredList = this.tasklist;
        }
        return filteredList;
    }

    clear() {
        localStorage.clear();
    }

}