$(document).ready(function() {
    var e = !1,
        t = /Firefox/i.test(navigator.userAgent),
        a = /MSIE/i.test(navigator.userAgent) || /Trident.*rv\:11\./i.test(navigator.userAgent),
        r = 30,
        s = 600,
        n = 0,
        i = $(".page").length;

    function o(o) {
        var d;
        delta = t ? -120 * o.detail : a ? -o.deltaY : o.wheelDelta, 1 != e && (delta <= -r && (e = !0, n !== i - 1 && (n++, d = $(".page").eq(n - 1), $currentSlide = $(".page").removeClass("current").eq(n).addClass("current"), d.removeClass("up-scroll").addClass("down-scroll"), $(".indicate-dots li, .main-menu li").removeClass("current"), $(".indicate-dots li [href='#" + $(".page").eq(n).attr("id") + "'], .main-menu [href='#" + $(".page").eq(n).attr("id") + "']").parent().addClass("current")), l(s)), delta >= r && (e = !0, 0 !== n && n--, function() {
            $(".page").eq(n);
            $(".page").removeClass("current").eq(n).addClass("current").removeClass("down-scroll").addClass("up-scroll"), $(".indicate-dots li, .main-menu li").removeClass("current"), $(".indicate-dots li [href='#" + $(".page").eq(n).attr("id") + "'], .main-menu [href='#" + $(".page").eq(n).attr("id") + "']").parent().addClass("current")
        }(), l(s)))
    }

    function l(t) {
        setTimeout(function() {
            e = !1
        }, t)
    }
    $(".menu-trigger").click(function() {
        $("body").toggleClass("active-menu")
    }), $(".cats a").click(function() {
        return $(".gallery-cat").removeClass("active"), $(".gallery " + $(this).attr("href")).addClass("active"), $(".cats li").removeClass("current"), $(this).parent().addClass("current"), !1
    }), $("form").submit(function() {
        var e = $(this);
        return e.find(".btn").remove(), $.ajax({
            type: "POST",
            url: e.attr("action"),
            data: e.serialize(),
            success: function(t) {
                e.text(t).addClass("sent")
            }
        }), !1
    });
    var d = !1;

    function c() {
        if (d) {
            $("body").addClass("load-onescroll");
            var e = t ? "DOMMouseScroll" : "wheel";
            window.addEventListener(e, _.throttle(o, 60), !1), $(".indicate-dots li a, .btn[href*='#'], .main-menu a:not(.external)").click(function() {
                return n = $($(this).attr("href")).index(), $(".page").removeClass("current"), $($(this).attr("href")).removeClass("down-scroll up-scroll").addClass("current"), $(".indicate-dots li, .main-menu li").removeClass("current"), $(".indicate-dots li [href='" + $(this).attr("href") + "'], .main-menu [href='" + $(this).attr("href") + "']").parent().addClass("current"), $(".page.current").prevAll(".page").removeClass("up-scroll").addClass("down-scroll"), $(".page.current").nextAll(".page").removeClass("down-scroll up-scroll"), !1
            })
        } else $("body").addClass("load-withoutscroll"), $(".btn[href*='#'], .main-menu a:not(.external)").click(function() {
            $("body").removeClass("active-menu");
            var e = 0;
            $(window).width() < 768 && (e = 79);
            var t = $(this);
            return $("html, body").stop().animate({
                scrollTop: $(t.attr("href")).offset().top - e
            }, 750), !1
        }), $(".indicate-dots").onePageNav({
            scrollChange: function(e) {
                $(".main-menu li").removeClass("current").find('[href="' + e.find("a").attr("href") + '"]').parent().addClass("current")
            },
            changeHash: !0,
            filter: ":not(.external)"
        })
    }
    $(window).width() > 1023 && $(window).height() > 720 && (a || (d = !0)), $(window).resize(function() {
        d = !1, $(window).width() > 1023 && $(window).height() > 720 && (a || (d = !0)), c()
    }), c(), $(".menu-slider").slick({
        dots: !1,
        infinite: !1,
        speed: 400,
        slidesToShow: 2,
        slidesToScroll: 2,
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    }), $(".reviews-slider").slick({
        dots: !1,
        infinite: !0,
        centerMode: !0,
        variableWidth: !0,
        adaptiveHeight: !0,
        speed: 400,
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right" aria-hidden="true"></button>',
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left" aria-hidden="true"></button>'
    }), $(".chef-slider").slick({
        dots: !1,
        infinite: !1,
        speed: 400,
        slidesToShow: 2,
        slidesToScroll: 2,
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right" aria-hidden="true"></button>',
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left" aria-hidden="true"></button>',
        responsive: [{
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    }), $(".gallery-cat ul").slick({
        dots: !1,
        infinite: !1,
        speed: 400,
        rows: 2,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right" aria-hidden="true"></button>',
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left" aria-hidden="true"></button>',
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    }), $("[data-fancybox]").fancybox({
        buttons: ["close"],
        hash: !1,
        arrows: !0,
        btnTpl: {
            arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
            arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>'
        }
    })
});