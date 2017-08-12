/**
 * Created by Administrator on 2017-08-12.
 */
var fs = require("fs");
var path= require("path");
//exports  模块的接口
//exports对象把world作为模块的访问接口,在test6.js中
//通过require('./mymodule')加载这个模块,然后直接
//访问mymodule.js中exports对象的成员函数
/*exports.world = function () {
    module.exports = fs.readdir('test/',function(err,list){
        if(err){
            console.log(err);
            return;
        }
        //console.log('数组元素:'+ '\n' + list.join('\n') + '\n\n' + '遍历后数组:');
        for(var i=0;i<list.length;i++){
            list[i].index = i;
            if(path.extname(list[i]) == '.txt'){//判断后缀名
                console.log(list[i]);
            }
        }
    })
}*/
module.exports = function (dir,filterStr,callback) {
    fs.readdir(dir,function (err,list) {
        if (err){
            return callback(err);
        }
        list = list.filter(function (file) {
            return path.extname(file) == '.' + filterStr;
        });
        callback(null,list);
    })

}