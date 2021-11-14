const HU = {
    date(date) {
        return (Intl.DateTimeFormat('hu-HU').format(date));
    },
    currency(amount) {
        let huCurrency = Intl.NumberFormat('hu-HU', { style: 'currency', currency: 'HUF' })
        return huCurrency.format(amount);
    },
    curreny(amount) {
        let huCurrency = Intl.NumberFormat('hu-HU', { style: 'currency', currency: 'HUF' })
        return huCurrency.format(amount);
    },
    list(arr) {
        let result = "";
        for (const [i, value] of arr.entries()) {
            if (i === 0) {
                result += `${value}`;
            } else if (i === arr.length - 1) {
                result += ` és ${value}`;
            } else {
                result += `, ${value}`;
            }
        }

        return result;

    }
}

export default HU