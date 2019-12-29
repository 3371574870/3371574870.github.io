
//iframe窗口-开始//
function openiframe(url){
	document.getElementById('idiframe0').style.display='block';
	document.getElementById('idiframe1').style.display='block';
	document.getElementById('idiframe0').src=url;

}
function closeiframe(url){
	document.getElementById('idiframe0').style.display='none';
	document.getElementById('idiframe1').style.display='none';
}
//iframe窗口-结束//


//toTop返回顶部-开始//
(function() {
    var btnId = '__gotop';
    var isIE = !!window.ActiveXObject && /msie (\d)/i.test(navigator.userAgent) ? RegExp['$1'] : false;
 
    function $() {
        return document.getElementById(arguments[0]);
    }
 
    function getScrollTop() {
        return ('pageYOffset' in window) ? window.pageYOffset
            : document.compatMode === "BackCompat"
            && document.body.scrollTop
            || document.documentElement.scrollTop ;
    }    
 
    function bindEvent(event, func) {
        if (window.addEventListener) {
            window.addEventListener(event, func, false);
        } else if (window.attachEvent) {
            window.attachEvent('on' + event, func);
        }
    }
 
    bindEvent('load',
        function() {
            var css = 'background-color:rgba(255, 255, 255,0.15);width:48px;height:48px;position:fixed;right:100px;bottom:30px;border-radius:10px;cursor:pointer;display:none;';
 
            if (isIE && isIE < 7) {
                css += '_position:absolute;_top:expression(eval(document.documentElement.scrollTop+document.documentElement.clientHeight-30-this.offsetHeight-(parseInt(this.currentStyle.marginTop,10)||0)-(parseInt(this.currentStyle.marginBottom,10)||0)))';
                var style = document.createStyleSheet();
                style.cssText = '*html{background-image:url(about:blank);background-attachment:fixed;}';
            }
 
            var html = '<p id="a22" style="user-select: none; margin: 26% 0 0 20%; color:#cdcdcd;">Top</p>';
            var el = document.createElement('p');
            el.id = btnId;
            el.style.cssText = css;
            el.innerHTML = html;
            document.body.appendChild(el);
 
            el.onclick = function() {
                (function() {
                    var top = getScrollTop();
                    if (top > 0) {
                        window.scrollTo(0, top / 1.2)
                        setTimeout(arguments.callee, 10);
                    }
                })();
            };
 
            el.onmouseover = function() {
            	document.getElementById("a22").style.color='#fff'
            };
 
            el.onmouseout = function() {
            	document.getElementById("a22").style.color='#cdcdcd'
            };
        }
    );
 
    bindEvent('scroll',
        function() {
            var top = getScrollTop(), display = 'none';
 
            if (top > 0) {
                display = 'block';
            }
 
            if ($(btnId)) $(btnId).style.display = display;
        });
})();
//toTop返回顶部-结束//








