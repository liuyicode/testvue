
var deviceWidth = document.documentElement.clientWidth;
if(deviceWidth < 1024) deviceWidth = 1024;
if(deviceWidth > 1920) deviceWidth = 1920;
document.documentElement.style.fontSize = deviceWidth / 10 + 'px';
/*动态获取html的font-size*/


window.onresize= function(){
    var deviceWidth = document.documentElement.clientWidth;
    if(deviceWidth < 1024) deviceWidth = 1024;
    if(deviceWidth > 1920) deviceWidth = 1920;
    document.documentElement.style.fontSize = deviceWidth / 10 + 'px';
        
}

