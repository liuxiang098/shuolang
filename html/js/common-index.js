$(document).ready(function(){ 
  //菜单     
  $('#uiMenu li').hover(function(){
  		$(this).toggleClass('active')
  				.siblings().removeClass('active');
  });
  //图片放大预览
  var $lightbox = $('a[rel="lightbox"]');
  var $wechat = $('#weChat');
  if ($lightbox.length){$lightbox.fancybox();}
  if ($wechat){
    $wechat.hover(function(){
      $(this).parent().next().toggle();
    });
  } 
  
  var rootPath = jQuery('#rootPath').val() + "/";
  jQuery.ajax({url: rootPath + 'getBanners2', dataType:'json', type:'POST', success: function(data){
    var len = data.assetsList.length;
    var params = new Array(len);
    jQuery.each(data.assetsList, function(i, row) {
        if(i == 0){
          jQuery('#container').append('<div class="slide" id="slide-' + i + '" style="background-image: url(' + rootPath + row.paths[0] + '); display: block;"></div>');
          jQuery('#paging').append('<a href="javascript:;" id="paging-' + i + '" onclick="Slideshow.jump(' + i + ', this);" onmouseover="Slideshow.preview(' + i + ');" class="current"></a>');
        }else if(i == len - 1){
          jQuery('#container').append('<div class="slide" id="slide-' + i + '" style="background-image: url(' + rootPath + row.paths[0] + '); display: none;"></div>');
          jQuery('#paging').append('<a href="javascript:;" id="paging-' + i + '" onclick="Slideshow.jump(' + i + ', this);" onmouseover="Slideshow.preview(' + i + ');" class="last-slide"></a>');
        }else{
          jQuery('#container').append('<div class="slide" id="slide-' + i + '" style="background-image: url(' + rootPath + row.paths[0] + '); display: none;"></div>');
          jQuery('#paging').append('<a href="javascript:;" id="paging-' + i + '" onclick="Slideshow.jump(' + i + ', this);" onmouseover="Slideshow.preview(' + i + ');" class=""></a>');
        }
        params[i] = {
        		image:rootPath + row.paths[0],
        		title:row.name,
        		url:row.remark,
        		id:row.id
        };
    });
    
    //广告图
    Slideshow.initialize('#slideshow', params);
  }});
});

function decodeHtml(text){//反转义html
    var temp = document.createElement("div");
    temp.innerHTML = text;
    var output = temp.innerText || temp.textContent;
    temp = null;
    return output;
}