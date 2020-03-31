
function Banner() {
    var box = $('#box');
    var a = $('' +
        '<div class="slider" id="slider">' +
        '<div class="slide"><img src="img/b5.png" alt=""></div>' +
        '<div class="slide"><img src="img/b1.png" alt=""></div>' +
        '<div class="slide"><img src="img/b2.png" alt=""></div>' +
        '<div class="slide"><img src="img/b3.png" alt=""></div>' +
        '<div class="slide"><img src="img/b4.png" alt=""></div>' +
        '<div class="slide"><img src="img/b5.png" alt=""></div>' +
        '<div class="slide"><img src="img/b1.png" alt=""></div>' +
        '</div>' +
        '<span id="left"><</span>' +
        '<span id="right">></span>' +
        '<ul class="nav" id="navs">' +
        '<li>1</li>' +
        '<li>2</li>' +
        '<li>3</li>' +
        '<li>4</li>' +
        '<li>5</li>' +
        '</ul>'
    );


    this.show = function () {
        box.append(a);
        console.log('banner show');
        var tab = $('#navs');
        var tli = $('li');
        var slider = $('#slider');
        var lspan = $('#left');
        var rspan = $('#right');
        var nowidx = 1;
        var isMoving = false;
        var timer;
        var flg = true;

        function changeCss() {
            // slider.css({
            //     left: -1200 - nowidx * 1200 + 'px'
            // });
            // tli.attr('class', '');
            // $('li').eq(nowidx).attr('class', 'active');
            // $('img').eq(nowidx).animate({
            //     left: nowidx * 1200 + 'px'
            // },1000,function(){
            //     tli.attr('class', '');
            //     $('li').eq(nowidx).attr('class', 'active');
            //     $('img').eq(nowidx-1).css({"left":"0","display":"none"});
            //     $('img').eq(nowidx-1).css('z-index','1');
            // })

            // console.log('初始:'+nowidx);
            slider.animate({
                left: -1200 * nowidx + 'px'
            }, 1000, function () {
                switch (nowidx) {
                    case 0:
                        nowidx = 5;
                        slider.css({
                            left: -nowidx * 1200 + 'px'
                        });
                        break;
                    case 6:
                        nowidx = 1;
                        slider.css({
                            left: -nowidx * 1200 + 'px'
                        });
                }
                console.log(nowidx);
                tli.attr('class', '');
                switch (nowidx) {
                    case nowidx > tli.length:
                        $('li').eq(0).attr('class', 'active');
                        break;
                    case nowidx <= 0:
                        $('li').eq(4).attr('class', 'active');
                        break;
                    default:
                        $('li').eq(nowidx - 1).attr('class', 'active');
                        break;
                }
                isMoving = false;
            });
        }


        function startInterval() {
            // if(!isMoving)
            //     return;
            // isMoving=true;
            timer = setInterval(function () {
                nowidx = (nowidx++) > 6 ? 6 : nowidx;
                console.log('定时器' + nowidx);
                changeCss();
            }, 3000);
        }

        function spanShow() {

            lspan.animate({
                opacity: 0.5
            });
            rspan.animate({
                opacity: 0.5
            });
        };

        function hidespan() {
            lspan.animate({
                opacity: 0
            });
            rspan.animate({
                opacity: 0
            });
        }



        $('li').eq(nowidx - 1).attr('class', 'active');
        startInterval();

        tab.on('click', 'li', function () {
            var idx = $(this).text();
            clearInterval(timer);
            console.log('点击' + idx);
            if (isMoving) {
                return;
            }
            isMoving = true;
            nowidx = parseInt(idx);
            changeCss();
        })

        lspan.click(function () {
            // console.log('←');
            // nowidx=nowidx==0?(len-3):(nowidx-1);
            // changeCss(nowidx);
            // console.log(nowidx + 'lllll', nowidx < 0);
            // console.log('left:' + $('li')[nowidx]);
            // console.log('left:' + $('img')[nowidx]);
            if (isMoving) {
                return;
            }

            isMoving = true;
            nowidx--;
            // if(nowidx<=0)
            //     nowidx=0
            changeCss();

        });
        rspan.click(function () {
            // console.log('→');
            // nowidx = nowidx >= (tli.length - 1) ? 0 : (nowidx + 1);
            // nowidx = nowidx >= 5 ? 0 : (nowidx + 1);
            // changeCss(nowidx);

            // console.log(nowidx + 'kkkkk', nowidx > (tli.length - 1));
            // console.log($('li')[nowidx]);

            if (isMoving) {
                return;
            }
            // console.log(flg);
            isMoving = true;
            nowidx++;
            // if(nowidx>6)
            //     nowidx=6;
            changeCss();
        });

        slider.mouseover(function () {
            clearInterval(timer);
            console.log('清除定时器！');
            spanShow();
        });
        slider.mouseout(function () {
            hidespan();
            startInterval();
        });
        lspan.mouseover(function () {
            spanShow();
            clearInterval(timer);
        });

        lspan.mouseout(function () {
            hidespan();
            startInterval();
        });
        rspan.mouseover(function () {
            spanShow();
            clearInterval(timer);
        });

        rspan.mouseout(function () {
            hidespan();
            startInterval();
        });


    }
};