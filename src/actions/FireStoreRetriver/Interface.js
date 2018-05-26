// get the forestore database reference
import db from "../../firebase/firebase"


/**
 * 
 * the projects object is made using composite design pattern 
 * and the decorator pattern is used to extend its feature set
 * 
 * 
 * Other than the projects there contains resouce findings that are to be displayed 
 * once they are found of any interest of the company
 * 
 * project status maintainaince is
 * -------------------------------
 *   -2   if the project is dead and the half life is complete
 * 
 *   -1   if the project is dead or is currently underplanning phase 
 *    
 *   0    if it is in deployment (and or currently in development)
 * 
 *   1    if it is in development and is not  yet released
 * 
 *   2    if the project is in development , could not be completed 
 *        as resource is not available
 * 
 * 
 */
var Project = function (name) {
    this.children = [];
    this.name = name;
    this.pages = 0 // store the reference number of the document that is being populated

}

class DecoratedCurrentProject {
    constructor(Project, extras) {
        this.Project = Project;
        this.extra = extras;
        this.name = Project.name; // ensures interface stays the same
        this.say = function () {
            log.add("Decorated Previously existing Project : " + this.name +
            " , extras :" ,this.extra);
        };
    }
}

Project.prototype = {
    add: function (child) {
        this.children.push(child);
    },

    remove: function (child) {
        var length = this.children.length;
        for (var i = 0; i < length; i++) {
            if (this.children[i] === child) {
                this.children.splice(i, 1);
                return;
            }
        }
    },

    getChild: function (i) {
        return this.children[i];
    },

    hasChildren: function () {
        return this.children.length > 0;
    },

    getPageInfo: function(){
        return 
    }
}

// recursively traverse a (sub)tree

function traverse(indent, node) {
    log.add(Array(indent++).join("--") + node.name);

    for (var i = 0, len = node.children.length; i < len; i++) {
        traverse(indent, node.getChild(i));
    }
}

// logging helper

var log = (function () {
    var log = "";

    return {
        add: function (msg) { log += msg + "\n"; },
        show: function () { alert(log); log = ""; }
    }
})();

function addProjectToLocalTree(projectLog) {
    var tree = new Project("root");
    // -- make a new node when a new tree is to be started
    var newProject;
    if (projectLog.status === 0) {
        //the project is on deplayment phase
        newProject= new Project(projectLog.name);
        // modify the new project with the extras
        var decorated= new DecoratedCurrentProject(newProject, projectLog);
        tree.add(decorated); 
    } 
    if(status > 0 ) {

    }
    if(status < 0 ){

    }
    // tree.add(left);
    // tree.add(right);
    // tree.remove(right);  // note: remove
    // tree.add(right);

    // left.add(leftleft);
    // left.add(leftright);

    // right.add(rightleft);
    // right.add(rightright);

    traverse(1, tree);

    log.show();
}
//--------------------------------------------
/**
 * 
 * in this portion the newly found suspected articles as projects  
 */
var Findings = function (name) {
    this.children = [];
    this.name = name;
}

/**
 * 
 * this immemory db is to be filled with the databasics from firestore
 * 
 * using the iterator pattern
 * 
 */

var Iterator = function(items) {
    this.index = 0;
    this.items = items;
}
 
Iterator.prototype = {
    first: function() {
        this.reset();
        return this.next();
    },
    next: function() {
        return this.items[this.index++];
    },
    hasNext: function() {
        return this.index <= this.items.length;
    },
    reset: function() {
        this.index = 0;
    },
    each: function(callback) {
        for (var item = this.first(); this.hasNext(); item = this.next()) {
            callback(item);
        }
    }
}
function IterateOverCollection() {
    //get the list of projects in the system
    var ProjSnapshot = db.collection("/labs/computation/demonstrational").get();
    ProjSnapshot.forEach(doc => {
        console.log("Doc id: " + doc.id);
        addProjectToLocalTree(doc.data())
        
    });
    var iter = new Iterator(items);
 
    // using for loop
 
    for (var item = iter.first(); iter.hasNext(); item = iter.next()) {
        log.add(item);
    }
    log.add("");
 
    // using Iterator's each method
 
    iter.each(function(item) {
        log.add(item);
    });
 
    log.show();
}