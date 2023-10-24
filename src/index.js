const decode = (base64, binary = false) => {
  const binString = atob(base64);
  const bytes = Uint8Array.from(binString, (m) => m.codePointAt(0));
  return binary ? bytes : new TextDecoder().decode(bytes);
};

const encode = (str, binary = false) => {
  const bytes = binary ? str : new TextEncoder().encode(str);
  const binString = String.fromCodePoint(...bytes);
  return btoa(binString);
};

module.exports = {
  encode,
  decode,
};
