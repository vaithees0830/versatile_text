window.addEventListener("message", function(event) {
    // Check the received message type
      // Update the content of the textarea with the replaced text
if (event.data.type === "ChangeFontSize") {
      // Get the font size from the event data
      const fontSize = event.data.fontSize;

      // Change the font size of the textarea inside the iframe
      document.querySelector(".inputText").style.fontSize = fontSize + 'px';
    }
  });