function removeCharacter() {
    // Get a reference to the select element
    var select = document.getElementsByClassName("form-select");

    // Get a reference to the option you want to modify
    var optionToModify = select.querySelector('option');

    // Remove the '^' character from the option's text
    optionToModify.textContent = optionToModify.textContent.replace("^", "");

    // Optionally, you can update the value attribute as well
    optionToModify.value = optionToModify.value.replace("^", "");