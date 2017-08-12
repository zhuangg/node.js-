/**
 * Created by Administrator on 2017-08-11.
 */
var fs = require("fs");
var path= require("path");
fs.readdir('test/',function(err,list){
    if(err){
        console.log(err);
        return;
    }
    console.log('数组元素:'+ '\n' + list.join('\n') + '\n\n' + '遍历后数组:');
    for(var i=0;i<list.length;i++){
        list[i].index = i;
        if(path.extname(list[i]) == '.txt'){//判断后缀名
            console.log(list[i]);
        }
    }
})