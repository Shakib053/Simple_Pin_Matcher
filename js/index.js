//4 digit pin generator function
function getPin() {
    const pin = parseInt(Math.random() * 10000);
    const pin_string = pin + "";
    if (pin_string.length != 4)
        return getPin();
    else
        return pin_string;
}
// generate pin button
document.getElementById("generate-pin").addEventListener('click', function () {

    // console.log(getPin());
    document.getElementById('pin-input').value = getPin();
})

// match the typed number with the pin
document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const typed_number = document.getElementById('typed-number');
    if (isNaN(number) == false) {
        const previous_number = typed_number.value;
        typed_number.value = previous_number + number;
    }
    else {
        if (number == 'C') {
            typed_number.value = '';
        }
    }

});

// take the generated number and the typed number to match

function verifyPin() {

    const input = document.getElementById('pin-input').value;
    const typed = document.getElementById('typed-number').value;
    const success_message = document.getElementById('success');
    const failure_message = document.getElementById('failure');
    if (input == typed) {
        // console.log('milse to dekha jai');
        success_message.style.display = 'block';
        failure_message.style.display = 'none';
    }
    else {
        failure_message.style.display = 'block';
        success_message.style.display = 'none';
    }
}