function read_excel(){
    var filePath="D:\abcd9.com.cls";
    var sheet_id;//读取第二个表
    var row_start=3;//从第三行开始读取
    var tempStr="";
    try
    {
        var oXL = new ActiveXObject("Excel.Application");
    }
    catch(err){
        alert(err);
        return false;
    }
    var oWB = oXL.Workbooks.open(filePath);
    oWB.worksheets(sheet_id).select();
    var oSheet = oWB.ActiveSheet;
    var colcount = oXL.Worksheets(sheet_id).UsedRange.Cells.Rows.Count;

    for(var i=row_start;i<=colcount;i++){
        if(typeof(oSheet.Cells(i,8).value)=='date'){
            d=new Date(oSheet.cells(i,8).value);
            temp_time= d.getFullYear()+"-"+(d.getMonth()+1)+"-"+ d.getDate();
        }
        else
            temp_time = $.trim(oSheet.Cells(i,7).value.toString());
        tempStr+=($.trim(oSheet.Cells(i,2).value)+" "+ $.trim(oSheet.Cells(i,4).value)+" "+ $.trim(oSheet.Cells(i,6).value.toSTring())+" "+temp_time+"\n");
        //读取2,4,6,8列内容
    }
    return tempStr;
    oXL.Quit();
    CollectGarbage();
}
function OpenFile()
{
try
{
FileDialog.CancelError=true;
FileDialog.Filter="Word模板|*.doc|Word模板|*.dot";
FileDialog.ShowOpen();
var WordApp=new ActiveXObject("Word.Application");
WordApp.Application.Visible=false;
var Doc=WordApp.Documents.Open(FileDialog.filename);
Doc.Activate();
Doc.Parent.Options.InsertedTextColor=4;
Doc.Parent.Options.InsertedTextMark=2;
Doc.Parent.Options.DeletedTextColor=4;
Doc.Parent.Options.DeletedTextMark=1;
Doc.TrackRevisions=true;
Doc.PrintRevisions=true;
Doc.ShowRevisions=true;
Doc.Application.UserName="";
var Range=Doc.Range();
Range.Select();
var Selection=WordApp.Selection;
Selection.Copy();
App.focus();
document.execCommand("Paste");
App.focus();
WordApp.DisplayAlerts=false;
Doc.Close();
WordApp.DisplayAlerts=true;
WordApp.Quit();
}
catch(e){}
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

       $("#filterName").keyup(function(){
          $("table tbody tr")
                    .hide()
                    .filter(":contains('"+( $(this).val() )+"')")
                    .show();
       }).keyup();




































}
function html2word(Area){
    var oWD = new ActiveXObject("Word.Application");
    var oDC = oWD.Documents.ADD("",0,1);
    var oRange = oDC.Range(0,1);
    var sel = document.body.createTextRange();
    sel.moveToElementText(document.getElementById(Area));
    sel.select();
    sel.execCommand("Copy");
    oRange.Paste();
    oWd.Application.Visible=true;
}