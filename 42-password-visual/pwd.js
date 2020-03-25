function ShowPwd() {
    var block = $('<div class="box"><span>密&nbsp;&nbsp;码：</span></div>'),
        cintial = {
            container: "body"
        },
        inpwd,
        pwd=$('<input type="password" id="pwd"/>'),
        eye=$('<div class="eye"></div>');

    this.getPwd=function (conf) {
        block.append(pwd);
        block.append(eye);
        $(conf.container).append(block);
        $.extend(cintial, conf);
        // console.log($(conf.container));

        pwd.focusout(function(){
            inpwd=pwd.val();
        });

        eye.mouseover(function(){
            // let intype=pwd.attr('type');
            // console.log(intype);
            // if(intype === 'password'){
                pwd.attr('type','text');
            // }
            // pwd.val(inpwd);
            console.log(pwd.val());
        });
        eye.mouseout(function () { 
            // let intype=pwd.attr('type');
            pwd.attr('type','password');
            
        });

        $('#getpd').click(function(){
            alert(inpwd)
        })
    }
}