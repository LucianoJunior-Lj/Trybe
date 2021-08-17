const { encode, decode } = require('./encodeDecode');

describe('testing encode function', () => {
  it('should be a function', () => {
    expect(typeof encode).toBe('function');
  });

  it('should return number-coded vowels', () => {
    expect(encode('a')).toBe('1');
    expect(encode('e')).toBe('2');
    expect(encode('i')).toBe('3');
    expect(encode('o')).toBe('4');
    expect(encode('u')).toBe('5');
  });

  it('should not return encoded consonants', () => {
    expect(encode('bcdfghjklmnpqrstvwxyz')).toBe('bcdfghjklmnpqrstvwxyz');
  });

  it('should return a string the same size as the input', () => {
    expect(encode('aeiou').length).toBe(5);
  });  
});

describe('testing decode function', () => {
  it('should be a function', () => {
    expect(typeof decode).toBe('function');
  });

  it('should return the decoded numbers', () => {
    expect(decode('1')).toBe('a');
    expect(decode('2')).toBe('e');
    expect(decode('3')).toBe('i');
    expect(decode('4')).toBe('o');
    expect(decode('5')).toBe('u');
  });

  it('should not return decoded numbers', () => {
    expect(decode('67890')).toBe('67890');
  });

  it('should return a string the same size as the input', () => {
    expect(decode('12345').length).toBe(5);
  });
});
