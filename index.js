// 阅读以上推荐链接，了解所有的JavaScript字符串方法。


// 完成下面程序，将`name`变量中的字母全部转为为大写，输出：`'HELLO'`。
var name = 'hello';
// TODO write your code here...


// 完成下面程序，将sentence变量中的所有单词首字母变为大写，输出：'Good Afternoon, Mr Mike.'。
var sentence = 'good afternoon, mr mike.';
//TODO write your code here...


// 完成下面程序，将money变量中的金额提取出来，输出：20。
var money = '￥20';
//TODO write your code here...

//将hello变为大写
document.write(name.toUpperCase());

//将变量首字母变为大写
function ucfirst(str){
var strarr = str.split(' ');
var result = '';
for(var i in strarr){
    result += strarr[i].substring(0,1).toUpperCase()+strarr[i].substring(1)+' ';
}
    return result;
}
document.write(ucfirst(sentence));
//提取金额
var num = parseInt(money.substr(1));
document.write(ucfirst(num));
