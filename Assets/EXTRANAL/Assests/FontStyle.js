window.addEventListener("message", function (event) {
    if (event.data.type === "ChangeFontFamily") {
        const fontFamily = event.data.fontFamily;
  
        const iframeTextarea = document.querySelector(".inputText");
  
        if (iframeTextarea) {
            iframeTextarea.style.fontFamily = fontFamily;
        } else {
            console.error("Textarea inside iframe not found");
        }
    }
  });