window.addEventListener("message", function (event) {
    // Check the received message type
    if (event.data.type === "ChangeFontFamily") {
        // Get the font family from the event data
        const fontFamily = event.data.fontFamily;
  
        // Change the font family of the textarea inside the iframe
        const iframeTextarea = document.querySelector(".inputText");
  
        if (iframeTextarea) {
            iframeTextarea.style.fontFamily = fontFamily;
        } else {
            console.error("Textarea inside iframe not found");
        }
    }
  });