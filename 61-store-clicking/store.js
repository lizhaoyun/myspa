$(function() {
    var btn = $('.main>input');
    var num = window.localStorage.getItem('num') || 0;

    console.log(btn);
    btn.val('被按了'+num+'次');
    btn.click(function () { 
        num++;
        window.localStorage.setItem('num',num);
        btn.val('被按了'+num+'次');
        
    });
});