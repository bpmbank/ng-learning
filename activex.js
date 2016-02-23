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