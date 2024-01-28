// scripts.js
function runCode() {
    const code = document.getElementById('code-editor').value;
    const outputFrame = document.getElementById('output-frame');
    const frameDocument = outputFrame.contentDocument || outputFrame.contentWindow.document;
    frameDocument.open();
    frameDocument.write(code);
    frameDocument.close();
}
