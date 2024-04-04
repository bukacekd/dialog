import esbuild from 'esbuild';
import {readFile, writeFile} from 'node:fs/promises';

const OptimizePlugin = {
    name: 'OptimizePlugin',
    setup: build => {
        build.onEnd(async () => {
            let content = await readFile(build.initialOptions.outfile, 'utf8');

            if (build.initialOptions.format === 'iife') {
                content = content.replace(
                    new RegExp(`([^.]+\\.${build.initialOptions.globalName.split('.').pop()}=)(.+);`),
                    `$1Object.assign(${build.initialOptions.globalName}??{},$2);`
                );
            }

            await writeFile(build.initialOptions.outfile, content);
        });
    }
};

await esbuild.build({
    entryPoints: ['src/index.js'],
    format: 'esm',
    logLevel: 'info',
    metafile: true,
    minify: true,
    outfile: 'dist/index.mjs',
    plugins: [OptimizePlugin],
});

await esbuild.build({
    entryPoints: ['src/index.js'],
    format: 'iife',
    globalName: 'js4y.components',
    logLevel: 'info',
    metafile: true,
    minify: true,
    outfile: 'dist/index.js',
    plugins: [OptimizePlugin],
});
