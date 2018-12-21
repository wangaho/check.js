if(!document.querySelectorAll || !window.FormData || !window.FormData.prototype.append){
	alert("您正在使用的浏览器版本过低，将不能正常浏览和使用。请升级IE10版本以上，或更换浏览器。");
	window.stop ? window.stop() : document.execCommand("Stop");
	throw new Error('您正在使用的浏览器版本过低，将不能正常浏览和使用。请升级IE10版本以上，或更换浏览器。');
}
