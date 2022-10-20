var Webflow = Webflow || [];
Webflow.push(function () {

const query = "message";
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
//$("*[data-show-if-qs]").hide()

if ( urlParams.get(query) ) {
    selector = 'data-name="subject"'
    $(`*[${selector}]`).val(urlParams.get(query));
}
});
