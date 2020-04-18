menuBtn = document.getElementById('menu');
modal = document.getElementById('modal');
//GET MENU BUTTON BY ID
menuBtn.onclick = function() {
    openMenu();
}

function openMenu() {
    modal.style.display = 'block';
}

function closeMenu() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    //CLOSE MENU IF USER CLICKS ON MODAL
    //WHICH IS ANYWHERE ON THE SCREEN APART FROM THE ACTUAL SIDE MENU
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}