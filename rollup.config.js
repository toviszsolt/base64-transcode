const commonjs = require('@rollup/plugin-commonjs');
const { terser } = require('rollup-plugin-terser');
const copy = require('rollup-plugin-copy');

const buildFolder = './dist';
const configTerser = { format: { comments: false } };
const configCopy = { targets: [{ src: 'src/index.d.ts', dest: buildFolder }] };
const plugins = [commonjs(), terser(configTerser), copy(configCopy)];

module.exports = [
  {
    input: 'src/index.js',
    output: [
      { name: 'index-mjs', file: `${buildFolder}/index.js`, format: 'es' },
      { name: 'index-cjs', file: `${buildFolder}/index.cjs`, format: 'cjs' },
      { name: 'Base64', file: `${buildFolder}/browser.js`, format: 'iife' },
    ],
    plugins,
  },
];
