/**
 * Encode a String or ArrayBuffer to Base64.
 *
 * @example
 * const encoded = Base64.encode('Hello World!');
 * @param {string|Uint8Array|Buffer} input String or ArrayBuffer to be encoded
 * @returns {string} Base64 encoded string
 */
const encode = (input) => {
  const bytes = ArrayBuffer.isView(input) ? input : new TextEncoder().encode(input);
  const binString = String.fromCodePoint(...bytes);
  return btoa(binString);
};

/**
 * Decode Base64 to String or ArrayBuffer
 *
 * @example
 * const decoded = Base64.decode('SGVsbG8gV29ybGQh!');
 * const decoded = Base64.decode('SGVsbG8gV29ybGQh!', true);
 * @param {string} base64 Base64 string to be decoded
 * @param {boolean} toBuffer Return ArrayBuffer instead of String. Default: false.
 * @returns {string|Uint8Array|Buffer} Encoded string or ArrayBuffer
 */
const decode = (base64, toBuffer = false) => {
  const binString = atob(base64);
  const bytes = Uint8Array.from(binString, (m) => m.codePointAt(0));
  return toBuffer ? (typeof Buffer === 'function' ? Buffer.from(bytes) : bytes) : new TextDecoder().decode(bytes);
};

module.exports = { encode, decode };
