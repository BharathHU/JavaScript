function calculateTip() {

    let billAmount = parseFloat(document.getElementById("billAmount").value);

    let tipPercentage = parseFloat(document.getElementById("tipPercentage").value);

    let discountPercentage = parseFloat(document.getElementById("discountPercentage").value);

    if (isNaN(billAmount) || isNaN(tipPercentage) || isNaN(discountPercentage)) {
        alert("Please enter all values");
        return;
    }

    let tipAmount = (billAmount * tipPercentage) / 100;

    let discountAmount = (billAmount * discountPercentage) / 100;

    let totalBill = billAmount + tipAmount - discountAmount;

    document.getElementById("tipAmount").innerText = tipAmount.toFixed(2);

    document.getElementById("discountAmount").innerText = discountAmount.toFixed(2);

    document.getElementById("totalBill").innerText = totalBill.toFixed(2);
}