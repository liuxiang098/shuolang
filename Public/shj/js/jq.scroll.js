/**
 * plugin scroll pic
 */
+function ($) {
    var ScrollPic = function(element,options){
        var that = this;
        this.timer = null;
        this.$element = $(element);
        this.options = options;
        this.pageIndex = 1;
        this.pageCount = 0;

        var $scrollBox = this.$element.find(this.options.scrollBox);
        var $list = $scrollBox.find(this.options.scrollItem);
        var nPageSize = this.options.pageSize;
        this.$element.addClass(this.options.customClass);
        this.pageCount =  Math.ceil($list.length / nPageSize);
        var nWidth = $list.outerWidth(true);
        $scrollBox.width(nWidth * $list.length);

        this.$element.on('click','.js_next',function(){
            that.next();
        });

        this.$element.on('click','.js_prev',function(){
            that.prev();
        });

        if(this.options.isPaging) {
            that._initPaging();
        }

        if(this.options.autoPlay) {
            this.$element.hover(function(){
                that.pause();
            },function(){
                that.autoPlay();
            });
            that.autoPlay();
        }

        if(this.options.onChange) {
            that.$element.on('change',function () {
                that.options.onChange(that);
            })
        }  

        // 将实例的引用保存在dom元素中
        this.$element.data('scroll_pic',this);
    }
    ScrollPic.DEFAULTS = {
        pageSize: 4,
        scrollBox: '.js_scrollBox',
        scrollItem:'li',
        customClass:'', // 自定义class类
        speed:500,
        delay:2000,
        isPaging:false,
        autoPlay: false
    }

    ScrollPic.prototype.autoPlay = function () {
        var that = this;
        clearInterval(that.timer);
        that.timer = setInterval(function () {
            that.scrollTo(++that.pageIndex);
        },that.options.delay);
    }

    ScrollPic.prototype.pause = function () {
        clearTimeout(this.timer);
    }

    ScrollPic.prototype.scroll = function(direction){
        var nIndex = this.pageIndex;
        if(direction == 'prev'){
            this.scrollTo(--nIndex);
        } else if(direction == 'next'){
            this.scrollTo(++nIndex);
        }
    };

    ScrollPic.prototype.next = function () {
        this.scroll('next');
    };
    ScrollPic.prototype.prev = function () {
        this.scroll('prev');
    };
    ScrollPic.prototype.scrollTo = function(nIndex){
        var that = this;
        var $scrollBox = this.$element.find(this.options.scrollBox);
        var nPageSize = this.options.pageSize;
        var nWidth = $scrollBox.find('li').outerWidth(true);
        var nTarget;

        if(nIndex > that.pageCount || nIndex == 0){
            // 如果索引范围不正确则退出
            nTarget = 0;
            nIndex = 1;
        } else {
            nTarget = -nPageSize*nWidth*(nIndex-1);
        }
        $scrollBox.stop().animate({
            left: nTarget
        },'slow',function(){
            that.pageIndex = nIndex;
            that._refreshPaging();
            // 触发change事件
            that.$element.trigger('change');
        });
    };

    // 分页
    ScrollPic.prototype._initPaging = function(){
        var that = this;
        var sPageHtml = '<div class="item_dots">';

        for(var i = 0; i < that.pageCount; i ++) {
            sPageHtml += '<a href="javascript:;"></a>';
        }
        sPageHtml += '</div>';
        that.$element.append($(sPageHtml));
        that._refreshPaging();
        that.$element.on('click','.item_dots a',function(){
            var nIndex = $(this).index()+1;
            that._refreshPaging($(this).index());
            that.scrollTo(nIndex);
        })
    };

    // 更新分页状态
    ScrollPic.prototype._refreshPaging = function (nIndex) {
        this.$element.find('.item_dots a').eq(nIndex || (this.pageIndex - 1)).addClass('active').siblings().removeClass('active');
    };
    

    function Plugin(option) {
        this.each(function () {
            var options = $.extend({}, ScrollPic.DEFAULTS, option);
            new ScrollPic(this,options);
        })
    }

    $.fn.scrollPic = Plugin;

}(jQuery);