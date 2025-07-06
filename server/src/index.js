import app from "./app.js";

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


// JavaScript has 2 primary module systems:
// 1. CommonJS: The original module system for Node.js, using require and module.exports. 
//              It’s synchronous and widely used in older Node.js applications.
// 2. ES Modules (ESM): The modern standard for JavaScript modules, introduced in ES6 (2015), using import and export. 
//              It’s supported in browsers and modern Node.js (since version 12, with full support in later versions). 
//              ESM is asynchronous and designed for both client-side and server-side use.


// 1. module.exports: In CommonJS, module.exports is an object used to define what a module exports. 
//                    It’s assigned a single value (e.g., a function, object, or primitive) that becomes the module’s public interface. 
//                    The require() function is used to import it.
// Key Characteristics:
//    i. Exports a single object (module.exports).
//   ii. Named exports are properties of that object (e.g., module.exports.register).
//  iii. Imports are synchronous and return the entire module.exports object.
//   iv. No distinction between default and named exports; everything is part of the same object.

// 2. export default (ES Modules): In ESM, export default is used to export a single value as the module’s default export. 
//                          It’s imported using a default import, where the importer can choose any name for the imported value. like (import anythinguwhish from "./config/something.js")
