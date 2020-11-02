function handleResponse(message) {
  if (message.alert) {
    alert(message.alert);
  }
}

function handleError(error) {
  console.log(`Error: ${error}`);
}

// Adds a hook and sends a message on copy
function onCopy(e) {
  var sending = browser.runtime.sendMessage({
    event: "copy",
    selection: document.getSelection().toString().trim(),
  });
  sending.then(handleResponse, handleError);
}
document.addEventListener("copy", onCopy);
