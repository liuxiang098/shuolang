var acc_host='accwww6.53kf.com';var companyid='70831548';var hz6d_guest_ip='180.102.117.53';var ipstr='%E6%B1%9F%E8%8B%8F%E7%9C%81%E5%8D%97%E4%BA%AC%E5%B8%82%5B%E7%94%B5%E4%BF%A1%5D';var ipContinent='%E4%BA%9A%E6%B4%B2';var in_timestamp='1495676094415';var hz6d_guest_id='10291067070005';var style_id= '10';var hz6d_alias_host='http://www6.53kf.com';
/* 
    变量：
    acc_host        acc.www4.53kf.com
    companyid       72034819
    hz6d_guest_ip   125.120.149.68
    ipstr           浙江省杭州市[电信]
    in_timestamp    time()      1445841152695
    hz6d_guest_id   66518726610
    style_id        2
    hz6d_alias_host http://www4.53kf.com


var acc_host       	= '';
var companyid    	= '';
var hz6d_guest_ip	= '';
var ipstr        	= '';
var in_timestamp    = '';
var hz6d_guest_id   = '';
var style_id        = '';
var hz6d_alias_host = '';
*/

in_timestamp = parseInt(in_timestamp/1000);
var http_pro = (document.location.protocol == 'https:')?'https://':'http://';
onliner_zdfq = 0;
(function(window, undefined) {
	var w = window,
		d = document,
		dd = d.documentElement,
		db = d.body,// db kf.php在head中时获取不到 
		head = d.head || d.getElementsByTagName("head")[0] || dd,
		isStrict = d.compatMode == "CSS1Compat",
		m = Math.max,
		ua = navigator.userAgent,
		np = navigator.platform,
		EN = w.encodeURIComponent,
		DE = w.decodeURIComponent;

	var $53 = function(id) {return d.getElementById(id) ? d.getElementById(id) : null};
	$53.version = '1.0.0';
	$53.global = {};
	$53.getKFscript = function(){
		if (typeof $53.global[''] == 'undefined' || $53.global[''] == null) {
			var scripts = document.getElementsByTagName('script'), len = scripts.length, i = 0;
			for(;i<len;i++){
				if (/kf\.php/img.test(scripts[i].src)) {
					$53.global[''] = scripts[i];
					break;
				}
			}
		}
		return $53.global[''];
	};
	$53.ready = (function(){
		var ie = !!(window.attachEvent && !window.opera),
			wk = /webkit\/(\d+)/i.test(navigator.userAgent) && (RegExp.$1 < 525),
			fn = [],
			run = function () {isReady = true; for (var i = 0; i < fn.length; i++) fn[i](); },
			d = document,
			isReady = false;
		return function (f) {
			if (d.body) {f();return;}
			if (isReady) {f();return;}
			if (!ie && !wk && d.addEventListener) return d.addEventListener('DOMContentLoaded', f, false);
			if (fn.push(f) > 1) return;
			if (ie) {
				(function () {
					if (!isReady) {	
						try { d.documentElement.doScroll('left'); run(); }
						catch (err) { setTimeout(arguments.callee, 0); }
					}
				})();
			} else if (wk) {
				var t = setInterval(function () {
					if (/^(loaded|complete)$/.test(d.readyState))
						clearInterval(t), run();
				}, 0);
			}
		};
	})();
	$53.forEach = function(enumerable, iterator, context) {
		var i, n, t;
		if (typeof iterator == "function" && enumerable) {
			// Array or ArrayLike or NodeList or String or ArrayBuffer
			n = typeof enumerable.length == "number" ? enumerable.length: enumerable.byteLength;
			if (typeof n == "number") {
				if (Object.prototype.toString.call(enumerable) === "[object Function]") {
					return enumerable;
				}
				for (i = 0; i < n; i++) {
					t = enumerable[i];
					t === undefined && (t = enumerable.charAt && enumerable.charAt(i));
					iterator.call(context || null, t, i, enumerable);
				}
				// enumerable is number
			} else if (typeof enumerable == "number") {
				for (i = 0; i < enumerable; i++) {
					iterator.call(context || null, i, i, i);
				}
				// enumerable is json
			} else if (typeof enumerable == "object") {
				for (i in enumerable) {
					if (enumerable.hasOwnProperty(i)) {
						iterator.call(context || null, enumerable[i], i, enumerable);
					}
				}
			}
		}
		return enumerable;
	};
	$53.type = (function() {
		var objectType = {},
			nodeType = [, "HTMLElement", "Attribute", "Text", , , , , "Comment", "Document", , "DocumentFragment", ],
			str = "Array Boolean Date Error Function Number RegExp String",
			retryType = {
				'object': 1,
				'function': '1'
			},
			toString = objectType.toString;
		$53.forEach(str.split(" "), function(name) {
			objectType["[object " + name + "]"] = name.toLowerCase();
			$53["is" + name] = function(unknow) {
				return $53.type(unknow) == name.toLowerCase();
			}
		});
		return function(unknow) {
			var s = typeof unknow;
			return ! retryType[s] ? s: unknow == null ? "null": unknow._type_ || objectType[toString.call(unknow)] || nodeType[unknow.nodeType] || (unknow == unknow.window ? "Window": "") || "object";
		};
	})();
    
	$53.isObject = function(unknow) {
		return typeof unknow === "function" || (typeof unknow === "object" && unknow != null)
	};
    
	$53.isPlainObject = function(unknow) {
		var key, hasOwnProperty = Object.prototype.hasOwnProperty;

		if ($53.type(unknow) != "object") {
			return false;
		}
		if (unknow.constructor && !hasOwnProperty.call(unknow, "constructor") && !hasOwnProperty.call(unknow.constructor.prototype, "isPrototypeOf")) {
			return false;
		}
		for (key in unknow) {}
		return key === undefined || hasOwnProperty.call(unknow, key);
	};
	$53.kfextend = function(depthClone, object) {
		var second, options, key, src, copy, i = 1,
		n = arguments.length,
		result = depthClone || {},
		copyIsArray, clone;
		$53.isBoolean(depthClone) && (i = 2) && (result = object || {}); ! $53.isObject(result) && (result = {});
		for (; i < n; i++) {
			options = arguments[i];
			if ($53.isObject(options)) {
				for (key in options) {
					src = result[key];
					copy = options[key];
					if (src === copy) {
						continue;
					}
					if ($53.isBoolean(depthClone) && depthClone && copy && ($53.isPlainObject(copy) || (copyIsArray = $53.isArray(copy)))) {
						if (copyIsArray) {
							copyIsArray = false;
							clone = src && $53.isArray(src) ? src: [];
						} else {
							clone = src && $53.isPlainObject(src) ? src: {};
						}
						result[key] = $53.kfextend(depthClone, clone, copy);
					} else if (copy !== undefined) {
						result[key] = copy;
					}
				}
			}
		}
		return result;
	}
	$53.kfextend($53, {
		$: function(id) {
			return d.getElementById(id) ? d.getElementById(id) : null;
		},
		EN: EN,
		DE: DE,
		isStrict: isStrict,
		counter:1,     //计数器
		data: function(key, value) {
			if(typeof value == 'undefined') {
				return $53.global[key] === undefined ? null : $53.global[key];
			} else {
				$53.global[key] = value;
			}
		},
		trim: function(text) {
			//return text == null ? "": (text + "").replace(new RegExp('(^[\\\\s\\\\t\\\\xa0\\\\u3000\\\\uFEFF]+)|([\\\\u3000\\\\xa0\\\\s\\\\t\\\\uFEFF]+\\x24)', 'g'), '');
            return text == null ? "": (text + "").replace(new RegExp('(^[\\s\\t\\xa0\\u3000\\uFEFF]+)|([\\u3000\\xa0\\s\\t\\uFEFF]+\x24)', 'g'), '');
		},
		getOs: function() {
			var allOs = ['iphone', 'android', 'macos', 'linux', 'win2008', 'win8', 'win7', 'winvista', 'win98', 'win2000', 'win2003', 'winxp', 'os_other'];
			var isWin = (np == "Win32") || (np == "Windows") || (np == "Win64");
			if (isWin) {
				var winos = {
					'win98': '(Win98)|(Windows 98)',
					'win2000': '(Windows NT 5.0)|(Windows 2000)',
					'winxp': '(Windows NT 5.1)|(Windows XP)',
					'win2003': '(Windows NT 5.2)|(Windows 2003)',
					'win7': '(Windows NT 6.1)|(Windows 7)',
					'winvista': '(Windows NT 6.0)|(Windows Vista)',
					'win8': '(Windows NT 6.2)|(Windows 8)',
					'win2008': '(Windows NT 6.1)|(Windows 2008)'
				};
				for (var i in winos) {
					if (winos.hasOwnProperty(i) && (new RegExp(winos[i], 'i')).test(ua)) return i;
				}
			}
			var isMac = (np == "Mac68K") || (np == "MacPPC") || (np == "Macintosh") || (np == "MacIntel");
			if (isMac) return "macos";
			if ((np == "X11") && !isWin && !isMac) return "unix";
			if ((np.toLowerCase() + ua.toLowerCase()).indexOf('iphone') > -1) return 'iphone';
			if (np.toLowerCase().indexOf("linux") > -1 && ua.toLowerCase().indexOf('android') > -1) return 'android';
			if (np.indexOf("Linux") > -1) return "linux";
			return "os_other";
		},
        isMobile: function() {
            var userAgentInfo = navigator.userAgent;
            var Agents = ["Android", "iPhone",
                "SymbianOS", "Windows Phone",
                "iPad", "iPod"];
            var flag = 'n';
            for (var v = 0; v < Agents.length; v++) {
                if (userAgentInfo.indexOf(Agents[v]) > 0) {
                    flag = 'y';
                    break;
                }
            }
            return flag;    
        },
        getUrlParam: function() {
            var url = location.search; 
            var theRequest = new Object();
            if (url.indexOf("?") != -1) {
                var str = url.substr(1);
                strs = str.split("&");
                for(var i = 0; i < strs.length; i ++) {
                    theRequest[strs[i].split("=")[0]]=strs[i].split("=")[1];
                }
            }
            return theRequest;   
        },
		getBrowser: function() {
			var browsers = {
				'sogou': 'sogou',
				'maxthon': 'maxthon',
				'opera': 'opera',
				'qq': 'tencent',
				'uc': 'uc',
				'360': '360',
				'firefox': 'firefox',
				'chrome': 'chrome',
				'safari': 'safari',
				'ie10': 'msie 10',
				'ie9': 'msie 9',
				'ie8': 'msie 8',
				'ie7': 'msie 7',
				'ie6': 'msie 6',
				'ie5': 'msie 5'
			};
			for (var i in browsers) {
				if (browsers.hasOwnProperty(i) && (new RegExp(browsers[i], 'i')).test(ua)) return i;
			}
			return 'ua_other';
		},
		getScreen: function() {
			return screen.width + "_" + screen.height;
		},
		setCookie: function(key,value,options) {
			if (!$53.isCookieKey(key)) {return;}
			options = options || {};
			var expires = options.expires;
			if ('number' == typeof options.expires) {
				expires = new Date();
				expires.setTime(expires.getTime() + options.expires*1000);
			}
			document.cookie = key + "=" + EN(value)
			+ (options.path ? "; path=" + options.path : "")
			+ (expires ? "; expires=" + expires.toUTCString() : "")
			+ ("; domain=" + (options.domain ? options.domain : location.hostname))
			+ (options.secure ? "; secure" : "");
		},
		getCookie: function(key) {
			if ($53.isCookieKey(key)) {
				var reg = new RegExp('(^| )' + key + '=([^;]*)(;|$)'), result = reg.exec(document.cookie);
				if (result) {
					var value = (result[2] === undefined || result[2] === null) ? '' : result[2];
				}
			}
			if ('string' == typeof value) {
				return DE(value);
			}
			return '';
		},
		isCookieKey:function(key) {
		//	return (new RegExp('^[^\\\\x00-\\\\x20\\\\x7f\\\\(\\\\)<>@,;:\\\\\\\\\\\\"\\\\[\\\\]\\\\?=\\\\{\\\\}\\\\/\\\\u0080-\\\\uffff]+\\x24')).test(key);
            return (new RegExp('^[^\\x00-\\x20\\x7f\\(\\)<>@,;:\\\\\\"\\[\\]\\?=\\{\\}\\/\\u0080-\\uffff]+\x24')).test(key);
		},
		setKfCookie:function(data){       //设置主域名53kf.com下的cookie   data为二维数组  [['name1','张三',0],['name2','李四',3600]]   第三个参数为过期时间  0：回话  -1：永久  时间戳：过期时间
			var _this = this;
			var url = "//tb.53kf.com/code/ck/";
			var param = new Array();
			for (var i=0;i<data.length;i++){
				var ck = data[i];
				for(var j=0;j<ck.length;j++){
				    param.push(encodeURIComponent(ck[j]));
				}
			}
			var param_str = param.join('/');
			url += param_str;
			var id = 'kf_script_'+_this.counter;
			_this.createScript(id,url);
			_this.counter++;
		},
		getWH: function() { // 获取窗口可用大小 
			return {
				W: (isStrict ? dd: d.body).clientWidth,
				H: (isStrict ? dd: d.body).clientHeight
			};
		},
		getSWH: function() { // 获取屏幕分辨率的大小
			return {
				W: screen.width,
				H: screen.height
			};
		},
		getS: function() {// 获取滚动距离 
			return {
				L: m(dd.scrollLeft, d.body.scrollLeft),
				T: m(dd.scrollTop, d.body.scrollTop)
			};
		},
		htmlDecode: function(text) {
			return text.replace(/&amp;/g, '&').replace(/&quot;/g, '\"').replace(/&#039;/g, '\'').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&douhao/g, ",").replace(/&jinghao/g, '#');
		},
		creElm: function(o, t, a, loc) {
			loc = loc || 0;
			var b = d.createElement(t || 'div'), c = (a || d.body || dd);
			for (var p in o) {
				if (!o.hasOwnProperty(p)) continue;
				p == 'style' ? b[p].cssText = o[p] : b[p] = o[p];
				if(p == 'id' && $53(o[p])) $53(o[p]).parentNode.removeChild($53(o[p]));
			}
			if (!loc) return c.insertBefore(b, c.firstChild);
			else return $53.insertAfter(b, c.lastChild);
		},
		insertAfter: function(newEl, targetEl)
		{
			var parentEl = targetEl.parentNode;
			if(parentEl.lastChild == targetEl)
			{
				return parentEl.appendChild(newEl);
			}else
			{
				return parentEl.insertBefore(newEl,targetEl.nextSibling);
			}
		},
		createScript: function(id,url){
			$53.creElm({
				'id':id == '' ? 'hz6d_script_' + Math.random() : id,
				'src':url,
				'charset':'utf-8'
			},'script',head);
		},
		before: function(html, elem){
			var frag = d.createDocumentFragment(), div=d.createElement('div');
			div.innerHTML = html;
			frag.appendChild(div);
			return (elem.parentNode || d.body || dd).insertBefore(div.firstChild.cloneNode(true), elem);
			frag = null;
		},
		after: function(html, elem){
			var frag = d.createDocumentFragment(), div=d.createElement('div');
			div.innerHTML = html;
			frag.appendChild(div);
			return $53.insertAfter(div.firstChild.cloneNode(true), elem);
			frag = null;
		},
		insertFixed: function(html){ // 图标嵌入固定模式用 //
			$53.ready(function(){
				var script = $53.getKFscript(), elem = null;
				if (script.parentNode == head) elem = $53.before(html, d.body.firstChild);
				else elem = $53.after(html, script);
			});
		},
		getTimeTo24: function(){
			//get senconds time from now to tomorrow 00:00
			var d1 = new Date(),
				d2 = new Date();
			d1.setDate(d1.getDate() + 1);
			d1.setHours(0);
			d1.setMinutes(0);
			d1.setSeconds(0);
			return (d1.getTime() - d2.getTime())/1000;
		},
		json2str : function(json,code){
			var arr = [];
			var encode =  code == 'urlencode' ? $53.EN : function(data){return data};
			for(var i in json) {
				if (json.hasOwnProperty(i)) {
					arr.push(i + '=' + encode(json[i]));
				}
			}
			return arr.join('&');
		},
		addEvent : function( obj, type, fn ) {
			if ( obj.attachEvent ) {
				obj['e'+type+fn] = fn;
				obj[type+fn] = function(){obj['e'+type+fn]( window.event );}
				obj.attachEvent( 'on'+type, obj[type+fn] );
			} else {
				obj.addEventListener( type, fn, false );
			}
		},
		removeEvent : function( obj, type, fn ) {
			if ( obj.detachEvent ) {
				obj.detachEvent( 'on'+type, obj[type+fn] );
				obj[type+fn] = null;
			} else {
				obj.removeEventListener( type, fn, false );
			}
		}
	});
    //对外开放接口
    $53.kfextend($53, {
		$: function(id) {
			return d.getElementById(id) ? d.getElementById(id) : null;
		},
		EN: EN,
		DE: DE,
		isStrict: isStrict,
		online : 'false',
		terminal : 'pc',
		openurl : '',
		workers : [],
		groups : [],
		groupIds : [],
		popParam : '',
		apiArr : [],
		uuid : '',
		host : '',
		sign : '',
		createApi:function(){
			var api = new _53API(this.online,this.terminal,this.openurl,this.workers,this.groups,this.groupIds);
			this.apiArr.push(api);
			return api;
		},
		setOnline : function(online){
			this.online = online;
		},
		setUrl : function(url){
			this.openurl = url;
		},
		setTerminal : function(terminal){
			if(terminal == 'mobile'){
				this.terminal = 'mobile';
			}
		},
		setWorkers : function(workers){
			this.workers = workers;
		},
		setGroups : function(groups){
			this.groups = groups;
			for(var i=0;i<groups.length;i++){
				this.groupIds[i] = groups[i].group_id;
			}
		},
		getPopParam : function(){
			var re = this.popParam;
			this.popParam = '';
			return re;
		},
		setPopParam : function(param){
			this.popParam = param;
		},
		callMsg : function(){
			for(var i=0;i<this.apiArr.length;i++){
				this.apiArr[i].callMsg();
			}
		},
		setUuid:function(uuid){
			this.uuid = uuid;
		},
		getUuid:function(){
			return this.uuid;
		},
		setHost:function(host){
			this.host = host;
		},
		setSign:function(sign){
			this.sign = sign;
		},
		sendData:function(type,data){
			var _this = this;
			var id = 'kf_script_'+_this.counter;
			var url = '//'+_this.host+'/kfapi.php?company_id='+companyid+'&id='+encodeURIComponent(_this.uuid)+'&type='+encodeURIComponent(type)+'&data='+encodeURIComponent(data)+'&sign='+encodeURIComponent(_this.sign);
			_this.createScript(id,url);
			_this.counter++;
		}
	});
	function _53API(online,terminal,openurl,workers,groups,groupIds){
		this.online = online,
		this.terminal = terminal,
		this.openurl = openurl,
		this.workers = workers,
		this.groups = groups,
		this.groupIds = groupIds,
		this.paramArr = ['cmd','type','group_id','worker_id','msg_callback','mtalk','stat_id'],
		this.param = {},
		this.callMsg = function(){},    //来消息回调函数
		this.setPopParam = function(param){
			$53.setPopParam(param);
		},
		this.checkGroup = function(group_id){
			var _this = this;
			var groupIds = group_id.split(',');
			for(var i=0;i<groupIds.length;i++){
				if(_this.groupIds.indexOf(groupIds[i]) < 0){
					return false
				}
			}
			return true;
		},
		this.push = function(key,value){     //添加参数
			var _this = this;
			if(_this.paramArr.indexOf(key) < 0){
				return _this.reback('401','error param');
			}
			if(key == 'msg_callback'){
				if((typeof value) == 'function'){
					_this.callMsg = value;
				}else{
					return _this.reback('402','msg_callback must be a function');
				}
			}else{
				value = $53.trim(value);
				if(value == ''){
					return _this.reback('403','error value');
				}
				if(key == 'group_id' && _this.checkGroup(value) === false){
					return _this.reback('404','unknown group_id');
				}
				_this.param[key] = value;
			}
			return _this.reback('201','success',false);
		},
		this.query = function(){    //执行命令
			var _this = this;
			switch(_this.param.cmd){
				case 'kfclient':
				    if(_this.param.type != 'new' && _this.param.type != 'popup'){
				    	return _this.reback('501','error type');
				    }
				    var group_id = $53.trim(_this.param.group_id);
				    var worker_id = $53.trim(_this.param.worker_id);
				    if(group_id != '' && worker_id != '' && !(_this.terminal == 'mobile' && _this.param.type == 'popup')){
				    	return _this.reback('503','worker_id and group_id can only choose one ');
				    }
				    var zdkf_type = 1;
				    var kf = worker_id;
				    if(group_id != ''){
				    	zdkf_type = 3;
				    	kf = group_id;
				    }
				    _this.openkf(_this.param.type,zdkf_type,kf);
				    return _this.reback('201','success');
					break;
				case 'mtalk':
					var group_id = $53.trim(_this.param.group_id);
				    var worker_id = $53.trim(_this.param.worker_id);
				    if(_this.terminal != 'mobile'){
				    	return _this.reback('301','error terminal');
				    }
				    if(group_id != '' && worker_id != ''){
				    	return _this.reback('303','worker_id and group_id can only choose one ');
				    }
				    var zdkf_type = 1;
				    var kf = worker_id;
				    if(group_id != ''){
				    	zdkf_type = 3;
				    	kf = group_id;
				    }
				    _this.talk(_this.param.type,zdkf_type,kf);
				    return _this.reback('201','success');
					break;
				case 'status':
					return _this.reback('201',_this.online);
					break;
				case 'grouplist':
					return _this.reback('201',_this.groups);
					break;
				case 'workerlist':
					return _this.reback('201',_this.workers);
					break;
				case 'jzl':
				case 'mxsj':
					var data = $53.trim(_this.param.stat_id);
					_this.saveData(_this.param.cmd,data);
					break;
				default:
					return _this.reback('601','error cmd');
					break;
			}
		},
		this.talk = function(type,zdkf_type,kf){
			var _this = this;
			var param = kf != '' ? ('&zdkf_type='+zdkf_type+'&kf='+kf) : '';
			if(_this.terminal == 'mobile'){
				_this.setPopParam(param);
				change_kf_openurl();
			}
		},
		this.openkf = function(type,zdkf_type,kf){
			var _this = this;
			var param = kf != '' ? ('&zdkf_type='+zdkf_type+'&kf='+kf) : '';
			if(type == 'new'){
				var url = _this.openurl+param;
				if(_this.terminal == 'pc'){
					window.open(url,"_blank","height=470,width=702,top=200,left=200,status=yes,toolbar=no,menubar=no,resizable=yes,scrollbars=no,location=no,titlebar=no");
				}else{
					location.href = url;
				}
			}else{
				if(_this.terminal == 'pc'){
					_this.setPopParam(param);
					hz6d_startReautoTimer2(3);
				}else{
					show_mobile_chat();
				}
			}
		},
		this.saveData = function(type,data){
			$53.sendData(type,data);
		},
		this.openUrl = function(url,resize){    //内部调用接口 用来点击打开咨询页面
			window.open(url,"_blank","height=470,width=702,top=200,left=200,status=yes,toolbar=no,menubar=no,resizable="+resize+",scrollbars=no,location=no,titlebar=no");
		},
		this.reback = function(code,info,clear){   //返回信息
			var _this = this;
			var data = {};
			if(code == '201'){
				data = {code:code,cmd:_this.param.cmd,info:info};
			}else{
				data = {code:code,info:info};
			}
			if(clear !== false){
				_this.param = {};    //清空参数
			}
			return data;
		}
	}
	// window.open 方法重写 
	// 支持ie/ff/chrome/safari/opera 
	var _open = window.open;
	window.open = function(sURL, sName, sFeatures, bReplace) {
		if (sURL == undefined) {
			sURL = ''
		}
		if (sName == undefined) {
			sName = ""
		}
		if (sFeatures == undefined) {
			sFeatures = ""
		}
		if (bReplace == undefined) {
			bReplace = false
		}
		if (/webCompany.php|webClientMin.php/.test(sURL)) {
			sURL += '&timeStamp=' + new Date().getTime() + '&ucust_id=' + $53.EN($53.getCookie('ucust_id'));
		} else if ('$zdyurl' != '') {
			var _zdyurl = '$zdyurl';
			if (sURL.indexOf(_zdyurl) > -1) {
				sURL += '&timeStamp=' + new Date().getTime() + '&ucust_id=' + $53.EN($53.getCookie('ucust_id'));
			}
		}
		try{sURL = sURL.replace('&referer={hz6d_referer}',hz6d_referer);}catch(e){}
		var win = _open(sURL, sName, sFeatures, bReplace);
		return win;
	}
	window.$53 = $53;
})(window);


/* ↓图标相关函数↓ */
	
	function hz6d_html_replace(html)
	{   
	    if(html.indexOf('{hz6d_keyword}') == -1) {
           return html.replace(/%7Bhz6d_keyword%7D/gim, encodeURIComponent(hz6d_from_page_new) + "&tfrom=1"); 	       
	    }else{
	       return html.replace(/{hz6d_keyword}/gim, hz6d_from_page_new + "&tfrom=1");
	    }		
	}

	function hz6d_is_exist(html){
		if (typeof(hz6d_showContent)  == "function" && hz6d_showContent && typeof(hz6d_ID('hz6d_chatting_iframes')) != undefined){
			hz6d_showContent();
		}else{
			var new_clic = html.replace(/#liyc#/g,"\'");
			eval(decodeURIComponent(new_clic));
		}
	}
	function hz6d_is_exists(html,kf){
		if (typeof(hz6d_showContent)  == "function" && hz6d_showContent && typeof(hz6d_ID('hz6d_chatting_iframes')) != undefined){
			hz6d_showContent(kf);
		}else{
			eval(decodeURIComponent(html));
		}
	}
	// has defined <!DOCTYPE... > 

	function hasdoctype()
  {
		if (document.compatMode == "BackCompat")
		{
			ret = false;
		}
		else
		{
			ret = true;
		}
		return ret;
	}

	function detectBrowser()
	{
		var ret = "ie6"; // default
		var user_agent = navigator.userAgent;
		if (user_agent.indexOf("compatible") > -1)
		{
			if (user_agent.indexOf("MSIE 6.0") > -1)
			{
				ret = "ie6";
			}
			else if (user_agent.indexOf("MSIE 7.0") > -1)
			{
				ret = "ie7";
			}
			else if (user_agent.indexOf("MSIE 8.0") > -1)
			{
				ret = "ie8";
			}
			if (user_agent.indexOf("360") > -1)
			{
				ret = "360";
			}
		}
		else if (user_agent.indexOf("Gecko") > -1)
		{
			ret = "firefox";
		}
		if (user_agent.indexOf("TheWorld") > -1)
		{
			ret = "TheWorld";
		}
		return ret;
	}
	
	// 间距小于步进，则移动间距的距离 
	function smoothMove(start, end)
	{
		var step = Math.abs(end - start);
		var forword = end - start;
		if (step > 2)
		{
			step = Math.ceil(step * 0.2) * (forword / Math.abs(forword));
		}
		else
		{
			step = step * (forword / Math.abs(forword));
		}
		posi = start + step;
		if (step > 0)
		{
			if (posi > end) posi = end;
		}
		else
		{
			if (posi < end) posi = end;
		}
		return posi;
	}
	
	var hasdoctype = hasdoctype();
	var browser = detectBrowser();
	// 点击图标设置变量 

function setIsinvited()
{
	try
	{
		onliner_zdfq = 2;
		if (acc_autotype == 3)
		{
			document.cookie = "onliner_zdfq{$companyid}=" + onliner_zdfq;
		}
	}
	catch (e)
	{}
}
/* ↑图标相关函数↑ */

// 设置 新老访客 
if(!$53.getCookie('53gid2')) {
	$53.setCookie('53gid2',hz6d_guest_id,{
		expires:10*365*24*3600
	});
	// new visitor
	$53.setCookie('visitor_type','new');
} else if($53.getCookie('53gid2')) {
	// old visitor
	$53.setCookie('visitor_type','old');
    hz6d_guest_id = $53.getCookie('53gid2');   
}
// set my site uid -> crm
// set 53kf guest_id 设置UV 
if (!$53.getCookie('53gid0')){
	$53.setCookie('53gid0',hz6d_guest_id,{
		expires:$53.getTimeTo24()
	});
	$53.data('is_uv',1);
} else if($53.getCookie('53gid2')){
	$53.data('is_uv',0);
}
// 设置RV 
if (!$53.getCookie('53gid1')){
	$53.setCookie('53gid1',hz6d_guest_id,{
		expires:86400
	});
	$53.data('is_rv',0);
} else if($53.getCookie('53gid2')){
	$53.data('is_rv',1);
}

var is_revisit = 0;
if (!$53.getCookie('53revisit')) {
    $53.setCookie('53revisit',new Date().getTime(),{
		expires:10*365*24*3600,'path':'/'
	});       
} else {
    if((new Date().getTime() - $53.getCookie('53revisit')) > 86400000){
        is_revisit = 1;    
    }
}

// 获取访问的入口来源页面:搜索引擎/外部链接/直接输入 
var hz6d_from_page = $53.getCookie("53kf_"+companyid+"_keyword");
eval("var kf_"+companyid+"_keyword_ok=$53.getCookie('kf_"+companyid+"_keyword_ok');");
if (!eval("kf_"+companyid+"_keyword_ok"))
{   
    var hz6d_request = $53.getUrlParam();
    var hz6d_tglink = false;
    var search_engine_list = {'baidu':'wd=',
        'haosou':'q=',
        'sogou':'query=',
        'google':'q=',
        'youdao':'q=',
        'sm':'q='
		};
    if(hz6d_request['tgse'] && hz6d_request['tgkwd']){
	   hz6d_tglink = 'http://www.' + hz6d_request['tgse'] + '.com/s?' + search_engine_list[hz6d_request['tgse']] + decodeURIComponent(hz6d_request['tgkwd']);
    }
    if(hz6d_tglink){//是否是推广页面
        hz6d_from_page = hz6d_tglink;        
    }else{
        hz6d_from_page = document.referrer;    
    }
}
$53.data('page_referer',hz6d_from_page);
$53.setCookie("53kf_"+companyid+"_keyword",hz6d_from_page,{'path':'/'});
$53.setCookie("kf_"+companyid+"_keyword_ok",1,{'path':'/'});
hz6d_from_page_new = "&keyword=" + $53.EN(hz6d_from_page);
var acc_browser = $53.getBrowser();
var acc_os = $53.getOs();

function hz6d_sendACC() {
    var kh_status = 0;
    if(onliner_zdfq==3) { kh_status = 3; }
        var talk_page_tmp = window.location.href;
        if(talk_page_tmp.indexOf('hz6d{') != -1) {
            talk_page_tmp = talk_page_tmp.substring(0,talk_page_tmp.indexOf('hz6d{'));
        }
        var talk_page = window.encodeURIComponent(talk_page_tmp);
   // 	var kf_time = "$in_timestamp";
    	var time = new Date().getTime();
    	var curSecond = Math.floor(time/1000);
    	var page_title = document.title;								
    //	var url = "$http://$acc_host/sendacc.jsp?cmd=ACC&did=0&sid=12&company_id="+com_id+"&guest_id="+hz6d_guest_id+"&status="+kh_status+"&guest_name=&guest_ip="+ip+"&guest_ip_info="+guest_ip_info+"&from_page="+from_page+"&talk_page="+talk_page+"&kf_time="+kf_time+"&bto_id6d=-99&time="+time + '&ucust_id=' + $53.getCookie('ucust_id') + '&style=' + $style_id + '&is_mobile=n&visitor_type='+$53.getCookie('visitor_type')+'&is_uv='+$53.data('is_uv');
    	var url = http_pro + acc_host + "/sendacc.jsp?cmd=ACC&did=0&sid=12&company_id="+companyid+"&guest_id="+hz6d_guest_id+"&status="+kh_status+"&guest_name=&guest_ip="+$53.EN(hz6d_guest_ip)+"&guest_ip_info="+ipstr+"&from_page=" + $53.EN($53.getCookie("53kf_"+companyid+"_keyword")) +"&talk_page="+talk_page+"&kf_time="+in_timestamp+"&bto_id6d=-99&time="+time + '&ucust_id=' + $53.EN($53.getCookie('ucust_id')) + '&style='+style_id+'&is_mobile='+$53.isMobile()+'&visitor_type='+$53.getCookie('visitor_type')+'&is_uv='+$53.data('is_uv')+'&browser='+acc_browser+'&os='+acc_os+'&is_revisit='+is_revisit+"&page_title="+$53.EN(page_title);
  		$53.createScript("hz6d_send_acc", url);
        setTimeout("hz6d_sendACC()",20000);
}

hz6d_sendACC();

$53.data("workers",{"10136739":{"worker_id":"sdlc53kftj4@163.com","bname":"生活家家居刘昭卿","state":0},"10141306":{"worker_id":"cs007","bname":"长沙生活家-蘑菇 咨询热线15675285280","state":0},"5614794":{"worker_id":"cd004","bname":"成都生活家小天","state":1},"10218543":{"worker_id":"shjjbd@163.com","bname":"装修顾问-泰山13928852138","state":1},"10192229":{"worker_id":"sdlc53kfhz16@163.com","bname":"","state":0},"10189735":{"worker_id":"sdlc53kfhz24@163.com","bname":"杭州生活家装修顾问-只只","state":0},"10197441":{"worker_id":"tyw1010","bname":"陈静","state":0},"10177720":{"worker_id":"sdlc53kfhz1@163.com","bname":"杭州生活家装饰-微微","state":1},"5588224":{"worker_id":"nc04","bname":"蒲清会","state":1},"10135879":{"worker_id":"sdlc53kfcd14@163.com","bname":"成都生活家魏婷","state":0},"10115943":{"worker_id":"sdlc53kfsjz5@163.com","bname":"客户经理小腾","state":0},"10178843":{"worker_id":"sdlc53kfhz22@163.com","bname":"杭州生活家装饰顾问-天天","state":0},"10213007":{"worker_id":"chenxiaxia1204@163.com","bname":"金牌客户经理：千寻","state":0},"10183703":{"worker_id":"15633800617@163.com","bname":"李宁","state":0},"10157912":{"worker_id":"sdlc53kfhf2b4@163.com","bname":"程程","state":0},"10156092":{"worker_id":"sdlc53kfdl6@163.com","bname":"","state":0},"10115926":{"worker_id":"sdlc53kfnj7@163.com","bname":"南京生活家王家俊","state":0},"10170118":{"worker_id":"sdlcqdshj4@163.com","bname":"","state":0},"5540302":{"worker_id":"bj001","bname":"","state":0},"10180476":{"worker_id":"tyw2004","bname":"郝建峰","state":0},"10220662":{"worker_id":"qgzhangwei@dyrs.com.cn","bname":"","state":0},"10180606":{"worker_id":"sdlc53kfwh3b6@163.com","bname":"","state":0},"5570351":{"worker_id":"xa005","bname":"05号小璐","state":0},"10137382":{"worker_id":"sdlc53kfkm9@163.com","bname":"","state":0},"10098950":{"worker_id":"sdlc53kfwh5@163.com","bname":"无","state":0},"10171034":{"worker_id":"shshjcc1@163.com","bname":"上海客服花田","state":1},"5540340":{"worker_id":"gy003","bname":"白娅","state":0},"10164806":{"worker_id":"sdlc53kfbj18@163.com","bname":"","state":0},"10162704":{"worker_id":"13609539594@163.com","bname":"福州生活家装饰 孙颖","state":0},"5627090":{"worker_id":"wh002","bname":"武汉客服02号","state":0},"10157910":{"worker_id":"sdlc53kfhf2b2@163.com","bname":"拓海","state":0},"10202415":{"worker_id":"sdlcweixin53@163.com","bname":"","state":0},"10219895":{"worker_id":"cdshjsc5b3@163.com","bname":"成都生活家—冯宇（电话：13540004315 qq：263719171）","state":1},"10141354":{"worker_id":"sdlc53kfgy10@163.com","bname":"胡高琼","state":0},"10180604":{"worker_id":"sdlc53kfwh3b4@163.com","bname":"武汉客户经理--小熊","state":0},"10118478":{"worker_id":"sdlc53kfbj3@163.com","bname":"北京1部-陈刚","state":0},"10229956":{"worker_id":"m17710762239@163.com","bname":"null","state":0},"5627092":{"worker_id":"wh004","bname":"武汉客服04号","state":0},"10185928":{"worker_id":"shshjcc5@163.com","bname":"","state":0},"5540346":{"worker_id":"xa001","bname":"01号","state":0},"10159643":{"worker_id":"sdlc53kfgy11@163.com","bname":"","state":0},"10175118":{"worker_id":"sdlc53kfwh2b3@163.com","bname":"","state":0},"10143923":{"worker_id":"sdlc53kfwh11@163.com","bname":"蕾茜儿","state":0},"5635450":{"worker_id":"cs001","bname":"易宇飞","state":0},"10219897":{"worker_id":"cdshjsc5b4@163.com","bname":"成都生活家—辜俊川（电话：13488908003 qq：619273234）","state":0},"10183485":{"worker_id":"sdlc53kfsy7@163.com","bname":"","state":0},"10156085":{"worker_id":"sdlc53kfdl7@163.com","bname":"张寒月","state":0},"10136736":{"worker_id":"sdlc53kftj2@163.com","bname":"生活家家居韩红丽","state":1},"10115939":{"worker_id":"sdlc53kfsjz2@163.com","bname":"客户经理小朱","state":0},"10156087":{"worker_id":"sdlc53kfdl3@163.com","bname":"李松烨","state":0},"10154010":{"worker_id":"15288207462@163.com","bname":"","state":0},"10166719":{"worker_id":"sdlc53kfsz22@163.com","bname":"金牌客户经理-七七","state":0},"10172248":{"worker_id":"sdlc53kfsy5@163.com","bname":"","state":0},"10160579":{"worker_id":"leoli_11@163.com","bname":"","state":0},"10143327":{"worker_id":"sdlc53kfxa9@163.com","bname":"","state":0},"5540304":{"worker_id":"bj003","bname":"","state":0},"5540336":{"worker_id":"nc002","bname":"敬小艳","state":1},"10112944":{"worker_id":"sdlc53kfkm5@163.com","bname":"","state":0},"5534111":{"worker_id":"001","bname":"001","state":0},"10147317":{"worker_id":"sdlc53kfhf7@163.com","bname":"生活家装饰-方园","state":0},"10218469":{"worker_id":"yingxiao201702@163.com","bname":"大连-楠楠","state":0},"10104416":{"worker_id":"sdlc53kfcd8@163.com","bname":"成都生活家何芳芳","state":0},"10164805":{"worker_id":"sdlc53kfbj19@163.com","bname":"","state":0},"10133154":{"worker_id":"sdlc53kfsjz7@163.com","bname":"客户经理明月","state":0},"10229975":{"worker_id":"17718502080@163.com","bname":"null","state":1},"10171807":{"worker_id":"tangymw@163.com","bname":"","state":0},"10118477":{"worker_id":"sdlc53kfbj2@163.com","bname":"北京1部-胡欢","state":1},"5631489":{"worker_id":"nc005","bname":"毛伟","state":0},"10171826":{"worker_id":"13512367392@163.com","bname":"重庆客服-王 亮","state":0},"10189243":{"worker_id":"qdshj2016@163.com","bname":"qdshj2016","state":0},"10169706":{"worker_id":"14","bname":"","state":1},"5540348":{"worker_id":"xa003","bname":"03号小方","state":0},"10172243":{"worker_id":"sdlc53kfsy3@163.com","bname":"","state":0},"10171804":{"worker_id":"sdlc53kfcq27@163.com","bname":"","state":0},"10153064":{"worker_id":"sdlc53kfsz3@163.com","bname":"","state":0},"10219360":{"worker_id":"tivan@163.com","bname":"","state":0},"10152552":{"worker_id":"sdlc53kfqd1@163.com","bname":"","state":1},"10156034":{"worker_id":"sdlcqdshj06@163.com","bname":"","state":0},"10165674":{"worker_id":"nc007","bname":"屈依依","state":0},"5639925":{"worker_id":"hf003","bname":"","state":0},"5636778":{"worker_id":"cd005","bname":"成都晏梅","state":0},"10153070":{"worker_id":"sdlc53kfsz6@163.com","bname":"客户经理-小崔","state":0},"10169565":{"worker_id":"sdlc53kfbj21@163.com","bname":"","state":0},"10172466":{"worker_id":"m13075400088_1@163.com","bname":"","state":0},"10231293":{"worker_id":"daisy02240@163.com","bname":"null","state":0},"10152986":{"worker_id":"kaishi2531362854@163.com","bname":"小凡","state":0},"10171814":{"worker_id":"17783179721@163.com","bname":"重庆-金丹","state":1},"10136740":{"worker_id":"sdlc53kftj5@163.com","bname":"生活家家居韩红丽","state":0},"10162710":{"worker_id":"15060089037@163.com","bname":"福州生活家装饰 琪琪","state":1},"10167088":{"worker_id":"18911658223@163.com","bname":"","state":0},"10209204":{"worker_id":"15940917100@163.com","bname":"大连生活家-王城","state":1},"10143925":{"worker_id":"sdlc53kfwh10@163.com","bname":"张家龙","state":0},"10161220":{"worker_id":"18514280230@163.com","bname":"","state":0},"10115920":{"worker_id":"sdlc53kfnj2@163.com","bname":"南京生活家刘志洋","state":0},"10221066":{"worker_id":"0303","bname":"成都客服小万","state":1},"10187093":{"worker_id":"13860616801@163.com","bname":"福州生活家装饰 安娜","state":0},"5615244":{"worker_id":"sdlc001","bname":"客服-乌梅酱","state":0},"10163136":{"worker_id":"sdlc53kfnc5@163.com","bname":"蒋玲","state":0},"10162706":{"worker_id":"sunnyyang1005@163.com","bname":"福州生活家装饰 婷婷","state":1},"10153066":{"worker_id":"sdlc53kfsz5@163.com","bname":"客户经理-孙俪","state":0},"5540328":{"worker_id":"cd002","bname":"成都生活家陈静雯","state":1},"5621251":{"worker_id":"xa006","bname":"06号小惠","state":0},"10178013":{"worker_id":"sdlc53kfhz10@163.com","bname":"","state":0},"10218541":{"worker_id":"shjjbd2017@163.com","bname":"广州装修顾问-小兰","state":1},"10153062":{"worker_id":"sdlc53kfsz1@163.com","bname":"","state":0},"10162709":{"worker_id":"fz001","bname":"福州生活家装饰 小邓","state":1},"10159354":{"worker_id":"sdlc53kfsz11@163.com","bname":"","state":0},"10161219":{"worker_id":"18515379941@163.com","bname":"","state":1},"10180468":{"worker_id":"tyw1004","bname":"李珮璇","state":0},"10225058":{"worker_id":"sdlc53kfbj25@163.com","bname":"浅浅","state":0},"10218468":{"worker_id":"yingxiao201701@163.com","bname":"大连-朱丽","state":0},"10128659":{"worker_id":"sdlc53kfkm8@163.com","bname":"生活家—杨洋","state":0},"10171821":{"worker_id":"18324142312@163.com","bname":"","state":0},"10145156":{"worker_id":"sdlc53kfnj14@163.com","bname":"南京生活家","state":0},"10150125":{"worker_id":"njshj2015@163.com","bname":"南京生活家小婷","state":0},"5615246":{"worker_id":"cs003","bname":"长沙生活家&mdash;金琳 咨询热线：18684858109","state":1},"10161539":{"worker_id":"13964048638@163.com","bname":"孙程","state":0},"10153462":{"worker_id":"cs009","bname":"长沙生活家-浩宏 咨询热线：18570381547","state":0},"10218545":{"worker_id":"gzshj666@163.com","bname":"小古（15521199213微信同号）","state":0},"10165693":{"worker_id":"sdlc53kfsz15@163.com","bname":"客户经理-夏天","state":0},"10155388":{"worker_id":"15887095811@163.com","bname":"","state":0},"10192058":{"worker_id":"13693363610@163.com","bname":"","state":0},"5564281":{"worker_id":"gy005","bname":"周良玉","state":0},"10151041":{"worker_id":"sdlc53kftj7@168.com","bname":"生活家家居董鲁迪","state":0},"10159356":{"worker_id":"sdlc53kfsz13@163.com","bname":"","state":0},"10075777":{"worker_id":"km04","bname":"客服常青","state":0},"10130937":{"worker_id":"sdlc53kfbj15@163.com","bname":"北京1部-袁世林","state":0},"10121866":{"worker_id":"sdlc53kfbj7@163.com","bname":"北京生活家客服7","state":0},"10231295":{"worker_id":"sdlc53kf@yeah.net","bname":"null","state":0},"5540347":{"worker_id":"xa002","bname":"02号苏苏","state":0},"10231294":{"worker_id":"avinchan010@163.com","bname":"null","state":0},"10230797":{"worker_id":"geyunduanakl@163.com","bname":"","state":0},"10115937":{"worker_id":"sdlc53kfnj8@163.com","bname":"南京生活家","state":0},"10127834":{"worker_id":"sdlc53kfhf6@163.com","bname":"生活家装饰-冯传莉","state":0},"10229979":{"worker_id":"c17710697860@163.com","bname":"null","state":0},"10158192":{"worker_id":"15753145025@163.com","bname":"","state":0},"10174910":{"worker_id":"135","bname":"重庆客服-冉孟娟","state":0},"10126170":{"worker_id":"sdlc53kfbj10@163.com","bname":"","state":0},"10229974":{"worker_id":"s17710765185@163.com","bname":"null","state":0},"10143919":{"worker_id":"sdlc53kfwh14@163.com","bname":"","state":0},"10172563":{"worker_id":"15111880113@163.com","bname":"","state":0},"10177738":{"worker_id":"sdlc53kfhz6@163.com","bname":"","state":0},"10075803":{"worker_id":"sdlc53kfhf3@163.com","bname":"生活家装饰-吕超","state":0},"10229963":{"worker_id":"m17718502306@163.com","bname":"null","state":0},"10209308":{"worker_id":"shjcskhb1@163.com","bname":"长沙生活家-谭思颖 咨询热线：13755186200","state":0},"10229961":{"worker_id":"m18515677985@163.com","bname":"null","state":1},"10189736":{"worker_id":"sdlc53kfhz33@163.com","bname":"","state":1},"10229957":{"worker_id":"z17710612156@163.com","bname":"null","state":1},"10115930":{"worker_id":"sdlc53kfnj10@163.com","bname":"","state":0},"10141355":{"worker_id":"sdlc53kfgy9@163.com","bname":"","state":0},"10228012":{"worker_id":"yingxiao201705@163.com","bname":"大连-魏蔚","state":0},"10115923":{"worker_id":"sdlc53kfnj4@163.com","bname":"南京生活家陈杰","state":0},"10148213":{"worker_id":"sdlc53kfgz4@163.com","bname":"生活家-小苗（电话：18826128032，QQ：937398561）","state":1},"5540343":{"worker_id":"km003","bname":"昆明客服—小语","state":0},"5540337":{"worker_id":"nc003","bname":"田华","state":0},"10136738":{"worker_id":"sdlc53kftj3@163.com","bname":"生活家家居刘昭卿","state":1},"10226367":{"worker_id":"jlin1009513796@163.com","bname":"","state":0},"10225178":{"worker_id":"m18080056570@163.com","bname":"","state":0},"10162395":{"worker_id":"m15685158886@163.com","bname":"","state":0},"10224887":{"worker_id":"15827269103@163.com","bname":"武汉家居顾问—李嘉欣","state":1},"10144339":{"worker_id":"sdlc53kfnj12@163.com","bname":"南京生活家何圆圆","state":0},"10143528":{"worker_id":"sdlc53kfbj17@163.com","bname":"","state":0},"10223255":{"worker_id":"41403492@qq.com","bname":"","state":0},"10222871":{"worker_id":"18334783104@163.com","bname":"杨肖肖","state":1},"10191143":{"worker_id":"hanqi720@163.com","bname":"","state":0},"10221808":{"worker_id":"02240429@163.com","bname":"成都客服吴爽","state":0},"10202416":{"worker_id":"18600799520@163.com","bname":"客服经理-龙泽","state":0},"10218542":{"worker_id":"18565140797@163.com","bname":"家装顾问-尼康13417028309","state":1},"10148215":{"worker_id":"sdlc53kfgz2@163.com","bname":"生活家-小珍（电话：18588688119，QQ：1627916889）","state":1},"10220664":{"worker_id":"qjmknqjje486697@163.com","bname":"","state":0},"10115932":{"worker_id":"sdlc53kfnj12@163.com","bname":"","state":0},"5540327":{"worker_id":"cd001","bname":"成都生活家任露莹","state":0},"10155556":{"worker_id":"sdlc53kftj10@163.com","bname":"生活家家居贺晓伟","state":0},"5637329":{"worker_id":"cd007","bname":"管理①","state":0},"10220661":{"worker_id":"905302574@qq.com","bname":"","state":0},"10177723":{"worker_id":"sdlc53kfhz5@163.com","bname":"生活家装饰顾问-唯曼","state":0},"5639924":{"worker_id":"sdlc53kfhf2@163.com","bname":"生活家装饰-侯瑞","state":0},"10115940":{"worker_id":"sdlc53kfsjz3@163.comm","bname":"客户经理李宁","state":1},"10220625":{"worker_id":"1293952996@qq.com","bname":"","state":0},"10219912":{"worker_id":"cdshjsc5b5@163.com","bname":"成都生活家—逍遥（电话：18728500975  qq：2364545852）","state":0},"10128229":{"worker_id":"sdlc53kfcd11@163.com","bname":"北京生活家","state":0},"10175978":{"worker_id":"sdlc53kfsz17@163.com","bname":"网络客户经理","state":0},"10219892":{"worker_id":"cdshjsc5b1@163.com","bname":"成都生活家—曾炯（电话：18584050815  qq：562507416）","state":1},"10156093":{"worker_id":"sdlc53kfdl8@163.com","bname":"马金梅","state":0},"10219358":{"worker_id":"1071480364@qq.com","bname":"","state":0},"10218810":{"worker_id":"18801292789@163.com","bname":"史贺","state":0},"10130936":{"worker_id":"sdlc53kfbj14@163.com","bname":"北京1部-赵庚新","state":0},"10218623":{"worker_id":"15101001784@163.com","bname":"张帅","state":0},"10218497":{"worker_id":"15810613317@163.com","bname":"北京艾米","state":0},"10178844":{"worker_id":"sdlc53kfhz66@163.com","bname":"生活家装饰顾问-艾达","state":0},"10180475":{"worker_id":"tyw2005","bname":"吕飞云","state":0},"5638729":{"worker_id":"jiangzhenghua","bname":"","state":0},"10141305":{"worker_id":"cs006","bname":"长沙生活家-小宋 咨询热线18670339892","state":0},"10138350":{"worker_id":"sdlc53kfgy7@163.com","bname":"李娟","state":0},"10218485":{"worker_id":"18731883827@163.com","bname":"北京周天绍","state":0},"10180487":{"worker_id":"tyw1001","bname":"杨增杰（小贝）","state":0},"10141303":{"worker_id":"xa07","bname":"07号小雪","state":0},"10218484":{"worker_id":"15538770759@163.com","bname":"北京张士兵","state":0},"10137012":{"worker_id":"sdlc53kfjin1@163.com","bname":"","state":1},"10218476":{"worker_id":"15011587429@163.com","bname":"北京吕亚雷","state":0},"10218470":{"worker_id":"yingxiao201703@163.com","bname":"大连-梅梅","state":1},"10137381":{"worker_id":"sdlc53kfkm10@163.com","bname":"","state":0},"10201693":{"worker_id":"18234116243@163.com","bname":"","state":1},"10217829":{"worker_id":"weigedzsbcom@163.com","bname":"客户经理韩琳","state":0},"10216082":{"worker_id":"m13074118660@163.com","bname":"大连生活家-周宇","state":1},"10160580":{"worker_id":"leoli_12@163.com","bname":"","state":0},"10171819":{"worker_id":"15923942957@163.com","bname":"","state":0},"10162705":{"worker_id":"taoyuan1617@163.com","bname":"福州生活家装饰 一休","state":0},"10201696":{"worker_id":"15034026196@163.com","bname":"","state":0},"10128657":{"worker_id":"sdlc53kfkm6@163.com","bname":"小雪","state":0},"10201694":{"worker_id":"13466875250@163.com","bname":"家装咨询客户经理","state":0},"10156091":{"worker_id":"sdlc53kfdl5@163.com","bname":"孙超","state":0},"5635452":{"worker_id":"cs000","bname":"","state":0},"10198651":{"worker_id":"18636192397@163.com","bname":"","state":1},"10229955":{"worker_id":"m17718502082@163.com","bname":"null","state":0},"10180594":{"worker_id":"sdlc53kfwh3b2@163.com","bname":"家装顾问-张文俊","state":1},"10175120":{"worker_id":"sdlc53kfwh2b5@163.com","bname":"家装顾问—吴钰","state":0},"10192059":{"worker_id":"18701649515@163.com","bname":"","state":0},"10191648":{"worker_id":"njshj2016531@163.com","bname":"","state":0},"10191650":{"worker_id":"njshj201661@163.com","bname":"南京生活家夏木","state":0},"5639093":{"worker_id":"km005","bname":"昆明客服—胡艳","state":0},"5540303":{"worker_id":"bj002","bname":"","state":0},"5639923":{"worker_id":"hf001","bname":"合肥生活家01","state":0},"10222870":{"worker_id":"18334780250@163.com","bname":"普洁晨","state":1},"10157913":{"worker_id":"sdlc53kfhf2b5@163.com","bname":"苗苗","state":0},"10187027":{"worker_id":"sdlc53kfwh3b7@163.com","bname":"","state":0},"10159644":{"worker_id":"sdlc53kfgy13@163.com","bname":"","state":0},"10186613":{"worker_id":"13608358980@163.com","bname":"重庆客服-龙莉","state":0},"5623830":{"worker_id":"sdlc005","bname":"客服-小吴","state":0},"10157911":{"worker_id":"sdlc53kfhf2b3@163.com","bname":"大鹏","state":0},"10185738":{"worker_id":"tyw1009","bname":"吴佳丽","state":0},"10172534":{"worker_id":"sdlc53kfhf2b7@163.com","bname":"吴小兵","state":0},"10185328":{"worker_id":"tywl008","bname":"谢凯凯","state":1},"10153069":{"worker_id":"sdlc53kfsz9@163.com","bname":"金牌客户经理-云不器","state":0},"10180605":{"worker_id":"sdlc53kfwh3b5@163.com","bname":"家装顾问—夏丽君","state":0},"10184704":{"worker_id":"15010958815@163.com","bname":"","state":1},"10136735":{"worker_id":"sdlc53kftj1@163.com","bname":"生活家家居网络经理","state":1},"5540341":{"worker_id":"km001","bname":"昆明客服—小张","state":0},"5540335":{"worker_id":"nc001","bname":"田海斌","state":0},"5635451":{"worker_id":"cs002","bname":"长沙生活家-刘翼 咨询热线15111185064","state":0},"5627091":{"worker_id":"sdlc53kfwh3@163.com","bname":"","state":0},"10175115":{"worker_id":"sdlc53kfwh2b1@163.com","bname":"","state":0},"10156094":{"worker_id":"sdlc53kfdl9@163.com","bname":"金明","state":0},"10184703":{"worker_id":"13466336303@163.com","bname":"","state":0},"10152995":{"worker_id":"crazyllq@163.com","bname":"","state":0},"10220667":{"worker_id":"yyaxnh8327@163.com","bname":"","state":0},"10143920":{"worker_id":"sdlc53kfwh13@163.com","bname":"","state":0},"10115928":{"worker_id":"sdlc53kfnj9@163.com","bname":"南京生活家亚鹏","state":0},"10123834":{"worker_id":"sdlc53kfbj8@163.com","bname":"北京1部-孙俊新","state":0},"10137403":{"worker_id":"sdlc53kfsjz8@163.com","bname":"客户经理小尹","state":0},"10143922":{"worker_id":"sdlc53kfwh12@163.com","bname":"","state":0},"10137015":{"worker_id":"sdlc53kfjin3@163.com","bname":"","state":1},"10183484":{"worker_id":"sdlc53kfsy6@163.com","bname":"韩信 13243906762","state":0},"10183486":{"worker_id":"sdlc53kfsy8@163.com","bname":"王卓18341611666","state":0},"10183440":{"worker_id":"sdlc53kfhz12@163.com","bname":"","state":0},"10137013":{"worker_id":"sdlc53kfjin2@163.com","bname":"","state":0},"10180595":{"worker_id":"sdlc53kfwh3b3@163.com","bname":"","state":0},"10193390":{"worker_id":"15996925372@163.com","bname":"苏州生活家-圆圆","state":0},"10113531":{"worker_id":"sdlc53kfcd9@163.com","bname":"北京生活家","state":0},"10133155":{"worker_id":"sdlc53kfsjz6@163.com","bname":"客户经理文月","state":0},"10177240":{"worker_id":"m15823384695@163.com","bname":"重庆客服经理-陈荣艳","state":1},"10180593":{"worker_id":"sdlc53kfwh3b1@163.com","bname":"武汉客户经理--芳芳","state":0},"10115938":{"worker_id":"sdlc53kfsjz1@163.com","bname":"张伟","state":0},"10143328":{"worker_id":"sdlc53kfxa8@163.com","bname":"","state":0},"10180552":{"worker_id":"tyw2002","bname":"生活家客户经理","state":1},"10127828":{"worker_id":"sdlc53kfbj12@163.com","bname":"北京1部-马佳兴","state":0},"10157909":{"worker_id":"sdlc53kfhf2b1@163.com","bname":"程程","state":0},"10185927":{"worker_id":"shshjcc4@163.com","bname":"","state":0},"10180478":{"worker_id":"tyw2003","bname":"生活家客户经理","state":0},"10180474":{"worker_id":"tyw2006","bname":"生活家客户经理","state":0},"10180473":{"worker_id":"tyw2007","bname":"贺威威","state":1},"10180470":{"worker_id":"tyw1003","bname":"王婷","state":1},"10171033":{"worker_id":"shshjcc2@163.com","bname":"上海客服何苗","state":0},"5534110":{"worker_id":"002","bname":"客服-小廖","state":0},"5540342":{"worker_id":"km002","bname":"昆明客服—杨庆娥","state":0},"10180464":{"worker_id":"tyw1005","bname":"客服经理-程旭东","state":0},"10128658":{"worker_id":"sdlc53kfkm7@163.com","bname":"","state":1},"10171806":{"worker_id":"qc001","bname":"重庆-唐果","state":0},"10180382":{"worker_id":"m15288134759_1@163.com","bname":"","state":0},"10169705":{"worker_id":"15","bname":"生活家_王经理","state":1},"10180239":{"worker_id":"15201415295@163.com","bname":"","state":0},"10113969":{"worker_id":"sdlc53kfwh7@163.com","bname":"家装顾问—越芳芳","state":1},"10179467":{"worker_id":"18602839290@163.com","bname":"成都生活家谢世兵","state":0},"10150904":{"worker_id":"shjjn688@163.com","bname":"","state":0},"10218486":{"worker_id":"18295757981@163.com","bname":"北京贺卫红","state":0},"10175117":{"worker_id":"sdlc53kfwh2b2@163.com","bname":"家装顾问—吴聪","state":1},"10115919":{"worker_id":"sdlc53kfnj1@163.com","bname":"南京生活家陈密密","state":0},"10153068":{"worker_id":"sdlc53kfsz8@163.com","bname":"苏州生活家金牌客户经理·王诚","state":0},"10229966":{"worker_id":"shenghuojiawangyi@163.com","bname":"","state":0},"10177724":{"worker_id":"sdlc53kfhz9@163.com","bname":"","state":0},"10177475":{"worker_id":"sdlc53kfhz7@163.com","bname":"","state":0},"10129655":{"worker_id":"cs005","bname":"长沙生活家小丹-13054188584","state":0},"10177474":{"worker_id":"sdlc53kfhz3@163.com","bname":"","state":0},"10160578":{"worker_id":"leoli10","bname":"","state":0},"10193388":{"worker_id":"15962442852@163.com","bname":"客户经理：慧慧","state":0},"10141356":{"worker_id":"sdlc53kfgy8@163.com","bname":"小平","state":0},"10171816":{"worker_id":"shenghuojia023@163.com","bname":"","state":0},"10152989":{"worker_id":"18396811201@163.com","bname":"赵梦","state":1},"10174917":{"worker_id":"cq0012","bname":"周洪军","state":0},"10229976":{"worker_id":"m17718363832@163.com","bname":"null","state":0},"10123832":{"worker_id":"sdlc53kfbj9@163.com","bname":"北京1部-王永1","state":0},"10137060":{"worker_id":"sdlc53kfbj16@163.com","bname":"","state":0},"10174909":{"worker_id":"13637906821@163.com","bname":"谢雪雪","state":0},"10171805":{"worker_id":"sdlc53kfcq0@163.com","bname":"重庆-向洋","state":0},"10169564":{"worker_id":"sdlc53kfbj20@163.com","bname":"","state":0},"10174144":{"worker_id":"wensiyao321@163.com","bname":"","state":0},"10165094":{"worker_id":"sdlc53kfsz21@163.com","bname":"","state":0},"10173561":{"worker_id":"15723411110@163.com","bname":"","state":0},"10229970":{"worker_id":"m17710882702@163.com","bname":"null","state":0},"10172100":{"worker_id":"13608346129@163.com","bname":"","state":1},"10104415":{"worker_id":"sdlc53kfcd7@163.com","bname":"成都生活家魏丹","state":0},"10156088":{"worker_id":"sdlc53kfdl4@163.com","bname":"客户经理孙露15842617190","state":0},"10144341":{"worker_id":"sdlc53kfnj10@163.com","bname":"南京生活家","state":0},"10115921":{"worker_id":"sdlc53kfnj3@163.com","bname":"","state":0},"10171827":{"worker_id":"13640520003@163.com","bname":"重庆客服-张第均","state":0},"10151044":{"worker_id":"sdlc53kftj9@168.com","bname":"生活家家居贺晓伟","state":1},"10209205":{"worker_id":"15104053535@163.com","bname":"大连-生活家刘凤娟","state":1},"10171818":{"worker_id":"13110207898@163.com","bname":"","state":0},"10121867":{"worker_id":"sdlc53kfbj5@163.com","bname":"北京生活家客服5","state":0},"10118903":{"worker_id":"sdlc53kfcd10@163.com","bname":"成都生活家王瑶","state":0},"10171817":{"worker_id":"15922517150@163.com","bname":"","state":0},"10170248":{"worker_id":"sdlc53kfqd10@163.com","bname":"","state":0},"10163137":{"worker_id":"nc006","bname":"欧胜兰","state":0},"10162707":{"worker_id":"13960829853@163.com","bname":"福州生活家装饰 一修","state":0},"10143197":{"worker_id":"sdlc53kfjn2@163.com","bname":"王二小","state":0},"10171810":{"worker_id":"15823996158@163.com","bname":"重庆-唐艳","state":1},"10171035":{"worker_id":"shshjcc3@163.com","bname":"上海客服夏目","state":0},"10170249":{"worker_id":"sdlc53kfqd11@163.com","bname":"","state":0},"10115931":{"worker_id":"sdlc53kfnj11@163.com","bname":"","state":0},"10133077":{"worker_id":"sdlc53kfcd13@163.com","bname":"北京生活家2","state":0},"10219893":{"worker_id":"cdshjsc5b2@163.com","bname":"成都生活家—李南翔（电话：18780171310 qq：191822933）","state":0},"10156083":{"worker_id":"sdlc53kfdl1@163.com","bname":"李文峰","state":0},"10213120":{"worker_id":"m13856445516@163.com","bname":"","state":1},"10161537":{"worker_id":"15106973951@163.com","bname":"志远","state":0},"10153461":{"worker_id":"cs008","bname":"周乾","state":0},"5564308":{"worker_id":"gy006","bname":"贵阳客服02号","state":0},"10161221":{"worker_id":"13511060478@163.com","bname":"","state":0},"10150126":{"worker_id":"njshj2016@163.com","bname":"南京生活家小凡","state":0},"10161218":{"worker_id":"13718717812@163.com","bname":"","state":0},"10098948":{"worker_id":"sdlc53kfwh4@163.com","bname":"","state":0},"10157042":{"worker_id":"18314105498@163.com","bname":"","state":0},"10129656":{"worker_id":"cs004","bname":"长沙生活家-向颖 咨询热线：18086012343","state":0},"10160582":{"worker_id":"gzshenghuojia@163.com","bname":"生活家-小萍（电话：13922329660、QQ：939130943）","state":1},"10177470":{"worker_id":"sdlc53kfhz2@163.com","bname":"杭州生活家装饰-阿宁","state":1},"10135878":{"worker_id":"sdlc53kfcd15@163.com","bname":"北京1部-陈媛媛","state":0},"5615245":{"worker_id":"sdlc002","bname":"客服-棉花糖","state":0},"10116149":{"worker_id":"sdlc53kfhf5@163.com","bname":"生活家装饰-许欣","state":1},"10118476":{"worker_id":"sdlc53kfbj1@163.com","bname":"北京1部管理员","state":0},"10153063":{"worker_id":"sdlc53kfsz2@163.com","bname":"家居顾问&mdash;大白","state":1},"10195184":{"worker_id":"ty001","bname":"","state":0},"5637330":{"worker_id":"cd008","bname":"管理②","state":0},"5627088":{"worker_id":"wh001","bname":"武汉生活家马琳","state":1},"5641351":{"worker_id":"sdlc53kfhf4@163.com","bname":"生活家装饰-张弛","state":0},"10162708":{"worker_id":"15960111710@163.com","bname":"福州生活家装饰 双儿","state":1},"5570336":{"worker_id":"xa004","bname":"04号杨一","state":0},"5533758":{"worker_id":"sdlcjt","bname":"客服-小刘","state":0},"10127827":{"worker_id":"sdlc53kfbj13@163.com","bname":"北京1部-褚唐伟","state":0},"10159355":{"worker_id":"sdlc53kfsz12@163.com","bname":"","state":0},"10228011":{"worker_id":"yingxiao201704@163.com","bname":"大连-赵玥","state":0},"10165692":{"worker_id":"sdlc53kfsz14@163.com","bname":"苏州生活家-莎莎","state":0},"10180469":{"worker_id":"tyw1002","bname":"李吉琛","state":0},"10175119":{"worker_id":"sdlc53kfwh2b4@163.com","bname":"","state":0},"10126169":{"worker_id":"sdlc53kfbj11@163.com","bname":"","state":0},"10171822":{"worker_id":"13668050221@163.com","bname":"重庆-唐利赠","state":1},"10141358":{"worker_id":"sdlc53kfwh9@163.com","bname":"","state":0},"10129407":{"worker_id":"sdlc53kfsjz3@163.com","bname":"","state":0},"5540339":{"worker_id":"gy002","bname":"贵阳客服胡高琼","state":1},"10115924":{"worker_id":"sdlc53kfnj5@163.com","bname":"南京生活家匡胜兰","state":0},"10151040":{"worker_id":"sdlc53kftj6@168.com","bname":"生活家家居佟石磊","state":0},"10170117":{"worker_id":"sdlcqdshj3@163.com","bname":"","state":0},"10157035":{"worker_id":"chenrong0160@163.com","bname":"晏梅","state":0},"10161538":{"worker_id":"13853189063@163.com","bname":"王丽敏","state":0},"10151042":{"worker_id":"sdlc53kftj8@168.com","bname":"生活家家居佟石磊","state":1},"10141357":{"worker_id":"sdlc53kfwh8@163.com","bname":"","state":1},"10166151":{"worker_id":"sdlc53kfsy2@163.com","bname":"蝈蝈 18302495067","state":0},"10180459":{"worker_id":"tyw1006","bname":"范琦","state":1},"10127038":{"worker_id":"sdlc53kfzs@163.com","bname":"三毛","state":0},"5540334":{"worker_id":"sdlc53kfcd3@163.com","bname":"成都生活家钟雨晴","state":0},"10122777":{"worker_id":"sdlc53kfbj4@163.com","bname":"北京1部-宋子见","state":0},"10167451":{"worker_id":"shj001","bname":"","state":0},"10162396":{"worker_id":"sdlcqdshj09@163.com","bname":"","state":0},"10159459":{"worker_id":"shjzs688@163.com","bname":"10李嫕","state":1},"10115934":{"worker_id":"sdlc53kfnj14@163.com","bname":"","state":0},"10144340":{"worker_id":"sdlc53kfnj11@163.com","bname":"南京生活家仝娇","state":0},"10148216":{"worker_id":"sdlc53kfgz3@163.com","bname":"广州生活家小强","state":0},"10154381":{"worker_id":"yc928714@163.com","bname":"阳贞梅","state":0},"5626303":{"worker_id":"xa007","bname":"7号莎莎","state":0},"5637328":{"worker_id":"cd006","bname":"管理·","state":0},"10152947":{"worker_id":"13287348268@163.com","bname":"三丰","state":0},"10115933":{"worker_id":"sdlc53kfnj13@163.com","bname":"","state":0},"10158826":{"worker_id":"sdlc53kfqd8@163.com","bname":"","state":0},"10131845":{"worker_id":"sdlc53kfcd12@163.com","bname":"娜塔莎","state":0},"10153067":{"worker_id":"sdlc53kfsz7@163.com","bname":"苏州生活家-苏夜","state":1},"10143196":{"worker_id":"sdlc53kfjn3@163.com","bname":"党泽宇","state":0},"10113970":{"worker_id":"sdlc53kfwh6@163.com","bname":"","state":0},"10154382":{"worker_id":"sdlc53kfnj18@163.com","bname":"南京生活家匡匡","state":0},"10156010":{"worker_id":"sdlc53kfqd5@163.com","bname":"","state":0},"10180480":{"worker_id":"tyw2001","bname":"姜楠（小新）","state":0},"10160666":{"worker_id":"gzshenghuojia1@163.com","bname":"","state":0},"10148214":{"worker_id":"sdlc53kfgz1@163.com","bname":"生活家客服1","state":0},"5540338":{"worker_id":"gy001","bname":"贵阳生活家","state":0},"10156086":{"worker_id":"sdlc53kfdl2@163.com","bname":"大连生活家-寇鹏","state":1},"10184459":{"worker_id":"tyw1007","bname":"王娜","state":0},"10095802":{"worker_id":"sdlc53kfcd6@163.com","bname":"成都生活家郭丽琴","state":0},"10152554":{"worker_id":"sdlc53kfqd2@163.com","bname":"青岛客服","state":1},"10153065":{"worker_id":"sdlc53kfsz4@163.com","bname":"客服经理-西西","state":0},"10184706":{"worker_id":"15510213582@163.com","bname":"","state":0},"10157898":{"worker_id":"sdlc53kfsz10@163.com","bname":"","state":0},"10189737":{"worker_id":"sdlc53kfhz53@163.com","bname":"","state":0},"10157914":{"worker_id":"sdlc53kfhf2b6@163.com","bname":"","state":0},"10158191":{"worker_id":"binlianchao@163.com","bname":"苏丽君","state":0},"10165694":{"worker_id":"sdlc53kfsz16@163.com","bname":"客户经理：超超","state":0},"10171829":{"worker_id":"ranjq615@163.com","bname":"重庆客服-龙莉","state":0},"10121868":{"worker_id":"sdlc53kfbj6@163.com","bname":"北京生活家客服6","state":0},"10178012":{"worker_id":"13996012771@163.com","bname":"","state":0},"10158332":{"worker_id":"sdlcqdshj07@163.com","bname":"","state":0},"10160581":{"worker_id":"13","bname":"生活家_琳达(电话:18620767056","state":1},"10115925":{"worker_id":"sdlc53kfnj6@163.com","bname":"南京生活家卓雨婷","state":1},"10143198":{"worker_id":"sdlc53kfjn1@163.com","bname":"","state":0},"10115941":{"worker_id":"sdlc53kfsjz4@163.com","bname":"客户经理孔孔","state":0},"10166149":{"worker_id":"sdlc53kfsy1@163.com","bname":"欢颜 15040208893","state":0}});$53.data("groups",{"42417":{"group_name":"总部客服","workers":["5533758","5615244","5615245","5623830"]},"268517":{"group_name":"福州","workers":["10127038","10162704","10162705","10162706","10162707","10162708","10162709","10162710"]},"229217":{"group_name":"石家庄客服","workers":["10115938","10115939","10115940","10115943","10133155","10183703","10217829","10220661","10220662"]},"272317":{"group_name":"天津","workers":["10136735","10136736","10136738","10136739","10136740","10151040","10151041","10151042","10151044","10155556"]},"7322117":{"group_name":"北京网二","workers":["10121866","10121867","10121868","10126170","10164805","10169564","10169565","10192058","10192059","10225058","10164806"]},"7322017":{"group_name":"北京网三","workers":["10180239","10184703","10184704","10184706","10161218","10161219","10161221","10167088"]},"278317":{"group_name":"苏州","workers":["10153062","10153067","10153068","10165692","10165693","10165694","10166719","10213007","10213120","10153063","10175978","10193388"]},"21817":{"group_name":"贵阳客服","workers":["5540338","5540339","5540340","5564281","5564308","10138350","10141354","10141355","10141356","10159643","10159644","10162395"]},"275517":{"group_name":"济南","workers":["10152947","10152986","10152989","10158191","10161538","10161539"]},"58217":{"group_name":"合肥客服","workers":["5639923","5639924","5641351","10075803","10116149","10127834","10147317"]},"47917":{"group_name":"长沙客服","workers":["5615246","10129655","10129656","10141305","10141306","10153462","5635450","5635451","10209308"]},"18983817":{"group_name":"广州-官网","workers":["10218541","10218542","10218543","10218545"]},"19674406":{"group_name":"成都-官网","workers":["10219892","10219893","10219895","10219897","10219912"]},"22017":{"group_name":"西安客服","workers":["5540346","5540347","5540348","5570336","5570351","5621251","10141303","10143327","10143328","10159459"]},"279917":{"group_name":"大连","workers":["10156086","10209204","10209205","10216082"]},"282617":{"group_name":"上海客服","workers":["10167451","10171034","10171035","10219358","10219360"]},"229117":{"group_name":"南京客服","workers":["10115919","10115920","10115923","10115925","10115926","10115928","10144339","10144340","10144341","10150125","10150126","10154382"]},"19675906":{"group_name":"成都-免费-无网站","workers":["10221066","10225178"]},"7321817":{"group_name":"太原网一","workers":["10180459","10180469","10180470","10180487","10185328","10185738","10197441","10198651","10222870","10222871"]},"283417":{"group_name":"未使用","workers":["10098950","10104416","10115921","10115924","10115937","10115941","10118903","10129407","10133154","10137060","10137403","10141358","10143196","10143919","10143920","10145156","10150904","10153461","10157898","10158192","10159355","10160666"]},"18983617":{"group_name":"北京-官网","workers":["10218476","10218484","10218485","10218486","10218497","10218623","10218810"]},"7321917":{"group_name":"太原网二","workers":["10180473","10180474","10180476","10180478","10180480","10180552","10195184","10201693","10201694","10201696"]},"21617":{"group_name":"成都客服","workers":["5540328","5614794","10131845","10135879","10221808","10223255","10231293","10231294","10231295"]},"283917":{"group_name":"重庆","workers":["10171804","10171805","10171806","10171807","10171810","10171814","10171816","10171817","10171818","10171819","10171821","10171822","10171826","10171827","10171829","10172100","10172466","10172563","10173561","10174144"]},"19677906":{"group_name":"济南老官网","workers":["10143198","10220664","10161537","10220667"]},"282417":{"group_name":"沈阳客服","workers":["10166149","10166151","10172243","10183484","10183485","10183486"]},"280317":{"group_name":"合肥2部","workers":["10157909","10157910","10157911","10157912","10157913","10157914","10172534"]},"282917":{"group_name":"电商","workers":["10202415"]},"49417":{"group_name":"武汉客服","workers":["5627088","10113969","10141357","10143923","10175117","10175120","10180594","10180605","10202416","10224887"]},"21717":{"group_name":"南充客服","workers":["5540335","5540336","5540337","5588224","10163136","10163137","10165674"]},"277817":{"group_name":"青岛","workers":["10152552","10152554","10156010","10156034","10158332","10158826","10162396","10170117","10170118","10170248","10170249"]},"18983717":{"group_name":"大连-官网","workers":["10218468","10218469","10218470","10228011","10228012"]},"21517":{"group_name":"北京客服","workers":["10118476","10118477","10118478","10122777","10123832","10123834","10127827","10127828","10130936","10130937","10172248","10229955","10229956","10229957","10229961","10229963","10229966","10229970","10229974","10229975","10229976","10229979"]},"272517":{"group_name":"济宁","workers":["10137012","10137013","10137015"]},"21917":{"group_name":"昆明客服","workers":["10075777","10128658","10128659","10137381","10154381","10155388","10157042","10180382","5540341","10226367"]},"276917":{"group_name":"广州","workers":["10148213","10148214","10148215","10160581","10160582","10169705","10169706","10230797"]}});$53.data("area_shunt",{});
(function(window,undefined){
    var head=document.getElementsByTagName("head")[0];
    var kfscript1= document.createElement("script");
    kfscript1.src="http://www6.53kf.com/custom/70831548/mobile_icon_70831548_10.js?v=1490263139";
    var done1=false;
    kfscript1.onload=kfscript1.onreadystatechange=function(){
        if(!done1&&(!this.readyState||this.readyState=="loaded"||this.readyState=="complete")){
            done1=true;
            kfscript1.onload=kfscript1.onreadystatechange=null;head.removeChild(kfscript1);
        }
    }
    head.appendChild(kfscript1);
    var kfscript2= document.createElement("script");
    kfscript2.src="http://www6.53kf.com/custom/70831548/mobile_invite_70831548_10.js?v=1490863137";
    var done2=false;
    kfscript2.onload=kfscript2.onreadystatechange=function(){
        if(!done2&&(!this.readyState||this.readyState=="loaded"||this.readyState=="complete")){
            done2=true;
            kfscript2.onload=kfscript2.onreadystatechange=null;head.removeChild(kfscript2);
        }
    }
    head.appendChild(kfscript2);
    var kfscript3= document.createElement("script");
    kfscript3.src="http://www6.53kf.com/custom/70831548/assign_worker_70831548_10.js?v=1490263139";
    var done3=false;
    kfscript3.onload=kfscript3.onreadystatechange=function(){
        if(!done3&&(!this.readyState||this.readyState=="loaded"||this.readyState=="complete")){
            done3=true;
            kfscript3.onload=kfscript3.onreadystatechange=null;head.removeChild(kfscript3);
        }
    }
    head.appendChild(kfscript3);
})(window);
    
(function(window,document,talkHost,ipStr,ipContinent,companyId,styleId,undefined){
	/**
	*$53.data('workers')		工号信息
	*$53.data('groups')			分组信息
	*$53.data('page_referer')	访问来源
	*$53.data('mobile_icon')	手机图标设置
	*$53.data('mobile_invite')	手机邀请框设置
	*$53.data('assign_worker')	指定客服设置
	*$53.data('zdkf_type')		客服指定类型	1:指定工号 2:指定部门(已废弃) 3:指定分组
	*$53.data('kf')				具体指定客服
	*$53.data('is_online')		是否在线   		0:离线 1:在线
	*/
	/****************************************事件处理基类开始*************************************/
	function handler(){
		var _this = this;
		_this.app_name = '_53App';
		_this.ipStr = decodeURI(ipStr);
		_this.talkHost = talkHost;
		_this.isOnline = false;
		_this.companyId = companyId;
		_this.fromPage = $53.data('page_referer');
		_this.styleId = styleId;
	}
	handler.prototype.setSession = function(key,value){
		try{
			if(window.sessionStorage){
				sessionStorage.setItem(key,value);
			}else{
				$53.setCookie(key,value);
			}
		} catch (error) {
        	return false;
    	}
		
	}
	handler.prototype.getSession = function(key){
		try{
			if(window.sessionStorage){
				return sessionStorage.getItem(key);
			}else{
				$53.getCookie(key);
			}
		} catch (error) {
        	return false;
    	}
	}
	handler.prototype.getWorkerInfo = function(id6d){
		var workers = $53.data('workers');
		return workers[id6d];
	}
	/**
	*事件处理接口，具体功能由继承类实现
	*/
	handler.prototype.show = function(){}	//图标/邀请框显示
	handler.prototype.hide = function(){}	//图标/邀请框隐藏
	handler.prototype.talk = function(){}	//点击咨询
	handler.prototype.setMsgTip = function(obj){}	//来消息设置
	/****************************************事件处理基类结束*************************************/

	/****************************************手机图标类开始*************************************/
	function _53_mobile_icon(icon_set){
		var _this = this;
		_this.isOnline = $53.data('is_online') === '1' ? true:false;
		_this.iconElm = null;
		_this.on_is_open = icon_set.on_is_open;
		_this.on_left = icon_set.on_left;
		_this.on_top = icon_set.on_top;
		_this.on_content = icon_set.on_content;
		_this.off_is_open = icon_set.off_is_open;
		_this.off_left = icon_set.off_left;
		_this.off_top = icon_set.off_top;
		_this.off_content = icon_set.off_content;

		_this._53Api = $53.createApi();
		_this.init();
	}
	_53_mobile_icon.prototype = new handler();	//继承事件处理基类
	_53_mobile_icon.prototype.init = function(){
		var _this = this;
		_this.on_content = _this.formatContent(_this.on_content);
		_this.off_content = _this.formatContent(_this.off_content);
		_this.createIcon();
		if((_this.isOnline&&_this.on_is_open == 'yes')||(!_this.isOnline&&_this.off_is_open == 'yes')){
			_this.show();
		}
	}
	_53_mobile_icon.prototype.getOpenUrl = function(){
		var _this = this;
		var openUrl = _this.talkHost+'/m.php?cid='+_this.companyId+'&style='+_this.styleId+'&keyword='+encodeURIComponent(_this.fromPage)+'&referer='+encodeURIComponent(window.location.href)+'&guest_id='+encodeURIComponent($53.getCookie('53gid2'))+'&tpl='+encodeURIComponent($53.data('tpl'))+'&uid='+encodeURIComponent($53.data('api_uuid'))+'&u_stat_id='+encodeURIComponent($53.data('u_stat_id'))+'&talktitle='+encodeURIComponent(document.title)+'&tfrom=50';
		return openUrl;
	}
	_53_mobile_icon.prototype.show = function(){
		var _this = this;
		_this.iconElm.style.display = 'block';
		_this.setPosition();
	}
	_53_mobile_icon.prototype.hide = function(){
		var _this = this;
		_this.iconElm.style.display = 'none';
	}
	_53_mobile_icon.prototype.talk = function(params){
		var _this = this;
		_this.setSession(_this.companyId+'_invite_times',0);
		location.href = _this.getOpenUrl()+params;
	}
	_53_mobile_icon.prototype.setPosition = function(){
		var _this = this;
		var icon_left = _this.isOnline?_this.on_left:_this.off_left;
		var icon_bottom = 100-(_this.isOnline?_this.on_top:_this.off_top);
		var iconElm = _this.iconElm;
		var icon_width = iconElm.offsetWidth==0?iconElm.firstChild.offsetWidth:iconElm.offsetWidth;
		var icon_height = iconElm.offsetHeight==0?iconElm.firstChild.offsetHeight:iconElm.offsetHeight;
		var w = window.innerWidth; 
		var h= window.innerHeight; 
		if(iconElm.firstChild){
			iconElm.firstChild.style.marginLeft = '0px';
			iconElm.firstChild.style.marginTop = '0px';
			iconElm.style.height = icon_height+'px';
		}
		iconElm.style.left = (w-icon_width)*(icon_left/100)+'px';
		iconElm.style.bottom = (h-icon_height)*(icon_bottom/100)+'px';
	}
	_53_mobile_icon.prototype.createIcon = function(){
		var _this = this;
		$53.creElm({
			'style':'position:fixed;display:none;font-family:Microsoft YaHei,Arial;z-index:100000;width:auto;height:auto',
			'id':'mobile_icon_div',
			'innerHTML':_this.isOnline?_this.on_content:_this.off_content
		},'div');
		_this.iconElm = document.getElementById('mobile_icon_div');
	}
	_53_mobile_icon.prototype.formatContent = function(content){
		var _this = this;
		content = content.replace(/\.\.\//g,_this.talkHost+'/');
		content = content.replace(/class=".*?"/g,'');
		content = content.replace(/event="\{(.*?)\}"/g, function(match, contents){
				return _this.getEvent(contents.split('|'));
			}
		);
		return content;
	}
	_53_mobile_icon.prototype.setMsgTip = function(obj){
		var _this = this;
		var tipElm = obj.parentNode;
		tipElm.style.display = 'none';
		var msg_tip_count = 0;
		_this._53Api.push('msg_callback',function(){
			tipElm.style.display = 'block';
			msg_tip_count += 1;
			tipElm.innerHTML = msg_tip_count;
		});
	}
	_53_mobile_icon.prototype.getEvent = function(eventArr){
		var _this = this;
		var eventStr = '';
		switch(eventArr[0]){
			case 'close':
				eventStr = 'onclick="'+_this.app_name+'.hide(\'icon\');"';
				break;
			case 'talk':
				var params = '';
				if(eventArr[2] == 'group'){
					params += '&zdkf_type=3&kf='+eventArr[3];
				}else if(eventArr[2] == 'kf'){
					var workInfo = _this.getWorkerInfo(eventArr[3]);
					params += '&zdkf_type=1&kf='+$53.EN(workInfo['worker_id']);
				}else{
					params += '&zdkf_type='+$53.data('zdkf_type')+'&kf='+$53.EN($53.data('kf'));
				}
				eventStr = 'onclick="'+_this.app_name+'.talk(\'icon\',\''+params+'\');"';
				break;
			case 'qq':
				eventStr = 'onclick="location.href=\'mqqwpa://im/chat?chat_type=wpa&uin='+eventArr[1]+'&version=1&src_type=web&web_src=oicqzone.com\'"';
				break;
			case 'tel':
				eventStr = 'onclick="location.href=\'tel:'+eventArr[1]+'\'"';
				break;
			case 'msgTip':
				eventStr = '<img hidden src="about:blank" onerror="'+_this.app_name+'.setMsgTip(\'icon\',this)"/>';
				break;
			default:
				break;
		}
		return eventStr;
	}

	/****************************************手机图标类结束*************************************/
	
	/****************************************手机邀请框类开始***********************************/
	function _53_mobile_ivt(ivt_set){
		var _this = this;
		_this.isOnline = $53.data('is_online') === '1'?true:false;
		_this.ivtElm = null;
		_this.is_open = ivt_set.is_open;
		_this.invite_off = ivt_set.invite_off;
		_this.invite_left = ivt_set.invite_left;
		_this.invite_top = ivt_set.invite_top;
		_this.invite_area = ivt_set.invite_area;
		_this.fanfu_time = ivt_set.fanfu_time;
		_this.invite_times = ivt_set.invite_times;
		_this.page_times = ivt_set.page_times;
		_this.timeout = ivt_set.timeout;
		_this.ivt_content = ivt_set.content;
		_this.init();
	}
	_53_mobile_ivt.prototype = new handler();	//继承事件处理基类
	_53_mobile_ivt.prototype.init = function(){
		var _this = this;
		_this.ivt_content = _this.formatContent(_this.ivt_content);
		_this.createIvt();
		if(_this.getSession(_this.companyId+'_invite_times') == null){
			_this.setSession(_this.companyId+'_invite_times',_this.invite_times);
		}
		if(_this.is_open == 'yes'&&(_this.isOnline||(!_this.isOnline&&_this.invite_off == 'yes'))){
			setTimeout(function(){
				_this.show();
			},_this.timeout*1000)
		}
	}
	_53_mobile_ivt.prototype.createIvt = function(){
		var _this = this;
		$53.creElm({
			'style':'display:none;position:fixed;font-family:Microsoft YaHei,Arial;z-index:100000;',
			'id':'mobile_ivt_div',
			'innerHTML':_this.ivt_content
		},'div');
		_this.ivtElm = document.getElementById('mobile_ivt_div');
	}
	_53_mobile_ivt.prototype.getOpenUrl = function(){
		var _this = this;
		var openUrl = _this.talkHost+'/m.php?cid='+_this.companyId+'&style='+_this.styleId+'&keyword='+encodeURIComponent(_this.fromPage)+'&referer='+encodeURIComponent(window.location.href)+'&guest_id='+encodeURIComponent($53.getCookie('53gid2'))+'&tpl='+encodeURIComponent($53.data('tpl'))+'&uid='+encodeURIComponent($53.data('api_uuid'))+'&u_stat_id='+encodeURIComponent($53.data('u_stat_id'))+'&talktitle='+encodeURIComponent(document.title)+'&tfrom=51';
		return openUrl;
	}
	_53_mobile_ivt.prototype.formatContent = function(content){
		var _this = this;
		content = content.replace(/\.\.\//g,_this.talkHost+'/');
		content = content.replace(/class=".*?"/g,'');
		content = content.replace(/event="\{(.*?)\}"/g, function(match, contents){
				return _this.getEvent(contents.split('|'));
			}
		);
		return content;
	}
	_53_mobile_ivt.prototype.getEvent = function(eventArr){
		var _this = this;
		var eventStr = '';
		switch(eventArr[0]){
			case 'close':
				eventStr = 'onclick="'+_this.app_name+'.hide(\'invite\');"';
				break;
			case 'talk':
				var params = '';
				if(eventArr[2] == 'group'){
					params += '&zdkf_type=3&kf='+eventArr[3];
				}else if(eventArr[2] == 'kf'){
					var workInfo = _this.getWorkerInfo(eventArr[3]);
					params += '&zdkf_type=1&kf='+$53.EN(workInfo['worker_id']);
				}else{
					params += '&zdkf_type='+$53.data('zdkf_type')+'&kf='+$53.EN($53.data('kf'));
				}
				eventStr = 'onclick="'+_this.app_name+'.talk(\'invite\',\''+params+'\');"';
				break;
			case 'qq':
				eventStr = 'onclick="location.href=\'mqqwpa://im/chat?chat_type=wpa&uin='+eventArr[1]+'&version=1&src_type=web&web_src=oicqzone.com\'"';
				break;
			case 'tel':
				eventStr = 'onclick="location.href=\'tel:'+eventArr[1]+'\'"';
				break;
			default:
				break;
		}
		return eventStr;
	}
	_53_mobile_ivt.prototype.checkArea = function(){
		var _this = this;
		var ipStr = _this.ipStr;
		var setAreas = _this.invite_area.split(',');
		if(setAreas.length <= 0){
			return true;
		}
		var citys = [];
		for(var i in setAreas){
			citys = setAreas[i].split('.');
			if(citys.length >=1 && ipStr.indexOf(citys[1]) >=0){
				return true;
			}else if(citys.length == 1 && ipStr.indexOf(citys[0]) >=0){
				return true;
			}
		}
		return false;
	}
	_53_mobile_ivt.prototype.talk = function(params){
		var _this = this;
		_this.setSession(_this.companyId+'_invite_times',0);
		location.href = _this.getOpenUrl()+params;
	}
	_53_mobile_ivt.prototype.show = function(){
		var _this = this;
		if(_this.checkArea() === false){
			return false;
		}
		if(_this.page_times<=0){
			return false;
		}
		var invite_times = _this.getSession(_this.companyId+'_invite_times');
		if(invite_times == '' || invite_times <=0){
			return false;
		}
		_this.page_times--;
		invite_times--;
		_this.setSession(_this.companyId+'_invite_times',invite_times);
		_this.ivtElm.style.display = 'block';
		_this.setPosition();
	}
	_53_mobile_ivt.prototype.hide = function(){
		var _this = this;
		_this.ivtElm.style.display = 'none';
		if(_this.fanfu_time>0){
			setTimeout(function(){
				_this.show();
			},_this.fanfu_time*1000)
		}
	}
	_53_mobile_ivt.prototype.setPosition = function(){
		var _this = this;
		var invite_left = _this.invite_left;
		var invite_bottom = 100-_this.invite_top;
		var ivtElm = _this.ivtElm;
		var ivt_width = ivtElm.offsetWidth==0?ivtElm.firstChild.offsetWidth:ivtElm.offsetWidth;
		var ivt_height = ivtElm.offsetHeight==0?ivtElm.firstChild.offsetHeight:ivtElm.offsetHeight;
		var w = window.innerWidth; 
		var h= window.innerHeight; 
		ivtElm.firstChild.style.marginLeft = '0px';
		ivtElm.firstChild.style.marginTop = '0px';
		ivtElm.style.height = ivt_height+'px';
		ivtElm.style.left = (w-ivt_width)*(invite_left/100)+'px';
		ivtElm.style.bottom = (h-ivt_height)*(invite_bottom/100)+'px';
	}
	/****************************************手机邀请框类结束***********************************/
	
	/****************************************PC图标类开始***************************************/
	/**
	*目前只定义了接口，等新版PC图标上线后再实现具体功能
	*/	
	// function _53_pc_icon(icon_set){}
	// _53_pc_icon.prototype = new handler();	//继承事件处理基类
	/****************************************PC图标类结束***************************************/

	/****************************************PC邀请框类开始*************************************/
	/**
	*目前只定义了接口，等新版PC邀请框上线后再实现具体功能
	*/	
	// function _53_pc_ivt(ivt_set){}
	// _53_pc_ivt.prototype = new handler();	//继承事件处理基类
	/****************************************PC邀请框类结束*************************************/

	/****************************************应用主类开始*************************************/
	function _53App(){
		var _this = this;
		_this.ipStr = decodeURI(ipStr);
		_this.ipContinent = decodeURI(ipStr);
		_this.apps = [];

		_this.kfOnline = 0;			//是否有工号在线
		_this.workers = $53.data('workers');
		_this.groups = $53.data('groups');
		_this.workerStates = [];	//工号为key 在线状态为value
		_this.init();
	}
	_53App.prototype.init = function(){
		var _this = this;
		var assign_worker = $53.data('assign_worker');
		$53.data('zdkf_type',assign_worker.assignType == 'group'?'3':'1');
		$53.data('kf',assign_worker.workers == null ? '':assign_worker.workers);

		// _this.initWorkerStates();
		// _this.checkAreaShunt();
		// _this.checkOnline();

		if(_this.isMobile()){
			_this.initGroup();
			_this.initWorkerStates();
			_this.checkAreaShunt();
			_this.checkOnline();
			_this.setApp('icon',new _53_mobile_icon($53.data('mobile_icon')));
			_this.setApp('invite',new _53_mobile_ivt($53.data('mobile_invite')));
		}
		// else{
		// 	_this.apps['icon'] = new _53_pc_icon();
		// 	_this.apps['invite'] = new _53_pc_ivt();
		// }

		_this.clearCache();
	}
	_53App.prototype.initGroup = function(){
		var _this = this;
		var workers = _this.copyObject($53.data('workers'));
		var id6d = 0;
		for(var group_id in _this.groups){
			for (var i in _this.groups[group_id].workers){
				id6d = _this.groups[group_id].workers[i];
				if(workers[id6d] !== undefined){
					delete workers[id6d];
				}
			}
		}
		if(_this.isEmptyObject(workers) === false){
			_this.groups['0'] = {
				"group_name":"未分组",
				"workers":[]
			}
			for(var id6d in workers){	//未分组写入
				_this.groups['0'].workers.push(id6d);
			}
		}
	}
	_53App.prototype.checkAreaShunt = function(){
		var _this = this;
		var areaShunt = $53.data('area_shunt');
		var areaKf = [];
		var kfOnline = 0;
		var areaGroup = [];
		var groupOnline = 0;
		var areaSchedule = [];
		var scheduleOnline = 0;
		var areas = ["安徽", "北京", "重庆", "福建", "甘肃", "广东", "广西", "贵州", "海南", "河北", "黑龙江", "河南", "湖北", "湖南", "江苏", "江西", "吉林","辽宁", "宁夏", "内蒙古", "青海", "上海", "山西", "山东", "四川", "陕西", "天津", "西藏", "新疆", "云南", "浙江", "台湾", "香港", "澳门"];
		// var continents_arr = ["亚洲","欧洲","非洲","南美洲","北美洲","大洋洲","南极洲"];
		var ipAddr = "国外";
		for(var i in areas){
			if(_this.ipStr.indexOf(areas[i]) >= 0){
				ipAddr = _this.ipStr;
				break;
			}
		}
		for(var i in areaShunt){
			if(areaShunt[i]['kf_type'] == '1' && (ipAddr.indexOf(areaShunt[i]['area'])>=0 || _this.ipContinent.indexOf(areaShunt[i]['area'])>= 0)){
				areaKf.push(areaShunt[i]['kf'])
				if(kfOnline == 0 && _this.isWorkerOnline(areaShunt[i]['kf'],'worker_id')){
					kfOnline = 1;
				}
			}
			if(areaShunt[i]['kf_type'] == '2' && (ipAddr.indexOf(areaShunt[i]['area'])>=0 || _this.ipContinent.indexOf(areaShunt[i]['area'])>=0)){
				areaGroup.push(areaShunt[i]['kf'])
				if(groupOnline == 0 && _this.isGroupOnline(areaShunt[i]['kf'])){
					groupOnline = 1;
				}
			}
			if(areaShunt[i]['kf_type'] == '4'){
				areaSchedule.push(areaShunt[i]['kf'])
				if(scheduleOnline == 0 && _this.isGroupOnline(areaShunt[i]['kf'])){
					scheduleOnline = 1;
				}
			}
		}
		if(kfOnline === 1){
			$53.data('zdkf_type','1');
			$53.data('kf',areaKf.join(','));
			$53.data('is_online','1');
			return;
		}
		if(groupOnline === 1){
			$53.data('zdkf_type','3');
			$53.data('kf',areaGroup.join(','));
			$53.data('is_online','1');
			return;
		}
		if(scheduleOnline === 1){
			$53.data('zdkf_type','3');
			$53.data('kf',areaSchedule.join(','));
			$53.data('is_online','1');
			return;
		}
		if(areaKf.length > 0){
			$53.data('zdkf_type','1');
			$53.data('kf',areaKf.join(','));
			$53.data('is_online','0');
			return;
		}
		if(areaGroup.length > 0){
			$53.data('zdkf_type','3');
			$53.data('kf',areaGroup.join(','));
			$53.data('is_online','0');
			return;
		}
		if(areaSchedule.length > 0){
			$53.data('zdkf_type','3');
			$53.data('kf',areaSchedule.join(','));
			$53.data('is_online','0');
			return;
		}
	}
	_53App.prototype.checkOnline = function(){
		var _this = this;
		if($53.data('is_online') !== null){		//区域分流已验证是否在线
			return;
		}
		var zdkf_type = $53.data('zdkf_type');
		var kf = $53.data('kf');
		if(kf == ''){
			$53.data('is_online',_this.kfOnline);
			return;
		}
		if(zdkf_type == '1'){
			kf = kf.split(',');
			for(var i in kf){
				if(_this.isWorkerOnline(kf[i],'worker_id')){
					$53.data('is_online','1');
					return;
				}
			}
			$53.data('is_online','0');
		}else{
			kf = kf.split(',');
			for(var i in kf){
				if(_this.isGroupOnline(kf[i])){
					$53.data('is_online','1');
					return;
				}
			}
			$53.data('is_online','0');
		}
	}
	//根据id6d或工号查询是否在线 默认以id6d查询
	_53App.prototype.isWorkerOnline = function(worker,type){
		var _this = this;
		if(type == 'worker_id'){
			return _this.workerStates[worker] == '1' ? true:false;
		}else{
			return _this.workers[worker]['state'] == '1' ? true:false;
		}
	}
	//查询分组是否在线
	_53App.prototype.isGroupOnline = function(groupId){
		var _this = this;
		var group = _this.groups[groupId];
		if(group == null){
			return false
		}
		if(typeof(group['state']) !== 'undefined'){
			return group['state'] == '1'?true:false;
		}
		var workers = group['workers'];
		for(var i in workers){
			if(_this.isWorkerOnline(workers[i])){
				_this.groups[groupId]['state'] = '1';
				return true;
			}
		}
		_this.groups[groupId]['state'] = '0';
		return false;
	}
	_53App.prototype.initWorkerStates = function(){
		var _this = this;
		var is_online = 0;
		for(var id6d in _this.workers){
			is_online = _this.workers[id6d]['state'];
			_this.workerStates[_this.workers[id6d]['worker_id']] = is_online;
			if(is_online == '1') _this.kfOnline = '1';
		}
	}
	_53App.prototype.clearCache = function(){
		var _this = this;
		_this.workers = null;
		_this.groups = null;
		_this.workerStates = null;
		$53.data('mobile_icon',null);
		$53.data('mobile_invite',null);
		$53.data('assign_worker',null);
	}
	_53App.prototype.isMobile = function(){
		var regex_match = /(nokia|iphone|android|motorola|^mot\-|softbank|foma|docomo|kddi|up\.browser|up\.link|htc|dopod|blazer|netfront|helio|hosin|huawei|novarra|CoolPad|webos|techfaith|palmsource|blackberry|alcatel|amoi|ktouch|nexian|samsung|^sam\-|s[cg]h|^lge|ericsson|philips|sagem|wellcom|bunjalloo|maui|symbian|smartphone|midp|wap|phone|windows ce|iemobile|^spice|^bird|^zte\-|longcos|pantech|gionee|^sie\-|portalmmm|jig\s browser|hiptop|^ucweb|^benq|haier|^lct|opera\s*mobi|opera\*mini|320x320|240x320|176x220|ipad)/i;
		if(navigator.userAgent.match(regex_match)){
			return true;
		}
		return false;
	}
	_53App.prototype.getApp = function(name){
		var _this = this;
		return _this.apps[name];
	}
	_53App.prototype.setApp = function(name,app){
		var _this = this;
		_this.apps[name] = app;
	}
	_53App.prototype.copyObject = function(e) {  
		var _this = this;
		if(typeof(e) != 'object') return e;
		if(e == null) return e;
		var myNewObj = new Object();
		for(var i in e)
			myNewObj[i] = _this.copyObject(e[i]);
		return myNewObj; 
	}  
	_53App.prototype.isEmptyObject = function(e) {  
        var t;  
        for (t in e)  
            return !1;  
        return !0  
    }  


	_53App.prototype.show = function(type){
		var _this = this;
		_this.getApp(type).show();
	}
	_53App.prototype.hide = function(type){
		var _this = this;
		_this.getApp(type).hide();
	}
	_53App.prototype.talk = function(type,params){
		var _this = this;
		_this.getApp(type).talk(params);
	}
	_53App.prototype.setMsgTip = function(type,obj){
		var _this = this;
		_this.getApp(type).setMsgTip(obj);
	}
	/****************************************应用主类结束*************************************/
	function create53APP(){
		if($53.data('mobile_icon') == null || $53.data('mobile_invite') == null || $53.data('assign_worker') == null){
			setTimeout(function(){
				create53APP();
			},200);
			return;
		}
		window._53App = new _53App();
	}
	create53APP();
})(window,document,hz6d_alias_host,ipstr,ipContinent,companyid,style_id);
var head=document.getElementsByTagName("head")[0];var script=document.createElement("script");script.src="http://www6.53kf.com/kf_new.php?arg=9006234&style=10";var done=false;script.onload=script.onreadystatechange=function(){if(!done&&(!this.readyState||this.readyState=="loaded"||this.readyState=="complete")){done=true;script.onload=script.onreadystatechange=null;head.removeChild(script);}};head.appendChild(script);
