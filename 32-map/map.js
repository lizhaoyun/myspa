$(function() {
    var mainbox = new BMap.Map("main");
    var tpoint = new BMap.Point(114.529963,38.003679);
    mainbox.centerAndZoom(tpoint, 25),
    mainbox.addControl(new BMap.MapTypeControl({
        mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP]
    })),
    mainbox.enableScrollWheelZoom(!0),
    mainbox.setMapType(BMAP_HYBRID_MAP);
    var ha = new BMap.Marker(tpoint,{
        title: "SPA 富应用开发"
    });
    ha.setAnimation(BMAP_ANIMATION_BOUNCE),
    mainbox.addOverlay(ha);
    var wn = new BMap.InfoWindow('<div style="width: 250px"><p>时间：周二、周四下午<br>地点：505 教室</p><a href="https://github.com/wangding" target="_blank"><img src="https://secure.gravatar.com/avatar/4e1b831efef47d65a762da5d5e89174c?s=250" alt="王顶" width="40px" height="40px" style="position: relative; top: -58px; left: 190px"></a></div>',{
        width: 230,
        height: 100,
        title: "<strong>SPA 富应用开发</strong>"
    });
    ha.openInfoWindow(wn),
    ha.addEventListener("click", function() {
        mainbox.openInfoWindow(wn, tpoint)
    })
});