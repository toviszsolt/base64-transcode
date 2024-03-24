declare module 'base64-transcode' {
  export function encode(input: string | Uint8Array | Buffer): string;
  export function decode(base64: string, toBuffer?: boolean): string | Uint8Array | Buffer;
}
