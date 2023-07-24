import typescript from 'rollup-plugin-typescript2';
import { nodeResolve } from '@rollup/plugin-node-resolve';

const outputDir = 'dist';

export default {
    input: 'src/index.ts',
    output: [
        {
            dir: outputDir,
            format: 'cjs', // CommonJS format for the Node.js environment
            entryFileNames: '[name].js',
            preserveModules: true,
        },
        {
            dir: outputDir,
            format: 'es', // ECMAScript module format
            entryFileNames: '[name].mjs',
            preserveModules: true,
        },
    ],
    plugins: [
        nodeResolve(),
        typescript({
            tsconfig: 'tsconfig.esm.json',
            outDir: outputDir,
        }),
    ],
};
