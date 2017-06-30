!(function($){
    /*
     options是个对象 非必填
     */
	$.fn.imgLazyLoad = function(options){
		 var _windowH = $(window).height(),
		     _delay, //函数节流
		     _scrollTop = $(window).scrollTop();

         //默认参数
         var defaults = {
             time:500, //图片延迟加载的时间
             offset:250, //图片预加载的距离,
             className:"data-src"
         } ;
         var that = this;
         var options = $.extend({},defaults,options);
         

         function picLazyLoad(){
         	  clearTimeout(_delay);
         	  _delay = setTimeout(function(){
         	  	  that.each(function(index,value){
	              	//console.log($(value).offset().top);
	              	if($(value).attr(options.className)){
	              		_scrollTop = $(window).scrollTop();
		              	if($(value).offset().top <= _windowH + _scrollTop + options.offset){
		              		$(value).attr("src",$(value).attr(options.className));
		              		$(value).removeAttr(options.className);
		              	}
	              	}
	              	
	               /*console.log($(value))*/
	            
	              });
         	  },options.time);
console.log(1)
             // console.log(that); 
         } 

         $(window).on('scroll',function(){
				picLazyLoad();
         });
        picLazyLoad();
	};

})(jQuery);