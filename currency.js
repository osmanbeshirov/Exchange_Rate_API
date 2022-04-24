class Currency {
    constructor(firstCurrency, secondCurrency) {
        this.firstCurrency = firstCurrency;
        this.secondCurrency = secondCurrency;
        this.url = `https://api.exchangerate.host/latest?base=`;

        this.amount = null;
    }

    exchange() {

        if (this.firstCurrency == this.secondCurrency) {

            const div = document.createElement('div');
            div.textContent = "Eyni valyutanı bir-birinə çevirməyinizə ehtiyac yoxdur..."
            div.className = 'alert alert-danger';
            div.style.display = 'block'

            const section = document.querySelector('.main');

            section.append(div);

            setTimeout(() => {
                div.style.display = 'none'
            }, 1000);

            amountElement.value = '';
            console.log(section)

        }

        return new Promise((resolve, reject) => {

            fetch(this.url + this.firstCurrency)
                .then(res => res.json())
                .then(data => {
                    const rate = (data.rates[this.secondCurrency]);

                    console.log(data)

                    const newAmount = Number(this.amount);

                    let result = (rate * newAmount).toFixed(4);

                    // console.log(data);

                    let fromRate = document.querySelector('#fromRate');
                    let toRate = document.querySelector('#toRate');
                    fromRate.textContent = `1 ${this.firstCurrency} = ${(rate).toFixed(4)} ${this.secondCurrency}`;

                    toRate.textContent = `1 ${this.secondCurrency} = ${(1 / rate).toFixed(4)} ${this.firstCurrency}`

                    resolve(result);
                })
                .catch(err => reject(err))
        })

    }

    changeAmount(amount) {
        this.amount = amount;
    }

    changeFirstCurrency(fromCurrency) {
        this.firstCurrency = fromCurrency;
    }

    changeSecondCurrency(toCurrency) {
        this.secondCurrency = toCurrency;
    }
}