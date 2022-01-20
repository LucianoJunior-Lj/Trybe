function checkCode(string, code) {
  for (let index = 0; index < string.length; index += 1) {
    if (code[string[index]] !== undefined) {
      string = string.replace(string[index], code[string[index]]);
    }
  }
  return string;
}

function encode(string) {
  let code = {
    a: '1',
    e: '2',
    i: '3',
    o: '4',
    u: '5',
  };

  return checkCode(string, code);
}

function decode(string) {
  let code = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };

  return checkCode(string, code);
}

module.exports = { encode, decode };