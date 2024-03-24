// @ts-ignore
const Base64 = require('../src/index');
const fs = require('fs');

describe('Base64.encode', () => {
  it('encode simple string', () => {
    expect(Base64.encode('hello')).toBe('aGVsbG8=');
  });

  it('encode utf8 string', () => {
    expect(Base64.encode('你好')).toBe('5L2g5aW9');
  });

  it('encode file content', () => {
    const fileContent = fs.readFileSync('test/assets/sample.jpg');
    expect(Base64.encode(fileContent)).toBe(fileContent.toString('base64'));

    const compareContent = fs.readFileSync('test/assets/sample.jpg.base64');
    expect(Base64.encode(fileContent)).toBe(compareContent.toString());
  });
});

describe('Base64.decode', () => {
  it('decode simple string', () => {
    expect(Base64.decode('aGVsbG8=')).toBe('hello');
  });

  it('decode utf8 string', () => {
    expect(Base64.decode('5L2g5aW9')).toBe('你好');
  });

  it('decode file content', () => {
    const BufferOriginal = Buffer;
    const bufferSampleJpg = fs.readFileSync('test/assets/sample.jpg');
    const base64SampleJpg = bufferSampleJpg.toString('base64');
    expect(Base64.decode(base64SampleJpg)).toBe(bufferSampleJpg.toString());
    expect(Base64.decode(base64SampleJpg, true)).toEqual(bufferSampleJpg);

    const base64Content = fs.readFileSync('test/assets/sample.jpg.base64').toString();
    expect(Base64.decode(base64Content, true)).toEqual(bufferSampleJpg);

    fs.writeFileSync('test/assets/sample-decoded.jpg', Base64.decode(base64Content, true));
    expect(fs.readFileSync('test/assets/sample-decoded.jpg')).toEqual(bufferSampleJpg);

    Buffer = undefined;
    const ArrayBuffer = new Uint8Array(bufferSampleJpg);
    expect(Base64.decode(base64SampleJpg, true)).toEqual(ArrayBuffer);
    Buffer = BufferOriginal;
  });
});
