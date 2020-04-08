$(function() {
    var len = $("#rectangle-width");
    var height = $("#rectangle-height");
    function result(e, t) {
        return Math.round(e * Math.pow(10, t)) / Math.pow(10, t)
    }
    $(".rectangle form").submit(function(e) {
        e.preventDefault();
        var nlen = Number(len.val());
        var nh = Number(height.val());
        var zh = result(2 * nlen + 2 * nh, 2);
        var area = result(nlen * nh, 2);
        $("#rectangle-perimeter").val(zh),
        $("#rectangle-area").val(area)
    })
});