const commonjs = require('@rollup/plugin-commonjs');
const { terser } = require('rollup-plugin-terser');
const copy = require('rollup-plugin-copy');

const dist = './dist';
const config = {
  terser: { format: { comments: false } },
  copy: { targets: [{ src: 'src/index.d.ts', dest: dist }] },
};
const plugins = [commonjs(), copy(config.copy)];

module.exports = [
  {
    input: 'src/index.js',
    output: [
      { file: `${dist}/index.js`, format: 'es' },
      { file: `${dist}/index.cjs`, format: 'cjs' },
      { file: `${dist}/browser.js`, format: 'iife', name: 'Base64', plugins: [terser(config.terser)] },
    ],
    plugins,
  },
];
