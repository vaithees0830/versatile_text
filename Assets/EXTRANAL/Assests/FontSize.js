window.addEventListener("message", function(event) {
if (event.data.type === "ChangeFontSize") {
      const fontSize = event.data.fontSize;
      document.querySelector(".inputText").style.fontSize = fontSize + 'px';
    }
  });