window.addEventListener("message", function(event) {
    const textarea = document.querySelector(".inputText");

function applyWordSpacing(spacing) {
  textarea.style.wordSpacing = spacing === 5 ? "5px" : "normal";
}
if (event.data.type === "ChangeWordSpacing") {
    const spacing = event.data.wordSpacing;
    applyWordSpacing(spacing);
  } else {
    spacing = event.data.wordSpacing = 'normal';
  }

});