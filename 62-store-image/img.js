$(function () {
    var url = $('input[tyoe="text"]'),
        btn = $('input[type="button"]'),
        img = $('img'),
        tmpImg = $('<img>');

    var strImg = window.localStorage.getItem('img');
    if(strImg!==''){
        img.attr('src',img);
    }

    btn.click(function () {
        //检验地址不为空
        var url = url.val();
        if (url == '')
            return;
        //加载url
        tmpImg.attr('crossOrigin', 'anonymous');
        tmpImg.attr('src', url);

        tmpImg.load(function () {
            //创建画布
            var can = $('<canvas>').get(0);
            var ctx = can.getContent('2d');

            can.width = tmpImg.get(0).width;
            can.height = tmpImg.get(0).height;


            //填充图片，base64显示
            ctx.drawImage(tmpImg.get(0), 0, 0, can.width, can.height);


            //存储base64
            var str = can.toDataURL();
            console.log(str);

            window.localStorage.setItem('img',str);

            var strImg=window.localStorage.getItem('img');
            img.attr('src',strImg);
        })



    });

})