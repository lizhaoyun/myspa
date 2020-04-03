var dlgGoto = (function () {
    var dlg = $(''
    +'<div class="notepad-dlg-about">'
    +'<div class="dialogbox">'
        +'<div class="titlebar">'
            +'<span class="title">关于"记事本"</span>'
            +'<span class="close-btn">X</span>'
        +'</div>'
        +'<div class="main">'
            +'<div class="txt">'
                +'<div class="logotitle">'
                    +'<img src="./img/winds-logo.png" alt="">'
                    +'<span>Windows10</span>'
                +'</div><hr>'
                +'<img src="./img/note-logo.png" alt="">'
                +'<div class="content">'
                    +'<p>Microsoft Windows <br>版本 1903 (OS内部版本 18362.720) <br> © 2019 Microsoft Corporation。 保留所有权利。</p><br>'
                    +'<p>Windows 10 家庭中文版 操作系统及其用户界面受美国和其他国家/地区的商标法<br>和其他待颁布或已颁布的知识产权法保护。</p><br>'
                    +'<p>根据 <a href="#">Microsoft 软件许可条款</a>，许可如下用户使用本产品：</p>'
                    +'<p class="btxt">Windows 用户</p>'
                +'</div>'
            +'</div>'
            +'<input class="btn-goto" type="button" value="确定" name="">'
        +'</div>'
    +'</div>'
+'</div>'),
        close=dlg.find('.close-btn'),
        titleBar=dlg.find('.titlebar'),
        goto=dlg.find('.btn-goto'),
        dbox=dlg.find('.dialogbox');

    
    function show() {
        $('body').append(dlg);

        dbox.draggable({handle: titleBar});
        goto.focus();
        console.log(dbox);
        /**
         *  关闭窗口
         */
        close.click(function(){
            dlg.remove();
            console.log('remove success!');
        });

        goto.click(function(){
            dlg.remove();
        })


    }
    return {
        show: show
    }

}());