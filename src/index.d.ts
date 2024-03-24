declare module 'base64-transcode' {
  export interface Base64Module {
    /**
     * Encode a String or ArrayBuffer to Base64.
     *
     * @example
     * const encoded = Base64.encode('Hello World!');
     * @param {string|Uint8Array|Buffer} input String or ArrayBuffer to be encoded
     * @returns {string} Base64 encoded string
     */
    encode(input: string | Uint8Array | Buffer): string;

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
    decode(base64: string, toBuffer?: boolean): string | Uint8Array | Buffer;
  }

  /**
   * @module Base64
   * @description Encode and Decode Base64.
   * @example
   * const Base64 = require('base64-transcode');
   * import Base64 from 'base64-transcode';
   */
  const Base64: Base64Module;

  export { Base64 as default };
}
