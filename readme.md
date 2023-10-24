1. pnpm init
2. pnpm install --dev-save ts-node
3. pnpm install --dev-save typescript
4. pnpm install --dev-save @types/node
5. npx tsc --init --rootDir src --outDir build \
        --esModuleInterop --resolveJsonModule --lib es6 \
        --module commonjs --allowJs true --noImplicitAny true \
        --sourceMap true
6. npm install express
7. pnpm install --save-dev nodemon
8. Agregar al package.json 
    "start": "npx ts-node --esm src/one.ts",
    "build": "rimraf ./build && tsc",
    "dev": "nodemon src/server.ts",
9. Si se quiere usar modules
    package.json
    {
    "type": "module"
    }
    tsconfig.json
    {
        "compilerOptions": {
            "module": "ESNext" // or ES2015, ES2020
        },
        "ts-node": {
            // Tell ts-node CLI to install the --loader automatically, explained below
            "esm": true
        }
    }
    - los imports locales tienen que agregarles el .js aunque sean archivs ts.
        import { SumaValores } from './SumaValores.js';

Livereload
    - https://dev.to/cassiolacerda/automatically-refresh-the-browser-on-node-express-server-changes-x1f680-1k0o
    - A Express project generated by Express Generator with extra features added to reload the browser when any source code changes happen: 
        = https://github.com/cassiolacerda/express-browser-reload
    - https://bytearcher.com/articles/refresh-changes-browser-express-livereload-nodemon/

TYPESCRIPT
    - https://wanago.io/2019/03/25/node-js-typescript-7-creating-a-server-and-receiving-requests/

SWC
    SWC support is built-in via the --swc flag or "swc": true tsconfig option.

    SWC is a TypeScript-compatible transpiler implemented in Rust. This makes it an order of magnitude faster than vanilla transpileOnly.

    To use it, first install @swc/core or @swc/wasm. If using importHelpers, also install @swc/helpers. If target is less than "es2015" and using async/await or generator functions, also install regenerator-runtime.

    npm i -D @swc/core @swc/helpers regenerator-runtime
    Then add the following to your tsconfig.json.

    tsconfig.json
    {
    "ts-node": {
        "swc": true
    }
    }
    SWC uses @swc/helpers instead of tslib. If you have enabled importHelpers, you must also install @swc/helpers.

