function tradeType(element) {
    // THERE ARE BUY AND SELL TABS
    // THIS IS USED TO SWITCH BETWEEN THEM AND DISPLAY WHICH IS ACTIVE 
    if (element.id == 'sell-bitcoins') {
        element.classList.add('type-active');
        document.getElementById('buy-bitcoins').classList.remove('type-active');
    } else {
        element.classList.add('type-active');
        document.getElementById('sell-bitcoins').classList.remove('type-active');
    }
}

function convert() {
    //MULTIPLY THE AMOUNT OF BITCOIN THE USER WANTS TO SELL 
    // BY THE RATE TO SHOW THE VALUE IN NAIRA 
    if (document.getElementById('btc-value').value == '') {
        document.getElementById('naira-value').innerHTML = "N0";
    } else {
        document.getElementById('naira-value').innerHTML = "N" + (parseFloat(document.getElementById('btc-value').value) * 3495690).toLocaleString();
    }
    btn = document.getElementById('pri-button');
    if (parseFloat(document.getElementById('btc-value').value) * 3495690 > 0) {
        btn.style.opacity = '1';
        btn.onclick = function() {
            window.location.href = 'addaccount.html';
        }
    } else {
        btn.style.opacity = '0.4';
        btn.onclick = '';

    }
}