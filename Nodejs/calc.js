const { basename } = require("path")

exports.add = (a,b) =>a+b

exports.multiply = (a,b) => a*b

exports.divide = (a,b) => a/b

exports.square = (a) => a*a

exports.sum = (a,b,c) => a+b
exports.substract = (a,b) => a-b

exports.min = (a,b,c) => Math.min(a,b,c)
exports.max = (a,b,c) => Math.max(a,b,c)