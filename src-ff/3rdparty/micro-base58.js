// Adapted from https://github.com/paulmillr/micro-base58/

// MIT License (c) 2020, Paul Miller (https://paulmillr.com).
const alphabet = {};
alphabet.ipfs = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
alphabet.btc = alphabet.ipfs;

function base58Decode(output, type = 'ipfs') {
  if (output.length === 0) return new Uint8Array([]);
  const letters = alphabet[type];
  const bytes = [0];
  for (let i = 0; i < output.length; i++) {
    const char = output[i];
    const value = letters.indexOf(char);
    if (value === undefined) {
        return null;
    }
    for (let j = 0; j < bytes.length; j++) {
      bytes[j] *= 58;
    }
    bytes[0] += value;
    let carry = 0;
    for (let j = 0; j < bytes.length; j++) {
      bytes[j] += carry;
      carry = bytes[j] >> 8;
      bytes[j] &= 0xff;
    }
    while (carry > 0) {
      bytes.push(carry & 0xff);
      carry >>= 8;
    }
  }
  for (let i = 0; i < output.length && output[i] === '1'; i++) {
    bytes.push(0);
  }
  return new Uint8Array(bytes.reverse());
}