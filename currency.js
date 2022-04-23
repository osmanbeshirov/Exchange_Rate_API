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

                    const newAmount = Number(this.amount);

                    let result = rate * newAmount;

                    // console.log(data);

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