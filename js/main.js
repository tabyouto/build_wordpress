// window.onload = function() {
// 	var obtn = document.getElementById('go-top');
// 	//获取页面可视区的高度
// 	var clientHeight = document.documentElement.clientHeight;
// 	var timer = null;
// 	var isTop = true;

// 	window.onscroll = function() {
// 		var osTop = document.documentElement.scrollTop || document.body.scrollTop;
// 		if(osTop >= clientHeight) {
// 			obtn.style.display = 'block';
// 		} else {
// 			obtn.style.display = 'none';
// 		}
// 		if(!isTop){
// 			clearInterval(timer);
// 		}
// 		isTop = false;
// 	};

// 	obtn.onclick = function() {
// 		timer = setInterval(function() {
// 			var osTop = document.documentElement.scrollTop || document.body.scrollTop;
// 			var ispeed = Math.floor(-osTop/6);
// 			document.documentElement.scrollTop = document.body.scrollTop = osTop +ispeed;
// 			isTop = true;
// 			if(osTop == 0) {
// 				clearInterval(timer);
// 			}
// 		},30);
// 	};
// }
/*! lazyload 1.5.9 by Andrea "verlok" Verlicchi*/
!function(a,b){"function"==typeof define&&define.amd?define([],b):"object"==typeof exports?module.exports=b():a.LazyLoad=b()}(this,function(){function a(){q||(m={elements_selector:"img",container:window,threshold:300,throttle:50,data_src:"original",data_srcset:"original-set",class_loading:"loading",class_loaded:"loaded",skip_invisible:!0,show_while_loading:!1,callback_load:null,callback_set:null,callback_processed:null,placeholder:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"},n=!!window.addEventListener,o=!!window.attachEvent,p=!!document.body.classList,q=!0)}function b(a,b,c){return n?void a.addEventListener(b,c):void(o&&(a.attachEvent("on"+b,function(a){return function(){c.call(a,window.event)}}(a)),a=null))}function c(a,b,c){return n?void a.removeEventListener(b,c):void(o&&a.detachEvent("on"+b,c))}function d(a,b,c){function d(){return window.innerWidth||l.documentElement.clientWidth||document.body.clientWidth}function e(){return window.innerHeight||l.documentElement.clientHeight||document.body.clientHeight}function f(a){return a.getBoundingClientRect().top+m-l.documentElement.clientTop}function g(a){return a.getBoundingClientRect().left+n-l.documentElement.clientLeft}function h(){var d;return d=b===window?e()+m:f(b)+b.offsetHeight,d<=f(a)-c}function i(){var e;return e=b===window?d()+window.pageXOffset:g(b)+d(),e<=g(a)-c}function j(){var d;return d=b===window?m:f(b),d>=f(a)+c+a.offsetHeight}function k(){var d;return d=b===window?n:g(b),d>=g(a)+c+a.offsetWidth}var l,m,n;return l=a.ownerDocument,m=window.pageYOffset||l.body.scrollTop,n=window.pageXOffset||l.body.scrollLeft,!(h()||j()||i()||k())}function e(){var a=new Date;return a.getTime()}function f(a,b){var c,d={};for(c in a)a.hasOwnProperty(c)&&(d[c]=a[c]);for(c in b)b.hasOwnProperty(c)&&(d[c]=b[c]);return d}function g(a){try{return Array.prototype.slice.call(a)}catch(b){var c,d=[],e=a.length;for(c=0;e>c;c++)d.push(a[c]);return d}}function h(a,b){return p?void a.classList.add(b):void(a.className+=(a.className?" ":"")+b)}function i(a,b){return p?void a.classList.remove(b):void(a.className=a.className.replace(new RegExp("(^|\\s+)"+b+"(\\s+|$)")," ").replace(/^\s+/,"").replace(/\s+$/,""))}function j(a,b,c,d){var e=b.getAttribute("data-"+c),f=b.getAttribute("data-"+d);e&&a.setAttribute("srcset",e),f&&a.setAttribute("src",f)}function k(a,b){return function(){return a.apply(b,arguments)}}function l(c){a(),this._settings=f(m,c),this._queryOriginNode=this._settings.container===window?document:this._settings.container,this._previousLoopTime=0,this._loopTimeout=null,this._handleScrollFn=k(this.handleScroll,this),b(window,"resize",this._handleScrollFn),this.update()}var m,n,o,p,q=!1;return l.prototype._showOnLoad=function(a){function d(){null!==f&&(f.callback_load&&f.callback_load(a),j(a,a,f.data_srcset,f.data_src),f.callback_set&&f.callback_set(a),i(a,f.class_loading),h(a,f.class_loaded),c(e,"load",d))}var e,f=this._settings;a.getAttribute("src")||a.setAttribute("src",f.placeholder),e=document.createElement("img"),b(e,"load",d),h(a,f.class_loading),j(e,a,f.data_srcset,f.data_src)},l.prototype._showOnAppear=function(a){function d(){null!==e&&(e.callback_load&&e.callback_load(a),i(a,e.class_loading),h(a,e.class_loaded),c(a,"load",d))}var e=this._settings;b(a,"load",d),h(a,e.class_loading),j(a,a,e.data_srcset,e.data_src),e.callback_set&&e.callback_set(a)},l.prototype._loopThroughElements=function(){var a,b,c=this._settings,e=this._elements,f=e?e.length:0,g=[];for(a=0;f>a;a++)b=e[a],c.skip_invisible&&null===b.offsetParent||d(b,c.container,c.threshold)&&(c.show_while_loading?this._showOnAppear(b):this._showOnLoad(b),g.push(a),b.wasProcessed=!0);for(;g.length>0;)e.splice(g.pop(),1),c.callback_processed&&c.callback_processed(e.length);0===f&&this._stopScrollHandler()},l.prototype._purgeElements=function(){var a,b,c=this._elements,d=c.length,e=[];for(a=0;d>a;a++)b=c[a],b.wasProcessed&&e.push(a);for(;e.length>0;)c.splice(e.pop(),1)},l.prototype._startScrollHandler=function(){this._isHandlingScroll||(this._isHandlingScroll=!0,b(this._settings.container,"scroll",this._handleScrollFn))},l.prototype._stopScrollHandler=function(){this._isHandlingScroll&&(this._isHandlingScroll=!1,c(this._settings.container,"scroll",this._handleScrollFn))},l.prototype.handleScroll=function(){var a,b,c;this._settings&&(b=e(),c=this._settings.throttle,0!==c?(a=c-(b-this._previousLoopTime),0>=a||a>c?(this._loopTimeout&&(clearTimeout(this._loopTimeout),this._loopTimeout=null),this._previousLoopTime=b,this._loopThroughElements()):this._loopTimeout||(this._loopTimeout=setTimeout(k(function(){this._previousLoopTime=e(),this._loopTimeout=null,this._loopThroughElements()},this),a))):this._loopThroughElements())},l.prototype.update=function(){this._elements=g(this._queryOriginNode.querySelectorAll(this._settings.elements_selector)),this._purgeElements(),this._loopThroughElements(),this._startScrollHandler()},l.prototype.destroy=function(){c(window,"resize",this._handleScrollFn),this._loopTimeout&&(clearTimeout(this._loopTimeout),this._loopTimeout=null),this._stopScrollHandler(),this._elements=null,this._queryOriginNode=null,this._settings=null},l});
//# sourceMappingURL=lazyload.min.js.map
// (function($) {
// 	'use strict';
//
// 	/*----------------------------------------------------------------------*/
// 	/* #Post Rating
// 	/*----------------------------------------------------------------------*/
// 	var PostRating = (function() {
// 		var s,
// 		settings = {
// 			$els: $('.js-rating'),
// 			flag: false
// 		};
//
// 		/**
// 		 * 初始化模块
// 		 */
// 		var fire = function() {
// 			s = settings;
// 			_bindUIActions();
// 		};
//
// 		/**
// 		 * 绑定UI事件
// 		 */
// 		var _bindUIActions = function() {
// 			var cookies = _getCookie("postRating");//获取cookie
// 			console.log("is_cookie"+cookies);
// 			if( cookies ) {
// 				s.$els.each(function(index, el) {
// 					$.each( cookies, function(index, value) {
// 						console.log(index+"--"+value+"  index and value");
// 						console.log($(el).data('post')+"   this is");
// 						if($(el).data('post') == value) {
// 							$(el).addClass('is-active');
// 							return false;
// 						}
// 					});
// 				});
// 			}
//
// 			s.$els.on('click', function(event) {
// 				event.preventDefault();
// 				var p = $(this).data('post');
// 				_ratingPost(p, this);
// 			});
// 		}
//
// 		var _ratingPost = function(p, that) {
// 			var rated = false,
// 				cookies = _getCookie("postRating");
// 			if( s.flag ) {
// 				return;
// 			}
//
// 			if( cookies ) {
// 				$.each( cookies, function(index, value) {
// 					if(p == value) {
// 						rated = true;
// 					}
// 				});
// 			}
//
// 			if( rated ) {
// 				alert(ajaxcomment.liked_text);
// 				s.flag = false;
// 				$(that).addClass('is-active');
// 				return;
// 			}
//
// 			s.flag = true;
// 			$.ajax({
// 				url: ajaxcomment.ajax_url,
// 				type: 'POST',
// 				dataType: 'json',
// 				data: {
// 					action: 'ajax_rating_post',
// 					post_id: p,
// 					nonce: ajaxcomment.rating_nonce
// 				},
// 			})
// 			.done(function(res) {
// 				if( res.status == 1 ) {
// 					$(that).find('.js-count').text(res.count);
// 					$(that).addClass('is-active');//wrong
// 				}
// 			})
// 			.always(function() {
// 				s.flag = false;
// 			});
//
// 		}
//
// 		var _getCookie = function(key) {
// 			var c, s, j, cookies;
// 		    c = document.cookie.split('; ');//分解cookie
// 		    // console.log(c+"whats this");
// 		    cookies = {};
//
// 		    for( var i = c.length-1; i>=0; i-- ){
// 		       s = c[i].split('=');
// 		       // cookies[s[0]] = unescape(s[1]);
//
// 		    }
// 			// console.log(cookies[s[0]]+"   this is array");
// 			console.log(cookies["hacker"] +"  cookie hacker");
// 			if( cookies["hacker"] ) {
// 				// alert(1);
// 				j = $.parseJSON( cookies['hacker'] );
// 				if( j[key] )
// 					return j[key];
// 				else
// 					return false;
// 			} else {
// 				return false;
// 			}
// 		}
//
// 		return {
// 			fire: fire
// 		}
//
// 	})();
// 	PostRating.fire();
//
// })(jQuery);

(function() {
	var RelTitle = document.title;
	var hidden, visibilityChange;
	if (typeof document.hidden !== "undefined") {
	  hidden = "hidden";
	  visibilityChange = "visibilitychange";
	} else if (typeof document.mozHidden !== "undefined") { // Firefox up to v17
	  hidden = "mozHidden";
	  visibilityChange = "mozvisibilitychange";
	} else if (typeof document.webkitHidden !== "undefined") { // Chrome up to v32, Android up to v4.4, Blackberry up to v10
	  hidden = "webkitHidden";
	  visibilityChange = "webkitvisibilitychange";
	}
	function handleVisibilityChange() {
	  if (document[hidden]) {
		document.title = ' (●––●) Hi, Tabyouto';
	  } else {
		document.title = RelTitle;
	  }
	}
	if (typeof document.addEventListener !== "undefined" || typeof document[hidden] !== "undefined") {
		document.addEventListener(visibilityChange, handleVisibilityChange, false);
	}

	var myLazyLoad = new LazyLoad({
		// example of options object -> see options section
		threshold: 0,
		// elements_selector: "img",
		throttle: 1000
		// data_src: "src",
		// show_while_loading: true,
		// callback_set: function() { /* ... */ }
	});



    $.fn.postLike = function() {
        if ($(this).hasClass('is-active')) {
            alert('您已赞过该文章');
            return false;
        } else {
            $(this).addClass('is-active');
            var id = $(this).data("id"),
                action = $(this).data('action'),
                rateHolder = $(this).children('.js-count');
            var ajax_data = {
                action: "specs_zan",
                um_id: id,
                um_action: action
            };
            $.post("wp-admin/admin-ajax.php", ajax_data,
                function(data) {
                    $(rateHolder).html(data);
                });
            return false;
        }
    };
    $(document).on("click", ".js-rating",
        function() {
            $(this).postLike();
        });




})();