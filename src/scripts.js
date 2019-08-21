$(document).ready(() => {
    $('#splash-page-js').show();
    $('#main-page-js').hide();
    $('#header-js').hide();
    $('#enter__button-js').click(hideSplash)
    function hideSplash() {
        $('#splash-page-js').fadeOut(2000);
        $('#splash-page-js').hide();
        $('#main-page-js').fadeIn(1000);
        $('#header-js').show();
    }
});