
$(function() {
    var $width = $('#width'),
        $height = $('#height'),
        $btnCal = $('#calculate'),
        $perimeter = $('#length'),
        $area = $('#area');

    function checkH(sub){
        // switch(sub)
    }

    $btnCal.click(function(){
        if(checkH($width)&&checkH('#height'))
        var w = $width.val(),
            h = $height.val();
        
        $perimeter.val(w * h);
        $area.val( 2 * (w + h));
    });
});
