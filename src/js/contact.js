const emailRegexp = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

const inputEl = document.querySelector('#email');
console.log(inputEl)
function validateEmail(value) {
    return  emailRegexp.test(value);
}

function updateInput() {
    if (validateEmail(inputEl.value)) {
        inputEl.style.borderColor = 'green';
    } else {
        inputEl.style.borderColor = 'red';
    }
       
}

inputEl.addEventListener('input', updateInput);