# NodeTsExpress
 ___
project setting
```
project
├─dist (ts complile)
│ └─app.js
└─src (your typescript source code)
  └─app.ts

```
typescript setting
```
tsc --init
```

edit `tsconfig.json`
```json5
{
  "compilerOptions": {
    /* Visit https://aka.ms/tsconfig.json to read more about this file */
    /* Language and Environment */
    "target": "es6",                                     /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */

    /* Modules */
    "module": "commonjs",                                /* Specify what module code is generated. */
    // "rootDir": "./",                                  /* Specify the root folder within your source files. */
    "rootDirs": [
      "src/*"
    ],                                   /* Allow multiple folders to be treated as one when resolving modules. */
     "moduleResolution": "node",                       /* Specify how TypeScript looks up a file from a given module specifier. */


    //"outFile": "*/",                                  /* Specify a file that bundles all outputs into one JavaScript file. If `declaration` is true, also designates a file that bundles all .d.ts output. */
    "outDir": "./dist",                                   /* Specify an output folder for all emitted files. */
    "esModuleInterop": false,                             /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables `allowSyntheticDefaultImports` for type compatibility. */
    // "preserveSymlinks": true,                         /* Disable resolving symlinks to their realpath. This correlates to the same flag in node. */
    "forceConsistentCasingInFileNames": true,            /* Ensure that casing is correct in imports. */

    /* Type Checking */
    "strict": true,                                      /* Enable all strict type-checking options. */
    "skipLibCheck": false                                 /* Skip type checking all .d.ts files. */
  },
}

```
npm or yarn
```
npm init 
yarn --init 
```
edit `package.json`
```json5
{
  // skip code
  "scripts": {
    "start": "node dist/app.js",
    "dev" : "nodemon src/app.ts",
    "build": "tsc -p ."
  },
}
```
install express  ts package  
npm
```
npm i express
npm i - D @types/express @types/node ts-node typescript nodemon
```
yarn
```
yarn add express
yarn add   @types/express @types/node ts-node typescript nodemon --dev
```
write code `src/app.ts`
```typescript
import * as express from "express";
import {Application,Request,Response,NextFunction} from "express";

const app:express.Application = express();

app.set("port",process.env.PORT||8080);

app.get("/",(req:Request, res:Response, next:NextFunction) =>{
    res.send("<h1>Hello world</h1>")
});

app.listen(app.get("port"),()=>{
    console.log("server is open");
});
```
build typescript file
```
npm run build
```
development server
```
npm run dev 
```
production server
``` 
npm start
```