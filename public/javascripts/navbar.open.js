$(document).ready(function () {

    $(".navbaropen").click(function () {
        //console.log($(this).parent().is('.open'));
        if ($(this).parent().is('.open') != true) {
            $(".navbaropen").each(function () {
                $(this).css('color', '#333');
                if ($(this).is(':focus') != true) {
                    $(this).css("color", "#ddd");
                }
            });
        } else {
            //console.log('no');
            $(".navbaropen").each(function () {
                $(this).css('color', '#333');
            });
        }
    });


    $(".navbaropen").blur(function () {

        var navbj = false;
        $(".navbaropen").each(function () {
            if ($(this).parent().is('.open') != false) {
                $(".navbaropen").css("color", "#333");
                return;
            }
        })

    });

    $(".totopauto li").addClass("col-xs-12 col-sm-12 col-md-6 col-lg-4");

/*
    $(".navbaropen").mouseenter(function () {
        var oldcolor = $(this).css("color");
        tcolor($(this),"#f00000");
        $(this).mouseleave(function () {
            tcolor($(this),oldcolor);
        })
    });


    function tcolor(el, color) {
        var c1 = el.css('color');
        //console.log(c1);
        var c2 = gradient(c1, color, 3);
        //console.log(c2);
        for(var i in c2){
            setTimeout(function () {
                el.css("color",c2[i]);
            },200);
        }



    }


    function rgbToHex(r, g, b) {
        var hex = ((r << 16) | (g << 8) | b).toString(16);
        return "#" + new Array(Math.abs(hex.length - 7)).join("0") + hex;
    }

    function hexToRgb(hex) {
        var rgb = [];
        for (var i = 1; i < 7; i += 2) {
            rgb.push(parseInt("0x" + hex.slice(i, i + 2)));
        }
        return rgb;
    }


    function gradient(startColor, endColor, step) {
        //将hex转换为rgb
        var sColor = startColor,
            eColor = endColor;
        //console.log(sColor,eColor);
        //计算R\G\B每一步的差值
        var rStep = (eColor[0] - sColor[0]) / step;
        gStep = (eColor[1] - sColor[1]) / step;
        bStep = (eColor[2] - sColor[2]) / step;

        var gradientColorArr = [];
        for (var i = 0; i < step; i++) {
            //计算每一步的hex值
            gradientColorArr.push(rgbToHex(parseInt(rStep * i + sColor[0]), parseInt(gStep * i + sColor[1]), parseInt(bStep * i + sColor[2])));
        }
        return gradientColorArr;
    }
*/


});