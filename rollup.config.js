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
            format: 'es',
        },
        plugins: [
            ...defaultPlugins,
            copy({
                targets: [{
                    src: [
                        'node_modules/hint.min.css',
                        'src/manifest.json',
                        'src/assets',
                        'src/**/*.html'
                    ],
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
            format: 'es',
        },
        plugins: [...defaultPlugins],
    },
    {
        input: 'src/background.js',
        output: {
            file: `${output}/bg.js`,
            format: 'es',
        },
        plugins: [ ...defaultPlugins ],
    },
];
