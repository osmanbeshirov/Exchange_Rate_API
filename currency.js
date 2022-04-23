class Currency {
    constructor(firstCurrency, secondCurrency) {
        this.firstCurrency = firstCurrency;
        this.secondCurrency = secondCurrency;
        this.url = `https://api.exchangerate.host/latest?base=`;

        this.amount = null;
    }

    exchange() {

        return new Promise((resolve, reject) => {

            fetch(this.url + this.firstCurrency)
                .then(res => res.json())
                .then(data => {
                    const rate = data.rates[this.secondCurrency];

                    console.log(data)

                    const newAmount = Number(this.amount);

                    let result = rate * newAmount;

                    // console.log(data);

                    let fromRate = document.querySelector('#fromRate');
                    let toRate = document.querySelector('#toRate');
                    fromRate.textContent = `1 ${this.firstCurrency} = ${rate} ${this.secondCurrency}`;

                    toRate.textContent = `1 ${this.secondCurrency} = ${1/rate} ${this.firstCurrency}`

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