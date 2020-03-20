$(function () {
    $('input').click(function(){
        var code = $('<div><pre class="javascript"></pre></div>');
        var txta=$('textarea');

        if(txta.val()!==''){
            code.find('pre').html(txta.val());
            hljs.highlightBlock(code.find('pre')[0]);
            $('body').append(code);
        }
    });
})