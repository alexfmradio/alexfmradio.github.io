
window._W = window.AlexFM = window.AlexFM || {};
_W.getSiteLanguageURL = function(lang){
	return 'files/js/stl.js'.replace('%lang%', lang);
}
_W.tli=function(s){return s;}
_W.siteLang = 'ru';
_W.ftl=_W.stl=(function() {
	var f = function(s) {
		var t = tls[s] || s;
		var a = Array.prototype.slice.call(arguments, 1);
		for (var i = 0; i < a.length; i++) {
			t = t.split('{{'+i+'}}').join(a[i]);
		}
		
		return t ? t.replace(/^\\s*(.+?)\\s*$/, '$1') : s;
	},
	return f;
})();
_W.tl=_W.tl||_W.stl;