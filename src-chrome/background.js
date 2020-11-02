chrome.extension.onMessage.addListener(function (request, sender, sendMessage) {
  if (request.event == "copy") {
    if (isBitcoinAddr(request.selection)) {
      alert(
        "You seem to have copied a bitcoin address (" +
          request.selection +
          ") from an insecure (HTTP) webpage."
      );
    }
  }
  sendMessage({});
});
