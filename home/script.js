function runCode() {
    const htmlCode = document.getElementById('htmlCode').value;
    const previewFrame = document.getElementById('preview');
    const previewDocument = previewFrame.contentDocument || previewFrame.contentWindow.document;

    previewDocument.open();
    previewDocument.write(htmlCode);
    previewDocument.close();
}
