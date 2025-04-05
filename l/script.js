function calculateEMI() {
    let loanAmount = parseFloat(document.getElementById("loanAmount").value);
    let interestRate = parseFloat(document.getElementById("interestRate").value) / 100 / 12;
    let months = parseInt(document.getElementById("months").value);

    if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(months) || loanAmount <= 0 || interestRate < 0 || months <= 0) {
        alert("Please enter valid values");
        return;
    }

    let emi = (loanAmount * interestRate * Math.pow(1 + interestRate, months)) / (Math.pow(1 + interestRate, months) - 1);
    let totalInterest = (emi * months) - loanAmount;

    document.getElementById("emiResult").innerText = emi.toFixed(2);
    document.getElementById("totalInterest").innerText = totalInterest.toFixed(2);
}
