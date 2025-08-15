var _a;
var sym = Symbol();
var sym2 = Symbol();
// console.log(sym == sym2);
var dId = Symbol("id");
var obj = (_a = {},
    _a[dId] = 100,
    _a.name = "Sahil",
    _a);
console.log(obj[dId]);
