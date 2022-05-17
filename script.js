window.start_loader = function () {
    const loader = document.getElementById('loader-holder')
    loader.style.display = 'flex';
}
window.end_loader = function () {
    const loader = document.getElementById('loader-holder')
    loader.style.display = 'none';
}

window.onload = function () {
    setTimeout(() => {
        end_loader()
    }, 500)

    const loanForm = document.getElementById('calculate-loan-form')
    loanForm.addEventListener('submit', function (e) {
        e.preventDefault()
        start_loader();
        const total_Of_Units = document.getElementById('number_Units').value;
        const interest = document.getElementById('vat').value;
        const daysOfBill = document.getElementById('days_for_bill').value;
        const electriRatefinal = document.getElementById('electriRate').value;
        var monthly = 0,
            pmt = 0,
            total = 0,
            totalInterest = 0,
            monthlyInterest = 0;
        monthlyInterest = (parseFloat(total_Of_Units) * (parseFloat(interest) / 100)) / 12;
        pmt = parseFloat(monthlyInterest) / (1 - Math.pow(1 + ((parseFloat(interest) / 100) / 12), -12 * parseFloat(daysOfBill)));
        total = parseFloat(pmt) * Math.floor(parseFloat(daysOfBill) * 12);
        totalInterest = parseFloat(total) - parseFloat(total_Of_Units);
        setTimeout(() => {
            document.getElementById('total_Of_Units').textContent = parseFloat(total_Of_Units).toLocaleString("en-US", { style: "decimal", maximumFractionDigits: 2 })
            document.getElementById('annual-interest').textContent = parseFloat(interest).toLocaleString("en-US", { style: "decimal", maximumFractionDigits: 2 }) + "%";
            document.getElementById('bill_period_days').textContent = parseFloat(daysOfBill).toLocaleString("en-US", { style: "decimal", maximumFractionDigits: 2 });
            document.getElementById('electriRateFinal').textContent = parseFloat(electriRatefinal).toLocaleString("en-US", { style: "decimal", maximumFractionDigits: 2 });
            document.getElementById('total-pay').textContent = parseFloat(total).toLocaleString("en-US", { style: "decimal", maximumFractionDigits: 2 });
            document.getElementById('total-interest').textContent = parseFloat(totalInterest).toLocaleString("en-US", { style: "decimal", maximumFractionDigits: 2 });
            document.getElementById('result').style.display = 'table';
            document.getElementById('reset-btn').style.display = 'block';
            end_loader()
        }, 500)

    })
    loanForm.addEventListener('reset', function (e) {
        start_loader();
        setTimeout(() => {
            document.getElementById('total_Of_Units').textContent = ""
            document.getElementById('annual-interest').textContent = ""
            document.getElementById('bill_period_days').textContent = ""
            document.getElementById('electriRateFinal').textContent = ""
            document.getElementById('total-pay').textContent = ""
            document.getElementById('total-interest').textContent = ""
            document.getElementById('result').style.display = 'none';
            document.getElementById('reset-btn').style.display = 'none';
            end_loader()
        }, 500)
    })
}

