$(function(){
	if(isLogin()){
		/**获取购物车中的数据*/
		ajaxcart(1);
		$(".shopCart").mouseenter(function(){
			ajaxcart(2);		
		})
		$(".index_shopCar").mouseleave(function(){
			$(".shopCarEmpty").css("display","none");
			$(".shopCarGoods").css("display","none");
		})
	}else{
		$(".shopCart").mouseenter(function(){
			$(".shopCarEmpty").css("display","block");
			$(".shopCarGoods").css("display","none");
			$(".shopCarEmpty p").html("您还未<a href='javascript:login();' style='color:#cbcbcb'>登录</a>，请先<a href='javascript:login();' style='color:#cbcbcb'>登录</a>");
		})
		$(".index_shopCar").mouseleave(function(){
			$(".shopCarEmpty").css("display","none");
			$(".shopCarGoods").css("display","none");
		})
 	}
})
/**
 * 首页
 */
function index(){
	window.location.href=rootPath+"/";
}
/**
 * 用户登录
 */
function login(){
	//window.location.href=rootPath+"/member/sso";
	window.location.href=rootPath+"/member/login";
}

function member(){
	window.location.href=rootPath+"/member/";
}
/**
 * 用户注册
 */
function register(){
//	window.location.href=rootPath+"/member/sso";
	window.location.href=rootPath+"/register/action";
}
/**
 * 用户注销
 */
function logout(){
	confirmTxt("确定要注销登录吗？",function(){
		//window.location.href=PASSPORT_URL+"/logout?service="+NETWORK_ADDRESS;
		window.location.href=rootPath+"/logout";
	},null)
}
/**
 * 判断是否登陆
 */
function isLogin(){
	var name = curUserName;
	if(name==null || name=='' || name==undefined){
		return false;
	}
	return true;
}
/**
 * 去购物车
 */
function goCart(){
	if(isLogin()){
		window.open(rootPath+"/member/cart/list/");
	}
}
/**
 * 刷新购物车
 */
function refreshCart(data){
	if(data!=null){ 
		var uls = "<ul>";
		var total = 0;
		var totalGoodsNum = 0;
		for(var i=0;i<data.length;i++){
			totalGoodsNum += data[i].goodsNum;
			var skuID = "";
			if(data[i].isSku){
				skuID = "-"+data[i].skuID;
			}
			uls += '<li class="goodsText b_button">'+
	                    '<div class="goodsPic">'+
		                    '<div onclick="javascript:window.open(\''+rootPath+'/goods/detail/'+data[i].webSiteID+'/'+data[i].goodsID+''+skuID+'\')"><img src="'+fileUrl+data[i].goodsCoverImage+'!53X52" width="53" height="52"></div>'+
		                    '<p onclick="javascript:window.open(\''+rootPath+'/goods/detail/'+data[i].webSiteID+'/'+data[i].goodsID+''+skuID+'\')">'+data[i].goodsName+'</p>'+
		                '</div>'+
		                '<div class="goodsPrice">'+
		                    '<p><span>￥'+data[i].goodsSKUPrice+'</span>X'+data[i].goodsNum+'</p>'+
		                    '<p class="goods_delete" onclick="delFromCart(this,'+data[i].id+',\''+data[i].cid+'\')">删除</p></div></li>';
			var goodsPrice = comomnKit.multiply(data[i].goodsSKUPrice,data[i].goodsNum);
			total = comomnKit.plus(total,goodsPrice);
		}
		uls += '<li class="lastText"><span class="count vam">共<span>'+totalGoodsNum+'</span>件商品&nbsp;&nbsp;&nbsp;&nbsp;共计￥<span>'+total+'</span></span>'+
		'<a class="btn-buy-cart vam" href="javascript:;" onclick="javascript:goCart();">现在结算 <span class="iconfont">&#xe667;</span></a></li></ul>';
		$(".shopCarGoods").html(uls);
		$(".goodsNumOfCar").text(totalGoodsNum);
	}
}
/**
 * 删除购物车中的商品
 */
function delFromCart(obj,ids,cid){
	if(!isLogin()){
		ids = cid;
	}
	ids = $.trim(ids);
	if(ids==null || ids==''){
		alertTxt("请选择需要删除的商品");
		return ;
	}
	$.ajax({
		type : "post",
		url : rootPath+"/member/cart/del",
		data : {"ids":ids},
		beforeSend:function(xhr){
		},
		success : function(data) {
			if(data!=null){ 
				if(data.flag){
					ajaxcart(4);
				}
			}else{
				alertTxt("删除失败");
			}
		},
		error:function() {
			alertTxt("网络异常，删除失败");
		}
	});
}
/**
 * 商品加入购物车
 *
 */
function addToCart(goodsID,skuID,goodsNum,goodsName,title,coverImage,goodsSKUPrice){
	if(goodsID==null||goodsID=='' || goodsID<1){
		alertTxt("请选择商品");
		return ;
	}
	if(goodsNum==null||goodsNum=='' || goodsNum<1){
		goodsNum = 1;
	}
	if(isLogin()){
		$.ajax({
			type : "post",
			url : rootPath+"/member/cart/add",
			data:{"goodsID":goodsID,"skuID":skuID,"goodsNum":goodsNum,"goodsName":goodsName,"title":title,"coverImage":coverImage,"goodsSKUPrice":goodsSKUPrice},
			success : function(data) {
				if(data!=null){ 
					if(data.flag){
						alertTxt("加入成功");
						ajaxcart(3);
					}else{
						alertTxt(data.msg);
					}
				}
			},
			error:function() {
				console.log("网络异常，加载失败");
			}
		});
 	}else{
 		alertTxt("您还未登录，请先登录",function(){
 			login();
 		});
 		return ;
 	}
}
/**
 * 获取购物车中的数据
 *  showFlag
 *  1 第一次进入页面
 *  2 鼠标滑动时
 *  3 添加商品时
 *  4 删除商品时
 */
function ajaxcart(showFlag){
	$.ajax({
		type : "post",
		url : rootPath+"/member/cart/ajax/list",
		success : function(data) {
			if(data!=null){
				if(showFlag==1){
					$(".shopCarEmpty").css("display","none");
					$(".shopCarGoods").css("display","none");
					var totalGoodsNum = 0;
					for(var i=0;i<data.length;i++){
						totalGoodsNum += data[i].goodsNum;
					}
					$(".goodsNumOfCar").text(totalGoodsNum);
				}else if(data.length>0){//购物车中有数据时
					refreshCart(data);
					if(showFlag==2){//鼠标滑动时
						$(".shopCarEmpty").css("display","none");
						$(".shopCarGoods").css("display","block");
					}else if(showFlag==3){//添加商品时
						$(".shopCarEmpty").css("display","none");
						$(".shopCarGoods").css("display","none");
					}else if(showFlag==4){//删除商品时
						$(".shopCarEmpty").css("display","none");
						$(".shopCarGoods").css("display","block");
					}
				}else{
					if(showFlag==2){//鼠标滑动时
						$(".shopCarEmpty").css("display","block");
						$(".shopCarGoods").css("display","none");
					}else if(showFlag==4){//删除商品时
						$(".shopCarEmpty").css("display","none");
						$(".shopCarGoods").css("display","none");
						$(".goodsNumOfCar").text(0);
					}
				} 
			}
		},
		error:function(data) {
			alertTxt("登录超时，请重新登录！",function(){
	 			login();
	 		});
		}
	});
}
/**
 * alert
 * 
 */
function alertTxt(txt){
	new Msg({text:''+txt+''});
}
/**
 * alert
 */
function alertTxt(txt,callback){
	var alertTxt = new Msg({text:''+txt+'',cbOk:function(){
		if(typeof(callback) == 'function'){
			callback();
		}
		alertTxt.close();
	}});
}
/**
 * confirm
 */
function confirmTxt(txt,cbOk,cbCancel){
	var confirmTxt = new Msg({type:'confirm',text:''+txt+'', buttons:['确认','取消'],cbOk:function(){
		if(typeof(cbOk) == 'function'){
			cbOk();
		}
		confirmTxt.close();
	},cbCancel:function(){
		if(typeof(cbCancel) == 'function'){
			cbCancel();
		}
		confirmTxt.close();
	}});
}