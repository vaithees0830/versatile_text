const fileSelector = document.querySelector('#uploadIMAGE')
const start = document.querySelector('#run')
const img = document.querySelector('#image')
const progress = document.querySelector('.progress')
const textarea = document.querySelector('#txtArea')

fileSelector.onchange = () => {
    var file = fileSelector.files[0]
    var imgUrl = window.URL.createObjectURL(new Blob([file], { type: 'image/jpg' }))
    img.src = imgUrl
}

start.onclick = () => {
    textarea.innerHTML = '';
    const rec = new Tesseract.TesseractWorker();
    rec.recognize(fileSelector.files[0])
        .progress(function (response) {
            if(response.status == 'recognizing text'){
                progress.style.backgroundImage = "url('./../IMAGE/loading.gif')";
                progress.style.backgroundRepeat = "no-repeat";
                progress.style.backgroundPosition = "center";
                progress.style.backgroundSize = "1.5pc";
                progress.style.display = "flex";
                progress.style.justifyContent = "center";
                progress.style.alignItems = "center";
                progress.style.width = "30px";
                progress.style.height = "30px";
                progress.style.borderRadius = "15px";
                progress.style.textAlgin = "center";

            }
        })
        .then(function (data) {
            textarea.innerHTML = data.text
            progress.innerHTML = "DONE";
            progress.style.padding = "0";
            progress.style.backgroundImage = "";
        })
}



let currentUtterance;
let isPlaying = false;

function toggleSpeech() {
    const inputText = document.getElementById('txtArea').value;
    const outputSpeech = document.getElementById('outputSpeech');
    const playPauseButton = document.getElementById('playPauseButton');

    if (isPlaying) {
        if (currentUtterance) {
            window.speechSynthesis.cancel();
            currentUtterance = null;
        }
        playPauseButton.innerHTML = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.8876 9.9348C14.9625 10.8117 15.5 11.2501 15.5 12C15.5 12.7499 14.9625 13.1883 13.8876 14.0652C13.5909 14.3073 13.2966 14.5352 13.0261 14.7251C12.7888 14.8917 12.5201 15.064 12.2419 15.2332C11.1695 15.8853 10.6333 16.2114 10.1524 15.8504C9.6715 15.4894 9.62779 14.7336 9.54038 13.2222C9.51566 12.7947 9.5 12.3757 9.5 12C9.5 11.6243 9.51566 11.2053 9.54038 10.7778C9.62779 9.26636 9.6715 8.51061 10.1524 8.1496C10.6333 7.78859 11.1695 8.11466 12.2419 8.76679C12.5201 8.93597 12.7888 9.10831 13.0261 9.27492C13.2966 9.46483 13.5909 9.69274 13.8876 9.9348Z" stroke="#252525" stroke-width="1.5"/><path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke="#252525" stroke-width="1.5" stroke-linecap="round"/></svg>'; // Replace with the appropriate SVG for play
        isPlaying = false;

        outputSpeech.innerHTML = '';
    } else {
        if (inputText) {
            speakText(inputText);
            playPauseButton.innerHTML = '<svg fill="var(--fColor--)" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M896 512c0-212.077-171.921-384-384-384-212.077 0-384 171.923-384 384 0 212.079 171.923 384 384 384 212.079 0 384-171.921 384-384zM579.883 398.863c12.497-12.497 32.759-12.497 45.257 0 12.493 12.497 12.493 32.757 0 45.254L557.257 512l67.878 67.883c12.497 12.497 12.497 32.759 0 45.257-12.493 12.493-32.755 12.493-45.252 0L512 557.257l-67.883 67.883c-12.497 12.493-32.757 12.493-45.254 0-12.497-12.497-12.497-32.759 0-45.257L466.744 512l-67.881-67.883c-12.497-12.497-12.497-32.758 0-45.254s32.757-12.497 45.254 0L512 466.744l67.883-67.881z"/></svg>'; // Replace with the appropriate SVG for pause
            isPlaying = true;
        }
    }
} 

function speakText(text) {
    const outputSpeech = document.getElementById('outputSpeech');
    outputSpeech.innerHTML = '';

    const speechSynthesis = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);

    utterance.addEventListener('boundary', (event) => {
        const currentWord = event.currentTarget.text.substring(event.charIndex, event.charIndex + event.charLength);
        const span = document.createElement('span');
        span.textContent = currentWord + ' ';
        outputSpeech.appendChild(span);
    });

    speechSynthesis.speak(utterance);
    currentUtterance = utterance;

    utterance.addEventListener('end', () => {
        const playPauseButton = document.getElementById('playPauseButton');
        playPauseButton.innerHTML = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.8876 9.9348C14.9625 10.8117 15.5 11.2501 15.5 12C15.5 12.7499 14.9625 13.1883 13.8876 14.0652C13.5909 14.3073 13.2966 14.5352 13.0261 14.7251C12.7888 14.8917 12.5201 15.064 12.2419 15.2332C11.1695 15.8853 10.6333 16.2114 10.1524 15.8504C9.6715 15.4894 9.62779 14.7336 9.54038 13.2222C9.51566 12.7947 9.5 12.3757 9.5 12C9.5 11.6243 9.51566 11.2053 9.54038 10.7778C9.62779 9.26636 9.6715 8.51061 10.1524 8.1496C10.6333 7.78859 11.1695 8.11466 12.2419 8.76679C12.5201 8.93597 12.7888 9.10831 13.0261 9.27492C13.2966 9.46483 13.5909 9.69274 13.8876 9.9348Z" stroke="#252525" stroke-width="1.5"/><path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke="#252525" stroke-width="1.5" stroke-linecap="round"/></svg>'; // Replace with the appropriate SVG for play
        isPlaying = false;
    });
}

let download = document.querySelector(".download");
let txtDownloader = document.querySelector(".txtDownloader");


function downloadText() {
    const inputTextArea = document.querySelector('.inputText');
    const inputText = inputTextArea.value;

    if (inputText) {
        const blob = new Blob([inputText], { type: 'text/plain' });

        const link = document.createElement('a');

        link.download = '';
        link.href = window.URL.createObjectURL(blob);

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}

