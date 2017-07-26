/**
 * 用于拎包装，拎包装plus，尊享家三个二级页面的在线报价。
 */
var reg = new RegexKit();
var timer = 120;//发送短信的时间间隔
var isTemp = false;
var tempCode = "";
var checkMobile="";

function checkForm(){
	$("#testForm input[name=orignURL]").val(window.location.href);
	var area = $("#testForm input[name=area]").val();//面积
	var build = $("#testForm input[name=build]").val();//楼盘信息
	var name = $("#testForm input[name=name]").val();//称呼
	var phoneNo = $("#testForm input[name=phoneNo]").val();//手机号
	var yzCode = $("#testForm input[name=yzCode]").val();//验证码
	
	var bedRoomCnt = $("#testForm select[name=bedRoomCnt]").val();	//室
	var livingRoomCnt = $("#testForm select[name=livingRoomCnt]").val();	//厅
	var bathRoomCnt = $("#testForm select[name=bathRoomCnt]").val();	//卫
	var city = $("#testForm select[name=city]").val(); //城市
	var decorationStyle = $("#testForm input[name=style]:checked").val();	//装修风格
	var product = $("#testForm input[name=product]:checked ").val(); //装修套系
	
	if(bedRoomCnt== null ||bedRoomCnt == undefined){
		bedRoomCnt = $("#testForm input[name=bedRoomCnt]").val();
	}
	if(livingRoomCnt== null ||livingRoomCnt == undefined){
		livingRoomCnt = $("#testForm input[name=livingRoomCnt]").val();
	}
	if(bathRoomCnt== null ||bathRoomCnt == undefined){
		bathRoomCnt = $("#testForm input[name=bathRoomCnt]").val(); 
	}
	
	if(city== null ||city == undefined){
		city = $("#testForm input[name=city]").val(); 
	}
	
	if(city== null ||city == undefined){
		city = $("#testForm input[name=city]").val(); 
	}
	
	if(decorationStyle== null ||decorationStyle == undefined){
		decorationStyle = $("#testForm input[name=style]").val(); //装修套系
	}
	if(product== null ||product == undefined){
		product = $("#testForm input[name=product]").val(); //装修套系
	}
// 	alert("bedRoomCnt"+bedRoomCnt+"\nlivingRoomCnt"+livingRoomCnt+"\ntlivingRoomCntt"+websiteId+"\ncity"+city+"\ndecorationStyle"+decorationStyle+"\nproduct"+product);
	if(bedRoomCnt==""){
		new Msg({id:'js_msg21',icon:'warning',text:"请选择室！"});
		return false;
	}
	if(livingRoomCnt==""){
		new Msg({id:'js_msg22',icon:'warning',text:"请选择厅！"});
		return false;
	}
	if(bathRoomCnt==""){
		new Msg({id:'js_msg23',icon:'warning',text:"请选择卫！"});
		return false;
	}
	if(area==""){
		new Msg({id:'js_msg1',icon:'warning',text:"面积不能为空！"});
		return false;
	}
	if(!reg.matchPositiveDigital(area)){
		new Msg({id:'js_msg12',icon:'warning',text:"面积只能为大于0的数字！"});
		return false;
	}
	if(build==""){
		new Msg({id:'js_msg2',icon:'warning',text:"小区信息不能为空！"});
		return false;
	}
	if(name==""){
		new Msg({id:'js_msg3',icon:'warning',text:"称呼不能为空！"});
		return false;
	}
	if(phoneNo=="" || !reg.matchMobileFormat(phoneNo) || phoneNo.length != 11 ){
		new Msg({id:'js_msg4',icon:'warning',text:"请输入正确的手机号码！"});
		return false;
	}

	if(yzCode==""){
		new Msg({id:'js_msg6',icon:'warning',text:"请输入图形验证码！"});
		return false;
	}
		var price = 0;
		if(product=='enjoyHome'){
			price = budgetPrice(area,bathRoomCnt,product,city);
		}else if(product=='carryPackage'){
			price = getlbz(bathRoomCnt,area,city);
		}else if(product=='happyEnjoyHome'){
			price = hehPrice(area,bathRoomCnt,city);
		}
		$("#budgetPrice").html(price);
		$("#testForm input[name='price']").val(price);
		$.ajax({
			 type:'post',
			 url:ctx+'/calcprice/apply/save',
			 data:$("#testForm").serialize(),
			 error:function(jqXHR, textStatus){
				 console.log(jqXHR);
				 console.log(textStatus);
			 },
			 success : function(data) {
				if(data.flag){
					$("#jcaptchaImg").click();
					//$("#calcpriceApplyNum_carrypackage").html(data.calcpriceApplyNum);
					new Msg({id:'js_msg10',icon:'success',text:'您的报价需求后台已经受理，请耐心等待'});
				}else{
					new Msg({id:'js_msg10',icon:'warning',text:data.message});
				}
			}
		 });
		
		return true;
	}
	
//}
//获取手机验证码
/*function sendyzm(o){
	var bedRoomCnt = $("#testForm select[name=bedRoomCnt]").val();	//室
	var livingRoomCnt = $("#testForm select[name=livingRoomCnt]").val();	//厅
	var bathRoomCnt = $("#testForm select[name=bathRoomCnt]").val();	//卫
	var area = $("#testForm input[name=area]").val();//面积
	var build = $("#testForm input[name=build]").val();//楼盘信息
	var name = $("#testForm input[name=name]").val();//称呼
	if(bedRoomCnt==""){
		new Msg({id:'js_msg21',icon:'warning',text:"请选择室！"});
		return false;
	}
	if(livingRoomCnt==""){
		new Msg({id:'js_msg22',icon:'warning',text:"请选择厅！"});
		return false;
	}
	if(bathRoomCnt==""){
		new Msg({id:'js_msg23',icon:'warning',text:"请选择卫！"});
		return false;
	}
	if(area==""){
		new Msg({id:'js_msg1',icon:'warning',text:"面积不能为空！"});
		return false;
	}
	if(build==""){
		new Msg({id:'js_msg2',icon:'warning',text:"小区信息不能为空！"});
		return false;
	}
	if(name==""){
		new Msg({id:'js_msg3',icon:'warning',text:"称呼不能为空！"});
		return false;
	}
	var phoneNo = $("#testForm input[name=phoneNo]").val();
	if(reg.matchMobileFormat(phoneNo)){
		//验证手机号
		$.ajax({
			type : "get",
			url : ctx+"/sms/sendcaptcha/calcprice?mobile="+phoneNo,
			success : function(data) {
				if(data.flag == true){
					checkMobile = phoneNo;
					isTemp = true;
					tempCode=data.tempCode;
					Countdown(o);
				}else{
					isTemp = false;
					new Msg({id:'js_msg10',icon:'warning',text:data.msg});
				}
			}
		});
	}else{
		isTemp = false;
		new Msg({id:'js_msg11',icon:'warning',text:"请输入正确的手机号码！"});
	}
}
function Countdown(o){
	if (timer == 0) {
		if(tempCode==""){
			$(o).attr("onclick","sendyzm(this)");
		}
		$(o).html("获取验证码");
   		timer = 120;
   	} else {
	   	$(o).attr("onclick","");
       	$(o).html(timer + "秒重新发送");
       	timer--;
       	setTimeout(function() {
       		Countdown(o);
       	},1000)
   	}
}*/
var rD;
$(function(){

	$("#quotedPriceBtnAll,.quotedPriceBtnAll").click(function(){
		$("#online_free_quotes_all input[name='orignURL']").val(window.location.href);
		rD = dialog({
			skin: 'ui-dialog-shj',
			title: ' ',
			fixed: true,
			content: $('#online_free_quotes_all')
		});
		rD.showModal();
	});
	
});
/****************************弹出层报价开始*************************************/
var online_msg;
function checkFormModel(){
	var area = $("#online_free_quotes input[name=area]").val();//面积
	var build = $("#online_free_quotes input[name=build]").val();//楼盘信息
	var name = $("#online_free_quotes input[name=name]").val();//称呼
	var phoneNo = $("#online_free_quotes input[name=phoneNo]").val();//手机号
	var yzCode = $("#online_free_quotes input[name=yzCode]").val();//验证码

	var bedRoomCnt = $("#online_free_quotes select[name=bedRoomCnt]").val();	//室
	var livingRoomCnt = $("#online_free_quotes select[name=livingRoomCnt]").val();	//厅
	var bathRoomCnt = $("#online_free_quotes select[name=bathRoomCnt]").val();	//卫
	var city = $("#online_free_quotes select[name=city]").val(); //城市
	var decorationStyle = $("#online_free_quotes input[name=style]:checked").val();	//装修风格
	var product = $("#online_free_quotes select[name=product] ").val(); //装修套系
// 	alert("bedRoomCnt"+bedRoomCnt+"\nlivingRoomCnt"+livingRoomCnt+"\ntlivingRoomCntt"+websiteId+"\ncity"+city+"\ndecorationStyle"+decorationStyle+"\nproduct"+product);
	if(bedRoomCnt==""){
		new Msg({id:'js_msg21',icon:'warning',text:"请选择室！"});
		return false;
	}
	if(livingRoomCnt==""){
		new Msg({id:'js_msg22',icon:'warning',text:"请选择厅！"});
		return false;
	}
	if(bathRoomCnt==""){
		new Msg({id:'js_msg23',icon:'warning',text:"请选择卫！"});
		return false;
	}
	if(area==""){
		new Msg({id:'js_msg1',icon:'warning',text:"面积不能为空！"});
		return false;
	}
	if(!reg.matchPositiveDigital(area)){
		new Msg({id:'js_msg12',icon:'warning',text:"面积只能为大于0的数字！"});
		return false;
	}
	if(build==""){
		new Msg({id:'js_msg2',icon:'warning',text:"小区信息不能为空！"});
		return false;
	}
	if(name==""){
		new Msg({id:'js_msg3',icon:'warning',text:"称呼不能为空！"});
		return false;
	}
	if(phoneNo=="" || !reg.matchMobileFormat(phoneNo) || phoneNo.length != 11 ){
		new Msg({id:'js_msg4',icon:'warning',text:"请输入正确的手机号码！"});
		return false;
	}

	/*if(isTemp==false){
		new Msg({id:'js_msg5',icon:'warning',text:"请获取验证码！"});
		return false;
	}
	if(yzCode==""){
		new Msg({id:'js_msg6',icon:'warning',text:"请输入获取到的验证码！"});
		return false;
	}
	if(isTemp && phoneNo != checkMobile){
		new Msg({id:'js_msg7',icon:'warning',text:"手机号码不为验证手机号码！"});
		return false;
	}
	if(tempCode != yzCode){
		new Msg({id:'js_msg8',icon:'warning',text:"验证码错误,请重新输入！"});
		return false;
	}else{
		timer=0;*/
		var price = 0;
		if(product=='enjoyHome'){
			price = budgetPrice(area,bathRoomCnt,product,city);
		}else if(product=='carryPackage'){
			price = getlbz(bathRoomCnt,area,city);
		}else if(product=='happyEnjoyHome'){
			price = hehPrice(area,bathRoomCnt,city);
		}
		$("#online_free_quotes_rice").html(price);
		$("#online_free_quotes input[name='price']").val(price);
		$.ajax({
			type:'post',
			url:ctx+'/calcprice/apply/save',
			data:$("#online_free_quotes").serialize(),
			error:function(jqXHR, textStatus){
				console.log(jqXHR);
				console.log(textStatus);
			},
			 success : function(data) {
				 if(data.flag){
					 online_msg = dialog({
						 skin: 'ui-dialog-shj',
						 title: ' ',
						 fixed: true,
						 content: $('#msg_online_free_quotes')
					 });
					 online_msg.showModal();
					 rD.close();
				 }else{
					new Msg({id:'js_msg10',icon:'warning',text:data.message});
				 }
			 }
		});

		return true;
	}

//}

$(function(){
	$(".online_btn_msg").on("click",function(){
		online_msg.close();
	});
});



function checkFormModelAll(){
	var area = $("#online_free_quotes_all input[name=area]").val();//面积
	var build = $("#online_free_quotes_all input[name=build]").val();//楼盘信息
	var name = $("#online_free_quotes_all input[name=name]").val();//称呼
	var phoneNo = $("#online_free_quotes_all input[name=phoneNo]").val();//手机号
	var yzCode = $("#online_free_quotes_all input[name=yzCode]").val();//验证码

	var bedRoomCnt = $("#online_free_quotes_all select[name=bedRoomCnt]").val();	//室
	var livingRoomCnt = $("#online_free_quotes_all select[name=livingRoomCnt]").val();	//厅
	var bathRoomCnt = $("#online_free_quotes_all select[name=bathRoomCnt]").val();	//卫
	var city = $("#online_free_quotes_all select[name=city]").val(); //城市
	var decorationStyle = $("#online_free_quotes_all input[name=style]:checked").val();	//装修风格
	var product = $("#online_free_quotes_all select[name=product] ").val(); //装修套系
// 	alert("bedRoomCnt"+bedRoomCnt+"\nlivingRoomCnt"+livingRoomCnt+"\ntlivingRoomCntt"+websiteId+"\ncity"+city+"\ndecorationStyle"+decorationStyle+"\nproduct"+product);
	if(bedRoomCnt==""){
		new Msg({id:'js_msg21',icon:'warning',text:"请选择室！"});
		return false;
	}
	if(livingRoomCnt==""){
		new Msg({id:'js_msg22',icon:'warning',text:"请选择厅！"});
		return false;
	}
	if(bathRoomCnt==""){
		new Msg({id:'js_msg23',icon:'warning',text:"请选择卫！"});
		return false;
	}
	if(area==""){
		new Msg({id:'js_msg1',icon:'warning',text:"面积不能为空！"});
		return false;
	}
	if(!reg.matchPositiveDigital(area)){
		new Msg({id:'js_msg12',icon:'warning',text:"面积只能为大于0的数字！"});
		return false;
	}
	if(build==""){
		new Msg({id:'js_msg2',icon:'warning',text:"小区信息不能为空！"});
		return false;
	}
	if(name==""){
		new Msg({id:'js_msg3',icon:'warning',text:"称呼不能为空！"});
		return false;
	}
	if(phoneNo=="" || !reg.matchMobileFormat(phoneNo) || phoneNo.length != 11 ){
		new Msg({id:'js_msg4',icon:'warning',text:"请输入正确的手机号码！"});
		return false;
	}

	if(yzCode==""){
		new Msg({id:'js_msg6',icon:'warning',text:"请输入图形验证码！"});
		return false;
	}
	/*if(isTemp==false){
		new Msg({id:'js_msg5',icon:'warning',text:"请获取验证码！"});
		return false;
	}
	if(yzCode==""){
		new Msg({id:'js_msg6',icon:'warning',text:"请输入获取到的验证码！"});
		return false;
	}
	if(isTemp && phoneNo != checkMobile){
		new Msg({id:'js_msg7',icon:'warning',text:"手机号码不为验证手机号码！"});
		return false;
	}
	if(tempCode != yzCode){
		new Msg({id:'js_msg8',icon:'warning',text:"验证码错误,请重新输入！"});
		return false;
	}else{
		timer=0;*/
		var price = 0;
		if(product=='enjoyHome'){
			price = budgetPrice(area,bathRoomCnt,product,city);
		}else if(product=='carryPackage'){
			price = getlbz(bathRoomCnt,area,city);
		}else if(product=='happyEnjoyHome'){
			price = hehPrice(area,bathRoomCnt,city);
		}
		$("#online_free_quotes_rice").html(price);
		$("#online_free_quotes_all input[name='price']").val(price);
		$("#calcpriceApplyNum").html(parseInt($("#show_calcprice_apply_num").val())+1);
		$.ajax({
			type:'post',
			url:ctx+'/calcprice/apply/save',
			data:$("#online_free_quotes_all").serialize(),
			error:function(jqXHR, textStatus){
				console.log(jqXHR);
				console.log(textStatus);
			},
			 success : function(data) {
				 if(data.flag){
					 $("#jcaptchaImg").click();
					 $("#calcpriceApplyNum").html(data.calcpriceApplyNum);
					 online_msg = dialog({
						 skin: 'ui-dialog-shj',
						 title: ' ',
						 fixed: true,
						 content: $('#msg_online_free_quotes')
					 });
					 online_msg.showModal();
					 rD.close();
				 }else{
					new Msg({id:'js_msg10',icon:'warning',text:data.message});
				 }
			 }
		});

		return true;
	}



//获取手机验证码
/*function sendyzmModel(o){
	var bedRoomCnt = $("#online_free_quotes select[name=bedRoomCnt]").val();	//室
	var livingRoomCnt = $("#online_free_quotes select[name=livingRoomCnt]").val();	//厅
	var bathRoomCnt = $("#online_free_quotes select[name=bathRoomCnt]").val();	//卫
	var area = $("#online_free_quotes input[name=area]").val();//面积
	var build = $("#online_free_quotes input[name=build]").val();//楼盘信息
	var name = $("#online_free_quotes input[name=name]").val();//称呼
	if(bedRoomCnt==""){
		new Msg({id:'js_msg21',icon:'warning',text:"请选择室！"});
		return false;
	}
	if(livingRoomCnt==""){
		new Msg({id:'js_msg22',icon:'warning',text:"请选择厅！"});
		return false;
	}
	if(bathRoomCnt==""){
		new Msg({id:'js_msg23',icon:'warning',text:"请选择卫！"});
		return false;
	}
	if(area==""){
		new Msg({id:'js_msg1',icon:'warning',text:"面积不能为空！"});
		return false;
	}
	if(build==""){
		new Msg({id:'js_msg2',icon:'warning',text:"小区信息不能为空！"});
		return false;
	}
	if(name==""){
		new Msg({id:'js_msg3',icon:'warning',text:"称呼不能为空！"});
		return false;
	}
	var phoneNo = $("#online_free_quotes input[name=phoneNo]").val();
	if(reg.matchMobileFormat(phoneNo)){
		//验证手机号
		$.ajax({
			type : "get",
			url : ctx+"/sms/sendcaptcha/calcprice?mobile="+phoneNo,
			success : function(data) {
				if(data.flag == true){
					checkMobile = phoneNo;
					isTemp = true;
					tempCode=data.tempCode;
					CountdownModel(o);
				}else{
					isTemp = false;
					new Msg({id:'js_msg10',icon:'warning',text:data.msg});
				}
			}
		});
	}else{
		isTemp = false;
		new Msg({id:'js_msg11',icon:'warning',text:"请输入正确的手机号码！"});
	}
}
function CountdownModel(o){
	if (timer == 0) {
		if(tempCode==""){
			$(o).attr("onclick","sendyzmModel(this)");
		}
		$(o).html("获取验证码");
		timer = 120;
	} else {
		$(o).attr("onclick","");
		$(o).html(timer + "秒重新发送");
		timer--;
		setTimeout(function() {
			Countdown(o);
		},1000)
	}
}*/
/****************************弹出层报价结束*************************************/



function pyRegisterCvt(){
	var w=window,d=document,e=encodeURIComponent;
	var b=location.href,c=d.referrer,f,g=d.cookie,h=g.match(/(^|;)\s*ipycookie=([^;]*)/),i=g.match(/(^|;)\s*ipysession=([^;]*)/);
	if (w.parent!=w){f=b;b=c;c=f;};u='//stats.ipinyou.com/cvt?a='+e('uZs.Ais.AAPLWWid5dEx_w4oKFbeeX')+'&c='+e(h?h[2]:'')+'&s='+e(i?i[2].match(/jump\%3D(\d+)/)[1]:'')+'&u='+e(b)+'&r='+e(c)+'&rd='+(new Date()).getTime()+'&e=';
	(new Image()).src=u;
}

//悦享家报价
function hehPrice(area,bathRoomCnt,websiteId) {
	var sum = 0;
    var wsj = parseInt(bathRoomCnt);
    if(websiteId == 3) {
        var area = parseInt(area);
        if (area <= 60) {
            sum = 91587;
        } else if (area > 60 && area <= 79) {
            sum = (area - 60) * 945 + 91587;
        } else if (area > 79 && area <= 99) {
            sum = (area - 79) * 845 + 109542;
        } else if (area > 99 && area <= 119) {
            sum = (area - 99) * 875 + 126442;
        } else if (area > 119 && area <= 139) {
            sum = (area - 119) * 915 + 143942;
        } else if (area > 139 && area <= 170) {
            sum = (area - 139) * 905 + 162242;
        } else if (area > 170) {
            sum = (area - 170) * 910 + 190297;
        }
        if (wsj > 1) {
            sum = sum + 16420 * wsj;
        }
        sum = parseInt(sum * 1.1);
    }else if(websiteId == 16){
        if(area <= 60){
            sum=1800*area;
            if(wsj > 1){
                sum=1900*area;
            }
        }else if(area <= 100){
            sum=1500*area;
            if(wsj > 1){
                sum=1550*area;
            }
        }else if(area <= 150){
            sum=1300*area;
            if(wsj > 1){
                sum=1350*area;
            }
        }else{
            sum=1200*area;
            if(wsj > 1){
                sum=1220*area;
            }
        }
	}else if(websiteId == 12) {
        /*if (area <= 80) {
            sum = 80 * 1350;
        } else if (area > 80 && area <= 100) {
            sum = area * 1350;
        } else if (area > 100 && area <= 140) {
            sum = area * 1450;
        } else if (area > 140) {
            sum = area * 1700;
        }*/
        if (area <= 60) {
            sum = 60 * 1350;
        } else if (area > 60 && area <= 100) {
            sum = area * 1350;
        } else if (area > 100) {
            sum = area * 1450;
        }
    }else if(websiteId == 24){
        if (area <= 60) {
            sum = 101742;
        } else if (area > 60 && area <= 79) {
            sum = 101742 + (area - 60) * 1098;
        } else if (area > 79 && area <= 99) {
            sum = 122596 + (area - 79) * 874;
        } else if (area > 99 && area <= 119) {
            sum = 140068 + (area - 99) * 907;
        } else if (area > 119) {
            sum = 158212 + (area - 119) * 952;
        }
        if (wsj > 1) {
            sum = parseInt(sum + (wsj-1) * 20194);
        }
	}else {
		return sum;
	}
	return sum;
}

//尊享家报价
function budgetPrice(area,bathRoomCnt,type,websiteId) {
//	if (type == 'carrypackage') {
//		var sum=100000+(area-90)*600 +bedRoomCnt*20000 +livingRoomCnt*15740 + websiteId*15000;
//		return sum;
//	}
	var mj = area;
	var tx = 588;
	if(type=='enjoyHome'){
		tx = 888;
	}
//	var tx = $("#taoxi").text() == "拎包装" ? '588': '888';
	var sum = 0;
//	var wsj = $("#wei").attr("data-v");
	var wsj = bathRoomCnt;
//	var cityid=$("#citys").attr("data-v");
	var cityid=websiteId;
	switch (cityid) {
	case '1':
		//总站
		if (tx == 588) {
			/*mj = mj >= 60 ? mj: 60;
			if (mj <= 79) {
				sum = (mj - 60) * 885 + 117540;
			} else if (mj <= 99) {
				sum = (mj - 80) * 685 + 135040;
			} else if (mj <= 109) {
				sum = (mj - 100) * 885 + 148940;
			} else if (mj <= 119) {
				sum = (mj - 110) * 875 + 157780;
			} else if (mj <= 149) {
				sum = (mj - 120) * 685 + 166350;
			} else if (mj <= 170) {
				sum = (mj - 150) * 675 + 186890;
			}else if (mj > 170) {
				sum = mj*1100;
			}*/
			sum=2000*mj;
			//卫生间计算方式
			if (wsj > 1) {
				sum = (wsj - 1) * 13600 + sum;
			}
		} else if (tx == 888) {
			mj=mj<80?80:mj;	
			if(wsj == 1) { 
				sum = 1350*mj;
			}
			if(wsj == 2) {
				if(mj>=80 && mj<=89) {
					sum = 1722*mj;
				}
				if(mj>=90 && mj<=120) {
					sum = 1652*mj;
				}
				if(mj>=121 && mj<=170) {
					sum = 1562*mj;
				}
			}
			if(wsj == 3) {
				if(mj>=80 && mj<=89) {
					sum = 2032*mj;
				}
				if(mj>=90 && mj<=120) {
					sum = 2008*mj;
				}
				if(mj>=121) {
					sum = 2128*mj;
				}	
			}	
		}
		break;
	case '2':
		//成都
		if (tx == 588) {
			/*mj = mj >= 60 ? mj: 60;
			if (mj <= 79) {
				sum = (mj - 60) * 885 + 117540;
			} else if (mj <= 99) {
				sum = (mj - 80) * 685 + 135040;
			} else if (mj <= 109) {
				sum = (mj - 100) * 885 + 148940;
			} else if (mj <= 119) {
				sum = (mj - 110) * 875 + 157780;
			} else if (mj <= 149) {
				sum = (mj - 120) * 685 + 166350;
			} else if (mj <= 170) {
				sum = (mj - 150) * 675 + 186890;
			}else if (mj > 170) {
				sum = mj*1100;
			}*/
			sum=2000*mj;
			//卫生间计算方式
			if (wsj > 1) {
				sum = (wsj - 1) * 13600 + sum;
			}
		} else if (tx == 888) {
			mj=mj<80?80:mj;	
			if(wsj == 1) { 
				sum = 1350*mj;
			}
			if(wsj == 2) {
				if(mj>=80 && mj<=89) {
					sum = 1722*mj;
				}
				if(mj>=90 && mj<=120) {
					sum = 1652*mj;
				}
				if(mj>=121 && mj<=170) {
					sum = 1562*mj;
				}
			}
			if(wsj == 3) {
				if(mj>=80 && mj<=89) {
					sum = 2032*mj;
				}
				if(mj>=90 && mj<=120) {
					sum = 2008*mj;
				}
				if(mj>=121) {
					sum = 2128*mj;
				}	
			}	
		}
		break;
	case '3':
		//南充	
		if (tx == 588) {
			mj = mj >= 60 ? mj: 60;
			if (mj <= 79) {
				sum = (mj - 60) * 885 + 117540;
			} else if (mj <= 99) {
				sum = (mj - 80) * 685 + 135040;
			} else if (mj <= 109) {
				sum = (mj - 100) * 885 + 148940;
			} else if (mj <= 119) {
				sum = (mj - 110) * 875 + 157780;
			} else if (mj <= 149) {
				sum = (mj - 120) * 685 + 166350;
			} else if (mj <= 170) {
				sum = (mj - 150) * 675 + 186890;
			}
			sum=sum+(mj*50);
			if (mj > 170) {
				sum = mj*1100;
			}
			//卫生间计算方式			
			if (wsj > 1) {
				sum = (wsj - 1) * 13600 + sum;
			}
		} else if (tx == 888) {
			mj = mj >= 80 ? mj: 80;
			if (mj <= 100) {
				sum = (mj - 80) * 874 + 114063;
			} else if (mj <= 151) {
				sum = (mj - 101) * 716 + 131839;
			} else if (mj <= 170) {
				sum = (mj - 152) * 737 + 168376;
			} else if (mj > 170) {
				sum = (mj - 170) * 842 + 181642;
			}
			//卫生间计算方式
			if (wsj > 1) {
				sum = (wsj - 1) * 21263 + sum;
			}
		}
		sum = sum * 1.1;
		break;
	case '6':
		//武汉
		if (tx == 588) {
			mj = mj >= 60 ? mj: 60;
			if (mj <= 79) {
				sum = (mj - 60) * 885 + 117540;
			} else if (mj <= 99) {
				sum = (mj - 80) * 685 + 135040;
			} else if (mj <= 109) {
				sum = (mj - 100) * 885 + 148940;
			} else if (mj <= 119) {
				sum = (mj - 110) * 875 + 157780;
			} else if (mj <= 149) {
				sum = (mj - 120) * 685 + 166350;
			} else if (mj <= 170) {
				sum = (mj - 150) * 675 + 186890;
			}
			sum=sum+(mj*100);
			if (mj > 170) {
				sum = mj*1100;
			}
			//卫生间计算方式
			if (wsj > 1) {
				sum = (wsj - 1) * 13600 + sum;
			}
		} else if (tx == 888) {
			mj = mj >= 80 ? mj: 80;
			if (mj <= 99) {
				sum = (mj - 80) * 800 + 110760;
			} else if (mj <= 120) {
				sum = (mj - 100) * 770 + 126730;
			} else if (mj <= 150) {
				sum = (mj - 121) * 780 + 142910;
			} else if (mj > 150) {
				sum = (mj - 150) * 800 + 165530;
			}
			//卫生间计算方式
			if (wsj > 1) {
				sum = (wsj - 1) * 21560 + sum;
			}
		}
		sum = sum * 1.1;
		break;
	case '7':
		//长沙
		if (tx == 588) {
			mj = mj >= 60 ? mj: 60;
			if (mj <= 79) {
				sum = (mj - 60) * 885 + 117540;
			} else if (mj <= 99) {
				sum = (mj - 80) * 685 + 135040;
			} else if (mj <= 109) {
				sum = (mj - 100) * 885 + 148940;
			} else if (mj <= 119) {
				sum = (mj - 110) * 875 + 157780;
			} else if (mj <= 149) {
				sum = (mj - 120) * 685 + 166350;
			} else if (mj <= 170) {
				sum = (mj - 150) * 675 + 186890;
			}else if (mj > 170) {
				sum = mj*1100;
			}
			//卫生间计算方式
			if (wsj > 1) {
				sum = (wsj - 1) * 13600 + sum;
			}
		} else if (tx == 888) {
			mj = mj<80?80:mj;
			if(mj<=99) {
				sum = 109120+(mj-80)*800;
			} else if(mj>=100 && mj<=118) {
				sum = 125120+(mj-100)*700;
			} else if(mj == 119) {
				sum = 138420;
			} else if(mj>=120) {
				sum = 139140+(mj-120)*650;
			}
			if(wsj > 1) {
				sum = sum+(wsj-1)*21380;
			}
		}
		sum = sum * 1.1369;
		break;
	case '12':
		//贵阳
		pyRegisterCvt();
		if (tx == 588) {
			mj = mj >= 60 ? mj: 60;
			sum = (mj * 1350 );
			//卫生间计算方式
			if (wsj > 1) {
				sum = (wsj - 1) * 12000 + sum;
			}
		} else if (tx == 888) {
			/*mj = mj >= 80 ? mj: 80;
			if (mj <= 89) {
				sum = (mj - 80) * 950 + 114380;
			} else if (mj <= 100) {
				sum = (mj - 90) * 1030 + 123960;
			} else if (mj <= 151) {
				sum = (mj - 101) * 840 + 135100;
			} else if (mj <= 170) {
				sum = (mj - 152) * 1000 + 178100;
			} else if (mj > 170) {
				sum = (mj - 170) * 950 + 196100;
			}
			//卫生间计算方式
			if (wsj > 1) {
				sum = (wsj - 1) * 20460 + sum;
			}*/
            mj = mj >= 60 ? mj: 60;
            if (mj <= 60) {
                sum = 60*3200;
            } else if (mj>60 && mj<=100) {
                sum = mj*3200;
            } else if (mj>100) {
                sum = mj*3500;
            }
		}
		// sum = sum + (mj * 150);
		break;
	case '14':
		//合肥
		if (tx == 588) {
			mj = mj >= 60 ? mj: 60;
			if (mj <= 79) {
				sum = (mj - 60) * 885 + 117540;
			} else if (mj <= 99) {
				sum = (mj - 80) * 685 + 135040;
			} else if (mj <= 109) {
				sum = (mj - 100) * 885 + 148940;
			} else if (mj <= 119) {
				sum = (mj - 110) * 875 + 157780;
			} else if (mj <= 149) {
				sum = (mj - 120) * 685 + 166350;
			} else if (mj <= 170) {
				sum = (mj - 150) * 675 + 186890;
			}else if (mj > 170) {
				sum = mj*1100;
			}
			//卫生间计算方式
			if (wsj > 1) {
				sum = (wsj - 1) * 13600 + sum;
			}
		}else if (tx == 888) {
			mj = mj >= 80 ? mj: 80;			 
			if(mj<100){sum=(mj-80)*800+101280;}
			else if(mj<=120){sum=(mj-100)*750+117230;}			 
			else if(mj<=170){sum=(mj-120)*570+132230;} 
			else if(mj>170){sum=(mj-170)*800+160730;} 
			//卫生间计算方式
			if(wsj>1){
				sum=(wsj-1)*22150+sum; 
			}
		}
		sum=sum*1.1;
		break;

	case '13':
		//昆明
		if (tx == 588) {
			mj = mj >= 60 ? mj: 60;
			if (mj <= 79) {
				sum = (mj - 60) * 885 + 117540;
			} else if (mj <= 99) {
				sum = (mj - 80) * 685 + 135040
			} else if (mj <= 109) {
				sum = (mj - 100) * 885 + 148940
			} else if (mj <= 119) {
				sum = (mj - 110) * 875 + 157780
			} else if (mj <= 149) {
				sum = (mj - 120) * 685 + 166350
			} else if (mj <= 170) {
				sum = (mj - 150) * 675 + 186890
			}
			//卫生间计算方式
			if (wsj > 1) {
				sum = (wsj - 1) * 13600 + sum;
			}
		 
		} else if (tx == 888) {
			mj = mj >= 80 ? mj: 80;
			
			if(mj==80){
				sum=115929;
			}else{
				sum=(105390+(mj-80)*855+19600*(wsj-1))*1.1
			}
			 
		}
		//sum = sum * 1.1;
		break;
	case '5':
		//西安				
		if (tx == 588) {
			mj = mj >= 60 ? mj: 60;
			if (mj <= 79) {
				sum = (mj - 60) * 885 + 117540;
			} else if (mj <= 99) {
				sum = (mj - 80) * 685 + 135040
			} else if (mj <= 109) {
				sum = (mj - 100) * 885 + 148940
			} else if (mj <= 119) {
				sum = (mj - 110) * 875 + 157780
			} else if (mj <= 149) {
				sum = (mj - 120) * 685 + 166350
			} else if (mj <= 170) {
				sum = (mj - 150) * 675 + 186890
			}
			//卫生间计算方式
			if (wsj > 1) {
				sum = (wsj - 1) * 13600 + sum;
			}
		} else if (tx == 888) {
			mj = mj >= 60 ? mj: 60;
			if (mj <= 78) {
				sum = (mj - 60) * 1350 + 177450;
			} else if (mj <= 88) {
				sum = (mj - 79) * 1150 + 203100;
			} else if (mj <= 98) {
				sum = (mj - 89) * 1160 + 214600;
			} else if (mj <= 118) {
				sum = (mj - 99) * 1360 + 226200;
			} else if (mj <= 169) {
				sum = (mj - 119) * 1180 + 253400;
			}else if (mj >= 170) {
				sum = mj*1780;
			}
			//卫生间计算方式
			if (wsj > 1) {
				sum = (wsj - 1) * 41800 + sum;
			}
		}
		sum = sum * 1.1;
		break;

	case '23':
		//重庆 
		if (tx == 588) {
			mj = mj >= 60 ? mj: 60;
			if (mj <= 79) {
				sum = (mj - 60) * 885 + 117540;
			} else if (mj <= 99) {
				sum = (mj - 80) * 685 + 135040;
			} else if (mj <= 109) {
				sum = (mj - 100) * 885 + 148940;
			} else if (mj <= 119) {
				sum = (mj - 110) * 875 + 157780;
			} else if (mj <= 149) {
				sum = (mj - 120) * 685 + 166350;
			} else if (mj <= 170) {
				sum = (mj - 150) * 675 + 186890;
			}
			sum=sum+(mj*50);
			if (mj > 170) {
				sum = mj*1100;
			}
			//卫生间计算方式			
			if (wsj > 1) {
				sum = (wsj - 1) * 13600 + sum;
			}
		} else if (tx == 888) {
			mj = mj >= 80 ? mj: 80;
			if (mj <= 101) {
				sum = (mj - 80) * 890 + 110205;
			} else if (mj <= 131) {
				sum = (mj - 102) * 814 + 129707;
			} else if (mj <= 153) {
				sum = (mj - 132) * 738 + 154062;
			} else if (mj <= 170) {
				sum = (mj - 154) * 700 + 170259;
			} else if (mj > 170) {
				sum = (mj - 170) * 980 + 181464;
			}
			//卫生间计算方式
			if (wsj > 1) {
				sum = (wsj - 1) * 19800 + sum;
			}
		}
		sum = sum * 1.1;
		break;
	case '15':
		//南京，和重庆计算方式相同 待定
		if (tx == 588) {
			mj = mj >= 60 ? mj: 60;
			if (mj <= 79) {
				sum = (mj - 60) * 885 + 117540;
			} else if (mj <= 99) {
				sum = (mj - 80) * 685 + 135040;
			} else if (mj <= 109) {
				sum = (mj - 100) * 885 + 148940;
			} else if (mj <= 119) {
				sum = (mj - 110) * 875 + 157780;
			} else if (mj <= 149) {
				sum = (mj - 120) * 685 + 166350;
			} else if (mj <= 170) {
				sum = (mj - 150) * 675 + 186890;
			}
			sum=sum+(mj*100);
			if (mj > 170) {
				sum = mj*1100;
			}
			//卫生间计算方式
			if (wsj > 1) {
				sum = (wsj - 1) * 13600 + sum;
			}
		} else if (tx == 888) {
			mj = mj >= 80 ? mj: 80;
			if (mj <= 101) {
				sum = (mj - 80) * 890 + 110205;
			} else if (mj <= 131) {
				sum = (mj - 102) * 814 + 129707;
			} else if (mj <= 153) {
				sum = (mj - 132) * 738 + 154062;
			} else if (mj <= 170) {
				sum = (mj - 154) * 700 + 170259;
			} else if (mj > 170) {
				sum = (mj - 170) * 980 + 181464;
			}
			//卫生间计算方式
			if (wsj > 1) {
				sum = (wsj - 1) * 19800 + sum;
			}
		}
		//sum = sum * 1.1;
		break;
	case '16':
		//石家庄，和西安计算方式相同 待定
		if (tx == 588) {
			mj = mj >= 60 ? mj: 60;
			if (mj <= 79) {
				sum = (mj - 60) * 885 + 117540;
			} else if (mj <= 99) {
				sum = (mj - 80) * 685 + 135040;
			} else if (mj <= 109) {
				sum = (mj - 100) * 885 + 148940;
			} else if (mj <= 119) {
				sum = (mj - 110) * 875 + 157780;
			} else if (mj <= 149) {
				sum = (mj - 120) * 685 + 166350;
			} else if (mj <= 170) {
				sum = (mj - 150) * 675 + 186890;
			}else if (mj > 170) {
				sum = mj*1100;
			}
			//卫生间计算方式
			if (wsj > 1) {
				sum = (wsj - 1) * 13600 + sum;
			}
		} else if (tx == 888) {
			mj = mj >= 80 ? mj: 80;
			sum=mj*1400;
			//卫生间计算方式
			if (wsj > 1) {
				sum = (wsj - 1) * 13000 + sum;
			}
		}
		sum = sum * 1.15;
		break;
	case '4':
		//北京
		if (tx == 588) {
			mj = mj >= 50 ? mj: 50;
			if (mj <= 58) {
				sum = (mj - 50) * 1368 + 144752;
			} else if(mj == 59){
				sum = 156996;
			}else if (mj <= 79) {
				sum = (mj - 60) * 1260 + 158250;
			} else if (mj <= 89) {
				sum = (mj - 80) * 1275 + 183462;
			} else if (mj <= 99) {
				sum = (mj - 90) * 1268 + 196246;
			} else if (mj <= 119) {
				sum = (mj - 100) * 1138 + 208799;
			} else if (mj <= 170) {
				sum = (mj - 120) * 1315 + 231748;
			}
			//sum=sum+(mj*100);
			if (mj > 170) {
				sum = mj*1300;
			}
			//卫生间计算方式
			if (wsj > 1) {
				sum = (wsj - 1) * 19051 + sum;
			}
		} else if (tx == 888) {
			mj=mj<50?50:mj;
			if(mj<=79){
				sum=101053+(mj-50)*1218;	
			}else if(mj<=119){
				sum=137487+(mj-80)*1139;
			}else if(mj<=170){
				sum=183135+(mj-120)*1220;
			}else if(mj>170) {
				sum=244231+(mj-170)*1220;
			}
			if (wsj > 1) {
				sum = (wsj - 1) * 19051 + sum;
			}
		}
		//sum = sum * 1;
		break;
	case '18':
		//天津  
		if (tx == 588) {
			mj = mj >= 60 ? mj: 60;
			if (mj <= 79) {
				sum = (mj - 60) * 885 + 117540;
			} else if (mj <= 99) {
				sum = (mj - 80) * 685 + 135040;
			} else if (mj <= 109) {
				sum = (mj - 100) * 885 + 148940;
			} else if (mj <= 119) {
				sum = (mj - 110) * 875 + 157780;
			} else if (mj <= 149) {
				sum = (mj - 120) * 685 + 166350;
			} else if (mj <= 170) {
				sum = (mj - 150) * 675 + 186890;
			}
			//sum=sum+(mj*50);
			if (mj > 170) {
				sum = mj*1100;
			}
			//卫生间计算方式			
			if (wsj > 1) {
				sum = (wsj - 1) * 15100 + sum;
			}
		} else if (tx == 888) {
			mj=mj<70?70:mj;
			if(mj<=88){
				sum=185420+(mj-70)*1380;	
			}else if(mj>=89 && mj<=98){
				sum=211640+(mj-89)*1260;
			}else if(mj>=99 && mj<=108){
				sum=224240+(mj-99)*1270;
			}else if(mj>=109 && mj<=118) {
				sum=236940+(mj-109)*1180;
			}else if(mj>=119 && mj<=130) {
				sum=248740+(mj-119)*1170;
			}else if(mj>130) {
				sum=215260+(mj-130)*1630;
			}
			if (wsj > 1) {
				sum = (wsj - 1) * 42400 + sum;
			}							
		}
		sum=sum*1.15;
		break;
	case '19':
		//济南 
		if (tx == 588) {
			mj = mj >= 60 ? mj: 60;
			if (mj <= 79) {
				sum = (mj - 60) * 885 + 117540;
			} else if (mj <= 99) {
				sum = (mj - 80) * 685 + 135040;
			} else if (mj <= 109) {
				sum = (mj - 100) * 885 + 148940;
			} else if (mj <= 119) {
				sum = (mj - 110) * 875 + 157780;
			} else if (mj <= 149) {
				sum = (mj - 120) * 685 + 166350;
			} else if (mj <= 170) {
				sum = (mj - 150) * 675 + 186890;
			}
			sum=sum+(mj*50);
			if (mj > 170) {
				sum = mj*1100;
			}
			//卫生间计算方式			
			if (wsj > 1) {
				sum = (wsj - 1) * 13600 + sum;
			}
		} else if (tx == 888) {
			mj = mj >= 80 ? mj: 80;
			if (mj <= 99) {
				sum = (mj - 80) * 1528 + 264660;
			}else if (mj <= 119) {
				sum = (mj - 100) * 1488 + 295280;
			}else if (mj <= 150) {
				sum = (mj - 120) * 1678 + 325140;
			} else if (mj > 150) {
				sum = (mj - 150) * 1540 + 375650;
			}

			//卫生间计算方式
			if (wsj > 1) {
				sum = (wsj - 1) * 24700 + sum;
			}
		}
		sum = sum * 1.1; 
		break;
		
	case '17':
		//济宁 
		if (tx == 588) {
			mj = mj >= 60 ? mj: 60;
			if (mj <= 79) {
				sum = (mj - 60) * 885 + 117540;
			} else if (mj <= 99) {
				sum = (mj - 80) * 685 + 135040;
			} else if (mj <= 109) {
				sum = (mj - 100) * 885 + 148940;
			} else if (mj <= 119) {
				sum = (mj - 110) * 875 + 157780;
			} else if (mj <= 149) {
				sum = (mj - 120) * 685 + 166350;
			} else if (mj <= 170) {
				sum = (mj - 150) * 675 + 186890;
			}else if (mj > 170) {
				sum = mj*1100;
			}
			//卫生间计算方式
			if (wsj > 1) {
				sum = (wsj - 1) * 13600 + sum;
			}
		} else if (tx == 888) {
			mj = mj >= 80 ? mj: 80;
			if (mj <= 100) {
				sum = (mj - 80) * 820 + 109990;
			}else if (mj <= 150) {
				sum = (mj - 101) * 740 + 127130;
			} else if (mj > 150) {
				sum = (mj - 150) * 820 + 163390;
			}

			//卫生间计算方式
			if (wsj > 1) {
				sum = (wsj - 1) * 19800 + sum;
			}
		}
		sum = sum * 1.1; 
		break;
	case '9':
		//广州  
		if (tx == 588) {
			mj = mj >= 60 ? mj: 60;
			if (mj <= 79) {
				sum = (mj - 60) * 885 + 117540;
			} else if (mj <= 99) {
				sum = (mj - 80) * 685 + 135040;
			} else if (mj <= 109) {
				sum = (mj - 100) * 885 + 148940;
			} else if (mj <= 119) {
				sum = (mj - 110) * 875 + 157780;
			} else if (mj <= 149) {
				sum = (mj - 120) * 685 + 166350;
			} else if (mj <= 170) {
				sum = (mj - 150) * 675 + 186890;
			}
			sum=sum+(mj*200);
			if (mj > 170) {
				sum = mj*1100;
			}
			//卫生间计算方式
			if (wsj > 1) {
				sum = (wsj - 1) * 13600 + sum;
			}
		} else if (tx == 888) {
			mj = mj >= 81 ? mj: 81; 
			sum = (mj - 81) * 2074 + 340320; 
			//卫生间计算方式
			if (wsj > 1) {
				sum = (wsj - 1) * 28544 + sum;
			}
		}
		break; 
	case '20':
		//大连  
	if (tx == 588) {
			mj = mj >= 60 ? mj: 60;
			if (mj <= 70) {
				sum = (mj - 60) * 1020 + 138780;
			} else if (mj <= 79) {
				sum = (mj - 70) * 1170 + 150150;
			} else if (mj ==80) {
				sum =160660;
			} else if (mj <= 99) {
				sum = (mj - 81) * 990 + 161650;
			}else if (mj ==100) {
				sum =180590;
			} else if (mj <= 120) {
				sum = (mj - 101) * 1100 + 181690;
			} else if (mj <= 140) {
				sum = (mj - 121) * 1300 + 203890;
			} else if (mj > 140) {
				sum = (mj - 140) * 1300 + 203890;
			}

			//卫生间计算方式
			if (wsj > 1) {
				sum = (wsj - 1) * 29600 + sum;
			}
		} else if (tx == 888) {
			mj = mj >= 80 ? mj: 80;
			if (mj <= 88) {
				sum = (mj - 80) * 1630 + 311220;
			} else if (mj <= 98) {
				sum = (mj - 89) * 1570 + 325890;
			} else if (mj <= 118) {
				sum = (mj - 99) * 1610 + 341590;
			} else if (mj <= 140) {
				sum = (mj - 119) * 1800 + 373790;
			} else if (mj > 140) {
				sum = (mj - 140) * 1800 + 411590;
			}
			//卫生间计算方式
			if (wsj > 1) {
				sum = (wsj - 1) * 49200 + sum;
			}
		}
		break; 
	case '11':
		//苏州
		if (tx == 588) {
			mj = mj >= 60 ? mj: 60;
			if (mj <= 78) {
				sum = (mj - 60) * 970 + 128510;
			} else if (mj >= 79) {
				sum = (mj - 79) * 820 + 146900;
			}
			//卫生间计算方式
			if (wsj > 1) {
				sum = (wsj - 1) * 13800 + sum;
			}
		} else if (tx == 888) {
			mj = mj >= 80 ? mj: 80; 
			sum = (mj - 80) * 1510 + 289190; 
			//卫生间计算方式
			if (wsj > 1) {
				sum = (wsj - 1) * 42900 + sum;
			}
		}
		break; 
	case '21':
		//福州
		if (tx == 588) {
			mj = mj >= 60 ? mj: 60;
			sum = 135540 + (mj - 60) * 1100 + 13600 * (wsj - 1);
		} else if (tx == 888) {
			mj = mj >= 80 ? mj: 80; 
			sum = 336550 + (mj - 80) * 1800+ 48200 * (wsj - 1);
		}
		break; 
	case '8':
		//青岛
		if (tx == 588) {
			mj = mj >= 60 ? mj: 60;
			if (mj <= 78) {
				sum = (mj - 60) * 920 + 130780;
			}else if (mj <= 88) {
				sum = (mj - 79) * 980 + 148260;
			}else if (mj <= 98) {
				sum = (mj - 89) * 970 + 158060;
			}else if(mj==99){
				sum=167760;
			}else if(mj==100){
				sum=168570;
			}else if (mj <= 118) {
				sum = (mj - 101) * 830 + 171400;
			}else if (mj <= 128) {
				sum = (mj - 119) * 930 + 186340;
			}else if (mj <= 138) {
				sum = (mj - 129) * 940 + 195640;
			}else if (mj <= 168) {
				sum = (mj - 139) * 920 + 205040;
			}else if(mj==169){
				sum=232640;
			}else if(mj==170){
				sum=236960;
			}else if (mj > 170) {
				sum = (mj - 170) * 1140 + 236960;
			}
			
			//卫生间计算方式
			if (wsj > 1) {
				sum = (wsj - 1) * 14300 + sum;
			}
		} else if (tx == 888) {
			mj = mj >= 80 ? mj: 80;
			if (mj <= 98) {
				sum = (mj - 80) * 1500 + 301100;
			}else if(mj==99){
				sum=329600;
			}else if(mj==100){
				sum=330910;
			}else if (mj <= 108) {
				sum = (mj - 101) * 1330 + 334240;
			}else if (mj <= 118) {
				sum = (mj - 109) * 1350 + 344880;
			}else if (mj <= 128) {
				sum = (mj - 119) * 1420 + 358380;
			}else if (mj <= 168) {
				sum = (mj - 139) * 1440 + 387180;
			}else if (mj <= 169) {
				sum = 430380;
			}else if (mj <= 170) {
				sum = 435220;
			}
			//卫生间计算方式
			if (wsj > 1) {
				sum = (wsj - 1) * 46800 + sum;
			}
		}
		break; 
	case '22':
		//沈阳
		if (tx == 588) {
			mj = mj >= 60 ? mj: 60;
			if (mj <= 79) {
				sum = (mj - 60) * 885 + 117540;
			} else if (mj <= 99) {
				sum = (mj - 80) * 685 + 135040;
			} else if (mj <= 109) {
				sum = (mj - 100) * 885 + 148940;
			} else if (mj <= 119) {
				sum = (mj - 110) * 875 + 157780;
			} else if (mj <= 149) {
				sum = (mj - 120) * 685 + 166350;
			} else if (mj <= 170) {
				sum = (mj - 150) * 675 + 186890;
			}
			sum=sum+(mj*50);
			if (mj > 170) {
				sum = mj*1100;
			}
			//卫生间计算方式			
			if (wsj > 1) {
				sum = (wsj - 1) * 13600 + sum;
			}		
		} else if (tx == 888) {	
			if(wsj<3) {
				mj=mj<80?80:mj;
				if(mj<=98){
					sum=302220+(mj-80)*1360;	
				}else if(mj>=99 && mj<=103){
					sum=328060+(mj-99)*1640;
				}else if(mj>=104 && mj<=108){
					sum=336260+(mj-104)*1630;
				}else if(mj>=109 && mj<=113){
					sum=344410+(mj-109)*1620;
				}else if(mj>=114 && mj<=118){
					sum=352510+(mj-114)*1630;
				}else if(mj>=119 && mj<=138){
					sum=360660+(mj-119)*1690;
				}else if(mj>=139 && mj<=144){
					sum=394460+(mj-139)*1370;
				}else if(mj>=145 && mj<=170){
					sum=402680+(mj-145)*1350;
				}else if(mj>170) {
					sum=436430+(mj-170)*1800;
				}
				if (wsj > 1) {
					sum = (wsj - 1) * 47300 + sum;
				}
			} else {
				mj=mj<100?100:mj;
				if(mj<=103){
					sum=424300+(mj-100)*1640;	
				}else if(mj>=104 && mj<=108){
					sum=430860+(mj-104)*1630;
				}else if(mj>=109 && mj<=113){
					sum=439010+(mj-109)*1620;
				}else if(mj>=114 && mj<=118){
					sum=447110+(mj-114)*1630;
				}else if(mj>=119 && mj<=138){
					sum=455260+(mj-119)*1690;
				}else if(mj>=139 && mj<=144){
					sum=489060+(mj-139)*1370;
				}else if(mj>=145 && mj<=170){
					sum=497280+(mj-145)*1350;
				}else if(mj>170) {
					sum=436430+(mj-170)*1800;
				}
			}
		}
		break; 
	case '24':
		//杭州
		if (tx == 588) {
			mj = mj >= 60 ? mj: 60;
			if (mj <= 79) {
				sum = (mj - 60) * 885 + 117540;
			} else if (mj <= 99) {
				sum = (mj - 80) * 685 + 135040;
			} else if (mj <= 109) {
				sum = (mj - 100) * 885 + 148940;
			} else if (mj <= 119) {
				sum = (mj - 110) * 875 + 157780;
			} else if (mj <= 149) {
				sum = (mj - 120) * 685 + 166350;
			} else if (mj <= 170) {
				sum = (mj - 150) * 675 + 186890;
			}
			sum=sum+(mj*200);
			if (mj > 170) {
				sum = mj*1100;
			}
			//卫生间计算方式
			if (wsj > 1) {
				sum = (wsj - 1) * 13600 + sum;
			}
		} else if (tx == 888) {
			mj = mj >= 81 ? mj: 81; 
			sum = (mj - 81) * 2074 + 340320; 
			//卫生间计算方式
			if (wsj > 1) {
				sum = (wsj - 1) * 28544 + sum;
			}
		} 
		sum=sum*1.342;
		break; 
		//1.秘密花园 2.有宠之家3.屌丝绅士 4.月光族
	case '10':
		//上海
		if (tx == 588) {
			mj = mj >= 60 ? mj: 60;
			if (mj <= 79) {
				sum = (mj - 60) * 885 + 117540;
			} else if (mj <= 99) {
				sum = (mj - 80) * 685 + 135040;
			} else if (mj <= 109) {
				sum = (mj - 100) * 885 + 148940;
			} else if (mj <= 119) {
				sum = (mj - 110) * 875 + 157780;
			} else if (mj <= 149) {
				sum = (mj - 120) * 685 + 166350;
			} else if (mj <= 170) {
				sum = (mj - 150) * 675 + 186890;
			}
			sum=sum+(mj*200);
			if (mj > 170) {
				sum = mj*1100;
			}
			//卫生间计算方式
			if (wsj > 1) {
				sum = (wsj - 1) * 13600 + sum;
			}
		} else if (tx == 888) {
			mj = mj >= 81 ? mj: 81; 
			sum = (mj - 81) * 2074 + 340320; 
			//卫生间计算方式
			if (wsj > 1) {
				sum = (wsj - 1) * 28544 + sum;
			}
		} 
		break;  
	 case '25':
		//太原
		if (tx == 588) {
			mj = mj >= 60 ? mj: 60;
			if (mj <= 79) {
				sum = (mj - 60) * 1007 + 133702;
			} else if (mj <= 99) {
				sum = (mj - 80) * 779 + 153609;
			} else if (mj <= 109) {
				sum = (mj - 100) * 1007 + 169420;
			} else if (mj <= 119) {
				sum = (mj - 110) * 995 + 179476;
			} else if (mj <= 149) {
				sum = (mj - 120) * 779 + 189224;
			} else if (mj <= 170) {
				sum = (mj - 150) * 768 + 212589;
			}
			 
			if (mj > 170) {
				sum = mj*1100;
			}
			//卫生间计算方式
			if (wsj > 1) {
				sum = (wsj - 1) * 15470 + sum;
			}
		} else if (tx == 888) {
			mj = mj >= 81 ? mj: 81; 
			sum = (mj - 81) * 2074 + 340320; 
			//卫生间计算方式
			if (wsj > 1) {
				sum = (wsj - 1) * 28544 + sum;
			}
		} 
		break; 
	}
	return sum;
}

//拎包装 23分公司2016-09-08 版本  陈显伟   alert(getlbz(1,66,'cd'));

//重庆
var cqList=new Array();cqList[60]=134103;cqList[61]=135108;cqList[62]=136113;cqList[63]=137118;cqList[64]=138123;cqList[65]=139128;cqList[66]=140133;cqList[67]=141138;cqList[68]=142143;cqList[69]=143148;cqList[70]=144163;cqList[71]=145178;cqList[72]=146193;cqList[73]=147208;cqList[74]=148223;cqList[75]=149238;cqList[76]=150253;cqList[77]=151268;cqList[78]=152293;cqList[79]=153268;cqList[80]=154243;cqList[81]=155218;cqList[82]=156193;cqList[83]=157168;cqList[84]=158143;cqList[85]=159118;cqList[86]=160093;cqList[87]=161068;cqList[88]=162043;cqList[89]=163018;cqList[90]=163993;cqList[91]=164968;cqList[92]=165943;cqList[93]=166918;cqList[94]=167893;cqList[95]=168868;cqList[96]=169843;cqList[97]=170818;cqList[98]=171793;cqList[99]=172768;cqList[100]=173683;cqList[101]=174508;cqList[102]=175333;cqList[103]=176158;cqList[104]=176983;cqList[105]=177808;cqList[106]=178633;cqList[107]=179458;cqList[108]=180283;cqList[109]=181108;cqList[110]=181933;cqList[111]=182758;cqList[112]=183583;cqList[113]=184408;cqList[114]=185233;cqList[115]=186058;cqList[116]=186883;cqList[117]=187708;cqList[118]=188533;cqList[119]=189358;cqList[120]=190223;cqList[121]=191138;cqList[122]=192053;cqList[123]=192968;cqList[124]=193883;cqList[125]=194798;cqList[126]=195713;cqList[127]=196628;cqList[128]=197543;cqList[129]=198458;cqList[130]=199373;cqList[131]=200288;cqList[132]=201203;cqList[133]=202118;cqList[134]=203033;cqList[135]=203948;cqList[136]=204863;cqList[137]=205778;cqList[138]=206693;cqList[139]=207608;cqList[140]=208523;cqList[141]=209438;cqList[142]=210353;cqList[143]=211268;cqList[144]=212183;cqList[145]=213098;cqList[146]=214013;cqList[147]=214928;cqList[148]=215843;cqList[149]=216758;cqList[150]=217673;cqList[151]=218588;cqList[152]=219503;cqList[153]=220418;cqList[154]=221333;cqList[155]=222248;cqList[156]=223163;cqList[157]=224078;cqList[158]=224993;cqList[159]=225908;cqList[160]=226823;cqList[161]=227738;cqList[162]=228653;cqList[163]=229568;cqList[164]=230483;cqList[165]=231398;cqList[166]=232313;cqList[167]=233228;cqList[168]=234143;cqList[169]=235058;cqList[170]=235973;
//北京
var bjList=new Array();bjList[40]=116790;bjList[41]=117975;bjList[42]=119160;bjList[43]=120345;bjList[44]=121530;bjList[45]=122715;bjList[46]=123900;bjList[47]=125085;bjList[48]=126270;bjList[49]=127455;bjList[50]=128640;bjList[51]=129825;bjList[52]=131010;bjList[53]=132195;bjList[54]=133380;bjList[55]=134565;bjList[56]=135750;bjList[57]=136935;bjList[58]=138120;bjList[59]=139305;bjList[60]=140255;bjList[61]=141205;bjList[62]=142155;bjList[63]=143105;bjList[64]=144055;bjList[65]=145005;bjList[66]=145955;bjList[67]=146905;bjList[68]=147855;bjList[69]=148805;bjList[70]=149755;bjList[71]=150705;bjList[72]=151655;bjList[73]=152605;bjList[74]=153555;bjList[75]=154505;bjList[76]=155455;bjList[77]=156405;bjList[78]=157355;bjList[79]=158305;bjList[80]=159370;bjList[81]=160435;bjList[82]=161500;bjList[83]=162565;bjList[84]=163630;bjList[85]=164695;bjList[86]=165760;bjList[87]=166825;bjList[88]=167890;bjList[89]=168955;bjList[90]=170020;bjList[91]=171085;bjList[92]=172150;bjList[93]=173215;bjList[94]=174280;bjList[95]=175345;bjList[96]=176410;bjList[97]=177475;bjList[98]=178540;bjList[99]=179605;bjList[100]=180535;bjList[101]=181465;bjList[102]=182395;bjList[103]=183325;bjList[104]=184255;bjList[105]=185185;bjList[106]=186115;bjList[107]=187045;bjList[108]=187975;bjList[109]=188905;bjList[110]=189835;bjList[111]=190765;bjList[112]=191695;bjList[113]=192625;bjList[114]=193555;bjList[115]=194485;bjList[116]=195415;bjList[117]=196345;bjList[118]=197275;bjList[119]=198205;bjList[120]=199215;bjList[121]=200225;bjList[122]=201235;bjList[123]=202245;bjList[124]=203255;bjList[125]=204265;bjList[126]=205275;bjList[127]=206285;bjList[128]=207295;bjList[129]=208305;bjList[130]=209315;bjList[131]=210325;bjList[132]=211335;bjList[133]=212345;bjList[134]=213355;bjList[135]=214365;bjList[136]=215375;bjList[137]=216385;bjList[138]=217395;bjList[139]=218405;bjList[140]=219415;bjList[141]=220425;bjList[142]=221435;bjList[143]=222445;bjList[144]=223455;bjList[145]=224465;bjList[146]=225475;bjList[147]=226485;bjList[148]=227495;bjList[149]=228505;bjList[150]=229515;bjList[151]=230525;bjList[152]=231535;bjList[153]=232545;bjList[154]=233555;bjList[155]=234565;bjList[156]=235575;bjList[157]=236585;bjList[158]=237595;bjList[159]=238605;bjList[160]=239615;bjList[161]=240625;bjList[162]=241635;bjList[163]=242645;bjList[164]=243655;bjList[165]=244665;bjList[166]=245675;bjList[167]=246685;bjList[168]=247695;bjList[169]=248705;bjList[170]=249715;
//成都
var cdList=new Array();cdList[40]=109887;cdList[41]=110764;cdList[42]=111641;cdList[43]=112518;cdList[44]=113395;cdList[45]=114272;cdList[46]=115149;cdList[47]=116026;cdList[48]=116903;cdList[49]=117780;cdList[50]=118657;cdList[51]=119534;cdList[52]=120411;cdList[53]=121288;cdList[54]=122165;cdList[55]=123042;cdList[56]=123919;cdList[57]=124796;cdList[58]=125673;cdList[59]=126550;cdList[60]=127437;cdList[61]=128494;cdList[62]=129551;cdList[63]=130608;cdList[64]=131665;cdList[65]=132722;cdList[66]=133779;cdList[67]=134836;cdList[68]=135893;cdList[69]=136950;cdList[70]=138007;cdList[71]=139064;cdList[72]=140121;cdList[73]=141178;cdList[74]=142235;cdList[75]=143292;cdList[76]=144349;cdList[77]=145406;cdList[78]=146323;cdList[79]=147240;cdList[80]=147987;cdList[81]=148734;cdList[82]=149481;cdList[83]=150228;cdList[84]=150975;cdList[85]=151722;cdList[86]=152469;cdList[87]=153216;cdList[88]=153963;cdList[89]=154710;cdList[90]=155457;cdList[91]=156204;cdList[92]=156951;cdList[93]=157698;cdList[94]=158445;cdList[95]=159192;cdList[96]=159939;cdList[97]=160686;cdList[98]=161433;cdList[99]=162180;cdList[100]=163227;cdList[101]=164274;cdList[102]=165321;cdList[103]=166368;cdList[104]=167415;cdList[105]=168462;cdList[106]=169509;cdList[107]=170556;cdList[108]=171603;cdList[109]=172650;cdList[110]=173697;cdList[111]=174744;cdList[112]=175791;cdList[113]=176838;cdList[114]=177885;cdList[115]=178932;cdList[116]=179979;cdList[117]=181026;cdList[118]=182073;cdList[119]=183120;cdList[120]=183877;cdList[121]=184634;cdList[122]=185391;cdList[123]=186148;cdList[124]=186905;cdList[125]=187662;cdList[126]=188419;cdList[127]=189176;cdList[128]=189933;cdList[129]=190690;cdList[130]=191447;cdList[131]=192204;cdList[132]=192961;cdList[133]=193718;cdList[134]=194475;cdList[135]=195232;cdList[136]=195989;cdList[137]=196746;cdList[138]=197503;cdList[139]=198260;cdList[140]=199017;cdList[141]=199774;cdList[142]=200531;cdList[143]=201288;cdList[144]=202045;cdList[145]=202802;cdList[146]=203559;cdList[147]=204316;cdList[148]=205073;cdList[149]=205830;cdList[150]=206587;cdList[151]=207344;cdList[152]=208101;cdList[153]=208858;cdList[154]=209615;cdList[155]=210372;cdList[156]=211129;cdList[157]=211886;cdList[158]=212643;cdList[159]=213400;cdList[160]=214157;cdList[161]=214914;cdList[162]=215671;cdList[163]=216428;cdList[164]=217185;cdList[165]=217942;cdList[166]=218699;cdList[167]=219456;cdList[168]=220213;cdList[169]=220970;cdList[170]=221727;
//大连
var dlList=new Array();dlList[60]=142613;dlList[61]=143743;dlList[62]=144873;dlList[63]=146003;dlList[64]=147133;dlList[65]=148263;dlList[66]=149393;dlList[67]=150523;dlList[68]=151653;dlList[69]=152783;dlList[70]=153913;dlList[71]=155043;dlList[72]=156173;dlList[73]=157303;dlList[74]=158433;dlList[75]=159563;dlList[76]=160693;dlList[77]=161823;dlList[78]=162953;dlList[79]=164083;dlList[80]=165143;dlList[81]=166203;dlList[82]=167263;dlList[83]=168323;dlList[84]=169383;dlList[85]=170443;dlList[86]=171503;dlList[87]=172563;dlList[88]=173623;dlList[89]=174683;dlList[90]=175733;dlList[91]=176883;dlList[92]=178033;dlList[93]=179183;dlList[94]=180333;dlList[95]=181483;dlList[96]=182633;dlList[97]=183783;dlList[98]=184933;dlList[99]=186083;dlList[100]=187193;dlList[101]=188303;dlList[102]=189413;dlList[103]=190523;dlList[104]=191633;dlList[105]=192743;dlList[106]=193853;dlList[107]=194963;dlList[108]=196073;dlList[109]=197183;dlList[110]=198283;dlList[111]=199383;dlList[112]=200483;dlList[113]=201583;dlList[114]=202683;dlList[115]=203783;dlList[116]=204753;dlList[117]=205723;dlList[118]=206693;dlList[119]=207663;dlList[120]=208603;dlList[121]=209543;dlList[122]=210483;dlList[123]=211423;dlList[124]=212363;dlList[125]=213303;dlList[126]=214243;dlList[127]=215183;dlList[128]=216123;dlList[129]=217063;dlList[130]=218003;dlList[131]=218943;dlList[132]=219883;dlList[133]=220823;dlList[134]=221763;dlList[135]=222703;dlList[136]=223643;dlList[137]=224583;dlList[138]=225523;dlList[139]=226463;dlList[140]=227393;dlList[141]=228323;dlList[142]=229253;dlList[143]=230183;dlList[144]=231113;dlList[145]=232043;dlList[146]=232973;dlList[147]=233903;dlList[148]=234833;dlList[149]=235763;dlList[150]=236693;dlList[151]=237623;dlList[152]=238553;dlList[153]=239483;dlList[154]=240413;dlList[155]=241343;dlList[156]=242273;dlList[157]=243203;dlList[158]=244133;dlList[159]=245063;dlList[160]=245993;dlList[161]=246923;dlList[162]=247853;dlList[163]=248783;dlList[164]=249713;dlList[165]=250643;dlList[166]=251573;dlList[167]=252503;dlList[168]=253433;dlList[169]=254363;dlList[170]=255293;
//福州
var fzList=new Array();fzList[50]=142933;fzList[51]=144113;fzList[52]=145293;fzList[53]=146473;fzList[54]=147653;fzList[55]=148833;fzList[56]=150013;fzList[57]=151193;fzList[58]=152373;fzList[59]=153553;fzList[60]=154733;fzList[61]=155913;fzList[62]=157093;fzList[63]=158273;fzList[64]=159453;fzList[65]=160633;fzList[66]=161813;fzList[67]=162993;fzList[68]=164173;fzList[69]=165353;fzList[70]=166533;fzList[71]=167713;fzList[72]=168893;fzList[73]=170073;fzList[74]=171253;fzList[75]=172433;fzList[76]=173613;fzList[77]=174793;fzList[78]=175973;fzList[79]=177103;fzList[80]=178063;fzList[81]=179023;fzList[82]=179983;fzList[83]=180943;fzList[84]=181903;fzList[85]=182863;fzList[86]=183823;fzList[87]=184783;fzList[88]=185743;fzList[89]=186703;fzList[90]=187663;fzList[91]=188623;fzList[92]=189583;fzList[93]=190543;fzList[94]=191643;fzList[95]=192743;fzList[96]=193843;fzList[97]=194943;fzList[98]=196043;fzList[99]=197173;fzList[100]=198433;fzList[101]=199693;fzList[102]=200953;fzList[103]=202213;fzList[104]=203473;fzList[105]=204733;fzList[106]=205993;fzList[107]=207253;fzList[108]=208513;fzList[109]=209773;fzList[110]=211033;fzList[111]=212293;fzList[112]=213553;fzList[113]=214813;fzList[114]=216073;fzList[115]=217333;fzList[116]=218593;fzList[117]=219853;fzList[118]=221113;fzList[119]=222373;fzList[120]=223433;fzList[121]=224493;fzList[122]=225553;fzList[123]=226613;fzList[124]=227673;fzList[125]=228733;fzList[126]=229793;fzList[127]=230853;fzList[128]=231913;fzList[129]=232973;fzList[130]=234033;fzList[131]=235093;fzList[132]=236153;fzList[133]=237213;fzList[134]=238273;fzList[135]=239333;fzList[136]=240393;fzList[137]=241453;fzList[138]=242513;fzList[139]=243573;fzList[140]=244633;fzList[141]=245693;fzList[142]=246753;fzList[143]=247813;fzList[144]=248873;fzList[145]=249933;fzList[146]=250993;fzList[147]=252053;fzList[148]=253113;fzList[149]=254173;fzList[150]=255233;fzList[151]=256293;fzList[152]=257353;fzList[153]=258413;fzList[154]=259473;fzList[155]=260533;fzList[156]=261593;fzList[157]=262653;fzList[158]=263713;fzList[159]=264773;fzList[160]=265833;fzList[161]=266893;fzList[162]=267953;fzList[163]=269013;fzList[164]=270073;fzList[165]=271133;fzList[166]=272193;fzList[167]=273253;fzList[168]=274313;fzList[169]=275373;fzList[170]=276433;
//广州
var gzList=new Array();gzList[40]=121203;gzList[41]=122312;gzList[42]=123421;gzList[43]=124530;gzList[44]=125639;gzList[45]=126748;gzList[46]=127857;gzList[47]=128966;gzList[48]=130075;gzList[49]=131184;gzList[50]=132293;gzList[51]=133402;gzList[52]=134511;gzList[53]=135620;gzList[54]=136729;gzList[55]=137838;gzList[56]=138947;gzList[57]=140056;gzList[58]=141165;gzList[59]=142274;gzList[60]=143393;gzList[61]=144512;gzList[62]=145631;gzList[63]=146750;gzList[64]=147869;gzList[65]=148988;gzList[66]=150107;gzList[67]=151226;gzList[68]=152345;gzList[69]=153464;gzList[70]=154583;gzList[71]=155702;gzList[72]=156821;gzList[73]=157940;gzList[74]=159059;gzList[75]=160178;gzList[76]=161297;gzList[77]=162416;gzList[78]=163535;gzList[79]=164654;gzList[80]=165633;gzList[81]=166612;gzList[82]=167591;gzList[83]=168570;gzList[84]=169549;gzList[85]=170528;gzList[86]=171507;gzList[87]=172486;gzList[88]=173465;gzList[89]=174444;gzList[90]=175423;gzList[91]=176402;gzList[92]=177381;gzList[93]=178360;gzList[94]=179339;gzList[95]=180318;gzList[96]=181297;gzList[97]=182276;gzList[98]=183325;gzList[99]=184374;gzList[100]=185423;gzList[101]=186472;gzList[102]=187521;gzList[103]=188570;gzList[104]=189619;gzList[105]=190668;gzList[106]=191717;gzList[107]=192766;gzList[108]=193815;gzList[109]=194864;gzList[110]=195913;gzList[111]=196962;gzList[112]=198011;gzList[113]=199060;gzList[114]=200109;gzList[115]=201158;gzList[116]=202207;gzList[117]=203256;gzList[118]=204305;gzList[119]=205354;gzList[120]=206393;gzList[121]=207432;gzList[122]=208471;gzList[123]=209510;gzList[124]=210549;gzList[125]=211588;gzList[126]=212627;gzList[127]=213666;gzList[128]=214705;gzList[129]=215744;gzList[130]=216783;gzList[131]=217822;gzList[132]=218861;gzList[133]=219900;gzList[134]=220939;gzList[135]=221978;gzList[136]=223017;gzList[137]=224056;gzList[138]=225095;gzList[139]=226134;gzList[140]=227173;gzList[141]=228212;gzList[142]=229251;gzList[143]=230290;gzList[144]=231329;gzList[145]=232368;gzList[146]=233407;gzList[147]=234446;gzList[148]=235485;gzList[149]=236524;gzList[150]=237563;gzList[151]=238602;gzList[152]=239641;gzList[153]=240680;gzList[154]=241719;gzList[155]=242758;gzList[156]=243797;gzList[157]=244836;gzList[158]=245875;gzList[159]=246914;gzList[160]=247953;gzList[161]=248992;gzList[162]=250031;gzList[163]=251070;gzList[164]=252109;gzList[165]=253148;gzList[166]=254187;gzList[167]=255226;gzList[168]=256265;gzList[169]=257304;gzList[170]=258343;
//贵阳
var gyList=new Array();gyList[60]=131447;gyList[61]=132462;gyList[62]=133477;gyList[63]=134492;gyList[64]=135507;gyList[65]=136522;gyList[66]=137537;gyList[67]=138552;gyList[68]=139567;gyList[69]=140582;gyList[70]=141597;gyList[71]=142612;gyList[72]=143627;gyList[73]=144642;gyList[74]=145657;gyList[75]=146672;gyList[76]=147687;gyList[77]=148702;gyList[78]=149717;gyList[79]=150732;gyList[80]=151637;gyList[81]=152542;gyList[82]=153447;gyList[83]=154352;gyList[84]=155257;gyList[85]=156162;gyList[86]=157067;gyList[87]=157972;gyList[88]=158877;gyList[89]=159782;gyList[90]=160687;gyList[91]=161592;gyList[92]=162497;gyList[93]=163402;gyList[94]=164307;gyList[95]=165212;gyList[96]=166117;gyList[97]=167022;gyList[98]=168007;gyList[99]=168992;gyList[100]=169907;gyList[101]=170822;gyList[102]=171737;gyList[103]=172652;gyList[104]=173567;gyList[105]=174482;gyList[106]=175397;gyList[107]=176312;gyList[108]=177227;gyList[109]=178142;gyList[110]=179057;gyList[111]=179972;gyList[112]=180887;gyList[113]=181802;gyList[114]=182717;gyList[115]=183632;gyList[116]=184547;gyList[117]=185462;gyList[118]=186377;gyList[119]=187232;gyList[120]=188187;gyList[121]=189142;gyList[122]=190097;gyList[123]=191052;gyList[124]=192007;gyList[125]=192962;gyList[126]=193917;gyList[127]=194872;gyList[128]=195827;gyList[129]=196782;gyList[130]=197727;gyList[131]=198672;gyList[132]=199617;gyList[133]=200562;gyList[134]=201507;gyList[135]=202452;gyList[136]=203397;gyList[137]=204342;gyList[138]=205287;gyList[139]=206232;gyList[140]=207177;gyList[141]=208122;gyList[142]=209067;gyList[143]=210012;gyList[144]=210957;gyList[145]=211902;gyList[146]=212847;gyList[147]=213792;gyList[148]=214737;gyList[149]=215682;gyList[150]=216627;gyList[151]=217572;gyList[152]=218517;gyList[153]=219462;gyList[154]=220407;gyList[155]=221352;gyList[156]=222297;gyList[157]=223242;gyList[158]=224187;gyList[159]=225132;gyList[160]=226077;gyList[161]=227022;gyList[162]=227967;gyList[163]=228912;gyList[164]=229857;gyList[165]=230802;gyList[166]=231747;gyList[167]=232692;gyList[168]=233637;gyList[169]=234582;gyList[170]=235527;
//杭州
var hzList=new Array();hzList[60]=145491;hzList[61]=146561;hzList[62]=147631;hzList[63]=148701;hzList[64]=149771;hzList[65]=150841;hzList[66]=151911;hzList[67]=152981;hzList[68]=154051;hzList[69]=155121;hzList[70]=156191;hzList[71]=157261;hzList[72]=158331;hzList[73]=159331;hzList[74]=160331;hzList[75]=161331;hzList[76]=162331;hzList[77]=163331;hzList[78]=164331;hzList[79]=165331;hzList[80]=166346;hzList[81]=167361;hzList[82]=168376;hzList[83]=169391;hzList[84]=170406;hzList[85]=171421;hzList[86]=172436;hzList[87]=173451;hzList[88]=174466;hzList[89]=175481;hzList[90]=176496;hzList[91]=177511;hzList[92]=178526;hzList[93]=179646;hzList[94]=180766;hzList[95]=181886;hzList[96]=183006;hzList[97]=184126;hzList[98]=185246;hzList[99]=186366;hzList[100]=187371;hzList[101]=188376;hzList[102]=189381;hzList[103]=190386;hzList[104]=191391;hzList[105]=192396;hzList[106]=193401;hzList[107]=194406;hzList[108]=195411;hzList[109]=196416;hzList[110]=197421;hzList[111]=198426;hzList[112]=199431;hzList[113]=200436;hzList[114]=201441;hzList[115]=202446;hzList[116]=203451;hzList[117]=204456;hzList[118]=205461;hzList[119]=206291;hzList[120]=207331;hzList[121]=208371;hzList[122]=209411;hzList[123]=210451;hzList[124]=211491;hzList[125]=212531;hzList[126]=213571;hzList[127]=214611;hzList[128]=215651;hzList[129]=216691;hzList[130]=217731;hzList[131]=218771;hzList[132]=219811;hzList[133]=220851;hzList[134]=221891;hzList[135]=222931;hzList[136]=223971;hzList[137]=225011;hzList[138]=226051;hzList[139]=227091;hzList[140]=228131;hzList[141]=229171;hzList[142]=230211;hzList[143]=231251;hzList[144]=232291;hzList[145]=233331;hzList[146]=234371;hzList[147]=235411;hzList[148]=236451;hzList[149]=237491;hzList[150]=238531;hzList[151]=239571;hzList[152]=240611;hzList[153]=241651;hzList[154]=242691;hzList[155]=243731;hzList[156]=244771;hzList[157]=245811;hzList[158]=246851;hzList[159]=247891;hzList[160]=248931;hzList[161]=249971;hzList[162]=251011;hzList[163]=252051;hzList[164]=253091;hzList[165]=254131;hzList[166]=255171;hzList[167]=256211;hzList[168]=257251;hzList[169]=258291;hzList[170]=259331;
//合肥
var hfList=new Array();hfList[60]=129217;hfList[61]=130134;hfList[62]=131051;hfList[63]=131968;hfList[64]=132885;hfList[65]=133802;hfList[66]=134719;hfList[67]=135636;hfList[68]=136553;hfList[69]=137470;hfList[70]=138387;hfList[71]=139304;hfList[72]=140221;hfList[73]=141138;hfList[74]=142055;hfList[75]=142972;hfList[76]=143889;hfList[77]=144806;hfList[78]=145723;hfList[79]=146640;hfList[80]=147487;hfList[81]=148334;hfList[82]=149181;hfList[83]=150028;hfList[84]=150875;hfList[85]=151722;hfList[86]=152569;hfList[87]=153416;hfList[88]=154263;hfList[89]=155110;hfList[90]=155977;hfList[91]=156844;hfList[92]=157711;hfList[93]=158578;hfList[94]=159445;hfList[95]=160312;hfList[96]=161179;hfList[97]=162046;hfList[98]=162913;hfList[99]=163780;hfList[100]=164707;hfList[101]=165634;hfList[102]=166561;hfList[103]=167488;hfList[104]=168415;hfList[105]=169342;hfList[106]=170269;hfList[107]=171196;hfList[108]=172123;hfList[109]=173050;hfList[110]=173977;hfList[111]=174904;hfList[112]=175831;hfList[113]=176758;hfList[114]=177685;hfList[115]=178612;hfList[116]=179539;hfList[117]=180326;hfList[118]=181113;hfList[119]=181900;hfList[120]=182657;hfList[121]=183414;hfList[122]=184171;hfList[123]=184928;hfList[124]=185685;hfList[125]=186442;hfList[126]=187199;hfList[127]=187956;hfList[128]=188713;hfList[129]=189470;hfList[130]=190227;hfList[131]=190984;hfList[132]=191741;hfList[133]=192498;hfList[134]=193255;hfList[135]=194012;hfList[136]=194769;hfList[137]=195526;hfList[138]=196283;hfList[139]=197040;hfList[140]=197797;hfList[141]=198554;hfList[142]=199311;hfList[143]=200068;hfList[144]=200825;hfList[145]=201582;hfList[146]=202339;hfList[147]=203096;hfList[148]=203853;hfList[149]=204610;hfList[150]=205367;hfList[151]=206124;hfList[152]=206881;hfList[153]=207638;hfList[154]=208395;hfList[155]=209152;hfList[156]=209909;hfList[157]=210666;hfList[158]=211423;hfList[159]=212180;hfList[160]=212937;hfList[161]=213694;hfList[162]=214451;hfList[163]=215208;hfList[164]=215965;hfList[165]=216722;hfList[166]=217479;hfList[167]=218236;hfList[168]=218993;hfList[169]=219750;hfList[170]=220507;
//济南
var jnList=new Array();jnList[60]=132687;jnList[61]=133684;jnList[62]=134681;jnList[63]=135678;jnList[64]=136675;jnList[65]=137672;jnList[66]=138669;jnList[67]=139666;jnList[68]=140663;jnList[69]=141660;jnList[70]=142657;jnList[71]=143654;jnList[72]=144651;jnList[73]=145648;jnList[74]=146645;jnList[75]=147642;jnList[76]=148639;jnList[77]=149636;jnList[78]=150633;jnList[79]=151630;jnList[80]=152547;jnList[81]=153464;jnList[82]=154381;jnList[83]=155298;jnList[84]=156215;jnList[85]=157132;jnList[86]=158049;jnList[87]=158966;jnList[88]=159883;jnList[89]=160800;jnList[90]=161717;jnList[91]=162634;jnList[92]=163551;jnList[93]=164468;jnList[94]=165385;jnList[95]=166302;jnList[96]=167219;jnList[97]=168136;jnList[98]=169053;jnList[99]=169970;jnList[100]=170877;jnList[101]=171784;jnList[102]=172691;jnList[103]=173598;jnList[104]=174505;jnList[105]=175412;jnList[106]=176319;jnList[107]=177226;jnList[108]=178133;jnList[109]=179040;jnList[110]=179947;jnList[111]=180854;jnList[112]=181761;jnList[113]=182668;jnList[114]=183575;jnList[115]=184482;jnList[116]=185389;jnList[117]=186296;jnList[118]=187203;jnList[119]=188110;jnList[120]=189077;jnList[121]=190044;jnList[122]=191011;jnList[123]=191978;jnList[124]=192945;jnList[125]=193912;jnList[126]=194879;jnList[127]=195846;jnList[128]=196813;jnList[129]=197780;jnList[130]=198747;jnList[131]=199714;jnList[132]=200681;jnList[133]=201648;jnList[134]=202615;jnList[135]=203582;jnList[136]=204549;jnList[137]=205516;jnList[138]=206483;jnList[139]=207450;jnList[140]=208417;jnList[141]=209384;jnList[142]=210351;jnList[143]=211318;jnList[144]=212285;jnList[145]=213252;jnList[146]=214219;jnList[147]=215186;jnList[148]=216153;jnList[149]=217120;jnList[150]=218087;jnList[151]=219054;jnList[152]=220021;jnList[153]=220988;jnList[154]=221955;jnList[155]=222922;jnList[156]=223889;jnList[157]=224856;jnList[158]=225823;jnList[159]=226790;jnList[160]=227757;jnList[161]=228724;jnList[162]=229691;jnList[163]=230658;jnList[164]=231625;jnList[165]=232592;jnList[166]=233559;jnList[167]=234526;jnList[168]=235493;jnList[169]=236460;jnList[170]=237427;
//昆明
var kmList=new Array();kmList[40]=115587;kmList[41]=116304;kmList[42]=117021;kmList[43]=117738;kmList[44]=118455;kmList[45]=119172;kmList[46]=119889;kmList[47]=120606;kmList[48]=121323;kmList[49]=122040;kmList[50]=122757;kmList[51]=123474;kmList[52]=124191;kmList[53]=124908;kmList[54]=125625;kmList[55]=126342;kmList[56]=127059;kmList[57]=127776;kmList[58]=128493;kmList[59]=129210;kmList[60]=130127;kmList[61]=131114;kmList[62]=132101;kmList[63]=133088;kmList[64]=134075;kmList[65]=135062;kmList[66]=136049;kmList[67]=137036;kmList[68]=138023;kmList[69]=139010;kmList[70]=139997;kmList[71]=140984;kmList[72]=141971;kmList[73]=142958;kmList[74]=143945;kmList[75]=144932;kmList[76]=145919;kmList[77]=146906;kmList[78]=147893;kmList[79]=148880;kmList[80]=149687;kmList[81]=150494;kmList[82]=151301;kmList[83]=152108;kmList[84]=152915;kmList[85]=153722;kmList[86]=154529;kmList[87]=155336;kmList[88]=156143;kmList[89]=156950;kmList[90]=157757;kmList[91]=158564;kmList[92]=159371;kmList[93]=160178;kmList[94]=160985;kmList[95]=161792;kmList[96]=162599;kmList[97]=163406;kmList[98]=164213;kmList[99]=165020;kmList[100]=166027;kmList[101]=167034;kmList[102]=168041;kmList[103]=169048;kmList[104]=170055;kmList[105]=171062;kmList[106]=172069;kmList[107]=173076;kmList[108]=174083;kmList[109]=175090;kmList[110]=176087;kmList[111]=177084;kmList[112]=178081;kmList[113]=179078;kmList[114]=180075;kmList[115]=181072;kmList[116]=182069;kmList[117]=183066;kmList[118]=184063;kmList[119]=185060;kmList[120]=185857;kmList[121]=186584;kmList[122]=187311;kmList[123]=188038;kmList[124]=188765;kmList[125]=189492;kmList[126]=190219;kmList[127]=190946;kmList[128]=191673;kmList[129]=192400;kmList[130]=193127;kmList[131]=193854;kmList[132]=194581;kmList[133]=195308;kmList[134]=196035;kmList[135]=196762;kmList[136]=197489;kmList[137]=198216;kmList[138]=198943;kmList[139]=199670;kmList[140]=200377;kmList[141]=201084;kmList[142]=201791;kmList[143]=202498;kmList[144]=203205;kmList[145]=203912;kmList[146]=204619;kmList[147]=205326;kmList[148]=206033;kmList[149]=206740;kmList[150]=207447;kmList[151]=208154;kmList[152]=208861;kmList[153]=209568;kmList[154]=210275;kmList[155]=210982;kmList[156]=211689;kmList[157]=212396;kmList[158]=213103;kmList[159]=213810;kmList[160]=214517;kmList[161]=215224;kmList[162]=215931;kmList[163]=216638;kmList[164]=217345;kmList[165]=218052;kmList[166]=218759;kmList[167]=219466;kmList[168]=220173;kmList[169]=220880;kmList[170]=221587;
//南充
var ncList=new Array();ncList[60]=89187;ncList[61]=90092;ncList[62]=90997;ncList[63]=91902;ncList[64]=92807;ncList[65]=93712;ncList[66]=94617;ncList[67]=95522;ncList[68]=96427;ncList[69]=97332;ncList[70]=98237;ncList[71]=99142;ncList[72]=100047;ncList[73]=100952;ncList[74]=101857;ncList[75]=102762;ncList[76]=103667;ncList[77]=104572;ncList[78]=105477;ncList[79]=106382;ncList[80]=107187;ncList[81]=107992;ncList[82]=108797;ncList[83]=109602;ncList[84]=110407;ncList[85]=111212;ncList[86]=112017;ncList[87]=112822;ncList[88]=113627;ncList[89]=114432;ncList[90]=115237;ncList[91]=116042;ncList[92]=116847;ncList[93]=117652;ncList[94]=118457;ncList[95]=119262;ncList[96]=120067;ncList[97]=120872;ncList[98]=121677;ncList[99]=122482;ncList[100]=123317;ncList[101]=124152;ncList[102]=124987;ncList[103]=125822;ncList[104]=126657;ncList[105]=127492;ncList[106]=128327;ncList[107]=129162;ncList[108]=129997;ncList[109]=130832;ncList[110]=131667;ncList[111]=132502;ncList[112]=133337;ncList[113]=134172;ncList[114]=135007;ncList[115]=135842;ncList[116]=136677;ncList[117]=137512;ncList[118]=138347;ncList[119]=139182;ncList[120]=140057;ncList[121]=140932;ncList[122]=141807;ncList[123]=142682;ncList[124]=143557;ncList[125]=144432;ncList[126]=145307;ncList[127]=146182;ncList[128]=147057;ncList[129]=147932;ncList[130]=148807;ncList[131]=149682;ncList[132]=150557;ncList[133]=151432;ncList[134]=152307;ncList[135]=153182;ncList[136]=154057;ncList[137]=154932;ncList[138]=155807;ncList[139]=156682;ncList[140]=157547;ncList[141]=158412;ncList[142]=159277;ncList[143]=160142;ncList[144]=161007;ncList[145]=161872;ncList[146]=162737;ncList[147]=163602;ncList[148]=164467;ncList[149]=165332;ncList[150]=166197;ncList[151]=167062;ncList[152]=167927;ncList[153]=168792;ncList[154]=169657;ncList[155]=170522;ncList[156]=171387;ncList[157]=172252;ncList[158]=173117;ncList[159]=173982;ncList[160]=174847;ncList[161]=175712;ncList[162]=176577;ncList[163]=177442;ncList[164]=178307;ncList[165]=179172;ncList[166]=180037;ncList[167]=180902;ncList[168]=181767;ncList[169]=182632;ncList[170]=183497;
//南京
var njList=new Array();njList[60]=134347;njList[61]=135379;njList[62]=136411;njList[63]=137443;njList[64]=138475;njList[65]=139507;njList[66]=140539;njList[67]=141571;njList[68]=142603;njList[69]=143635;njList[70]=144657;njList[71]=145679;njList[72]=146701;njList[73]=147723;njList[74]=148745;njList[75]=149767;njList[76]=150789;njList[77]=151811;njList[78]=152833;njList[79]=153815;njList[80]=154727;njList[81]=155639;njList[82]=156551;njList[83]=157463;njList[84]=158375;njList[85]=159287;njList[86]=160199;njList[87]=161111;njList[88]=162023;njList[89]=162935;njList[90]=163847;njList[91]=164759;njList[92]=165671;njList[93]=166583;njList[94]=167495;njList[95]=168407;njList[96]=169319;njList[97]=170231;njList[98]=171143;njList[99]=172055;njList[100]=173077;njList[101]=174099;njList[102]=175121;njList[103]=176143;njList[104]=177165;njList[105]=178187;njList[106]=179209;njList[107]=180231;njList[108]=181253;njList[109]=182275;njList[110]=183297;njList[111]=184319;njList[112]=185341;njList[113]=186363;njList[114]=187385;njList[115]=188407;njList[116]=189429;njList[117]=190451;njList[118]=191473;njList[119]=192495;njList[120]=193407;njList[121]=194319;njList[122]=195231;njList[123]=196143;njList[124]=197055;njList[125]=197967;njList[126]=198879;njList[127]=199791;njList[128]=200703;njList[129]=201615;njList[130]=202527;njList[131]=203439;njList[132]=204351;njList[133]=205263;njList[134]=206175;njList[135]=207087;njList[136]=207999;njList[137]=208911;njList[138]=209823;njList[139]=210735;njList[140]=211647;njList[141]=212559;njList[142]=213471;njList[143]=214383;njList[144]=215295;njList[145]=216207;njList[146]=217119;njList[147]=218031;njList[148]=218943;njList[149]=219855;njList[150]=220767;njList[151]=221679;njList[152]=222591;njList[153]=223503;njList[154]=224415;njList[155]=225327;njList[156]=226239;njList[157]=227151;njList[158]=228063;njList[159]=228975;njList[160]=229887;njList[161]=230799;njList[162]=231711;njList[163]=232623;njList[164]=233535;njList[165]=234447;njList[166]=235359;njList[167]=236271;njList[168]=237183;njList[169]=238095;njList[170]=239007;
//青岛
var qdList=new Array();qdList[50]=125683;qdList[51]=126617;qdList[52]=127551;qdList[53]=128485;qdList[54]=129419;qdList[55]=130353;qdList[56]=131287;qdList[57]=132221;qdList[58]=133155;qdList[59]=134089;qdList[60]=134983;qdList[61]=135857;qdList[62]=136731;qdList[63]=137605;qdList[64]=138479;qdList[65]=139353;qdList[66]=140227;qdList[67]=141101;qdList[68]=141975;qdList[69]=142849;qdList[70]=143723;qdList[71]=144707;qdList[72]=145691;qdList[73]=146675;qdList[74]=147659;qdList[75]=148643;qdList[76]=149627;qdList[77]=150611;qdList[78]=151595;qdList[79]=152579;qdList[80]=153543;qdList[81]=154507;qdList[82]=155471;qdList[83]=156435;qdList[84]=157399;qdList[85]=158363;qdList[86]=159327;qdList[87]=160291;qdList[88]=161255;qdList[89]=162219;qdList[90]=163183;qdList[91]=164147;qdList[92]=165111;qdList[93]=166075;qdList[94]=167039;qdList[95]=168003;qdList[96]=168857;qdList[97]=169591;qdList[98]=170325;qdList[99]=171059;qdList[100]=171943;qdList[101]=172827;qdList[102]=173711;qdList[103]=174595;qdList[104]=175479;qdList[105]=176363;qdList[106]=177247;qdList[107]=178131;qdList[108]=179015;qdList[109]=179899;qdList[110]=180783;qdList[111]=181667;qdList[112]=182551;qdList[113]=183435;qdList[114]=184319;qdList[115]=185203;qdList[116]=186087;qdList[117]=186971;qdList[118]=187855;qdList[119]=188739;qdList[120]=189613;qdList[121]=190487;qdList[122]=191361;qdList[123]=192235;qdList[124]=193109;qdList[125]=193983;qdList[126]=194857;qdList[127]=195731;qdList[128]=196605;qdList[129]=197499;qdList[130]=198393;qdList[131]=199287;qdList[132]=200181;qdList[133]=201075;qdList[134]=201969;qdList[135]=202863;qdList[136]=203757;qdList[137]=204651;qdList[138]=205545;qdList[139]=206439;qdList[140]=207333;qdList[141]=208227;qdList[142]=209121;qdList[143]=210015;qdList[144]=210909;qdList[145]=211803;qdList[146]=212697;qdList[147]=213591;qdList[148]=214485;qdList[149]=215379;qdList[150]=216273;qdList[151]=217167;qdList[152]=218061;qdList[153]=218955;qdList[154]=219849;qdList[155]=220743;qdList[156]=221637;qdList[157]=222531;qdList[158]=223425;qdList[159]=224319;qdList[160]=225213;qdList[161]=226107;qdList[162]=227001;qdList[163]=227895;qdList[164]=228789;qdList[165]=229683;qdList[166]=230577;qdList[167]=231471;qdList[168]=232365;qdList[169]=233259;qdList[170]=234153;
//上海
var shList=new Array();shList[40]=121895;shList[41]=123055;shList[42]=124215;shList[43]=125375;shList[44]=126535;shList[45]=127695;shList[46]=128855;shList[47]=130015;shList[48]=131175;shList[49]=132335;shList[50]=133495;shList[51]=134655;shList[52]=135815;shList[53]=136975;shList[54]=138135;shList[55]=139295;shList[56]=140455;shList[57]=141615;shList[58]=142775;shList[59]=143905;shList[60]=145005;shList[61]=146105;shList[62]=147205;shList[63]=148305;shList[64]=149405;shList[65]=150505;shList[66]=151605;shList[67]=152715;shList[68]=153825;shList[69]=154935;shList[70]=156045;shList[71]=157155;shList[72]=158265;shList[73]=159375;shList[74]=160485;shList[75]=161595;shList[76]=162705;shList[77]=163815;shList[78]=164925;shList[79]=166035;shList[80]=167145;shList[81]=168255;shList[82]=169315;shList[83]=170375;shList[84]=171435;shList[85]=172495;shList[86]=173555;shList[87]=174615;shList[88]=175675;shList[89]=176735;shList[90]=177795;shList[91]=178855;shList[92]=179915;shList[93]=180975;shList[94]=182035;shList[95]=183095;shList[96]=184155;shList[97]=185215;shList[98]=186125;shList[99]=187035;shList[100]=188065;shList[101]=189095;shList[102]=190125;shList[103]=191155;shList[104]=192185;shList[105]=193215;shList[106]=194245;shList[107]=195275;shList[108]=196305;shList[109]=197335;shList[110]=198365;shList[111]=199395;shList[112]=200425;shList[113]=201455;shList[114]=202485;shList[115]=203765;shList[116]=205045;shList[117]=206325;shList[118]=207605;shList[119]=208885;shList[120]=210035;shList[121]=211185;shList[122]=212335;shList[123]=213485;shList[124]=214635;shList[125]=215785;shList[126]=216935;shList[127]=218085;shList[128]=219235;shList[129]=220385;shList[130]=221535;shList[131]=222685;shList[132]=223835;shList[133]=224985;shList[134]=226135;shList[135]=227285;shList[136]=228435;shList[137]=229585;shList[138]=230735;shList[139]=231885;shList[140]=233035;shList[141]=234185;shList[142]=235335;shList[143]=236485;shList[144]=237635;shList[145]=238785;shList[146]=239935;shList[147]=241085;shList[148]=242235;shList[149]=243385;shList[150]=244535;shList[151]=245685;shList[152]=246835;shList[153]=247985;shList[154]=249135;shList[155]=250285;shList[156]=251435;shList[157]=252585;shList[158]=253735;shList[159]=254885;shList[160]=256035;shList[161]=257185;shList[162]=258335;shList[163]=259485;shList[164]=260635;shList[165]=261785;shList[166]=262935;shList[167]=264085;shList[168]=265235;shList[169]=266385;shList[170]=267535;
//沈阳
var syList=new Array();syList[40]=113940;syList[41]=114707;syList[42]=115474;syList[43]=116241;syList[44]=117008;syList[45]=117775;syList[46]=118542;syList[47]=119309;syList[48]=120076;syList[49]=120843;syList[50]=121610;syList[51]=122377;syList[52]=123144;syList[53]=123911;syList[54]=124678;syList[55]=125445;syList[56]=126212;syList[57]=126979;syList[58]=127746;syList[59]=128513;syList[60]=129280;syList[61]=130247;syList[62]=131214;syList[63]=132181;syList[64]=133148;syList[65]=134115;syList[66]=135082;syList[67]=136049;syList[68]=137016;syList[69]=137983;syList[70]=138950;syList[71]=139917;syList[72]=140884;syList[73]=141851;syList[74]=142818;syList[75]=143785;syList[76]=144702;syList[77]=145619;syList[78]=146536;syList[79]=147453;syList[80]=148400;syList[81]=149297;syList[82]=150194;syList[83]=151091;syList[84]=151988;syList[85]=152885;syList[86]=153782;syList[87]=154679;syList[88]=155576;syList[89]=156473;syList[90]=157370;syList[91]=158267;syList[92]=159164;syList[93]=160061;syList[94]=160958;syList[95]=161855;syList[96]=162812;syList[97]=163769;syList[98]=164726;syList[99]=165583;syList[100]=166440;syList[101]=167297;syList[102]=168154;syList[103]=169011;syList[104]=169868;syList[105]=170725;syList[106]=171582;syList[107]=172439;syList[108]=173296;syList[109]=174153;syList[110]=175010;syList[111]=175867;syList[112]=176724;syList[113]=177581;syList[114]=178438;syList[115]=179295;syList[116]=180152;syList[117]=181009;syList[118]=181866;syList[119]=182723;syList[120]=183660;syList[121]=184637;syList[122]=185614;syList[123]=186591;syList[124]=187568;syList[125]=188545;syList[126]=189522;syList[127]=190499;syList[128]=191476;syList[129]=192453;syList[130]=193430;syList[131]=194407;syList[132]=195384;syList[133]=196361;syList[134]=197338;syList[135]=198315;syList[136]=199292;syList[137]=200269;syList[138]=201246;syList[139]=202223;syList[140]=203200;syList[141]=204177;syList[142]=205154;syList[143]=206131;syList[144]=207108;syList[145]=208085;syList[146]=209062;syList[147]=210039;syList[148]=211016;syList[149]=211993;syList[150]=212970;syList[151]=213947;syList[152]=214924;syList[153]=215901;syList[154]=216878;syList[155]=217855;syList[156]=218832;syList[157]=219809;syList[158]=220786;syList[159]=221763;syList[160]=222740;syList[161]=223717;syList[162]=224694;syList[163]=225671;syList[164]=226648;syList[165]=227625;syList[166]=228602;syList[167]=229579;syList[168]=230556;syList[169]=231533;syList[170]=232510;
//石家庄
var sjzList=new Array();sjzList[40]=111350;sjzList[41]=112357;sjzList[42]=113364;sjzList[43]=114371;sjzList[44]=115378;sjzList[45]=116385;sjzList[46]=117392;sjzList[47]=118399;sjzList[48]=119406;sjzList[49]=120413;sjzList[50]=121420;sjzList[51]=122427;sjzList[52]=123434;sjzList[53]=124441;sjzList[54]=125448;sjzList[55]=126455;sjzList[56]=127462;sjzList[57]=128469;sjzList[58]=129476;sjzList[59]=130483;sjzList[60]=131490;sjzList[61]=132497;sjzList[62]=133504;sjzList[63]=134511;sjzList[64]=135518;sjzList[65]=136525;sjzList[66]=137532;sjzList[67]=138539;sjzList[68]=139546;sjzList[69]=140553;sjzList[70]=141560;sjzList[71]=142567;sjzList[72]=143574;sjzList[73]=144581;sjzList[74]=145588;sjzList[75]=146595;sjzList[76]=147602;sjzList[77]=148609;sjzList[78]=149616;sjzList[79]=150623;sjzList[80]=151500;sjzList[81]=152377;sjzList[82]=153254;sjzList[83]=154131;sjzList[84]=155008;sjzList[85]=155885;sjzList[86]=156762;sjzList[87]=157639;sjzList[88]=158516;sjzList[89]=159393;sjzList[90]=160260;sjzList[91]=161127;sjzList[92]=161994;sjzList[93]=162861;sjzList[94]=163728;sjzList[95]=164595;sjzList[96]=165462;sjzList[97]=166329;sjzList[98]=167196;sjzList[99]=168063;sjzList[100]=168900;sjzList[101]=169737;sjzList[102]=170574;sjzList[103]=171411;sjzList[104]=172248;sjzList[105]=173085;sjzList[106]=173922;sjzList[107]=174759;sjzList[108]=175596;sjzList[109]=176433;sjzList[110]=177270;sjzList[111]=178107;sjzList[112]=178944;sjzList[113]=179781;sjzList[114]=180618;sjzList[115]=181455;sjzList[116]=182292;sjzList[117]=183129;sjzList[118]=183966;sjzList[119]=184803;sjzList[120]=185792;sjzList[121]=186781;sjzList[122]=187770;sjzList[123]=188759;sjzList[124]=189748;sjzList[125]=190737;sjzList[126]=191726;sjzList[127]=192715;sjzList[128]=193704;sjzList[129]=194693;sjzList[130]=195682;sjzList[131]=196671;sjzList[132]=197660;sjzList[133]=198649;sjzList[134]=199638;sjzList[135]=200627;sjzList[136]=201616;sjzList[137]=202605;sjzList[138]=203594;sjzList[139]=204583;sjzList[140]=205572;sjzList[141]=206561;sjzList[142]=207550;sjzList[143]=208539;sjzList[144]=209528;sjzList[145]=210517;sjzList[146]=211506;sjzList[147]=212495;sjzList[148]=213484;sjzList[149]=214473;sjzList[150]=215462;sjzList[151]=216451;sjzList[152]=217440;sjzList[153]=218429;sjzList[154]=219418;sjzList[155]=220407;sjzList[156]=221396;sjzList[157]=222385;sjzList[158]=223374;sjzList[159]=224363;sjzList[160]=225352;sjzList[161]=226341;sjzList[162]=227330;sjzList[163]=228319;sjzList[164]=229308;sjzList[165]=230297;sjzList[166]=231286;sjzList[167]=232275;sjzList[168]=233264;sjzList[169]=234253;sjzList[170]=235242;
//苏州
var szList=new Array();szList[40]=121127;szList[41]=121977;szList[42]=122827;szList[43]=123677;szList[44]=124527;szList[45]=125377;szList[46]=126227;szList[47]=127077;szList[48]=127927;szList[49]=128777;szList[50]=129627;szList[51]=130477;szList[52]=131327;szList[53]=132177;szList[54]=133027;szList[55]=133877;szList[56]=134727;szList[57]=135577;szList[58]=136427;szList[59]=137277;szList[60]=138127;szList[61]=138977;szList[62]=139827;szList[63]=140677;szList[64]=141527;szList[65]=142377;szList[66]=143227;szList[67]=144077;szList[68]=144927;szList[69]=145777;szList[70]=146627;szList[71]=147477;szList[72]=148327;szList[73]=149177;szList[74]=150027;szList[75]=150877;szList[76]=151727;szList[77]=152577;szList[78]=153427;szList[79]=154277;szList[80]=155217;szList[81]=156157;szList[82]=157097;szList[83]=158037;szList[84]=158977;szList[85]=159917;szList[86]=160857;szList[87]=161797;szList[88]=162737;szList[89]=163677;szList[90]=164617;szList[91]=165557;szList[92]=166497;szList[93]=167437;szList[94]=168377;szList[95]=169317;szList[96]=170337;szList[97]=171357;szList[98]=172377;szList[99]=173397;szList[100]=174327;szList[101]=175257;szList[102]=176187;szList[103]=177117;szList[104]=178047;szList[105]=178977;szList[106]=179907;szList[107]=180837;szList[108]=181767;szList[109]=182697;szList[110]=183627;szList[111]=184557;szList[112]=185487;szList[113]=186417;szList[114]=187347;szList[115]=188277;szList[116]=189207;szList[117]=190137;szList[118]=191067;szList[119]=191997;szList[120]=192957;szList[121]=193917;szList[122]=194877;szList[123]=195837;szList[124]=196797;szList[125]=197757;szList[126]=198717;szList[127]=199677;szList[128]=200637;szList[129]=201597;szList[130]=202557;szList[131]=203517;szList[132]=204477;szList[133]=205437;szList[134]=206397;szList[135]=207357;szList[136]=208317;szList[137]=209277;szList[138]=210237;szList[139]=211197;szList[140]=212157;szList[141]=213117;szList[142]=214077;szList[143]=215037;szList[144]=215997;szList[145]=216957;szList[146]=217917;szList[147]=218877;szList[148]=219837;szList[149]=220797;szList[150]=221757;szList[151]=222717;szList[152]=223677;szList[153]=224637;szList[154]=225597;szList[155]=226557;szList[156]=227517;szList[157]=228477;szList[158]=229437;szList[159]=230397;szList[160]=231357;szList[161]=232317;szList[162]=233277;szList[163]=234237;szList[164]=235197;szList[165]=236157;szList[166]=237117;szList[167]=238077;szList[168]=239037;szList[169]=239997;szList[170]=240957;
//太原
var tyList=new Array();tyList[60]=130140;tyList[61]=131087;tyList[62]=132034;tyList[63]=132981;tyList[64]=133928;tyList[65]=134875;tyList[66]=135822;tyList[67]=136769;tyList[68]=137716;tyList[69]=138663;tyList[70]=139610;tyList[71]=140557;tyList[72]=141504;tyList[73]=142451;tyList[74]=143398;tyList[75]=144345;tyList[76]=145292;tyList[77]=146239;tyList[78]=147186;tyList[79]=148133;tyList[80]=149090;tyList[81]=149977;tyList[82]=150864;tyList[83]=151751;tyList[84]=152638;tyList[85]=153525;tyList[86]=154412;tyList[87]=155299;tyList[88]=156186;tyList[89]=157073;tyList[90]=157960;tyList[91]=158847;tyList[92]=159734;tyList[93]=160621;tyList[94]=161508;tyList[95]=162395;tyList[96]=163282;tyList[97]=164249;tyList[98]=165216;tyList[99]=166133;tyList[100]=167000;tyList[101]=167867;tyList[102]=168734;tyList[103]=169601;tyList[104]=170468;tyList[105]=171335;tyList[106]=172202;tyList[107]=173069;tyList[108]=173936;tyList[109]=174803;tyList[110]=175670;tyList[111]=176537;tyList[112]=177404;tyList[113]=178271;tyList[114]=179138;tyList[115]=180005;tyList[116]=180872;tyList[117]=181739;tyList[118]=182606;tyList[119]=183473;tyList[120]=184280;tyList[121]=185087;tyList[122]=185894;tyList[123]=186701;tyList[124]=187508;tyList[125]=188315;tyList[126]=189122;tyList[127]=189929;tyList[128]=190736;tyList[129]=191543;tyList[130]=192350;tyList[131]=193157;tyList[132]=193964;tyList[133]=194771;tyList[134]=195578;tyList[135]=196385;tyList[136]=197192;tyList[137]=197999;tyList[138]=198806;tyList[139]=199613;tyList[140]=200420;tyList[141]=201227;tyList[142]=202034;tyList[143]=202841;tyList[144]=203648;tyList[145]=204455;tyList[146]=205262;tyList[147]=206069;tyList[148]=206876;tyList[149]=207683;tyList[150]=208490;tyList[151]=209297;tyList[152]=210104;tyList[153]=210911;tyList[154]=211718;tyList[155]=212525;tyList[156]=213332;tyList[157]=214139;tyList[158]=214946;tyList[159]=215753;tyList[160]=216560;tyList[161]=217367;tyList[162]=218174;tyList[163]=218981;tyList[164]=219788;tyList[165]=220595;tyList[166]=221402;tyList[167]=222209;tyList[168]=223016;tyList[169]=223823;tyList[170]=224630;
//天津
var tjList=new Array();tjList[40]=133274;tjList[41]=134282;tjList[42]=135291;tjList[43]=136299;tjList[44]=137308;tjList[45]=138316;tjList[46]=139325;tjList[47]=140333;tjList[48]=141342;tjList[49]=142350;tjList[50]=143359;tjList[51]=144368;tjList[52]=145376;tjList[53]=146385;tjList[54]=147393;tjList[55]=148402;tjList[56]=149410;tjList[57]=150419;tjList[58]=151427;tjList[59]=152436;tjList[60]=153548;tjList[61]=154660;tjList[62]=155772;tjList[63]=156884;tjList[64]=157996;tjList[65]=159108;tjList[66]=160220;tjList[67]=161332;tjList[68]=162444;tjList[69]=163556;tjList[70]=164669;tjList[71]=165781;tjList[72]=166893;tjList[73]=168005;tjList[74]=169117;tjList[75]=170229;tjList[76]=171341;tjList[77]=172453;tjList[78]=173565;tjList[79]=174677;tjList[80]=175651;tjList[81]=176625;tjList[82]=177599;tjList[83]=178573;tjList[84]=179547;tjList[85]=180521;tjList[86]=181495;tjList[87]=182469;tjList[88]=183443;tjList[89]=184417;tjList[90]=185392;tjList[91]=186366;tjList[92]=187340;tjList[93]=188314;tjList[94]=189288;tjList[95]=190262;tjList[96]=191236;tjList[97]=192210;tjList[98]=193184;tjList[99]=194158;tjList[100]=195190;tjList[101]=196221;tjList[102]=197253;tjList[103]=198284;tjList[104]=199316;tjList[105]=200347;tjList[106]=201379;tjList[107]=202410;tjList[108]=203442;tjList[109]=204473;tjList[110]=205505;tjList[111]=206537;tjList[112]=207568;tjList[113]=208600;tjList[114]=209631;tjList[115]=210663;tjList[116]=211694;tjList[117]=212726;tjList[118]=213757;tjList[119]=214789;tjList[120]=215832;tjList[121]=216875;tjList[122]=217918;tjList[123]=218961;tjList[124]=220004;tjList[125]=221047;tjList[126]=222090;tjList[127]=223133;tjList[128]=224176;tjList[129]=225219;tjList[130]=226251;tjList[131]=227283;tjList[132]=228314;tjList[133]=229346;tjList[134]=230377;tjList[135]=231409;tjList[136]=232440;tjList[137]=233472;tjList[138]=234503;tjList[139]=235535;tjList[140]=236555;tjList[141]=237575;tjList[142]=238595;tjList[143]=239615;tjList[144]=240635;tjList[145]=241655;tjList[146]=242675;tjList[147]=243695;tjList[148]=244715;tjList[149]=245735;tjList[150]=246756;tjList[151]=247776;tjList[152]=248796;tjList[153]=249816;tjList[154]=250836;tjList[155]=251856;tjList[156]=252876;tjList[157]=253896;tjList[158]=254916;tjList[159]=255936;tjList[160]=256956;tjList[161]=257976;tjList[162]=258996;tjList[163]=260016;tjList[164]=261036;tjList[165]=262056;tjList[166]=263076;tjList[167]=264096;tjList[168]=265116;tjList[169]=266136;tjList[170]=267157;
//武汉
var whList=new Array();whList[60]=132693;whList[61]=133757;whList[62]=134821;whList[63]=135885;whList[64]=136949;whList[65]=138013;whList[66]=139077;whList[67]=140141;whList[68]=141205;whList[69]=142269;whList[70]=143333;whList[71]=144397;whList[72]=145461;whList[73]=146525;whList[74]=147589;whList[75]=148653;whList[76]=149717;whList[77]=150781;whList[78]=151765;whList[79]=152749;whList[80]=153693;whList[81]=154637;whList[82]=155581;whList[83]=156525;whList[84]=157469;whList[85]=158413;whList[86]=159357;whList[87]=160301;whList[88]=161245;whList[89]=162189;whList[90]=163133;whList[91]=164077;whList[92]=165021;whList[93]=165965;whList[94]=166909;whList[95]=167853;whList[96]=168797;whList[97]=169921;whList[98]=171045;whList[99]=172169;whList[100]=173143;whList[101]=174117;whList[102]=175091;whList[103]=176065;whList[104]=177039;whList[105]=178013;whList[106]=178987;whList[107]=179961;whList[108]=180935;whList[109]=181899;whList[110]=182863;whList[111]=183827;whList[112]=184791;whList[113]=185755;whList[114]=186719;whList[115]=187683;whList[116]=188647;whList[117]=189611;whList[118]=190435;whList[119]=191259;whList[120]=192293;whList[121]=193327;whList[122]=194361;whList[123]=195395;whList[124]=196429;whList[125]=197463;whList[126]=198497;whList[127]=199531;whList[128]=200565;whList[129]=201599;whList[130]=202633;whList[131]=203667;whList[132]=204701;whList[133]=205735;whList[134]=206769;whList[135]=207803;whList[136]=208837;whList[137]=209871;whList[138]=210905;whList[139]=211939;whList[140]=212973;whList[141]=214007;whList[142]=215041;whList[143]=216075;whList[144]=217109;whList[145]=218143;whList[146]=219177;whList[147]=220211;whList[148]=221245;whList[149]=222279;whList[150]=223313;whList[151]=224347;whList[152]=225381;whList[153]=226415;whList[154]=227449;whList[155]=228483;whList[156]=229517;whList[157]=230551;whList[158]=231585;whList[159]=232619;whList[160]=233653;whList[161]=234687;whList[162]=235721;whList[163]=236755;whList[164]=237789;whList[165]=238823;whList[166]=239857;whList[167]=240891;whList[168]=241925;whList[169]=242959;whList[170]=243993;
//西安
var xaList=new Array();xaList[60]=129697;xaList[61]=130634;xaList[62]=131571;xaList[63]=132508;xaList[64]=133445;xaList[65]=134382;xaList[66]=135319;xaList[67]=136256;xaList[68]=137193;xaList[69]=138130;xaList[70]=139067;xaList[71]=140004;xaList[72]=140871;xaList[73]=141738;xaList[74]=142605;xaList[75]=143472;xaList[76]=144339;xaList[77]=145206;xaList[78]=146073;xaList[79]=146940;xaList[80]=147807;xaList[81]=148674;xaList[82]=149541;xaList[83]=150408;xaList[84]=151275;xaList[85]=152142;xaList[86]=153009;xaList[87]=153876;xaList[88]=154743;xaList[89]=155610;xaList[90]=156477;xaList[91]=157414;xaList[92]=158351;xaList[93]=159288;xaList[94]=160225;xaList[95]=161162;xaList[96]=162099;xaList[97]=163036;xaList[98]=163973;xaList[99]=164910;xaList[100]=165707;xaList[101]=166504;xaList[102]=167301;xaList[103]=168098;xaList[104]=168895;xaList[105]=169692;xaList[106]=170489;xaList[107]=171286;xaList[108]=172083;xaList[109]=172880;xaList[110]=173677;xaList[111]=174474;xaList[112]=175271;xaList[113]=176068;xaList[114]=176865;xaList[115]=177662;xaList[116]=178459;xaList[117]=179256;xaList[118]=180053;xaList[119]=180850;xaList[120]=181767;xaList[121]=182684;xaList[122]=183601;xaList[123]=184518;xaList[124]=185435;xaList[125]=186352;xaList[126]=187269;xaList[127]=188186;xaList[128]=189103;xaList[129]=190020;xaList[130]=190937;xaList[131]=191854;xaList[132]=192771;xaList[133]=193688;xaList[134]=194605;xaList[135]=195522;xaList[136]=196439;xaList[137]=197356;xaList[138]=198273;xaList[139]=199190;xaList[140]=200087;xaList[141]=200984;xaList[142]=201881;xaList[143]=202778;xaList[144]=203675;xaList[145]=204572;xaList[146]=205469;xaList[147]=206366;xaList[148]=207263;xaList[149]=208160;xaList[150]=209057;xaList[151]=209954;xaList[152]=210851;xaList[153]=211748;xaList[154]=212645;xaList[155]=213542;xaList[156]=214439;xaList[157]=215336;xaList[158]=216233;xaList[159]=217130;xaList[160]=218027;xaList[161]=218924;xaList[162]=219821;xaList[163]=220718;xaList[164]=221615;xaList[165]=222512;xaList[166]=223409;xaList[167]=224306;xaList[168]=225203;xaList[169]=226100;xaList[170]=226997;
//长沙
var csList=new Array();csList[40]=114965;csList[41]=115745;csList[42]=116525;csList[43]=117305;csList[44]=118085;csList[45]=118865;csList[46]=119645;csList[47]=120425;csList[48]=121205;csList[49]=121985;csList[50]=122765;csList[51]=123545;csList[52]=124325;csList[53]=125105;csList[54]=125885;csList[55]=126665;csList[56]=127445;csList[57]=128225;csList[58]=129005;csList[59]=129785;csList[60]=130565;csList[61]=131565;csList[62]=132565;csList[63]=133565;csList[64]=134565;csList[65]=135565;csList[66]=136565;csList[67]=137565;csList[68]=138565;csList[69]=139565;csList[70]=140565;csList[71]=141565;csList[72]=142565;csList[73]=143565;csList[74]=144565;csList[75]=145565;csList[76]=146565;csList[77]=147565;csList[78]=148565;csList[79]=149565;csList[80]=150525;csList[81]=151485;csList[82]=152445;csList[83]=153405;csList[84]=154365;csList[85]=155325;csList[86]=156285;csList[87]=157245;csList[88]=158205;csList[89]=159165;csList[90]=160125;csList[91]=161085;csList[92]=162045;csList[93]=163005;csList[94]=163965;csList[95]=164925;csList[96]=165885;csList[97]=166845;csList[98]=167805;csList[99]=168765;csList[100]=169715;csList[101]=170665;csList[102]=171615;csList[103]=172565;csList[104]=173515;csList[105]=174465;csList[106]=175415;csList[107]=176365;csList[108]=177315;csList[109]=178265;csList[110]=179215;csList[111]=180165;csList[112]=181115;csList[113]=182065;csList[114]=183015;csList[115]=183965;csList[116]=184915;csList[117]=185865;csList[118]=186815;csList[119]=187635;csList[120]=188395;csList[121]=189155;csList[122]=189915;csList[123]=190675;csList[124]=191435;csList[125]=192195;csList[126]=192955;csList[127]=193715;csList[128]=194475;csList[129]=195235;csList[130]=195995;csList[131]=196755;csList[132]=197515;csList[133]=198275;csList[134]=199035;csList[135]=199795;csList[136]=200555;csList[137]=201315;csList[138]=202075;csList[139]=202835;csList[140]=203595;csList[141]=204355;csList[142]=205115;csList[143]=205875;csList[144]=206635;csList[145]=207395;csList[146]=208155;csList[147]=208915;csList[148]=209675;csList[149]=210435;csList[150]=211195;csList[151]=211955;csList[152]=212715;csList[153]=213475;csList[154]=214235;csList[155]=214995;csList[156]=215755;csList[157]=216515;csList[158]=217275;csList[159]=218035;csList[160]=218795;csList[161]=219555;csList[162]=220315;csList[163]=221075;csList[164]=221835;csList[165]=222595;csList[166]=223355;csList[167]=224115;csList[168]=224875;csList[169]=225635;csList[170]=226395;
//济宁
var jningList=new Array();jningList[60]=128157;jningList[61]=129094;jningList[62]=130031;jningList[63]=130968;jningList[64]=131905;jningList[65]=132842;jningList[66]=133779;jningList[67]=134716;jningList[68]=135653;jningList[69]=136590;jningList[70]=137527;jningList[71]=138464;jningList[72]=139401;jningList[73]=140338;jningList[74]=141275;jningList[75]=142212;jningList[76]=143149;jningList[77]=144086;jningList[78]=145023;jningList[79]=145960;jningList[80]=146787;jningList[81]=147614;jningList[82]=148441;jningList[83]=149268;jningList[84]=150095;jningList[85]=150922;jningList[86]=151749;jningList[87]=152576;jningList[88]=153403;jningList[89]=154230;jningList[90]=155057;jningList[91]=155884;jningList[92]=156711;jningList[93]=157538;jningList[94]=158365;jningList[95]=159192;jningList[96]=160019;jningList[97]=160846;jningList[98]=161673;jningList[99]=162500;jningList[100]=163387;jningList[101]=164274;jningList[102]=165161;jningList[103]=166048;jningList[104]=166935;jningList[105]=167822;jningList[106]=168709;jningList[107]=169596;jningList[108]=170483;jningList[109]=171370;jningList[110]=172257;jningList[111]=173144;jningList[112]=174031;jningList[113]=174918;jningList[114]=175805;jningList[115]=176692;jningList[116]=177579;jningList[117]=178466;jningList[118]=179353;jningList[119]=180240;jningList[120]=181057;jningList[121]=181874;jningList[122]=182691;jningList[123]=183508;jningList[124]=184325;jningList[125]=185142;jningList[126]=185959;jningList[127]=186776;jningList[128]=187593;jningList[129]=188410;jningList[130]=189227;jningList[131]=190044;jningList[132]=190861;jningList[133]=191678;jningList[134]=192495;jningList[135]=193312;jningList[136]=194129;jningList[137]=194946;jningList[138]=195763;jningList[139]=196580;jningList[140]=197397;jningList[141]=198214;jningList[142]=199031;jningList[143]=199848;jningList[144]=200665;jningList[145]=201482;jningList[146]=202299;jningList[147]=203116;jningList[148]=203933;jningList[149]=204750;jningList[150]=205567;jningList[151]=206384;jningList[152]=207201;jningList[153]=208018;jningList[154]=208835;jningList[155]=209652;jningList[156]=210469;jningList[157]=211286;jningList[158]=212103;jningList[159]=212920;jningList[160]=213737;jningList[161]=214554;jningList[162]=215371;jningList[163]=216188;jningList[164]=217005;jningList[165]=217822;jningList[166]=218639;jningList[167]=219456;jningList[168]=220273;jningList[169]=221090;jningList[170]=221907;

var pcCityList=new Array();pcCityList[3557]='bj';pcCityList[3399]='cd';pcCityList[3400]='nc';pcCityList[3401]='gy';pcCityList[3403]='xa';pcCityList[3471]='km';pcCityList[3402]='wh';pcCityList[3404]='cs';pcCityList[3594]='hf';pcCityList[3774]='nj';pcCityList[3775]='cq';pcCityList[3792]='sjz';pcCityList[3795]='jning';pcCityList[3798]='tj';pcCityList[3799]='sz';pcCityList[3800]='sh';pcCityList[3801]='jn';pcCityList[3802]='gz';pcCityList[3829]='dl';pcCityList[3833]='qd';pcCityList[3838]='fz';pcCityList[3837]='sy';pcCityList[3844]='hz';pcCityList[3847]='ty';pcCityList[3795]='jning';

var ydCityList=new Array();ydCityList[3408]='bj';ydCityList[3380]='cd';ydCityList[3382]='nc';ydCityList[3386]='gy';ydCityList[3381]='xa';ydCityList[3385]='km';ydCityList[3383]='wh';ydCityList[3384]='cs';ydCityList[3400]='hf';ydCityList[3407]='nj';ydCityList[3401]='cq';ydCityList[3409]='sjz';ydCityList[3414]='jning';ydCityList[3413]='tj';ydCityList[3415]='sz';ydCityList[3425]='sh';ydCityList[3420]='jn';ydCityList[3419]='gz';ydCityList[3417]='dl';ydCityList[3416]='qd';ydCityList[3418]='fz';ydCityList[3426]='sy';ydCityList[3427]='hz';ydCityList[3428]='ty';ydCityList[3414]='jning';

//拎包装报价
function getlbz(wsj,mj,cityid){
	switch(cityid){
		case '23':
			mj=mj<60?60:mj;
			if(mj<=170){
				sum=cqList[mj]+(wsj-1)*16700;
			}else{
				sum=cqList[170]+(wsj-1)*16700+(mj-170)*1160;
			}	 
		break;
		case '4':
			mj=mj<40?40:mj;
			if(mj<=170){
				sum=bjList[mj]+(wsj-1)*17840;
			}else{
				sum=bjList[170]+(wsj-1)*17840+(mj-170)*1190;
			}
		break;
		case '2':
			mj=mj<40?40:mj;
			if(mj<=170){
				sum=cdList[mj]+(wsj-1)*16490;
			}else{
				sum=cdList[170]+(wsj-1)*16490+(mj-170)*1090;
			}
		break;
		case '20':
			mj=mj<60?60:mj;
			if(mj<=170){
				sum=dlList[mj]+(wsj-1)*17060;
			}else{
				sum=dlList[170]+(wsj-1)*17060+(mj-170)*1260;
			}
		break;
		case '21':
			mj=mj<50?50:mj;
			if(mj<=170){
				sum=fzList[mj]+(wsj-1)*17730;
			}else{
				sum=fzList[170]+(wsj-1)*17730+(mj-170)*1370;
			}
		break;
		case '9':
			mj=mj<40?40:mj;
			if(mj<=170){
				sum=gzList[mj]+(wsj-1)*17340;
			}else{
				sum=gzList[170]+(wsj-1)*17340+(mj-170)*1240;
			}
		break;
		case '12':
			/*mj=mj<60?60:mj;
			if(mj<=170){
				sum=gyList[mj]+(wsj-1)*16780;
			}else{
				sum=gyList[170]+(wsj-1)*16780+(mj-170)*1140;
			}*/
            if (mj <= 60) {
                sum = 60 * 1350;
            } else if (mj > 60 && mj <= 100) {
                sum = mj * 1350;
            } else if (mj > 100) {
                sum = mj * 1450;
            }
		break;
		case '24':
			mj=mj<60?60:mj;
			if(mj<=170){
				sum=hzList[mj]+(wsj-1)*18030;
			}else{
				sum=hzList[170]+(wsj-1)*18030+(mj-170)*1260;
			}
		break;
		case '14':
			mj=mj<60?60:mj;
			if(mj<=170){
				sum=hfList[mj]+(wsj-1)*16670;
			}else{
				sum=hfList[170]+(wsj-1)*16670+(mj-170)*1080;
			}
		break;
		case '19':
			mj=mj<60?60:mj;
			if(mj<=170){
				sum=jnList[mj]+(wsj-1)*18970;
			}else{
				sum=jnList[170]+(wsj-1)*18970+(mj-170)*1090;
			}
		break;
		case '13':
			mj=mj<60?60:mj;
			if(mj<=170){
				sum=kmList[mj]+(wsj-1)*16840;
			}else{
				sum=kmList[170]+(wsj-1)*16840+(mj-170)*1100;
			}
		break;
		case '3':
			mj=mj<60?60:mj;
			if(mj<=170){
				sum=ncList[mj]+(wsj-1)*16420;
			}else{
				sum=ncList[170]+(wsj-1)*16420+(mj-170)*910;
			}
			sum=sum*1.1;
		break;
		case '15':
			mj=mj<60?60:mj;
			if(mj<=170){
				sum=njList[mj]+(wsj-1)*17080;
			}else{
				sum=njList[170]+(wsj-1)*17080+(mj-170)*1150;
			}
		break;
		case '8':
			mj=mj<60?60:mj;
			if(mj<=170){
				sum=qdList[mj]+(wsj-1)*16550;
			}else{
				sum=qdList[170]+(wsj-1)*16550+(mj-170)*1140;
			}
		break;
		case '10':
			mj=mj<40?40:mj;
			if(mj<=170){
				sum=shList[mj]+(wsj-1)*17690;
			}else{
				sum=shList[170]+(wsj-1)*17690+(mj-170)*1280;
			}
		break;
		case '22':
			mj=mj<40?40:mj;
			if(mj<=170){
				sum=syList[mj]+(wsj-1)*17060;
			}else{
				sum=syList[170]+(wsj-1)*17060+(mj-170)*1110;
			}
		break;
		case '16':
			mj=mj<40?40:mj;
			if(mj<=170){
				sum=sjzList[mj]+(wsj-1)*17200;
			}else{
				sum=sjzList[170]+(wsj-1)*17200+(mj-170)*1200;
			}
		break;
		case '11':
			mj=mj<40?40:mj;
			if(mj<=170){
				sum=szList[mj]+(wsj-1)*16980;
			}else{
				sum=szList[170]+(wsj-1)*16980+(mj-170)*1140;
			}
		break;
		case '25':
			mj=mj<60?60:mj;
			if(mj<=170){
				sum=tyList[mj]+(wsj-1)*16770;
			}else{
				sum=tyList[170]+(wsj-1)*16770+(mj-170)*1080;
			}
		break; 
		case '18':
			mj=mj<40?40:mj;
			if(mj<=170){
				sum=tjList[mj]+(wsj-1)*19872;
			}else{
				sum=tjList[170]+(wsj-1)*19872+(mj-170)*1299.5;
			}
		break;
		case '6':
			mj=mj<60?60:mj;
			if(mj<=170){
				sum=whList[mj]+(wsj-1)*16880;
			}else{
				sum=whList[170]+(wsj-1)*16880+(mj-170)*1170;
			}
		break;
		case '5':
			mj=mj<40?40:mj;
			if(mj<=170){
				sum=xaList[mj]+(wsj-1)*16640;
			}else{
				sum=xaList[170]+(wsj-1)*16640+(mj-170)*1080;
			}
			sum=sum*1.1;
		break;
		case '7':
			mj=mj<40?40:mj;
			if(mj<=170){
				sum=csList[mj]+(wsj-1)*16870;
			}else{
				sum=csList[170]+(wsj-1)*16870+(mj-170)*1130;
			}
		break;
		case '17':
			mj=mj<60?60:mj;
			if(mj<=170){
				sum=jningList[mj]+(wsj-1)*16840;
			}else{
				sum=jningList[170]+(wsj-1)*16840+(mj-170)*1080;
			}
		break;
		
	}
	return parseInt(sum);
}
