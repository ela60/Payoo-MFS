// add money to the account

// step-1:add an event handler to thr add money button inside the form
document.getElementById('btn-add-money').addEventListener('click', function (event) {
    // prevent page reload after form submit
    event.preventDefault();
    
    
    // step:2get money to be added to the account
    const addMoneyInput = document.getElementById('input-add-money').value;
    console.log(addMoneyInput);

    // get the pin number provided
    const pinNumberInput = document.getElementById('input-pin-number').value;
    console.log(pinNumberInput);

    // step-3:verify pin number
    if (pinNumberInput === '4444') {
        console.log('adding money to your account');

        // step-4:get the cuurent balance
        const balance = document.getElementById('account-balance').innerText;
        console.log(typeof balance);


        // step-5:add addMoneyInput with balance
        const moneyNumber = parseFloat(addMoneyInput);
        const balanceNumber = parseFloat(balance);
        const newBalance = moneyNumber + balanceNumber;
        console.log(newBalance);

        // step-6:update the balance in the UI/DOM
        document.getElementById('account-balance').innerText = newBalance;
    }
    else {
        console.log('Failed to account! Please try account');
    }
});