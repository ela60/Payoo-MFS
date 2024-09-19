// show the cash out form

// even= jokon func vitor kono kaj korbe tokon func vitor event dete hbe
document.getElementById('btn-show-cash-out').addEventListener('click', function () {
    // show  the cash out button 
    console.log('cash out clicked');
    document.getElementById('cash-out-form').classList.remove('hidden');
    // hide the add money form
    document.getElementById('add-money-form').classList.add('hidden');


});

// show add money form ans hide the cash out form
document.getElementById('btn-show-add-money').addEventListener('click', function () {
    document.getElementById('add-money-form').classList.remove('hidden');

    document.getElementById('cash-out-form').classList.add('hidden');
})