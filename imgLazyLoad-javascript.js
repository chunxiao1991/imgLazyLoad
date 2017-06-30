(function(){

    var imgList,
        time = 250,
        delay,imgH,
        offset = 100;

   
     function _delay(obj){
         clearTimeout(delay);
         delay = setTimeout(function(){
            _imgload(obj);
         },time);
     }

     function _imgload(obj){
        imgH = obj[0].offsetHeight;
       // console.log(imgH);
        for(var i = 0,len = obj.length ; i < len ; i ++){
            if(obj[i].getAttribute('data-src')){
                 if(_isShow(obj[i])){
                   obj[i].src = obj[i].getAttribute('data-src');
                   obj[i].removeAttribute('data-src');
                }
            }  
        }
     }

     function _isShow(el){
        var coords = el.getBoundingClientRect();
         //console.log(coords);
         var left = coords.left ,
             top = coords.top,
             winH = document.documentElement.clientHeight || window.innerHeight;
        // return left >=0 && ( top >= 0 || top > - imgH ) && ( top <= winH + parseInt(offset) );   //只加载可视区域的图片            
            return left >=0 && top <= winH + parseInt(offset) //可视区域以上的图片也加载
     }
    



     function imgLoad(selector){

        var selector = selector || '.imgLazyLoad',
            node = document.querySelectorAll(selector),
            imgList = Array.apply(null,node);
        _delay(imgList);
        window.addEventListener('scroll',function(){
              _delay(imgList);
        },false);
     }
  
    imgLoad('.imgLazyLoad');
   


            



})();