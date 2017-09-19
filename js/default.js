$(function() {
    $('a.nav').click(function(e) {
        href = $(this).attr("href");
        api(href);
        history.pushState('', 'New URL: ' + href, href);
        e.preventDefault();
    });

    window.onpopstate = function(event) {
        api(location.pathname);
    };
});

function api(url) {
    $.getJSON("api/1.0/json/" + url.substring(1), function(json) {
        $.each(json, function(key, value) {
            if (key == "page-image") {
                $(".tpl-page-image-replace").css("background-image", "url(/img/page/" + value + ")");
            } else if (key == "page-title") {
                $("title").html(value + " - Patryk Rzucidlo (PTKDev)");
            }
            $(".tpl-" + key).html(value);
        });
    });
}

$(document).ready(function() {
    $('#hamburger-icon').click(function() {
        $('#hamburger-icon').toggleClass('open');
        $("#sidebar").toggleClass('open');
        $("#main").toggleClass('open');
        cookieConsent();
    });
});
