function findAndReplace() {
    const myIframe = document.getElementById("myIframe");

    if (myIframe) {
      const iframeWindow = myIframe.contentWindow;

      if (iframeWindow) {

        const findText = document.getElementById("findInput").value;
        const replaceText = document.getElementById("replaceInput").value;

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

        if (iframeWindow) {
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

      if (myIframe) {
          const fontFamilies = ['Arial', 'Courier New', 'Georgia', 'Times New Roman', 'Verdana'];

          const randomFontFamily = fontFamilies[Math.floor(Math.random() * fontFamilies.length)];

          myIframe.style.fontFamily = randomFontFamily;

          const iframeWindow = myIframe.contentWindow;

          if (iframeWindow) {
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
    image.crossOrigin = "Anonymous";
    image.src = faviconElement.href;

    image.onload = function() {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');

        canvas.width = image.width;
        canvas.height = image.height;

        context.translate(canvas.width, 0);
        context.scale(-1, 1);
        context.drawImage(image, 0, 0);

        const reversedFaviconURL = canvas.toDataURL('image/png');

        faviconElement.href = reversedFaviconURL;
        console.log("Reversed favicon URL:", reversedFaviconURL); 
    };

    image.onerror = function() {
        console.error("Failed to load the image.");
    };
});