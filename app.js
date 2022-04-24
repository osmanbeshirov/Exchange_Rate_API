const amountElement = document.querySelector('#amount');

const firstSelect = document.querySelector('#from');
const secondSelect = document.querySelector('#to');

const resultField = document.querySelectorAll('#amount')[1]

const currency = new Currency('RUB', 'USD');

addEventListener();

function addEventListener() {
    amountElement.addEventListener('input', exchangeCurrency);

    firstSelect.addEventListener('click', exchangeFrom);
    secondSelect.addEventListener('click', exchangeTo);
}

function exchangeCurrency() {

    console.log(amountElement.value)

    currency.changeAmount(amountElement.value);

    currency.exchange()
        .then(result => {
            console.log(result);

            if (amountElement.value == 0) {
                resultField.value = ""
            }
            else {
                resultField.value = result;
            }
        })
    // .catch(err => console.log(err));
}

function exchangeFrom(e) {
    if (e.target.textContent == 'RUB') {
        console.log('men ruble yem');
        currency.changeFirstCurrency(e.target.textContent);

        currency.exchange()
            .then(result => {
                console.log(result);

                if (amountElement.value == 0) {
                    resultField.value = ""
                }
                else {
                    resultField.value = result;
                }
            })
            .catch(err => console.log(err));

    }
    else if (e.target.textContent == 'USD') {
        console.log('men usd yem');
        currency.changeFirstCurrency(e.target.textContent);


        currency.exchange()
            .then(result => {
                console.log(result);

                if (amountElement.value == 0) {
                    resultField.value = ""
                }
                else {
                    resultField.value = result;
                }
            })
            .catch(err => console.log(err));



    }
    else if (e.target.textContent == 'EUR') {
        console.log('men eur am');
        currency.changeFirstCurrency(e.target.textContent);





        currency.exchange()
            .then(result => {
                console.log(result);

                if (amountElement.value == 0) {
                    resultField.value = ""
                }
                else {
                    resultField.value = result;
                }
            })
            .catch(err => console.log(err));



    }
    else if (e.target.textContent == 'GBP') {
        console.log('men GBP am')
        currency.changeFirstCurrency(e.target.textContent);





        currency.exchange()
            .then(result => {
                console.log(result);

                if (amountElement.value == 0) {
                    resultField.value = ""
                }
                else {
                    resultField.value = result;
                }
            })
            .catch(err => console.log(err));


    }
}

function exchangeTo(e) {
    if (e.target.textContent == 'RUB') {
        console.log('men cevrilecek ruble yem');
        currency.changeSecondCurrency(e.target.textContent);




        currency.exchange()
            .then(result => {
                console.log(result);

                if (amountElement.value == 0) {
                    resultField.value = ""
                }
                else {
                    resultField.value = result;
                }
            })
            .catch(err => console.log(err));




    }
    else if (e.target.textContent == 'USD') {
        console.log('men cevrilecek usd yem');
        currency.changeSecondCurrency(e.target.textContent);




        currency.exchange()
            .then(result => {
                console.log(result);

                if (amountElement.value == 0) {
                    resultField.value = ""
                }
                else {
                    resultField.value = result;
                }
            })
            .catch(err => console.log(err));


    }
    else if (e.target.textContent == 'EUR') {
        console.log('men cevrilecek eur am');
        currency.changeSecondCurrency(e.target.textContent);




        currency.exchange()
            .then(result => {
                console.log(result);

                if (amountElement.value == 0) {
                    resultField.value = ""
                }
                else {
                    resultField.value = result;
                }
            })
            .catch(err => console.log(err));

    }
    else if (e.target.textContent == 'GBP') {
        console.log('men cevrilecek GBP am')
        currency.changeSecondCurrency(e.target.textContent);




        currency.exchange()
            .then(result => {
                console.log(result);

                if (amountElement.value == 0) {
                    resultField.value = ""
                }
                else {
                    resultField.value = result;
                }
            })
            .catch(err => console.log(err));


    }

}
