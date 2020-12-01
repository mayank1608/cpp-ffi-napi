// Import dependencies
const ffi = require('ffi-napi');
const path = require('path');
// const ref = require('ref');
// const int = ref.types.int;

var platform = process.platform;
var dllLib = null;


if (platform === 'win32'){
    dllLib = './dll/math';
}else{
    throw new Error('unsupported plateform for dllLib')
}

// Syntax
// ffi.Library(libraryFile, { functionSymbol: [ returnType, [ arg1Type, arg2Type, ... ], ... ]);

var dllFunCall = ffi.Library( path.join(__dirname, dllLib), {
    'add': ['int', ['int', 'int']],
	'minus': ['int', ['int', 'int']],
    'multiply': ['int', ['int', 'int']]
});

// console.log(dllFunCall.add(15,27));
module.exports = dllFunCall;