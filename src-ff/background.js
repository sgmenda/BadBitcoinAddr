browser.runtime.onMessage.addListener(function (request, sender, sendMessage) {
  if (request.event == "copy") {
    if (isBitcoinAddr(request.selection)) {
      var warning =
        "You seem to have copied a bitcoin address (" +
        request.selection +
        ") from an insecure (HTTP) webpage.";
      sendMessage({ alert: warning });
    }
  }
});
