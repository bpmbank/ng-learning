var typeVerify = function (file) {

    var filereader;

    var token = true;

    // 创建一个FileReader
    filereader = new FileReader();

    filereader.onload = verify;

    // 以异步方式将file转成ArrayBuffer（同步方式只有在Worker线程中才可用）
    filereader.readAsArrayBuffer(file.slice(0, 4));

    function verify(e) {

        var buffer = e.target.result;

        // 创建一个DataView对象用来按字节处理结果
        var dataView = new DataView(buffer);

        // false以大端次序读取2字节（true为小端次序）
        var fh = dataView.getUint16(0, false);

        // 如果得到的值不在fileHeader里
        if (fileHeader.indexOf(fh) == -1) token = false;

        return token;

    }
};
var asyncUpload = function (binfile) {

    var xhr = new XMLHttpRequest();

    // 注册该事件可用于获取上传进度
    xhr.upload.onprogress = updateProcess;

    // 上传成功
    xhr.upload.onload = success;

    // 上传结束（无论成败）
    xhr.upload.onloadend = end;

    xhr.upload.onerror = error;

    // 服务器返回结果
    xhr.onreadystatechange = watchState;

    xhr.open('POST', '/upload');

    // 设置响应类型
    xhr.responseType = 'blob';

    xhr.send(binfile);
};
