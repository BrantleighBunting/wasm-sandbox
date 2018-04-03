#![feature(proc_macro, wasm_custom_section, wasm_import_module)]

extern crate wasm_bindgen;

use wasm_bindgen::prelude::*;

/* Allowed Values for JS interop

    Integers (not u64/i64)
    Floats
    Borrowed strings (&str)
    Owned strings (String)
    Exported structs (Foo, annotated with #[wasm_bindgen])
    Exported C-like enums (Foo, annotated with #[wasm_bindgen])
    Imported types in a foreign module annotated with #[wasm_bindgen]
    Borrowed exported structs (&Foo or &mut Bar)
    The JsValue type and &JsValue (not mutable references)
    Vectors and slices of supported integer types and of the JsValue type.
*/

#[wasm_bindgen]
extern {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet(name: &str) {
    alert(&format!("Hello, {}!", name));
}

#[wasm_bindgen]
pub fn hello_world() -> String {
	"Hello World!".to_owned()
}

// Strings can both be passed in and received
#[wasm_bindgen]
pub fn concat(a: &str, b: &str) -> String {
    let mut a = a.to_string();
    a.push_str(b);
    return a
}

#[wasm_bindgen]
pub struct ContainsData {
    contents: u32,
}

#[wasm_bindgen]
impl ContainsData {
    pub fn new() -> ContainsData {
        ContainsData { contents: 0 }
    }

    pub fn add(&mut self, amt: u32) -> u32 {
        self.contents += amt;
        return self.contents
    }
}
