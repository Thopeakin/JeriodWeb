function verify() {
    //DUMMY LOADER TO VERIFY ACCOUNT NUMBER AND NAME
    bank = document.getElementById('bank').value;
    number = document.getElementById('number').value;
    btn = document.getElementById('pri-button');
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
    //REGEX TO ENSURE ONLY VALID NUMBERS ARE ENTERED
    //THEN MAKES BUTTON CLICKABLE WHEN VALID ACCOUNT NUMBER IS INPUTED
    element.value = element.value.replace(/[^0-9]/g, '').replace(/(\..*)\./g, '$1');
    btn = document.getElementById('pri-button');
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

function pinInput(element, index) {
    //REGEX TO ENSURE ONLY VALID NUMBERS ARE ENTERED
    // THEN FOCUS ON THE NEXT FIELD 
    element.value = element.value.replace(/[^0-9]/g, '').replace(/(\..*)\./g, '$1');
    if (element.value != '') {
        if (index < 3) {
            document.getElementsByClassName('pin-field')[index + 1].focus();
        } else if (index == 3) {
            btn = document.getElementById('pri-button')
            document.getElementsByClassName('pin-field')[3].blur();
            btn.style.opacity = '1';
            btn.onclick = function() {
                window.location.href = 'addaccountsuccess.html';
            }
            btn.focus();

        }
    }
}