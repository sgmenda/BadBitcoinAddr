// Adds a hook and sends a message on copy
function onCopy(e) {
  chrome.extension.sendMessage(
    { event: "copy", selection: document.getSelection().toString().trim() }
  );
}
document.addEventListener("copy", onCopy, true);
