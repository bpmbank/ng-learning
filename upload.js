var typeVerify = function (file) {

    var filereader;

    var token = true;

    // ����һ��FileReader
    filereader = new FileReader();

    filereader.onload = verify;

    // ���첽��ʽ��fileת��ArrayBuffer��ͬ����ʽֻ����Worker�߳��вſ��ã�
    filereader.readAsArrayBuffer(file.slice(0, 4));

    function verify(e) {

        var buffer = e.target.result;

        // ����һ��DataView�����������ֽڴ�����
        var dataView = new DataView(buffer);

        // false�Դ�˴����ȡ2�ֽڣ�trueΪС�˴���
        var fh = dataView.getUint16(0, false);

        // ����õ���ֵ����fileHeader��
        if (fileHeader.indexOf(fh) == -1) token = false;

        return token;

    }
};
var asyncUpload = function (binfile) {

    var xhr = new XMLHttpRequest();

    // ע����¼������ڻ�ȡ�ϴ�����
    xhr.upload.onprogress = updateProcess;

    // �ϴ��ɹ�
    xhr.upload.onload = success;

    // �ϴ����������۳ɰܣ�
    xhr.upload.onloadend = end;

    xhr.upload.onerror = error;

    // ���������ؽ��
    xhr.onreadystatechange = watchState;

    xhr.open('POST', '/upload');

    // ������Ӧ����
    xhr.responseType = 'blob';

    xhr.send(binfile);
};
