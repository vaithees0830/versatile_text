function findAndReplace() {
    const myIframe = document.getElementById("myIframe");

    if (myIframe) {
      const iframeWindow = myIframe.contentWindow;

      // Check if the iframe content has been loaded
      if (iframeWindow) {
        // Get find and replace text
        const findText = document.getElementById("findInput").value;
        const replaceText = document.getElementById("replaceInput").value;

        // Use postMessage to communicate with the iframe
        iframeWindow.postMessage({ type: "FindAndReplace", findText, replaceText }, "*");
      } else {
        console.error("Iframe content not loaded yet");
      }
    } else {
      console.error("Iframe not found");
    }
}




  function changeFontSize(size) {
      document.getElementById('fontSizeValue').innerText = size;
      const myIframe = document.getElementById("myIframe");

      if (myIframe) {
        const iframeWindow = myIframe.contentWindow;

        // Check if the iframe content has been loaded
        if (iframeWindow) {
          // Use postMessage to communicate with the iframe
          iframeWindow.postMessage({ type: "ChangeFontSize", fontSize: size }, "*");
        } else {
          console.error("Iframe content not loaded yet");
        }
      } else {
        console.error("Iframe not found");
      }
    }

    function changeWordSpacing(spacing) {
      document.getElementById('wordSpacingValue').innerText = spacing;
      const myIframe = document.getElementById("myIframe");
    
      if (myIframe) {
        const iframeWindow = myIframe.contentWindow;
    
        if (iframeWindow) {
          iframeWindow.postMessage({ type: "ChangeWordSpacing", wordSpacing: spacing }, "*");
        } else {
          console.error("Iframe content not loaded yet");
        }
      } else {
        console.error("Iframe not found");
      }
    }
    
    function changeFontFamily() {
      const myIframe = document.getElementById("myIframe");

      // Check if the iframe element is found
      if (myIframe) {
          const fontFamilies = ['Arial', 'Courier New', 'Georgia', 'Times New Roman', 'Verdana'];

          // Get a random font family from the array
          const randomFontFamily = fontFamilies[Math.floor(Math.random() * fontFamilies.length)];

          // Change the font family of the main window
          myIframe.style.fontFamily = randomFontFamily;

          const iframeWindow = myIframe.contentWindow;

          // Check if the iframe content has been loaded
          if (iframeWindow) {
              // Use postMessage to communicate with the iframe
              iframeWindow.postMessage({ type: "ChangeFontFamily", fontFamily: randomFontFamily }, "*");
          } else {
              console.error("Iframe content not loaded yet");
          }
      } else {
          console.error("Iframe not found");
      }
  }

  document.addEventListener('DOMContentLoaded', function() {
    const faviconElement = document.getElementById('favicon');
    const image = new Image();
    image.crossOrigin = "Anonymous"; // Handle CORS issue if favicon is on a different domain
    image.src = faviconElement.href;

    image.onload = function() {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');

        // Set canvas dimensions to match the image
        canvas.width = image.width;
        canvas.height = image.height;

        // Draw the image onto the canvas, then reverse it
        context.translate(canvas.width, 0);
        context.scale(-1, 1);
        context.drawImage(image, 0, 0);

        // Get the reversed image as a data URL
        const reversedFaviconURL = canvas.toDataURL('image/png');

        // Update the favicon with the reversed image
        faviconElement.href = reversedFaviconURL;
        console.log("Reversed favicon URL:", reversedFaviconURL); // Debugging line to check the URL
    };

    image.onerror = function() {
        console.error("Failed to load the image.");
    };
});