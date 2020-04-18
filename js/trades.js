giftcardTrades = [{
        'date': '21, Dec. 2019',
        'id': 'G123856',
        'price': '2000',
    },
    {
        'date': '26, Dec. 2019',
        'id': 'G187246',
        'price': '4500',
    },
    {
        'date': '31, Dec. 2019',
        'id': 'G121856',
        'price': '6000',
    },
];

bitcoinTrades = [];

function showGiftcardTrades() {
    //LOOP THROUGH THE GIFTCARD OBJECT THEN DISPLAY IT'S
    // DATA USING JQUERY
    // OR SHOW IMAGE IF IT'S EMPTY
    if (giftcardTrades.length > 0) {
        for (trade of giftcardTrades) {
            var section =
                `
    <div class='trades-section'>
        <div class='left'>
            <h6>${trade.date}</h6>
            <h5>Giftcard Trade ${trade.id}</h5>
        </div>
        <h4>N${trade.price}</h4>
    </div>
    `;
            $("#open-trades-content").append(section);
        }
    } else {
        var section = `
    <div id='empty-trades'>
        <img src='images/empty.png' width="200px" height="120px">
        <h4>No Transaction Found</h4>
        <h5> You do not have any ${'Giftcard'} transaction</h5>
    </div>
     `;
        $("#open-trades-content").append(section);
    }
}

function showBitcoinTrades() {
    //LOOP THROUGH THE BITCOIN OBJECT THEN DISPLAY IT'S
    // DATA USING JQUERY
    // OR SHOW IMAGE IF IT'S EMPTY
    if (bitcoinTrades.length > 0) {
        for (trade of bitcoinTrades) {}
    } else {
        var section = `
    <div id='empty-trades'>
        <img src='images/empty.png' width="200px" height="120px">
        <h4>No Transaction Found</h4>
        <h5> You do not have any ${'Bitcoin'} transaction</h5>
    </div>
     `;
        $("#open-trades-content").append(section);
    }
}

try {
    //SHOW GIFTCARD DETAILS ON PAGE LOAD
    showGiftcardTrades();
} catch (err) {}

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