$(function() {
    var t, 
        btn = $('input[type="button"]'), 
        time = 6;
    btn.val("同意 (" + time + " s)"),
    btn.attr("disabled", "disabled"),

    t=window.setInterval(function () {
        time--;
        if (time === 0) {
            clearInterval(t);
            btn.val('同意');
            btn.removeAttr("disabled");
        }
        else {
            btn.val('同意(' + time + 's)');
        }
    }, 1000);
    
    btn.click(function() {
        alert("就知道你会同意的！")
    })
});