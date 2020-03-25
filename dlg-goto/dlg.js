var dlgGoto = (function () {
    var dlg = $('<input type="button" disabled />'),
        // num = 6,
        cfg = {
            container: 'body',
            num: 6,
            title: '同意',
        },
        timer;

        dlg.css({
            height: "50px",
            width: "100px"
        });
    function show(conf) {
        

        $(conf.container).append(dlg);
        $.extend(cfg, conf);     //更新对象
        dlg.val(cfg.title + '(' + cfg.num + 's)');

        dlg.click(function () {
            // alert("就知道你会同意的!");
            cfg.onClick();
        });

    }

    return {
        show: show
    }

}());