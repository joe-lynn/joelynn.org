var fade = document.querySelector('.fade');
var image = document.getElementsByTagName('img')[0];

var aquarelle = new Aquarelle(image, 'img/mask.png', {
    fromAmplitude: 0,
    toAmplitude: 20,
    fromFrequency: 8,
    toFrequency: 9,
    autoplay: true,
    loop: true,
    fromOffset: 0,
    toOffset: 50,
    duration: 16000

});

aquarelle.addEventListener('created', function() {
    var canvas = this.getCanvas();
    canvas.removeAttribute('style');
    image.parentNode.insertBefore(canvas, image.nextSibling);
    image.parentNode.removeChild(image);
});

aquarelle.addEventListener('changed', function(event) {

});

$( document ).ready(function() {
    $('.pull-down').each(function() {
        var $this = $(this);
        $this.css('margin-top', $this.parent().height() - $this.height())
    });
});

(function titleScroller(text) {
    document.title = text;
    setTimeout(function () {
        if(document.title === "Joe Lynn_"){
            titleScroller("Joe Lynn");
        } else {
            titleScroller("Joe Lynn_")
        }
    }, 650);
}(" Joe Lynn_"));
