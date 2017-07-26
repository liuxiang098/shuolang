$(document).ready(function(){
	$("#jgcase-items").flexslider({
		itemWidth: 160,                   // Integer: slide 宽度，多个同时滚动时设置
		itemMargin: 5,                  // Integer: slide 间距
		minItems: 1,                    // Integer: 最少显示 slide 数, 与 `itemWidth` 相关
		maxItems: 3,                    // Integer: 最多显示 slide 数, 与 `itemWidth` 相关
		controlNav: false,  
		directionNav: false,  
		animationLoop: true,
		start: function(){
			$("#jgcase-items .lazy").each(function(){
				$(this).attr("src", $(this).attr("data-original"));
			})
		},
	});
	$("#vr-items").flexslider({
		itemWidth: 160,                   // Integer: slide 宽度，多个同时滚动时设置
		itemMargin: 5,                  // Integer: slide 间距
		minItems: 1,                    // Integer: 最少显示 slide 数, 与 `itemWidth` 相关
		maxItems: 3,                    // Integer: 最多显示 slide 数, 与 `itemWidth` 相关
		controlNav: false,  
		directionNav: false,  
		animationLoop: true,
		start: function(){
			$("#vr-items .lazy").each(function(){
				$(this).attr("src", $(this).attr("data-original"));
			})
		},
	});
	$("#pm-items").flexslider({
		itemWidth: 160,                   // Integer: slide 宽度，多个同时滚动时设置
		itemMargin: 5,                  // Integer: slide 间距
		minItems: 1,                    // Integer: 最少显示 slide 数, 与 `itemWidth` 相关
		maxItems: 3,                    // Integer: 最多显示 slide 数, 与 `itemWidth` 相关
		controlNav: false,  
		directionNav: false,  
		animationLoop: true,
		start: function(){
			$("#pm-items .lazy").each(function(){
				$(this).attr("src", $(this).attr("data-original"));
			})
		},
	});
})