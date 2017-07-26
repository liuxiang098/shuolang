/**
 * 处理系统中的特殊字符
 */
function EscapeKit() {
	this.escape = function(param) {
		if (param == null || param == '' || param == undefined) {
			return "";
		}
		if (special_characters == null || special_characters == '' || special_characters == undefined) {
			return param;
		}
		for(var i=0;i<special_characters.length;i++){
			var s = special_characters[i];
			if(param.indexOf(s.k)>-1){
				var reg = new RegExp(s.k,"g");
				param = param.replace(reg,s.v);
			}
		}
		return param;
	}
}
//special_characters = "[{'k':'-','v':'d'},{'k':'/','v':'BBB'}]";
//var escapeKit = new EscapeKit();
//escapeKit.escape("abdad-VVV");