const currencies = document.querySelector('.currencies');

let buttons = document.querySelectorAll('#currencies button');





change = (e) => {

    if (e.target.textContent == 'RUB') {

        buttons.forEach((item) => {
            item.style = 'background: #fff; color: #C6C6C6'
        })
        e.target.style = "background: #833AE0; color: #fff";

    }

    else if (e.target.textContent == 'USD') {

        buttons.forEach((item) => {
            item.style = 'background: #fff; color: #C6C6C6'
        })

        e.target.style = "background: #833AE0; color: #fff";

    }
    else if (e.target.textContent == 'EUR') {

        buttons.forEach((item) => {
            item.style = 'background: #fff; color: #C6C6C6'
        })

        e.target.style = "background: #833AE0; color: #fff";
    }

    else if (e.target.textContent == 'GBP') {

        buttons.forEach((item) => {
            item.style = 'background: #fff; color: #C6C6C6'
        })

        e.target.style = "background: #833AE0; color: #fff";
    }
}

currencies.addEventListener('click', change);

