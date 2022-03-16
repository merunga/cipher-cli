const encodeChar = (offset, code) => String.fromCharCode(
  code >= 65 && code <= 65 + 26
    ? (code - 65 + offset) % 26 + 65
    : code >= 97 && code <= 97 + 26
      ? (code - 97 + offset) % 26 + 97
      : code
);

export const encode = (offset, str) => str.split('').reduce(
  (memo, char) => memo + encodeChar(offset % 26, char.charCodeAt()),
  '',
);

export const decode = (offset, str) => encode(26 - (offset % 26), str);
