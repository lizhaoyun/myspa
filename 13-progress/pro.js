$(function() {
    var pro = $("progress"),
        n = 0,
        count = 0;
    $("#start-btn").click(function() {
        if(n===0){
            n=window.setInterval(function(){
                pro.attr('value',count++);
            },100);
        }
    });
    
    $("#stop-btn").click(function() {
        window.clearInterval(n),
        n = 0
    });

    $("#reset-btn").click(function() {
        pro.attr("value", count = 0)
    });
});
