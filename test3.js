/**
 * Created by Administrator on 2017-08-11.
 */
var fs = require("fs");  //引入模块
//同步 fs.readFileSync()
var bf = fs.readFileSync('test/test.txt');
console.log(bf.toString().split('\n').length + '行');
