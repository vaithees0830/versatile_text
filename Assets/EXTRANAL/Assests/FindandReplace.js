window.addEventListener("message", function(event) {
    // Check the received message type
    if (event.data.type === "FindAndReplace") {
      // Get the find and replace text
      const findText = event.data.findText;
      const replaceText = event.data.replaceText;

      // Get the textarea element
      const textarea = document.querySelector(".inputText");

      // Get the current content of the textarea
      const currentContent = textarea.value;

      // Use a regular expression with the 'g' flag for global search and replace
      const updatedContent = currentContent.replace(new RegExp(findText, 'gi'), replaceText);

      // Update the content of the textarea with the replaced text
      textarea.value = updatedContent;
    }
  });

  

  