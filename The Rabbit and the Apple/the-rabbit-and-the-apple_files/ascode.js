function getsurl(){
var surl='http://www.buzzle.com/';
return surl;}

function getAdDf(pHeight,pAltUrl,pQstr){
var f='frame',b='border',m='margin',s='space',w='width',h='height',z='=0 ',j=' ',u='src="';
j=j+w+'=165 '+h+'='+pHeight+j+b+z+'h'+s+z+'v'+s+z+f+b+z+m+h+z+m+w+z+'scrolling=no ';
u=u+getsurl()+'web/'+pAltUrl+'.asp?h='+pHeight+pQstr+'"';
f='<i'+f+j+u+'></i'+f+'>';
document.getElementById("first_ad_unit").innerHTML += f;}