//【写HTML内容】
function html(text){
document.writeln(text);
}
/* 【设置css属性函数】 */
function cssset(name,shuxing) {
root = document.querySelector(name);
root.setAttribute('style',shuxing);
}
//cssset(':root','--s6:#224488');


html("<nav id=\'v1\'>");
html("<a href=\'#\'>首页</a>");
html("<a href=\'#\'>归档</a>");
html("<a href=\'#\'>笔记</a>");
html("<a href=\'#\'>画廊</a>");
html("<a href=\'#\'>关于</a>");
html("<a href=\'#\'>测试</a>");
html("</nav>");
html("<div id=\'nr\'>");



for(var i=0;i<12;i++){
var imgs0="<div class=\'card\'><img src=\'";
var imgs1="\' class=\'imgs\'></div>";
var imgs2=".jpg";
var imgs3="imgs/img"
var imgs=imgs0+imgs3+i+imgs2+imgs1;
document.writeln(imgs);
}

document.writeln("</div>");
