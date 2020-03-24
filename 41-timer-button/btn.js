/**
 *  封装成对象，有几种方案
 *  1.全局对象(简单对象字面量)
 *  var timer={
 *      show：function(){}
 *  }
 *  
 *      缺点：不完全是面向对象，不能封装私有方法
 * 
 *  2.工厂函数
 *  var timer = (function(){
 *      私有
 *      return function(){
 *          公有
 *      }
 *  }())
 *  3.构造函数,
 *  function Timer(){}
 *  var tb = new Timer();
 */

//工厂函数方式
var timmerButton = (function () {
    var html = '<input class="timerbtn" type="button" value="同意（6s）" disabled />',
        btn = $('<input type="button" disabled />'),
        // num = 6,
        cfg={
            container:'body',
            num:6,
            title:'同意',
        },
        timer;

    btn.css({
        height: "50px",
        width: "100px"
    });

    function show(conf) {
        /**
         *  Dom绘制
         *      模板字符串
         *      创建DOM节点
         *  事件绑定
         */
        // $(conf.container).html(html);
        $(conf.container).append(btn);
        $.extend(cfg,conf);     //更新对象
        btn.val(cfg.title+'('+cfg.num+'s)');

        timer = setInterval(function () {
            cfg.num--;
            if (cfg.num === 0) {
                clearInterval(timer);
                btn.val(cfg.title);
                btn.removeAttr("disabled");
            }
            else {
                btn.val(cfg.title+'(' + cfg.num + 's)');
            }
        }, 1000);

        btn.click(function () {
            // alert("就知道你会同意的!");
            cfg.onClick();
        });

    }

    return {
        show: show
    }

}());