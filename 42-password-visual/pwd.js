var showPwd = (function () {
    var block = $('<div class="box"><span>密&nbsp;&nbsp;码：</span><input type="password" id="pwd"/><div class="eye"></div></div>'),
        cintial = {
            container: "body"
        },
        inpwd,
        pwd,
        eye;


    function getPwd(conf) {
        $(conf.container).append(block);
        $.extend(cintial, conf);
        pwd=$('#pwd');
        eye=$('.eye');
        console.log(eye);

        pwd.focusout(function(){
            inpwd=pwd.val();
        });

        eye.mouseover(function(){
            pwd.val(inpwd);
            console.log('1354');
        });

        $('#getpd').click(function(){
            alert(inpwd)
        })
    }
    return {
        getPwd: getPwd
    }
}())