/**
 * @returns {RegexKit}
 */
/**
 * @returns {RegexKit}
 */
function  CommonKit(){
	/**
	 * js 两个数字相乘
	 */
	this.multiply=function(arg1,arg2){ 
	    var m=0,s1=arg1.toString(),s2=arg2.toString(); 
	    try{m+=s1.split(".")[1].length}catch(e){} 
	    try{m+=s2.split(".")[1].length}catch(e){} 
	    return Number(s1.replace(".",""))*Number(s2.replace(".",""))/Math.pow(10,m) 
	};
	/**
	 * js 两个数字相加
	 */
	this.plus=function(arg1,arg2){ 
	    var r1,r2,m; 
	    try{r1=arg1.toString().split(".")[1].length}catch(e){r1=0} 
	    try{r2=arg2.toString().split(".")[1].length}catch(e){r2=0} 
	    m=Math.pow(10,Math.max(r1,r2)) 
	    return (arg1*m+arg2*m)/m 
	};
	/**
	 * js 两个数字相加的精确计算，避免浮点数问题,相乘使用this.multiply方法
	 */
	this.plusPrecise=function(arg1,arg2){ 
		var r1,r2,m; 
		try{r1=arg1.toString().split(".")[1].length}catch(e){r1=0} 
		try{r2=arg2.toString().split(".")[1].length}catch(e){r2=0} 
		m=Math.pow(10,Math.max(r1,r2)) 
		return this.plus(this.multiply(arg1,m),this.multiply(arg2,m))/m 
	};
	/**
	 * 数组去重，如[1,2,1,2] 调用此方法后获得的结果是[1,2]
	 * 参数 array 数组对象
	 * */
	this.uniqueArray=function(array){
		try {
			if(array!=null&&array.length>0){
				var newArray=new Array();
				for(var i=0;i<array.length;i++){
					if(newArray.indexOf(array[i])<0){
						newArray.push(array[i]);
					}
				}
				return newArray;
			}else{
				return new Array();
			}
		} catch (e) {
			console.debug(e,'数组对象去重出错');
			return new Array();
		}
	};
	/**
	 * 用此方法需要引入jquery
	 *数组求交集，如[1,2,3]和[1,2]的交集为[1,2]
	 * */
	this.intersect=function(a,b){
		try {
			return $.map(a,function(item){
				if(b.indexOf(item)>=0){
					return item;
				}
			});
		} catch (e) {
			console.debug(e,'数组求交集出错');
			return new Array();
		}
	}
}
/**
 * 调用方法 
 * var comomn = new  CommonKit();
	
	*comomn.plus(1.1,1.3);
 */

