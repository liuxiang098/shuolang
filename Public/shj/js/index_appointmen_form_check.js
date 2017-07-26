var timer = 120;//发送短信的时间间隔
var isTemp = false;
var tempCode = "";
var checkMobile="";
var lsitDesigner = null;

$(function(){
	/*预约设计*/
	$(".reservationDesign").click(function(){
		var designerID = $(this).attr("designerID");
		if(designerID==''||designerID==null||designerID==undefined){
			designerID = $(".mainFormDesignerId").val();
		}
		$.ajax({
			type : "post",
			url : ctx+"/designer/appointment/listDesigner",
			success : function(data) {
				lsitDesigner = data.designerList;
				var str = "";
				for(var i = 0 ;i < lsitDesigner.length;i++){
					if(designerID==lsitDesigner[i].id){
						str += "<option value='"+lsitDesigner[i].id+"' selected='selected'>"+lsitDesigner[i].name+"</option>";
					}else{
						str += "<option value='"+lsitDesigner[i].id+"'>"+lsitDesigner[i].name+"</option>";
					}
				}
				$("#reservationDesign #designerId").html(str);
			}
		});
		var rD = dialog({
	          skin: 'ui-dialog-shj',
	          title: ' ',
	          fixed: true,
	          content: $('#reservationDesign')
	      });
	      rD.showModal();
	});
	
	/*预约设计*/
	$('.designBtn').click(function(){
		var reg = new RegexKit();
		$("#reservationDesign input[name='orignURL']").val(window.location.href);
		var designCall = $('#reservationDesign .designCall');//称呼
		var designPhoneNumber = $('#reservationDesign .designPhoneNumber');//电话号码
		var designBuildingInfo = $('#reservationDesign .designBuildingInfo');//楼盘信息
		var designBuildingAcreage = $('#reservationDesign .designBuildingAcreage');//房屋面积
		var designCodeNum = $('#reservationDesign .designCodeNum');//验证码
		var designerId = $("#reservationDesign #designerId");
		if(designCall.val()==""){
			new Msg({id:'js_msg3',icon:'warning',text:"称呼不能为空！"});
			return false;
		}
		if(designPhoneNumber.val() == ''){
			new Msg({id:'js_msg4',icon:'warning',text:"电话号码不能为空"});
			return false;
		}
		if(designBuildingInfo.val() == ''){
			new Msg({id:'js_msg5',icon:'warning',text:"楼盘信息不能为空！"});
			return false;
		}
		if(designBuildingAcreage.val()==""){
			new Msg({id:'js_msg1',icon:'warning',text:"面积不能为空！"});
			return false;
		}
		if(!reg.matchPositiveDigital(designBuildingAcreage.val())){
			new Msg({id:'js_msg12',icon:'warning',text:"面积只能为大于0的数字！"});
			return false;
		}
		/*if(designCodeNum.val() == ''){
			new Msg({id:'js_msg6',icon:'warning',text:"验证码不能为空！"});
			return false;
		}*/
		if(designerId.val()==''){
			new Msg({id:'js_msg6',icon:'warning',text:"请选择设计师！"});
			return false;
		}
		if(isTemp && designPhoneNumber.val() != checkMobile){
			new Msg({id:'js_msg7',icon:'warning',text:"手机号码不为验证手机号码！"});
			return false;
		}
		/*if(tempCode != designCodeNum.val()){
			new Msg({id:'js_msg8',icon:'warning',text:"验证码错误,请重新输入！"});
			return false;
		}*/
		/*---------------将数据存入数据库中--------------*/
		$.ajax({
			 type:'post',
			 url:ctx+'/designer/appointment/save',
			 data:$("#reservationDesign").serialize(),
			 error:function(jqXHR, textStatus){
				 console.log(jqXHR);
				 console.log(textStatus);
			 },
			 success:function(data){
				 var msg = new Msg({id:'js_msg9',icon:'warning',text:data.msg,cbOk:function(){
					 timer=0;
					 $('.buildingInfo').val(''); //楼盘信息
					 $('.buildingAcreage').val('');//建筑面积
					 $('.nameCall').val('');//称呼
					 $('.cellPhoneNumber').val('');//手机号码
					 $('.codeNum').val('');//验证码
					 $('.ui-popup-show').css('display','none');
					 $('.ui-popup-backdrop').css('display','none');
					 $(':input','#reservationDesign')    
					     .not(':button, :submit, :reset, :hidden')    
					     .val('')    
					     .removeAttr('checked')    
					     .removeAttr('selected');    
					 msg.close();
				 }});
			 }
		 });
		
	});
});



//获取手机验证码
function sendyzmcalappointment(o){
	var reg = new RegexKit();
	var mobile = $("#quotedPrice .cellPhoneNumber").val();
	if(reg.matchMobileFormat(mobile)){
		//验证手机号
		$.ajax({
			type : "get",
			success : function(data) {
				if(data.flag == true){
					checkMobile = mobile;
					isTemp = true;
					tempCode=data.tempCode;
					Countdowncalappointment(o);
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
//获取手机验证码
function sendyzmappointment(o){
	var reg = new RegexKit();
	var serviceType = $("#reservationDesign input[name='serviceType']").val();
	var mobile = $("#reservationDesign .designPhoneNumber").val();
	if(reg.matchMobileFormat(mobile)){
		//验证手机号
		$.ajax({
			type : "get",
			url : ctx+"/sms/sendcaptcha/booking?mobile="+mobile+"&serviceType="+serviceType,
			success : function(data) {
				if(data.flag == true){
					checkMobile = mobile;
					isTemp = true;
					tempCode=data.tempCode;
					Countdownappointment(o);
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
function Countdowncalappointment(o){
	if (timer == 0) {
		$(o).attr("onclick","sendyzmappointment(this)");
		$(o).html("获取验证码");
   		timer = 120;
   	} else {
	   	$(o).attr("onclick","");
       	$(o).html(timer + "秒后重新发送");
       	timer--;
       	setTimeout(function() {
       		Countdowncalappointment(o);
       	},1000)
   	}
}
function Countdownappointment(o){
	if (timer == 0) {
		$(o).attr("onclick","sendyzm(this)");
		$(o).html("获取验证码");
   		timer = 120;
   	} else {
	   	$(o).attr("onclick","");
       	$(o).html(timer + "秒后重新发送");
       	timer--;
       	setTimeout(function() {
       		Countdownappointment(o);
       	},1000)
   	}
}
