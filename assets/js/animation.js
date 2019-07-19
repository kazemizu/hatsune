/**
 * Created by wertad on 4/21/2018.
 */

var $animation_elements;
var $window = $(window);

$(document).ready(function(){
    $animation_elements = $(".animation-element");
    var delay = oneByOneAnimate("#show-case",undefined,"animated");
    delay = oneByOneAnimate("#show-case",undefined,"fadeIn");
});

function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $.each($animation_elements, function() {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);

        //check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
            $element.addClass('fadeIn');
        } else {
            $element.removeClass('fadeIn');
        }
    });
}

$window.on('scroll resize', check_if_in_view);
// $window.scroll(check_if_in_view);
$window.trigger('scroll');

function oneByOneAnimate(id,delayP,className){
    var showCaseChildren = document.getElementById("show-case").childElementCount;
    var delay;
    if(delayP === undefined){
        delayP = 0;
    }
    for(var i=0;i < showCaseChildren;i++){
        delay=(200+(delayP)+ 100*(i));
        // $("#show-case").childNodes[i].css({"animation": "display 5s " + delay + " infinite"});
        $(id).children().eq(i).addClass(className);
        $(id).children().eq(i).css({"animation-delay": delay+"ms"});
    }

    return delay;
}