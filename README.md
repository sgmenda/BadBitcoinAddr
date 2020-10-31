# Bad Bitcoin Addr

Simple web extension to detect when you've copied a bitcoin address (or something like looks like one) from a HTTP page.

## How it Works?

- For Bech32, it uses the [reference implementation](https://github.com/sipa/bech3) to check if the copied text can be decoded. This is not perfect, for instance, `bc1rw5uspcuh` (from the [test vectors](https://github.com/bitcoin/bips/blob/master/bip-0173.mediawiki#test-vectors)) has an invalid program length but is still decodable and is detected by the extension.
- For P2PKH and P2SH it is even cruder, it checks if the copied text is the right version (first byte is `1` for P2PKH and `3` for P2SH), can be base58 decoded (using [paulmillr/micro-base58](https://github.com/paulmillr/micro-base58)), and has the right length (25 bytes).

## Thanks

- [bjoern's StackOverflow answer from 2010](https://stackoverflow.com/a/2918684)

## License

Files in src/3rdparty/ have their own licenses (see NOTICE.md). Other files are licensed under the [Mozilla Public License 2.0](http://mozilla.org/MPL/2.0/).