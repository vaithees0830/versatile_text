function copyToClipboard() {
    var textarea = document.querySelector(".inputText");

    textarea.select();
    document.execCommand("copy");

    textarea.selectionStart = 0;
    textarea.selectionEnd = 0;
}

function clearAndInsertText() {
    var textarea = document.querySelector(".inputText");

    if (textarea) {
        textarea.value = '';
    } else {
        console.error("Textarea element not found!");
    }
}

