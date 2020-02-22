function selectGiftcard(giftcard) {
    window.sessionStorage.setItem('giftcard', giftcard);
    window.location.href = 'giftcarddetails.html';
}

function tradeType(element) {
    if (element.id == 'sell-bitcoins') {
        element.classList.add('type-active');
        document.getElementById('buy-bitcoins').classList.remove('type-active');
    } else {
        element.classList.add('type-active');
        document.getElementById('sell-bitcoins').classList.remove('type-active');
    }
}

function convert() {
    if (document.getElementById('btc-value').value == '') {
        document.getElementById('naira-value').innerHTML = "N0";
    } else {
        document.getElementById('naira-value').innerHTML = "N" + (parseFloat(document.getElementById('btc-value').value) * 3495690).toLocaleString();
    }
    btn = document.getElementById('ctn-btn');
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

function verify() {
    bank = document.getElementById('bank').value;
    number = document.getElementById('number').value;
    btn = document.getElementById('ver-btn');
    spinner = document.getElementById('spin-btn');
    btn.style.display = 'none';
    spinner.style.display = 'flex';
    setTimeout(() => {
        document.getElementById('bank-name').innerHTML = bank;
        document.getElementById('acc-number').innerHTML = number;
        document.getElementById('acc-name').innerHTML = 'Tope Paul';
        btn.style.display = 'block';
        spinner.style.display = 'none';
        document.getElementById('ver-acc').style.display = 'none';
        document.getElementById('con-acc').style.display = 'flex';
    }, 3000);
}

function accountNumber(element) {
    element.value = element.value.replace(/[^0-9]/g, '').replace(/(\..*)\./g, '$1');
    btn = document.getElementById('ver-btn');
    if (element.value.length > 9) {
        btn.style.opacity = '1';
        btn.onclick = function() {
            verify();
        }
    } else {
        btn.style.opacity = '0.4';
        btn.onclick = '';
    }
}

function pinInput(index) {
    if (index < 3) {
        document.getElementsByClassName('pin-field')[index + 1].focus();
    } else if (index == 3) {
        btn = document.getElementById('add-btn')
        document.getElementsByClassName('pin-field')[3].blur();
        btn.style.opacity = '1';
        btn.onclick = function() {
            window.location.href = 'addaccountsuccess.html';
        }
        btn.focus();

    }
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