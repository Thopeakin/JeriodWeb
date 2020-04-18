function visibility(element) {
    if (element.innerHTML == 'visibility_off') {
        element.innerHTML = 'visibility';
        document.getElementById('password').type = 'text';
    } else {
        element.innerHTML = 'visibility_off';
        document.getElementById('password').type = 'password';
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
            document.getElementsByClassName('pin-field')[3].blur();
            document.getElementById('pri-button').focus();
        }
    }
}