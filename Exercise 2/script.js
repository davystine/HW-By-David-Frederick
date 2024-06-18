// Run the following code when the document is fully loaded
$(document).ready(function() {
    // Attach a click event handler to each element with the class 'color-box'
    $('.color-box').click(function() {
        // Call the chooseColor function with the data-color attribute of the clicked box
        chooseColor($(this).data('color'));
    });
});

// Function to handle color choice
function chooseColor(color) {
    // Set the text and color of the message
    $('#message').html('Hello world!').css('color', color);

    // Append the chosen color to the history list
    const historyList = $('#history');
    const listItem = $('<li>').text(color);
    historyList.append(listItem);
}
