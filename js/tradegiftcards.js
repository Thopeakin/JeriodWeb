function selectGiftcard(giftcard) {
    window.sessionStorage.setItem('giftcard', giftcard);
    window.location.href = 'giftcarddetails.html';
}
``