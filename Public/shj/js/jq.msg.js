/**
 * Created by Administrator on 2015/10/24.
 * require: template.js 弹出层需要用到js模板
 */
+function($,w){
    function Msg(opts){
        if(opts.zIndex){
            Msg.zIndex = opts.zIndex;
        } else {
            opts.zIndex = Msg.zIndex
        }
        this.opts = $.extend({},defaults,opts);
        this._init();
        return this;
    }
    Msg.zIndex = 99999;
    Msg.prototype. _init = function(){
        var that = this;
        Msg.zIndex++; // 自增z-index,始终保持在最前端显示
        that.opts.id = that.opts.id || ('js_msg'+ new Date().getTime());
        var html = template('public/msg', that.opts);
        $('body').append(html);
        var $element = this.$element = $('#'+ that.opts.id);
        $element.on('click','.js_close',function(){
            that.close();
        });
        $element.on('click','.js_ok',function(){
            if(typeof that.opts.cbOk == 'function'){
                that.opts.cbOk();
            } else {
                that.close();
            }
        });
        // 如果是confirm类型弹出层
        if(that.opts.type == 'confirm') {
            $element.on('click','.js_cancel',function(){
                if(typeof that.opts.cbCancel == 'function'){
                    that.opts.cbCancel();
                } else {
                    that.close();
                }
            });
        }
    };
    Msg.prototype.alert = function(){
        return this;
    };
    Msg.prototype.confirm = function(){
        return this;
    };
    Msg.prototype.close = function(){
        if(typeof this.opts.onClose == "function") {
            this.opts.onClose();
        }
        this.$element.remove();
        $('body > .m_mask').remove();
        return this;
    };
    var defaults = {
        type:'message',
        icon:'success', // 提示图标 默认为成功图标
        text:'', // 提示文字
        title:'提示信息', // 标题
        modal:true,
        html:'', // 自定义HTML
        zIndex:undefined,
        onClose: null,
        cbOk:null,
        cbCancel:null,
        buttons:['确 认','取 消']  // 自定义按钮文字
    }
    w.Msg = Msg;
}(jQuery,window);