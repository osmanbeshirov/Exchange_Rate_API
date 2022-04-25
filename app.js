const amountElement = document.querySelector('#amount');

const firstSelect = document.querySelector('#from');
const secondSelect = document.querySelector('#to');

const resultField = document.querySelectorAll('#amount')[1]

const currency = new Currency('RUB', 'USD');

addEventListener();

function addEventListener() {
    document.addEventListener('DOMContentLoaded', () => {
        fetch('https://api.exchangerate.host/latest?base=RUB')
            .then((res) => res.json())
            .then((data) => {
                fromRate.textContent = `1 RUB = ${(data.rates['USD']).toFixed(4)} USD`;
                toRate.textContent = `1 USD = ${(1 / (data.rates['USD'])).toFixed(4)} RUB`
            })
            .catch((err) => console.log(err))
    })
    amountElement.addEventListener('input', exchangeCurrency);
    firstSelect.addEventListener('click', exchangeFrom);
    secondSelect.addEventListener('click', exchangeTo);
}



function exchangeCurrency() {

    amountElement.value = amountElement.value.replace(/ /g, '');

    if (isNaN(amountElement.value)) {
        currency.alert('Yalnız rəqəm tipli dəyərlər daxil edə bilərsiniz...');
        amountElement.value = '';
        resultField.value = '';
    }

    else {
        let yeni = Number(amountElement.value).toLocaleString().replace(/,/g, ' ');
        
        let gonderilen = yeni.replace(/ /g, '');

        // console.log(`men gonderilen deyerem ${gonderilen}`)
        // console.log(`inputa gedecek olan ${yeni}`)

        // console.log(`hal hazirda metoda gonderilen ${amountElement.value}`)

        amountElement.value = yeni;

        currency.changeAmount(gonderilen);


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
