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
    showGiftcardTrades();
} catch (err) {}

function tradesFilter(element) {
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

try {
    element = document.querySelector('dropdown');
    element.style.display = 'none';
} catch (err) {}

function newTrade() {
    element = document.querySelector('dropdown');
    if (element.style.display == 'none') {
        element.style.display = 'block';
        element.style.animation = 'slideIn 0.3s';
    } else {
        element.style.animation = 'slideOut 0.3s';
        setTimeout(() => {
            element.style.display = 'none';
        }, 290);


    }
}

function convertGift(element) {
    if (element.value == '') {
        document.getElementById('gift-naira-value').innerHTML = "N0";
    } else {
        document.getElementById('gift-naira-value').innerHTML = "N" + (parseFloat(element.value) * 360).toLocaleString();
    }
}

BTCRate = 37895;

function convertBTC(element) {
    if (element.value == '') {
        document.getElementById('btc-naira-value').innerHTML = "N0";
    } else {
        document.getElementById('btc-naira-value').innerHTML = "N" + (parseFloat(element.value) * BTCRate).toLocaleString();
    }
}

tradeType = 'buy';

function BTCTradeType(element) {
    if (element.id == 'buy') {
        tradeType = 'buy';
        BTCRate = 37895;
        document.getElementById('sell').classList.remove('active');
        element.classList.add('active');
    } else {
        tradeType = 'sell';
        BTCRate = 37890;
        document.getElementById('buy').classList.remove('active');
        element.classList.add('active');
    }
    convertBTC(document.getElementById('amount-input'));
}

menuBtn = document.getElementById('menu');
menuBtn.onclick = function() {
    openMenu();
}

function openMenu() {
    modal = document.getElementById('modal');
    modal.style.display = 'block';
}

function closeMenu() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}