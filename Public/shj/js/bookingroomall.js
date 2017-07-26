//右侧预约量房验证（数据的提交）


var rD;
$(function(){

	$(".bookingRoomFromAllBtn").click(function(){
		rD = dialog({
			skin: 'ui-dialog-shj',
			title: ' ',
			fixed: true,
			content: $('#booking_room_from_all')
		});
		rD.showModal();
	});
	
});

/**
 * 验证数据、提交
 */
function checkBookingRoomFormModelAll(){

	var bed = $("#booking_room_from_all select[name=bedRoomCnt]").val();
	var living = $("#booking_room_from_all select[name=livingRoomCnt]").val();
	var bath = $("#booking_room_from_all select[name=bathRoomCnt]").val();
	var area = $("#booking_room_from_all input[name=area]").val();
	var building = $("#booking_room_from_all input[name=build]").val();
	var name = $("#booking_room_from_all input[name=name]").val();
	var mobile = $("#booking_room_from_all input[name=phoneNo]").val();
// 	var yzCode = $("#booking_room_from_all input[name=yzCode]").val();
	$("#booking_room_from_all input[name=orignURL]").val(window.location.href);
	if(bed==""){
		new Msg({id:'js_msg1',icon:'warning',text:"请选择室！"});
		return false;
	}
	if(living==""){
		new Msg({id:'js_msg1',icon:'warning',text:"请选择厅！"});
		return false;
	}
	if(bath==""){
		new Msg({id:'js_msg1',icon:'warning',text:"请选择卫！"});
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
	if(building==""){
		new Msg({id:'js_msg2',icon:'warning',text:"楼盘信息不能为空！"});
		return false;
	}
	if(name==""){
		new Msg({id:'js_msg3',icon:'warning',text:"称呼不能为空！"});
		return false;
	}
	if(mobile==""){
		new Msg({id:'js_msg4',icon:'warning',text:"请输入手机号码！"});
		return false;
	}
	if(!reg.matchMobile(mobile) && !reg.matchCordedTelephones(mobile)){
		new Msg({id:'js_msg12',icon:'warning',text:"电话格式不正确！"});
		return false;
	}else{
		$.ajax({
			type:'post',
			url:ctx+'/booking/room/save',
			data:$("#booking_room_from_all").serialize(),
			error:function(jqXHR, textStatus){
				console.log(jqXHR);
				console.log(textStatus);
			},
			success : function(data) {
				if(data.flag == true){
					var msg = new Msg({id:'js_msg9',icon:'warning',text:"登记成功！",cbOk:function(){
						$("#booking_room_from_all input[name=area]").val("");
						$("#booking_room_from_all input[name=build]").val("");
						$("#booking_room_from_all input[name=name]").val("");
						$("#booking_room_from_all input[name=phoneNo]").val("");
						$("#booking_room_from_all input[name=yzCode]").val("");
						msg.close();
					}});
				}else{
					new Msg({id:'js_msg10',icon:'warning',text:data.message});
				}
			}
 		});
		return true;
	}
}
