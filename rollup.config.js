const commonjs = require('@rollup/plugin-commonjs');
const resolve = require('@rollup/plugin-node-resolve');
const { terser } = require('rollup-plugin-terser');
const copy = require('rollup-plugin-copy');

const dist = './dist';
const config = {
  cjs: { defaultIsModuleExports: true },
  terser: { format: { comments: false } },
  copy: { targets: [{ src: 'src/index.d.ts', dest: dist }] },
};

module.exports = [
  {
    input: 'src/index.js',
    plugins: [commonjs(config.cjs), resolve(), copy(config.copy)],
    output: [
      { file: `${dist}/index.cjs`, format: 'cjs' },
      { file: `${dist}/index.mjs`, format: 'es' },
      { file: `${dist}/browser.js`, format: 'iife', name: 'Base64', plugins: [terser(config.terser)] },
    ],
  },
];
