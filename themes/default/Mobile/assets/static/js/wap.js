$(document).ready(function(){
	/*
	根据窗口宽度   设置fontsize
	*/
	resize();
	$(window).resize(function(){
		resize();
	})
	function resize(){
		//console.log("resize");
		var windowW = $(window).width();
		if(windowW > 640) {windowW = 640;}
		var fz = (windowW  * 625) / 320;
		$("html").css("fontSize", fz+"%");
		$("#body").css("minHeight", $(window).height());
	}
	//图片延迟加载
	$("img.lazy").lazyload({effect: "fadeIn"});
});