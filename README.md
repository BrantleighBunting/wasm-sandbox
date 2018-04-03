# wasm-sandbox
A sandbox application showing the use of Rust, WebAssembly, ES7, React, and Webpack 4

```javascript

// To Run:

yarn serve

// To build:

yarn build

```


```javascript

// To import the sandbox .wasm file, we need to do this:
const js = await import('./rust_sandbox'); 

// In later versions of Webpack, we should be able to do this:
import * as wasm from 'rust_sandbox.wasm';

```
