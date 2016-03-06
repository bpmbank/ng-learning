//simple mvc pattern
function Model(value){this._value=value;this._listeners=[];}
Model.prototype.set = function(value){var self=this;self._value=value;self._listeners.forEach(function(listener){listener.call(self,value);})}
Model.prototype.watch = function(listener){ self._listeners.push(listener);}
Model.prototype.bind = function(node){this.watch(function(value){node.value=value;})}
function Controller(callback){var views = document.querySelectorAll("[bind]");
    views = Array.prototype.slice.call(views,0);
    models={};
    views.forEach(function(view){var modelName = view.getAttribute("bind");
        models[modelName]=models[modelName]||new Model();
        models[modelName].bind(view);
    });
    callback.call(this,models);
}

new Controller(function(models){models.bindmodel.set("12333");
});

var Interface = function(name,methods){
    if(arguments.length!=2){
        throw new Error("Interface constructor called with "+arguments.length+" arguments,but expected exactly 2.")
    }
    this.name = name;
    this.methods=[];
    for(var i= 0,len=methods.length;i<len;i++){
        if(typeof methods[i] !='string'){
            throw new Error("Interface constructor expects method names to be " +"passed in as a string");
        }
        this.methods.push(methods[i]);
    }
};

//Static class method.
Interface.ensureImplements = function(object){
    if (arguments.length<2){
        throw new Error("Function Interface.ensureImplements called with "+arguments.length+ "arguments,but expected at least 2.");
    }
    for(var i= 1,len=arguments.length;i<len;i++){
        var interface=arguments[i];
        if(interface.constructor!==Interface){
            throw new Error("Function Interface.ensureimplements expects arguments"+"two and above to be instances of Interface.");
        }
        for(var j= 0,methodsLen=interface.methods.length;j<methodsLen;j++){


            var method=interface.methods[j];
            if(!object[method]||typeof object[method]!=="function"){
                throw new Error("Function Interface.ensureImplements:object does not implement the "+interface.name+"interface.Method"+method+"was not found");

            }
        }
    }
}

var DynamicMap = new Interface('DynamicMap',['centerOnPoint','zoom','draw']);
function displayRoute(mapInstance){
    Interface.ensureImplements(mapInstance,DynamicMap);
    mapInstance.centerOnPoint(12,34);
    mapInstance.zoom(5);
    mapInstance.draw();
}


var Book = function(newIsbn,newTitle,newAuthor){
    //private attributes
    var isbn,title,author;

    //private method
    function checkIsbn(isbn){

    }

    //privileged methods
    this.getIsbn=function(){
        return isbn;
    }

}
function Person(name){
    this.name=name;
}
function Author(name,books){
    Person.call(this,name);
    this.books=books;
}
Author.prototype=new Person();
Author.prototype.constructor=Author;
Author.prototype.getBooks=function(){
    return this.books;
}

if(window.WebSocket){
    console.log("This browser supports WebSocket");
}
else{
    console.log("This browser doesn't support WebSocket");
}