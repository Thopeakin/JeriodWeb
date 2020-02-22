function visibility(element) {
    if (element.innerHTML == 'visibility_off') {
        element.innerHTML = 'visibility';
        document.getElementById('password').type = 'text';
    } else {
        element.innerHTML = 'visibility_off';
        document.getElementById('password').type = 'password';
    }
}

function pinInput(index) {
    if (index < 3) {
        document.getElementsByClassName('pin-field')[index + 1].focus();
    } else if (index == 3) {
        document.getElementsByClassName('pin-field')[3].blur();
    }
}