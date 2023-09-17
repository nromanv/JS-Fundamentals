//-----------------task-1---------------------------
/*
const $greenHead = $('.head').css("background", "green");
const $innerhead = $('.inner').css("fontSize", "35px");
*/

//-----------------task-2---------------------------
/*
const $link = ($('.link').text());
const regExp = /^http:\/\//

if (regExp.test($link)) {
    $('.link').attr('target', '_blank');
}
console.log($('.link')[0].outerHTML);
*/

//-----------------task-3---------------------------
/*
const $text1 = $('div').first();
const $header1 = $('h3').first();
const $text2 = $('div').last();
$text1.before($header1);
$text2.after($header1);
*/

//-----------------task-4---------------------------
/*
$('input[type="checkbox"]').change(function() {
    const checkedBoxes = $('input[type="checkbox"]:checked');
    const $checkBox = $('input[type="checkbox"]');

    if (checkedBoxes.length === 3) {
        $checkBox.not(checkedBoxes).prop('disabled', true);
    }
});
*/