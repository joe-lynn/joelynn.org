window.onresize = function(){ location.reload(); }
$( document ).ready(function() {
    $('.pull-down').each(function() {
        var $this = $(this);
        $this.css('margin-top', $this.parent().height() - $this.height())
    });
    // Get the modal
    var modal = document.getElementById('posterModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementById('poster');
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    };

// Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    var entireSpan = document.getElementById('posterModal');

// When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    };
    entireSpan.onclick = function (ev) {
        modal.style.display = 'none';
    }
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
