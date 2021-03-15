function getWidth() {
    return window.innerWidth;
}

$(function(){
    $("#Welcome").animate({
        "marginLeft": (getWidth() / 2).toString(10),
        "marginRight": (getWidth() / 2).toString(10)
    }, "medium");
});
