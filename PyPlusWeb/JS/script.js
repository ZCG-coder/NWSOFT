function getWidth() {
    return window.innerWidth;
}

function animate_welcome(){
    $("#Welcome").animate({
        "marginLeft": (getWidth() / 2).toString(10),
        "marginRight": (getWidth() / 2).toString(10)
    }, "medium");
}

setInterval(3000, animate_welcome);
