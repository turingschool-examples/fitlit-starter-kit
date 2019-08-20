$(document).ready(() => {
    $('#splash-page-js').show();
    $('#main-page-js').hide();
    $('#header-js').hide();
    $('#enter__button-js').click(hideSplash)
    function hideSplash() {
        $('#splash-page-js').hide();
        $('#main-page-js').show();
        $('#header-js').show();
    }
});