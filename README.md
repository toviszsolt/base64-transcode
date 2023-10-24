# Base64 transcode

Base64 encoding and decoding for both **browser and node**, with **binary file** support.

- [Why this package?](#why-this-package)
- [Compatibility](#compatibility)
- [Installation](#installation)
- [Usage](#usage)
  - [CommonJS](#commonjs)
  - [ES Modules](#es-modules)
  - [IIFE (Immediately Invoked Function Expression)](#iife-immediately-invoked-function-expression)
- [API documentation](#api-documentation)
- [Guidelines](#guidelines)
- [License](#license)

## Why this package?

If you've ever done `base64` coding on the frontend side, I think you've noticed that `atob` and
`btoa` methods are a problem with `utf-8` strings. This package solves the problem, plus, on the
backend side, you can use the same package and syntax with `binary` files as well.

## Compatibility

This package supports `CommonJS`, `ES Modules`, and `IIFE` (Immediately Invoked Function Expression)
formats. You can safely use both `require` and `import` statements in any environment. `TypeScript`
also supported.

## Installation

To get started with `base64-transcode`, you can install it using `yarn` or `npm` or load script in
the browser:

```bash
yarn add base64-transcode
```

```bash
npm i base64-transcode
```

```html
<script src="https://unpkg.com/base64-transcode/dist/browser.js"></script>
```

## Usage

### CommonJS

```javascript
const Base64 = require('base64-transcode');

// Decoding
const decodedData = Base64.decode('SGVsbG8gV29ybGQh');
console.log(decodedData); // "Hello World!"

// Encoding
const encodedData = Base64.encode('Hello World!');
console.log(encodedData); // "SGVsbG8gV29ybGQh"
```

### ES Modules

```javascript
import Base64 from 'base64-transcode';

// Decoding
const decodedData = Base64.decode('SGVsbG8gV29ybGQh');
console.log(decodedData); // "Hello World!"

// Encoding
const encodedData = Base64.encode('Hello World!');
console.log(encodedData); // "SGVsbG8gV29ybGQh"
```

### IIFE (Immediately Invoked Function Expression)

```html
<script src="https://unpkg.com/base64-transcode/dist/browser.js"></script>
<script>
  // Decoding
  const decodedData = Base64.decode('SGVsbG8gV29ybGQh');
  console.log(decodedData); // "Hello World!"

  // Encoding
  const encodedData = Base64.encode('Hello World!');
  console.log(encodedData); // "SGVsbG8gV29ybGQh"
</script>
```

## API documentation

- `decode(base64: string, binary?: boolean): string | Uint8Array`

  Decodes the base64 code. If the `binary` option is `true`, it returns a `Uint8Array`, otherwise a
  string.

- `encode(str: string, binary?: boolean): string`

  Encodes the given string into base64 code. If the `binary` option is `true`, it first converts it
  into a `Uint8Array`.

## Guidelines

To learn about the guidelines, please read the [Code of Conduct](./CODE_OF_CONDUCT.md),
[Contributing](./CONTRIBUTING.md) and [Security Policy](./SECURITY.md) documents.

## License

MIT License @ 2022 [Zsolt Tövis](https://github.com/toviszsolt)

If you found this project interesting, please consider supporting my open source work by
[sponsoring me on GitHub](https://github.com/sponsors/toviszsolt) /
[sponsoring me on PayPal](https://www.paypal.com/paypalme/toviszsolt) /
[give the repo a star](https://github.com/toviszsolt/base64-transcode).
