require.config({
    'paths': {
        'jquery': '//apps.bdimg.com/libs/jquery/2.1.4/jquery.min'
    }
})
// jquery为cdn网址(互联网)，需要配置信息
require(['jquery'], function ($) {
    $(function () {
        var btnAdd = $('#add');
        btnAdd.click(function () {
            require(['btn'], function (TimmerButton) {
                var tb1 = new TimmerButton();
                tb1.show({
                    container: '#main',
                    num: 6,
                    title: '同意',
                    onClick: function () {
                        console.log('点击了！');
                    }
                })
                console.log('add timerbtn');
            })

        });
    });
});
