window.storeReady = ('localStorage' in window) && ('JSON' in window);
window.storeGet = (!window.storeReady)?
	function(k,d){return d;}:
	function(k,d){
		var r = window.localStorage.getItem(k);
		if(r!==null){
			return window.JSON.parse(r);
		}else{
			return d;
		}
	};
window.storeSet = (!window.storeReady)?
	function(){}:
	function(k,v) {
		window.localStorage.setItem(k,window.JSON.stringify(v));
	};
window.storeDel = (!window.storeReady)?
	function(){}:
	function(k){
		window.localStorage.removeItem(k);
	};
window.storeReset = (!window.storeReady)?
	function () {}:
	function(){window.localStorage.clear();};