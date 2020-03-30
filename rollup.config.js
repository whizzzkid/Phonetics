import copy from 'rollup-plugin-copy';

const output = 'dist/extension';

export default [
    {
        input: 'src/contentScript.js',
        output: {
            file: `${output}/cs.js`,
            format: 'umd',
        },
        plugins: [
            copy({
                targets: [
                    { src: 'node_modules/hint.min.css', dest: `${output}/hint.css` },
                ],
            }),
        ],
    },
    {
        input: 'src/background.js',
        output: {
            file: `${output}/bg.js`,
            format: 'umd',
        },
    },
    {
        input: 'src/pageAction.js',
        output: {
            file: `${output}/pa.js`,
            format: 'umd',
        },
        plugins: [
            copy({
                targets: [
                    { src: 'src/manifest.json', dest: `${output}/manifest.json` },
                    { src: 'src/assets/*', dest: `${output}/assets` },
                ],
                flatten: false,
            }),
        ],
    },
];
