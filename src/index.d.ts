declare module 'base64-transcode' {
  export function decode(base64: string, binary?: boolean): string | Uint8Array;
  export function encode(str: string, binary?: boolean): string;
}
