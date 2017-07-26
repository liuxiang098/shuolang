
function isPlaceholder(){
    var input = document.createElement('input');
    return 'placeholder' in input;
}
if (!isPlaceholder()) {//不支持placeholder的处理
    $(document).ready(function() {
        if(!isPlaceholder()){
            $("input").not("input[type='password']").each(//把input绑定事件 排除password框
                function(){
                    if($(this).val()=="" && $(this).attr("placeholder")!=""){
                        $(this).val($(this).attr("placeholder"));
                        $(this).focus(function(){
                            if($(this).val()==$(this).attr("placeholder")) $(this).val("");
                        });
                        $(this).blur(function(){
                            if($(this).val()=="") $(this).val($(this).attr("placeholder"));
                        });
                    }
                });
            //对password框的特殊处理 1.创建一个text框 2获取焦点和失去焦点的时候切换
            $("input[type='password']").each(        //遍历每一个输入框
                function() {
                    var pwdField    = $(this);
                    var pwdVal      = pwdField.attr('placeholder');
                    pwdField.after('<input  class="login-input" type="text" value='+pwdVal+' autocomplete="off" />');
                    var pwdPlaceholder = $(this).siblings('.login-input');
                    pwdPlaceholder.show();
                    pwdField.hide();

                    pwdPlaceholder.focus(function(){
                        pwdPlaceholder.hide();
                        pwdField.show();
                        pwdField.focus();
                    });

                    pwdField.blur(function(){
                        if(pwdField.val() == '') {
                            pwdPlaceholder.show();
                            pwdField.hide();
                        }
                    });
                })
        }
    });
}
//    end
$(".showSubMenu").bind("mouseenter mouseleave",function(){
    $(".effectPicture").toggleClass("show");
});
$(".effectPicture").bind("mouseenter mouseleave",function(){
    $(".effectPicture").toggleClass("show");
});
//$(".index_shopCar").bind("mouseenter mouseleave",function(){
//    $(".index_shopCar").css({background:"#fff",color:"#ED6D64",border:"1px solid #E8E8E8",boxShadow:"0 0 10px rgba(0, 0, 0, 0.2)"})
//});
$('.js_dialog_noskin').on('click',function(){
    var d = dialog({
        skin:'frame_show',
        title: ' ',
        fixed: true,
        content: '<img src="'+ASSETS_URL+'/images/index_img/frame.jpg" style="width: 700px" height="529px"/>',
        width:700
    });
    d.showModal();
});
//---------浮动菜单 Start
function toggleFloatMenu(){
    //console.log($(document).scrollTop());
    if($(document).scrollTop() > 400){
        $('#js_floatMenu').fadeIn();
    }else{
        $('#js_floatMenu').fadeOut('show');
    }
}
$('#js_goTop').on('click',function(){
    $('html,body').animate({scrollTop:0},'slow');
});
$(window).on('scroll',function(){
    toggleFloatMenu();
    var nTop = $('.shj-footer').offset().top;
    var nScrollTop = $(document).scrollTop();
    var nWindowHeight = $(window).height();
    if(nScrollTop + nWindowHeight > nTop) {
        $('#js_floatMenu').addClass('absolute');
    } else {
        $('#js_floatMenu').removeClass('absolute');
    }
});
//---------浮动菜单 End




