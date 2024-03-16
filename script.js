document.addEventListener('DOMContentLoaded', function() {
    // Initial data
    const initialData = [
        { country: 'Canada', capital: 'Ottawa', population: '38 Million' },
        { country: 'United States', capital: 'Washington, D.C.', population: '331 Million' },
        { country: 'Mexico', capital: 'Mexico City', population: '128 Million' }
    ];

    // Function to add a row to the table
    function addRow(data) {
        const tableBody = document.getElementById('data-table').getElementsByTagName('tbody')[0];
        const newRow = tableBody.insertRow();
        newRow.insertCell().textContent = tableBody.rows.length;
        newRow.insertCell().textContent = data.country;
        newRow.insertCell().textContent = data.capital;
        newRow.insertCell().textContent = data.population;
    }

    // Populate the table with initial data
    initialData.forEach(data => addRow(data));

    // Toggle dark mode
    document.getElementById('toggleDarkMode').onclick = function() {
        document.body.classList.toggle('dark-mode'); // Toggle the dark-mode class on the body
    };

    // Form submission
    document.getElementById('data-form').onsubmit = function(event) {
        event.preventDefault(); // Prevent form submission
        const country = document.getElementById('country').value;
        const capital = document.getElementById('capital').value;
        const population = document.getElementById('population').value;
        addRow({ country, capital, population });
        this.reset(); // Reset form fields
    };

    // Clear table functionality
    document.getElementById('clearTable').onclick = function() {
        const tableBody = document.getElementById('data-table').getElementsByTagName('tbody')[0];
        tableBody.innerHTML = ''; // Clear the table body
        // Re-populate the table with initial data
        initialData.forEach(data => addRow(data));
    };
});
