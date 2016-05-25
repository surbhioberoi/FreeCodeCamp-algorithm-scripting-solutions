function telephoneCheck(str) {
    var phone = /^1? ?(\d{3}|\(\d{3}\))[ -]?\d{3}[ -]?\d{4}$/;
    return phone.test(str);
}


telephoneCheck("555-555-5555");
