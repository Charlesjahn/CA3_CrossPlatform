//two functions starting and endding
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
    }, 500)//if we couldnt get response, set the paramater as 300

    const loanForm = document.getElementById('calculate-Bill-form')
    loanForm.addEventListener('submit', function (e) {
        e.preventDefault()//if users don't type some on files which was requested on result, will remind users
        start_loader();    //will call the method
        const totalUnits = document.getElementById('number_Units').value;
        const interest = document.getElementById('electriRate').value;
        const daysOfBill = document.getElementById('days_for_bill').value;
        const vatRate = document.getElementById('vat').value;
        
        var total = 0,   //total without vat
            totalWvat= 0;//total with vat

        total = ((parseFloat(totalUnits)) * ((parseFloat(interest)))) + ((parseFloat(daysOfBill)) * 0.04);
        totalWvat = (total * (parseFloat(vatRate) / 100)) + total;

        setTimeout(() => {
            document.getElementById('total_Of_Units').textContent = parseFloat(totalUnits).toLocaleString("en-US", { style: "decimal", maximumFractionDigits: 2 })
            document.getElementById('VAT').textContent = parseFloat(vatRate).toLocaleString("en-US", { style: "decimal", maximumFractionDigits: 2 }) + "%";
            document.getElementById('bill_period_days').textContent = parseFloat(daysOfBill).toLocaleString("en-US", { style: "decimal", maximumFractionDigits: 2 });
            document.getElementById('TotalwithVat').textContent = parseFloat(totalWvat).toLocaleString("en-US", { style: "decimal", maximumFractionDigits: 2 });
            document.getElementById('total-pay').textContent = parseFloat(total).toLocaleString("en-US", { style: "decimal", maximumFractionDigits: 2 });
            //document.getElementById('vat cost').textContent = parseFloat(totalInterest).toLocaleString("en-US", { style: "decimal", maximumFractionDigits: 2 });
            document.getElementById('result').style.display = 'table';
            document.getElementById('reset-btn').style.display = 'block';
            end_loader()
        }, 500)

    })
    loanForm.addEventListener('reset', function (e) {
        start_loader();
        setTimeout(() => {
            document.getElementById('total_Of_Units').textContent = ""
            document.getElementById('VAT').textContent = ""
            document.getElementById('bill_period_days').textContent = ""
            document.getElementById('TotalwithVat').textContent = ""
            document.getElementById('total-pay').textContent = ""

            document.getElementById('result').style.display = 'none';
            document.getElementById('reset-btn').style.display = 'none';
            end_loader()
        }, 500)
    })
}

