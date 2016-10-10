var $window = $(window);
function checkWidth() {
    var windowsize = $window.width();
    // $breakpoints: (
    //   'phone': 420px,
    //   'tablet': 768px,
    //   'desktop': 1024px
    // ) !default;
    $.getScript("./scripts/my-js/warning-bug.js", function() {
            if (windowsize >768) {
                console.log("window width 768 -- 420");
                WarningBug.cleanWarningBug();
            }else if (windowsize <769 && windowsize >420){
                console.log("window width > 768");
                        WarningBug.done();
            }else if (windowsize <= 420){
                console.log("window width <= 420");
                        WarningBug.done();
            }
    });
}
// Execute on load
checkWidth();
// Bind event listener
$(window).resize(checkWidth);

