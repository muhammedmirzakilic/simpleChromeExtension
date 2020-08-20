function injectTheScript() {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var text = document.getElementById("inputElement").value;
    chrome.tabs.executeScript(
      tabs[0].id,
      {
        code: "var text = '" + text + "'",
      },
      function () {
        chrome.tabs.executeScript(tabs[0].id, { file: "content.js" });
      }
    );
  });
}

document
  .getElementById("clickactivity")
  .addEventListener("click", injectTheScript);
