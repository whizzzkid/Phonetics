import cleaner from 'rollup-plugin-cleaner';
import copy from 'rollup-plugin-copy';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

const output = 'dist/extension';
const defaultPlugins = [commonjs(), resolve()];

export default [
    {
        input: 'src/pageAction.js',
        output: {
            file: `${output}/pa.js`,
            format: 'iife',
        },
        plugins: [
            ...defaultPlugins,
            cleaner({
                targets: ['./dist/'],
            }),
            copy({
                targets: [{
                    src: ['node_modules/hint.min.css', 'src/manifest.json', 'src/assets'],
                    dest: `${output}/`,
                }],
                flatten: false,
            }),
        ],
    },
    {
        input: 'src/contentScript.js',
        output: {
            file: `${output}/cs.js`,
            format: 'iife',
        },
        plugins: [ ...defaultPlugins ],
    },
    {
        input: 'src/background.js',
        output: {
            file: `${output}/bg.js`,
            format: 'iife',
        },
        plugins: [ ...defaultPlugins ],
    },
];
