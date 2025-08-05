function generateInvoiceNumber() {
    return 'INV-' + Math.floor(Math.random() * 1000000);
}

function getCurrentDateTime() {
    const currentDate = new Date();
    const date = currentDate.toLocaleDateString();
    const time = currentDate.toLocaleTimeString();
    return { date, time };
}

function updateInvoiceDetails() {
    const { date, time } = getCurrentDateTime();
    const invoiceNumber = generateInvoiceNumber();

    document.getElementById('date').textContent = date;
    document.getElementById('time').textContent = time;
    document.getElementById('invoicenumber').textContent = invoiceNumber;
}

document.addEventListener('DOMContentLoaded', updateInvoiceDetails);


let totalAmount=0;
function addProduct(){
    const name=document.getElementById("productName").value;
    const price = parseFloat(document.getElementById("productPrice").value)
    const quantity= parseInt(document.getElementById("productQuantity").value)


    if(!name|| isNaN(price)|| isNaN(quantity)){
        alert("Please fill All Fields Correctly");
        return;
    }

    const total=price*quantity;
    totalAmount+=total;


    const tableBody=document.getElementById("billTableBody");
    const row=document.createElement("tr");

    row.innerHTML = `<td>${name}</td>
    <td>${price.toFixed(2)}</td>
    <td>${quantity}</td>
    <td>${total.toFixed(2)}</td>
    <td><button class = "remove-btn" onclick="removeProduct(this,${total})">REMOVE</button></td>
    `;

    tableBody.appendChild(row);
    updateTotal();

    document.getElementById("productName").value="";
    document.getElementById("productPrice").value="";
    document.getElementById("productQuantity").value="";
}
function updateTotal(){
    document.getElementById("totalAmount").innerText= `Total:${totalAmount.toFixed(2)}`;
}
function removeProduct(button,productTotal){
    const row= button.parentElement.parentElement;
    row.remove();
    totalAmount-=productTotal;
    updateTotal();
}
function PrintBill(){
    window.print();
}