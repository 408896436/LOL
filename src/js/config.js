var w = document.documentElement.clientWidth || document.body.clientWidth;
document.documentElement.style.fontSize = (w/750*20)+"px";
window.onresize = function()
{
	var w = document.documentElement.clientWidth || document.body.clientWidth;
	document.documentElement.style.fontSize = (w/750*20)+"px";
}
