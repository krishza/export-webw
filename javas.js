
const first = document.querySelector(".first");
const second = document.querySelector(".second");
const third = document.querySelector(".third");
const fourth = document.querySelector(".fourth");
const fifth = document.querySelector(".fifth");
const steps = [first, second, third, fourth, fifth];

function nextStep(currentStep) {
    steps.forEach(step => step.classList.remove("active"));

    steps.forEach((step, index) => {
        if (index <= currentStep) {
            step.classList.add("active");
        } else {
            step.classList.remove("active");
        }
    });
}

steps.forEach((step, index) => {
    step.addEventListener("click", () => {
        nextStep(index);
    });
});



/*-------------performance couner number--------------*/
function visible(partial) {
    var $t = partial,
        $w = jQuery(window),
        viewTop = $w.scrollTop(),
        viewBottom = viewTop + $w.height(),
        _top = $t.offset().top,
        _bottom = _top + $t.height(),
        compareTop = partial === true ? _bottom : _top,
        compareBottom = partial === true ? _top : _bottom;

    return ((compareBottom <= viewBottom) && (compareTop >= viewTop) && $t.is(':visible'));

}

$(window).scroll(function () {

    if (visible($('.count-digit'))) {
        if ($('.count-digit').hasClass('counter-loaded')) return;
        $('.count-digit').addClass('counter-loaded');

        $('.count-digit').each(function () {
            var $this = $(this);
            jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
                duration: 5000,
                easing: 'swing',
                step: function () {
                    $this.text(Math.ceil(this.Counter));
                }
            });
        });
    }
})

