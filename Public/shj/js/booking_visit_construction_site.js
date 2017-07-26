var timer = 120;//发送短信的时间间隔
var isTemp = false;
var tempCode = "";
var checkMobile="";
var lsitDesigner = null;


$(function() {
	$.datetimepicker.setLocale('zh');
	$('#appointmentDate').datetimepicker(
			{
				timepicker : false,
				mask : false,
				format : 'Y-m-d',
				i18n : {
					zh : {
						months : [ '1月', '2月', '3月', '4月', '5月', '6月',
								'7月', '8月', '9月', '10月', '11月', '12月' ]
					}
				}
			});
	 
});
$(function(){
	
	/*预约设计*/
	$(".reservationVisit").click(function(){
		$("#reservationVisit input[name='orignURL']").val(window.location.href);
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
				$("#reservationVisit #designerId").html(str);
			}
		});
		var rD = dialog({
			skin: 'ui-dialog-shj',
			title: ' ',
			fixed: true,
			content: $('#reservationVisit')
		});
		rD.showModal();
	});
	
	/*预约设计*/
	$(".visitBtn").click(function(){
		var reg = new RegexKit();
		var designCall = $('#reservationVisit .designCall');//称呼
		var designPhoneNumber = $('#reservationVisit .designPhoneNumber');//电话号码
		var remarks = $('#reservationVisit .remarks');//备注
		var appointmentDate = $("#reservationVisit .appointmentDate");//预约时间
		var designCodeNum = $('#reservationVisit .designCodeNum');//验证码
		var designerId = $("#reservationVisit #designerId");
		if(designCall.val()==""){
			new Msg({id:'js_msg3',icon:'warning',text:"称呼不能为空！"});
			return false;
		}
		if(designPhoneNumber.val() == ''){
			new Msg({id:'js_msg4',icon:'warning',text:"电话号码不能为空"});
			return false;
		}
		if(appointmentDate.val()==""){
			new Msg({id:'js_msg5',icon:'warning',text:"预约时间不能为空！"});
			return false;
		}
		if(remarks.val()==""){
			new Msg({id:'js_msg1',icon:'warning',text:"备注不能为空！"});
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
		/*if(isTemp && designPhoneNumber.val() != checkMobile){
		new Msg({id:'js_msg7',icon:'warning',text:"手机号码不为验证手机号码！"});
		return false;
	}*/
		/*---------------将数据存入数据库中--------------*/
		$.ajax({
			type:'post',
			url:ctx+'/booking/visit/construction/site/save',
			data:$("#reservationVisit").serialize(),
			error:function(jqXHR, textStatus){
				console.log(jqXHR);
				console.log(textStatus);
			},
			success:function(data){
				var msg = new Msg({id:'js_msg9',icon:'warning',text:data.message,cbOk:function(){
					timer=0;
					msg.close();
					$('.nameCall').val('');//称呼
					$('.cellPhoneNumber').val('');//手机号码
					$('.appointmentDate').val('');
					$('.codeNum').val('');//验证码
					$('.remarks').val('');
					$('.ui-popup-show').css('display','none');
					$('.ui-popup-backdrop').css('display','none');
				}});
			}
		});
		
	});
});
//获取手机验证码
/*function sendyzmVisitcal(o){
	var reg = new RegexKit();
	var mobile = $("#quotedPrice .cellPhoneNumber").val();
	debugger;
	if(reg.matchMobileFormat(mobile)){
		//验证手机号
		$.ajax({
			type : "get",
			url : ctx+"/sms/booking/sendcaptcha?mobile="+mobile,
			success : function(data) {
				if(data.flag == true){
					checkMobile = mobile;
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
//获取手机验证码
function sendyzmVisit(o){
	debugger;
	var reg = new RegexKit();
	var mobile = $("#reservationVisit .designPhoneNumber").val();
	var serviceType = $("#reservationVisit input[name='serviceType']").val();
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
		$(o).attr("onclick","sendyzmVisit(this)");
		$(o).html("获取验证码");
   		timer = 120;
   	} else {
	   	$(o).attr("onclick","");
       	$(o).html(timer + "秒后重新发送");
       	timer--;
       	setTimeout(function() {
       		Countdown(o);
       	},1000)
   	}
}
*/

$(function(){
	$(".comment-form-send-btn").click(function(){
		var reg = new RegexKit();
		var name = $.trim($("#casecomment_form input[name='name']").val());
		var phone = $.trim($("#casecomment_form input[name='phone']").val());
		var content = $.trim($("#casecomment_form #content").val());
		if(name==''){
			new Msg({id:'js_msg1',icon:'warning',text:"称呼不能为空！"});
		}else if(phone==''){
			new Msg({id:'js_msg2',icon:'warning',text:"电话不能为空！"});
		}else if(!reg.matchMobileFormat(phone)){
			new Msg({id:'js_msg3',icon:'warning',text:"请输入正确的电话号码！"});
		}else if(content==''){
			new Msg({id:'js_msg4',icon:'warning',text:"请输入评论内容！"});
		}else{
			/*---------------将数据存入数据库中--------------*/
			$.ajax({
				 type:'post',
				 url:ctx+'/designer/casecomment/save',
				 data:$("#casecomment_form").serialize(),
				 error:function(jqXHR, textStatus){
					 console.log(jqXHR);
					 console.log(textStatus);
				 },
				 success:function(data){
					 var msg = new Msg({id:'js_msg9',icon:'warning',text:data.msg,cbOk:function(){
						 msg.close();
						 $("#casecomment_form input[name='name']").val('');
						 $("#casecomment_form input[name='phone']").val('');
						 $("#casecomment_form #content").val('');
					 }});
				 }
			 });
		}
	});
});