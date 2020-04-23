function tradesFilter(element) {
    // IN "OUR RATES" PAGE, THERES BITCOINS AND GIFTCARDS
    // THIS IS USED TO SWITCH BETWEEN THEM AND DISPLAY WHICH IS ACTIVE 
    if (element.id == 'filter-giftcards') {
        element.classList.add('filter-active');
        document.getElementById('filter-bitcoins').classList.remove('filter-active');
        try {
            document.getElementById('trade-types').style.display = 'none';
            document.getElementById('giftcard-section').style.display = 'flex';
            document.getElementById('bitcoin-section').style.display = 'none';
        } catch (err) {}
        try {
            $(".trades-section").remove();
            $("#empty-trades").remove();
            showGiftcardTrades();
        } catch (err) {}
    } else {
        element.classList.add('filter-active');
        document.getElementById('filter-giftcards').classList.remove('filter-active');
        try {
            document.getElementById('trade-types').style.display = 'flex';
            document.getElementById('giftcard-section').style.display = 'none';
            document.getElementById('bitcoin-section').style.display = 'flex';
        } catch (err) {}
        try {
            $(".trades-section").remove();
            $("#empty-trades").remove();
            showBitcoinTrades();
        } catch (err) {}
    }
}

// function convertGift(element) {
//     //MULTIPLY THE AMOUNT OF GIFTCARD THE USER WANTS TO SELL 
//     // BY THE RATE TO SHOW THE VALUE IN NAIRA 
//     if (element.value == '') {
//         document.getElementById('gift-naira-value').innerHTML = "N0";
//     } else {
//         document.getElementById('gift-naira-value').innerHTML = "N" + (parseFloat(element.value) * 360).toLocaleString();
//     }
// }

// BTCRate = 37895;

// function convertBTC(element) {
//     //MULTIPLY THE AMOUNT OF BTC THE USER WANTS TO BUY/SELL 
//     // BY THE RATE TO SHOW THE VALUE IN NAIRA 
//     if (element.value == '') {
//         document.getElementById('btc-naira-value').innerHTML = "N0";
//     } else {
//         document.getElementById('btc-naira-value').innerHTML = "N" + (parseFloat(element.value) * BTCRate).toLocaleString();
//     }
// }

// tradeType = 'buy';
// // IN "OUR RATES" PAGE, UNDER BITCOINS, THERES BUY AND SELL
// // THE DEFAULT IS BUY

// function BTCTradeType(element) {
//     // IN "OUR RATES" PAGE, UNDER THE BITCOINS TAB, THERES BUY AND SELL
//     // THIS IS USED TO SWITCH BETWEEN THEM AND DISPLAY WHICH IS ACTIVE 
//     if (element.id == 'buy') {
//         tradeType = 'buy';
//         BTCRate = 37895;
//         document.getElementById('sell').classList.remove('active');
//         element.classList.add('active');
//     } else {
//         tradeType = 'sell';
//         BTCRate = 37890;
//         document.getElementById('buy').classList.remove('active');
//         element.classList.add('active');
//     }
//     convertBTC(document.getElementById('amount-input'));
// }