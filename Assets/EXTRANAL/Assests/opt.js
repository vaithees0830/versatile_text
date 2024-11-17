function copyToClipboard() {
    // Select the textarea
    var textarea = document.querySelector(".inputText");

    // Copy the text inside the textarea to the clipboard
    textarea.select();
    document.execCommand("copy");

    // Deselect the textarea (optional)
    textarea.selectionStart = 0;
    textarea.selectionEnd = 0;
}

function clearAndInsertText() {
    // Select the textarea
    var textarea = document.querySelector(".inputText");

    // Check if the textarea element exists
    if (textarea) {
        // Clear the content of the textarea
        textarea.value = '';
    } else {
        console.error("Textarea element not found!");
    }
}

