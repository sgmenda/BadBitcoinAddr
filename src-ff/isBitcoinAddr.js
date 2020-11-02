function isP2PKH(s) {
  if (s[0] !== "1") return false; /* version check */
  var decoded = base58Decode(s);
  if (decoded === null) return false;
  if (decoded.length !== 25) return false;
  return true;
}
function isP2SH(s) {
  if (s[0] !== "3") return false; /* version check */
  var decoded = base58Decode(s);
  if (decoded === null) return false;
  if (decoded.length !== 25) return false;
  return true;
}
function isBech32(s) {
  return null !== decode(s);
}

function isBitcoinAddr(s) {
  return isP2PKH(s) || isP2SH(s) || isBech32(s);
}
