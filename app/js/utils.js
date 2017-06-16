var a = [1234,234,345456,2134213,546345,75856,231543245];
var b = [123,2314];
var c = [5234,2345,564,567546,12345123,45,1234214,5675,123,452345,3245,23,452345234,2345234,2345234,23452345,234532,1234,3456,3456345,3456,343456345,3456534,234,3456,12345325,567,1234123,67567,1234312,4565,1234,21354,65467345,23453,12345,1234,56423,23456,56754,2345,678563,234532,786576,23452345,87565,1235432,78544,1234532,34567543,2135432,345634,123412,54634,1234312,45635,12341,54654,12354123,546,34,123543,5634,123412,5465,123421,342,13422134,756,12344];
var custIds = {
  "1": a,
  "2": b,
  "3": c
}
function showCustIds(option, elem) {
  var $contentCustIds = $("#content-cust-ids");
  var $span = $(elem);
  $contentCustIds.css('background-color', $span.css('background-color'));
  var position = $span.offset();
  position.top -= 1;
  position.left -= 1;
  $contentCustIds.css(position);
  $contentCustIds.addClass('show');
  $contentCustIds.text(splitCustIds(custIds[option]));
}

function hideCustIds(elem) {
  $(elem).text('');
  $(elem).removeClass("show")
}

function splitCustIds(custIds) {
  return '[' + custIds.toString().replace(new RegExp(",", 'g'), ", ") + ']';
}