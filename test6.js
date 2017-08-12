/**
 * Created by Administrator on 2017-08-11.
 */
//require  获取模块接口(mymodule 中 exports对象)
//var C = require('./mymodule');
//module.exports = exports.world;
/*
mymodule = new mymodule();
function bar (callback){
    foo(function (err,list) {
        if(err)
            return callback(err); //尽早返回错误
        //没有错误,处理'data'
        //传递null作为callback的第一个参数
        callback(null,list);
    })
}*/
var mymododult = require('./mymodule');
var dir = process.argv[2];
var filter = process.argv[3];
mymododult(dir,filter,function (err,list) {
    if (err){
        return console.error('Error: ', err);
    }
    list.forEach(function (file) {
        console.log(file);
    })
})