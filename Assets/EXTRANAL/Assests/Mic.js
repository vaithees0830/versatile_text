var startButton = document.getElementById('start');
    var resultElement = document.getElementById('inputText');
    var recognition = new webkitSpeechRecognition();
    var isListening = false;
    var lastRecognizedText = '';
    var displayedText = ''; // New variable to store displayed text

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
            displayedText = result; // Update the displayed text with the last recognized text
            resultElement.value = displayedText;  // Display only the last recognized text
        }
    }

    function handleRecognitionEnd() {
        if (isListening) {
            recognition.start();
        }
    }