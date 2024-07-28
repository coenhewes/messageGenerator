# Silly Fortune Teller

This is a simple JavaScript application that generates random, humorous fortune-telling messages. It combines different elements to create unique, albeit silly, predictions for the user.

## How It Works

The app uses three arrays of message components:
1. Star signs
2. Fortune predictions
3. Warnings or things to avoid

It then randomly selects one item from each array to construct a complete fortune-telling message.

## Code Snippet

```javascript
// The parts of the message are stored here
const starSign = ["Sagittarius", "Taurus", "Libra", "Cancer", "Capricorn", "That Other One"];
const yourFortune = ['You will meet an older man', 'Your money will find meaning', 'The wind of change is upon you', 'You are the true lord of the dance', 'You will find an unexpected gift'];
const pleaseAvoid = ['You should avoid children', 'now is not a good time to go travelling', 'you should avoid large expenses', 'Now is not the best time for commitment', 'ignore what those idiots at work say'];

// This function goes through each constant and creates a unique message
const messageGenerated = () => {
    let starSignCount = starSign.length;
    let yourFortuneCount = yourFortune.length;
    let pleaseAvoidCount = pleaseAvoid.length;
    return `Hello traveller, I can see you are a ${starSign[Math.floor(Math.random() * starSignCount)]}. Would you like to know your fortune? Okay, ${yourFortune[Math.floor(Math.random() * yourFortuneCount)]}... but beware, ${pleaseAvoid[Math.floor(Math.random() * pleaseAvoidCount)]}.`
}

// This calls and prints our message
console.log(messageGenerated());
Usage
To use this app, simply run the JavaScript file. Each time you run it, it will generate a new, random fortune-telling message.
Customization
You can easily customize the messages by modifying the arrays:

starSign: Add or remove star signs
yourFortune: Add or remove fortune predictions
pleaseAvoid: Add or remove warnings or things to avoid

Future Improvements

Add a user interface for a more interactive experience
Implement more diverse message components for greater variety
Create a web version that generates a new message with each page refresh

License
This project is open source and available under the MIT License.
