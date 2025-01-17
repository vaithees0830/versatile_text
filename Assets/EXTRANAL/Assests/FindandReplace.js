window.addEventListener("message", function(event) {
   
    if (event.data.type === "FindAndReplace") {
      const findText = event.data.findText;
      const replaceText = event.data.replaceText;
      const textarea = document.querySelector(".inputText");
      const currentContent = textarea.value;
      const updatedContent = currentContent.replace(new RegExp(findText, 'gi'), replaceText);
      textarea.value = updatedContent;
    }
  });

  

  