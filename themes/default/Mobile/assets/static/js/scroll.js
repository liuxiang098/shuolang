(function($) {
	
	
//翻页
$(window).scroll(function(){ 
	window.__MASONRY_LOAD = window.__MASONRY_LOAD || false;
	var loadbox = $("#masonry-loadbox");
	if(window.__MASONRY_LOAD){
		loadbox.find(".loader").removeClass("hidden");
		loadbox.find(".msg").addClass("hidden");
		//console.log("正在翻页中");
		return false;
	}
	var box = $("#pagebox");
	var viewH =$(this).height();//可见高度  
	var contentH = box.outerHeight() + box.offset().top;//内容高度  
	var scrollTop =$(this).scrollTop();//滚动高度  
	//到达底部时,加载新内容  
	if(contentH - viewH - scrollTop < 100){ 
		var page = parseInt(loadbox.attr("page")) + 1;
		var pagecount = parseInt(loadbox.attr("pagecount"));
		if(page > pagecount || page < 1) {
			loadbox.find(".loader").addClass("hidden");
			loadbox.find(".msg").removeClass("hidden");
			loadbox.find(".msg").text("没有更多内容了");
			//console.log("没有更多内容了");
			return false;
		} else {
			loadbox.find(".msg").addClass("hidden");
		}
		window.__MASONRY_LOAD = true;
		//console.log(contentH + '出现了' + (contentH - viewH - scrollTop));
		var url = loadbox.attr("url");
		$.get(url, {
			page:page,
		},function(content){
			//console.log(winScrollTop + '出现了' + " -- " + itemOffsetTop + "--" + itemOuterHeight + "--" + winHeight);
			box.append(content);
			
			loadbox.attr("page", page);
			window.__MASONRY_LOAD = false;
			loadbox.find(".loader").addClass("hidden");
			loadbox.find(".msg").addClass("hidden");
			if(page >= pagecount) {
				loadbox.find(".msg").removeClass("hidden");
				loadbox.find(".msg").text("没有更多内容了");
			}
		})
	}
})
})(jQuery);