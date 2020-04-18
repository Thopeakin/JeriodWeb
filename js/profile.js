function toggleSwitch(element) {
    if (element.className == 'inactive') {
        element.className = 'active';
        element.style.animation = 'toggle-active 0.3s';
        window.setTimeout(function() {
            element.style.backgroundColor = '#1E50CF';
            element.style.borderColor = '#1E50CF';
            document.getElementById('switch-button').style.borderColor = '#1E50CF';
            document.getElementById('switch-button').style.marginLeft = '0px';
            document.getElementById('switch-button').style.marginRight = '-2px';
            element.style.paddingLeft = '23px';
        }, 260)
    } else {
        element.className = 'inactive';
        element.style.animation = 'toggle-inactive 0.3s';
        window.setTimeout(function() {
            element.style.backgroundColor = 'white';
            element.style.borderColor = '#AAA';
            document.getElementById('switch-button').style.borderColor = '#AAA';
            document.getElementById('switch-button').style.marginLeft = '-2px';
            document.getElementById('switch-button').style.marginRight = '0px';
            element.style.paddingLeft = '0px';
        }, 250)
    }
}