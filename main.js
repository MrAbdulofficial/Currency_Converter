const exchangeRates = {
    USD: { EUR: 0.85, INR: 74.57, GBP: 0.75 },
    EUR: { USD: 1.18, INR: 88.04, GBP: 0.88 },
    INR: { USD: 0.013, EUR: 0.011, GBP: 0.010 },
    GBP: { USD: 1.33, EUR: 1.14, INR: 100.11 }
};

document.getElementById('convertBtn').addEventListener('click', () => {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    if (isNaN(amount)) {
        document.getElementById('result').innerText = 'Please enter a valid amount';
        return;
    }

    const conversionRate = exchangeRates[fromCurrency][toCurrency];
    const convertedAmount = amount * conversionRate;

    document.getElementById('result').innerText = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
});