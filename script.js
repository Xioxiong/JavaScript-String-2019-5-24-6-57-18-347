<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <script>
// 写程序判断下列变量是不是数组类型。
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
console.log(a instanceof Array);
console.log(b instanceof Array);

// 编写程序，将下面数组中的每一项都乘以2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
for(var i=0;i<a.length;i++){
    a[i] = a[i]*2;
}
console.log(a);

// 编写程序，按下面的要求输出结果。
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
var str1='';
var str2='';
var str3='';
for(var i=0;i<a.length;i++){
    str1 += colors[i];
    str2 += colors[i]+'+';
    str3 += colors[i]+',';
}
console.log(str1);
console.log(str2.substr(0,str2.length-1));
console.log(str3.substr(0,str3.length-1));

// 编写程序，将下面数组中的数字按从大到小的顺序排序。
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
function des(a,b){
  return b-a;
}
console.log(a.sort(des));

// 编程程序，找出下列数组中出现频率最高的元素。
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var s=[];
var s2 = {};
var temp=0;
var r ="";
for(var i=0;i<a.length;i++){
    if(s.indexOf(a[i]) == -1){
        s.push(a[i]);
        var num = 1;
    for(var j=i+1;j<a.length;j++){
        if (s[s.length-1] == a[j]){
            num++;
        }
    }
    s2[s[s.length-1]] =num;
    }  
}
for(var i=0;i<s.length;i++){
    if(s2[s[i]] >= temp){
        temp = s2[s[i]];
        r=s[i];
    }
}
console.log(r);
    </script>
</body>

</html>