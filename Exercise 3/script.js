// Initialize an array to store names
let names = [];

// Run the following code when the document is fully loaded
$(document).ready(function() {
    // Attach a click event handler to the button with id 'addNameBtn'
    $('#addNameBtn').click(addName);
});

// Function to handle adding a name
function addName() {
    // Get the input value and trim whitespace
    const nameInput = $('#name');
    const name = nameInput.val().trim();
    if (name) {
        // Add the name to the array and sort it
        names.push(name);
        names.sort();
        // Display the updated list of names
        displayNames();
        // Clear the input field
        nameInput.val('');
    }
}

// Function to display the list of names
function displayNames() {
    const namesList = $('#names');
    namesList.empty(); // Clear the existing list
    // Create a list item for each name and append it to the list
    names.forEach(function(name) {
        const listItem = $('<li>').text(name);
        namesList.append(listItem);
    });
}
