const encode = (input) => {
  const bytes = ArrayBuffer.isView(input)
    ? new Uint8Array(input.buffer, input.byteOffset, input.byteLength)
    : new TextEncoder().encode(input);
  const binString = String.fromCodePoint(...bytes);
  return btoa(binString);
};

const decode = (base64, toBuffer = false) => {
  const binString = atob(base64);
  const bytes = Uint8Array.from(binString, (m) => m.codePointAt(0));
  return toBuffer ? (typeof Buffer === 'function' ? Buffer.from(bytes) : bytes) : new TextDecoder().decode(bytes);
};

const Base64 = { encode, decode };

module.exports = Base64;
