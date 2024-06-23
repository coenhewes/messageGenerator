//The parts of the message are stored here
const starSign = ["Sagittarius", "Taurus", "Libra", "Cancer", "Capricorn", "That Other One"];
const yourFortune = ['You will meet an older man', 'Your money will find meaning', 'The wind of change is upon you', 'You are the true lord of the dance', 'You will find an unexpected gift'];
const pleaseAvoid = ['You should avoid children', 'now is not a good time to go travelling', 'you should avoid large expenses', 'Now is not the best time for commitment', 'ignore what those idiots at work say'];

//This function goes through each constant and creates a unique message
const messageGenerated = () => {
    let starSignCount = starSign.length;
    let yourFortuneCount = yourFortune.length;
    let pleaseAvoidCount = pleaseAvoid.length;

    return `Hello traveller, I can see you are a ${starSign[Math.floor(Math.random() * starSignCount)]}. Would you like to know your fortune? Okay, ${yourFortune[Math.floor(Math.random() * yourFortuneCount)]}... but beware, ${pleaseAvoid[Math.floor(Math.random() * yourFortuneCount)]}.`
}

//this calls and prints our message
console.log(messageGenerated());