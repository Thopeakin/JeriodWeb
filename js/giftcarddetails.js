giftcard = window.sessionStorage.getItem('giftcard');
document.getElementById('giftcard-image').src = 'images/' + giftcard + '.png';
giftcard = giftcard + ' giftcard';
document.getElementById('page-title').innerHTML = giftcard;

var cardFile = document.getElementById('card-file');
cardFile.onchange = function() {
    valueSplit = cardFile.value.split('\\');
    if (valueSplit.length < 1) {
        valueSplit = cardFile.value.split('/');
    }
    if (valueSplit[valueSplit.length - 1] == '') {
        filename = 'Upload Card';
        document.getElementById('pri-button').onclick = '';
        document.getElementById('pri-button').style.opacity = '0.4';
    } else {
        filename = valueSplit[valueSplit.length - 1];
        document.getElementById('pri-button').onclick = function() {
            window.location.href = "giftcardtrade.html";
        }
        document.getElementById('pri-button').style.opacity = '1';

    }
    document.getElementById('filename').innerText = filename;
}