var startButton = document.getElementById('start');
    var resultElement = document.getElementById('inputText');
    var recognition = new webkitSpeechRecognition();
    var isListening = false;
    var lastRecognizedText = '';
    var displayedText = '';

    recognition.lang = window.navigator.language;
    recognition.interimResults = true;

    startButton.addEventListener('click', toggleSpeechRecognition);

    recognition.addEventListener('result', handleRecognitionResult);
    recognition.addEventListener('end', handleRecognitionEnd);

    function toggleSpeechRecognition() {
        if (!isListening) {
            recognition.start();
            isListening = true;
        } else {
            recognition.stop();
            isListening = false;
        }
    }

    function handleRecognitionResult(event) {
        const result = event.results[event.results.length - 1][0].transcript.trim();
        if (result !== lastRecognizedText) {
            lastRecognizedText += ' ' + result;
            displayedText = result;
            resultElement.value = displayedText;
        }
    }

    function handleRecognitionEnd() {
        if (isListening) {
            recognition.start();
        }
    }
