$(function(){
    /**
     *  前端路由改变——onhashchange
     */
    window.onhashchange=function(){
        var block=$('.main'),
            strhash=window.location.hash, //location为整个url地址
            color=strhash.substring(3,strhash.length);
            
        block.css('background-color',color);
        console.log(strhash);

    };
})