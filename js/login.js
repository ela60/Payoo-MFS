
// step-1 set event handler
document.getElementById('button-login').addEventListener('click', function (event) {
    // step 2: prevent default behaviour(prevent reloading browser)
    event.preventDefault();
    console.log('logined');

    // step 3:get the phone number
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    console.log(phoneNumber, pinNumber);
    
    // step-4:validate phone  and pin
    if (phoneNumber === '84' && pinNumber === '123') {
        console.log('you are logged in');
        window.location.href='../home.html'
    }
    else {
        console.log('you type wrong number');
    }
})