function runCode(editorId) {
  const code = document.getElementById(editorId).value;
  const outputId = `${editorId.split('-')[0]}-output`;

  try {
    const result = eval(code);
    document.getElementById(outputId).innerText = result;
  } catch (error) {
    document.getElementById(outputId).innerText = `Error: ${error.message}`;
  }
}
