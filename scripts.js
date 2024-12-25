function generateInvoice() {
    const customerName = document.getElementById('customerName').value;
    const customerAddress = document.getElementById('customerAddress').value;
    const itemDescription = document.getElementById('itemDescription').value;
    const quantity = parseInt(document.getElementById('quantity').value);
    const pricePerUnit = parseFloat(document.getElementById('pricePerUnit').value);
    const taxRate = parseFloat(document.getElementById('taxRate').value);

    const total = quantity * pricePerUnit;
    const tax = (total * taxRate) / 100;
    const grandTotal = total + tax;

    document.getElementById('invoiceCustomerName').textContent = customerName;
    document.getElementById('invoiceCustomerAddress').textContent = customerAddress;
    document.getElementById('invoiceItemDescription').textContent = itemDescription;
    document.getElementById('invoiceQuantity').textContent = quantity;
    document.getElementById('invoicePricePerUnit').textContent = `$${pricePerUnit.toFixed(2)}`;
    document.getElementById('invoiceTaxRate').textContent = `${taxRate}%`;
    document.getElementById('invoiceTotal').textContent = `$${total.toFixed(2)}`;
    document.getElementById('grandTotal').textContent = grandTotal.toFixed(2);

    document.getElementById('invoiceContainer').style.display = 'block';
}

function downloadInvoice() {
    const invoice = document.querySelector('.invoice').innerHTML;
    const blob = new Blob([invoice], { type: 'text/html' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'invoice.html';
    link.click();
}