const quotes = [
    "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    "The quick brown fox jumps over the lazy dog.",
    "Pack my box with five dozen liquor jugs.",
    "A room without books is like a body without a soul.",
    "If you tell the truth, you don't have to remember anything.",
    "Insanity is doing the same thing, over and over again, but expecting different results.",
    "You only live once, but if you do it right, once is enough.",
    "How razorback-jumping frogs can level six piqued gymnasts.",
    "Silence alone never solves anything; express your thoughts, even from God, what is there to hide?",
    "Even our heartbeat now speaks of you; the language of the heart praises your beauty.",
    "he feeling of your love is settled in my heart; my attachment to you has grown even more than to myself.",
    "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    "You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.",
    "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "The purpose of life is not to be happy. It is to be useful, to be honourable, to be compassionate, to have it make some difference that you have lived and lived well.",
    "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
    "Success isn’t just about what you accomplish in your life; it’s about what you inspire others to do.",
    "Your success and happiness lie in you. Resolve to keep happy, and your joy and you shall form an invincible host against difficulties.",
    "Since I met you, the way of living has changed; every moment feels incomplete without seeing you",
    "What is life without you? This heart asks for morning from you; nights are moonlit only because of you."
];

let startTime;

function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

function startTest() {
    const quoteElement = document.getElementById('quote');
    const inputElement = document.getElementById('input');
    const resultElement = document.getElementById('result');
    const startButton = document.getElementById('startButton');

    inputElement.value = '';
    resultElement.innerHTML = '';
    inputElement.disabled = false;
    inputElement.focus();
    startButton.style.display = 'none'; // Hide the start button
    startTime = new Date();

    quoteElement.textContent = getRandomQuote();

    inputElement.addEventListener('input', checkInput);
}

function checkInput() {
    const quoteElement = document.getElementById('quote');
    const inputElement = document.getElementById('input');
    const resultElement = document.getElementById('result');

    const quote = quoteElement.textContent;
    const userInput = inputElement.value;

    if (userInput === quote) {
        const endTime = new Date();
        const timeTaken = ((endTime - startTime) / 1000).toFixed(2);
        const wordsPerMinute = ((userInput.split(' ').length / timeTaken) * 60).toFixed(2);

        resultElement.innerHTML = `Congratulations!<br>Time taken: ${timeTaken} seconds<br>Words per minute: ${wordsPerMinute}<br><button onclick="tryAgain()">Try Again</button>`;
        inputElement.removeEventListener('input', checkInput);
        inputElement.disabled = true; // Disable textarea after completion
    }
}

function tryAgain() {
    document.getElementById('input').disabled = true;
    document.getElementById('startButton').style.display = 'block'; // Show the start button again
    document.getElementById('result').innerHTML = ''; // Clear result
    document.getElementById('quote').textContent = ''; // Clear quote
}