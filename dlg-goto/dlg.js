var dlgGoto = (function () {
    var dlg = $(''
        + '<div class="notepad-dlg-goto">'
        + '<div class="dialogbox">'
        + '<div class="titlebar">'
        + '<p class="title">转到指定行</p>'
        + '<span class="close-btn">✖</span>'
        + '</div>'
        + '<div class="main">'
        + '<label for="">行号(L)</label><br>'
        + '<input class="txt-line-num" autofocus type="text"><br>'
        + '<input class="btn-goto" type="button" value="转到"/>'
        + '<input class="btn-cancle" type="button" value="取消">'
        + '</div>'
        + '</div>'
        + '</div>'),
        close=dlg.find('.close-btn'),
        txtnum=dlg.find('.txt-line-num'),
        goto=dlg.find('.btn-goto'),
        cancel=dlg.find('.btn-cancel'),
        cfg = {
            linenum: 2,
            sumnum:2
        };

    
    function show(conf) {
        $('body').append(dlg);
        $.extend(cfg, conf);     //更新对象
        
        console.log(cancel);
        /**
         *  关闭窗口
         */
        close.click(function(){
            dlg.remove();
            console.log('remove success!');
        });
        cancel.click(function(){
            dlg.remove();
            console.log('success!');
        });

        /**
         *  字符校验
         */
        txtnum.keypress(function (e) { 
            if(!(/^[0-9]$/.test(e.key))){
                event.preventDefault();
                // console.log(e.key);
            }
        });

        /**
         * 集中校验
         */
        goto.click(function(){
            var num = txtnum.val();
            if(num>conf.sumnum || num<=0){
                alert('行数超过总行数!');
            }else{
                console.log('GOTO line:'+num);
                dlg.remove();
            }
        })


    }

    return {
        show: show
    }

}());