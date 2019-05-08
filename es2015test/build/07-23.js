"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var obj1 = { name: "박문수", age: 29 };
var obj2 = _extends({}, obj1);
var obj3 = _extends({}, obj1, { email: "mspark@gmail.com" });

console.log(obj2);
console.log(obj3);
console.log(obj1 == obj2);

var arr = [100, 200, 300];
var arr2 = ["hello"].concat(_toConsumableArray(arr1), ["world"]);
console.log(arr2);