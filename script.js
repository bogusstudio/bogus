var src = '';
var main = document.getElementsByClassName("main")[0];

$.getJSON("data.json", function(data) {
    var images = data.images;
    getImage(images);
});

function getImage(images) {
    var randomIndex = Math.floor(Math.random() * images.length);
    src = images[randomIndex];
    main.style.backgroundImage = "url('/images/" + src + "')";
    setTimeout(function() {
        main.classList.remove('opacZero')
    }, 500);
}

$(window).on('beforeunload', function() {
    main.classList.add('opacZero')
});