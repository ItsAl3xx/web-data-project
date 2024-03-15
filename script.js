// Toggle dark mode
document.getElementById('toggleDarkMode').onclick = function() {
    document.body.classList.toggle('dark-mode'); // Toggle the dark-mode class on the body
};

document.getElementById('data-form').onsubmit = function(event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    var data1 = document.getElementById('data1').value;
    var data2 = document.getElementById('data2').value;

    // Add new row to the table
    var table = document.getElementById('data-table').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);
    
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);

    cell1.innerHTML = table.rows.length;
    cell2.innerHTML = data1;
    cell3.innerHTML = data2;

    // Reset form
    document.getElementById('data-form').reset();
};
// Event listener for the clear button
document.getElementById('clearTable').onclick = function() {
    // Clear the table body
    var tbody = document.getElementById('data-table').getElementsByTagName('tbody')[0];
    tbody.innerHTML = '';
};