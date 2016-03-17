(function(){
    var moduleMap={};
    window.thin = {
        define:function(name,dependencies,factory){
            if(!moduleMap[name]){
                var module={
                    name:name,
                    dependecies:dependencies,
                    factory:factory
                };
                moduleMap[name]=module;
            }
            return moduleMap[name];
        }
    };
})();
this.define("A",[],function(){

});
this.defnine("B",["A"],function(A){
    var a = new A();
});


