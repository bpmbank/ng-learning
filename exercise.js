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

var mimetype = navigator.mimeTypes["application/npclipboard"];//这里面的key就是你的插件的type
if(mimetype)
{
    var plugin = mimetype.enabledPlugin;

    if(plugin)
    {
        document.writeln("已经安装");
    }
}
else
{
    document.writeln("还未安装");
}

var url="http://www.yourtarget.com";
var param = "name=david&age=30";
var obj = new ActiveXObject("WinHttp.WinHttpRequest.5.1");
obj.Open("POST",url,false);
obj.Option(4)=13056;
obj.Option(6)=false;
obj.setRequestHeader("Content-Type","application/x-www-form-urlencoded")
obj.setRequestHeader("Referer","http://www.baidu.com");
obj.Send(param);
Wscript.Echo(obj.responseText);
//cscript.exe xx.js

//封装成远程访问的函数

function RemoteCall(method, url, param, header){

    var obj = new ActiveXObject("WinHttp.WinHttpRequest.5.1");

    obj.Open(method||"GET", url, false);

    obj.Option(4) = 13056;

    obj.Option(6) = false;

    if(method=="POST"){

        obj.setRequestHeader("Content-Type","application/x-www-form-urlencoded");

    }

    if(header){

        for(var key in header){

            if(key=="Cookie"){//根据 MSDN 的建议，设置Cookie前，先设置一个无用的值

                obj.setRequestHeader("Cookie", "string");

            }

            obj.setRequestHeader(key, header[key]);

        }

    }

    obj.Send(param);

    return obj;

}

//第一次远程访问博客园的登录入口

var url = "http://passport.cnblogs.com/login.aspx";

var objFirst = RemoteCall("GET", url, null);



//取得 viewstate 与 eventvalidation

var viewstate = objFirst.responseText.match(/id="__VIEWSTATE" value="(.*?)" \/>/)[1];

var eventvalidation = objFirst.responseText.match(/id="__EVENTVALIDATION" value="(.*?)" \/>/)[1];



//输入自己的账户与密码

var username = "";

var password = "";

var param = ""

    + "__VIEWSTATE="+encodeURIComponent(viewstate)

    + "&__EVENTVALIDATION="+encodeURIComponent(eventvalidation)

    + "&tbUserName="+username

    + "&tbPassword="+password

    + "&btnLogin="+encodeURIComponent("登  录");



var objSecond = RemoteCall("POST", url, param);



//登录成功后服务器执行 Response.Redirect 跳转，即向客户端发送了 302 状态代码

WScript.Echo(objSecond.status); //302即登录成功， 如果是200，则登录失败，页面没有跳转



//带上登录成功后的cookie，再次访问其首页

var json = {"Cookie": objSecond.getResponseHeader("Set-Cookie")};

var objThird = RemoteCall("GET", "http://www.cnblogs.com", null, json);

WScript.Echo(objThird.responseText);

//refer learning
function referURL(url){
    var isIe = (document.all)?true:false;
    if(isIe){
        var linka = document.createElement('a');
        linka.href=url;
        document.body.appendChild(linka);
        linka.click();
    }
    else window.location=url;
}
var url="http://www.jb51.net";
referURL(url);

//超链接:
//<a href="" onclick="">
//链接的onclick事件先执行,其次是href属性下的动作,让href属性下的动作不执行,onclick必须得到一个false的返回值
//如果页面过长有滚动条,且希望通过链接的onclick事件执行操作.
// 应将它的href属性设为javascript:void(0);,而不要是#,这可以防止不必要的页面跳动
//尽量不要使用javascript协议作为A的href属性,这样不仅会导致不必要的出发window.onbeforeunload事件,在IE里面更会使git动画图片停止播放

//链接的target属性与iframe结合





