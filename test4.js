/**
 * Created by Administrator on 2017-08-11.
 */
var fs = require("fs");
//异步 fs.readFile()
fs.readFile('test/test.txt', function (err, data) {  //回调函数
    if (err){
        console.log(err);
        return;
    }
    console.log(data.toString() + '\n');
    console.log(data.toString().split('\n').length + ' 行');
});