const form = document.getElementById('main-form');
const mailingInfo = document.getElementsByName('mailing-info');


const nameField = document.getElementById('name');
const nameError = document.getElementById('username_error');
const nameRegex = /^[a-zA-Z\s]+$/;
const nameErrorMessage = 'Please enter a valid name (letters and spaces only).';


const emailField = document.getElementById('email');
const emailError = document.getElementById('email_error');
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const emailErrorMessage = 'Please enter a valid email address.';


const locationField = document.getElementById('location');
const locationError = document.getElementById('location_error');
const locationRegex = /^[a-zA-Z0-9\s,-]+$/;
const locationErrorMessage = 'Please enter a valid location.';


const cityField = document.getElementById('city');
const cityError = document.getElementById('city_error');
const cityRegex = /^[a-zA-Z\s]+$/;
const cityErrorMessage = 'Please enter a valid city (letters and spaces only).';


const stateField = document.getElementById('state');
const stateError = document.getElementById('state_error');
const stateRegex = /^[a-zA-Z\s]+$/;
const stateErrorMessage = 'Please enter a valid state (letters and spaces only).';

const countryField = document.getElementById('country');
const countryError = document.getElementById('country_error');
const countryErrorMessage = 'Please select a country.';


const mailingInfoError = document.getElementById('yesno_error');
const mailingInfoErrorMessage = 'Please select Yes or No.';


form.addEventListener('submit', function (e) {
    let valid = true;

  
    nameError.innerHTML = '';
    emailError.innerHTML = '';
    locationError.innerHTML = '';
    cityError.innerHTML = '';
    stateError.innerHTML = '';
    countryError.innerHTML = '';
    mailingInfoError.innerHTML = '';


    if (!nameField.value.trim() || !nameRegex.test(nameField.value.trim())) {
        valid = false;
        nameError.innerHTML = nameErrorMessage;
    }


    if (!emailField.value.trim() || !emailRegex.test(emailField.value.trim())) {
        valid = false;
        emailError.innerHTML = emailErrorMessage;
    }

 
    if (!locationField.value.trim() || !locationRegex.test(locationField.value.trim())) {
        valid = false;
        locationError.innerHTML = locationErrorMessage;
    }


    if (!cityField.value.trim() || !cityRegex.test(cityField.value.trim())) {
        valid = false;
        cityError.innerHTML = cityErrorMessage;
    }


    if (!stateField.value.trim() || !stateRegex.test(stateField.value.trim())) {
        valid = false;
        stateError.innerHTML = stateErrorMessage;
    }


    if (!countryField.value) {
        valid = false;
        countryError.innerHTML = countryErrorMessage;
    }


    if (![mailingInfo].some(radio => radio.checked)) {
        valid = false;
        mailingInfoError.innerHTML = mailingInfoErrorMessage;
    }

    if (!valid) {
        e.preventDefault();
        // alert("Form has invalid inputs. Please check the fields.");
    }
});
