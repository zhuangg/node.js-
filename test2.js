/**
 * Created by Administrator on 2017-08-11.
 */

var sum = 0;

/*process.argv.forEach(function (value,index) {
    if(index >= 2){
        sum += Number(process.argv[index]);
    }
})*/

for(var i = 2 ; i < process.argv.length;i++){
    sum += Number(process.argv[i]);
}
console.log(sum);
