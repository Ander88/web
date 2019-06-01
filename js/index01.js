$(function () {
    /*初始化fullpage*/
    /*设置每个section的背景颜色*/
    $('.container').fullpage({
        sectionsColor:['#f9dd66','#84a2d4','#ef674c','#ffeedd','#cf4759','#85d9ed'],
        /*默认垂直居中，修改为顶部对齐*/
        verticalCentered:false,
        navigation:true,/*页面边上的点*/
        /*进入某一屏的回调函数*/
       afterLoad:function (link,index) {
               $('.section').eq(index-1).addClass('now');
       },

        /*离开某某一个页面调用的函数*/
        onLeave:function(index,nextIndex,direction){
            if (index != 1 ){
                /*当前是第二页到第三页*/
                $('.section').eq(index-1).addClass('leaved');
                if(index == 5 && nextIndex == 6){
                    $('.box').addClass('show');
                }
            }
        },
        /*初始化完毕的回调函数*/
       afterRender:function () {
           $('.more').on('click',function () {
              $.fn.fullpage.moveSectionDown();
           });
         $('.section04 .cart').on('transitionend',function () {
             $('.section04 .address').fadeIn(1000).find('img:last').fadeIn(2000);
         })
       },
        /*页面切换时间，默认是700毫秒*/
        scrollingSpeed:1000
    });
});
