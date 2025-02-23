function filterWords(words) {
    const regex = /\b(?!.*[Aa])[A-Za-z]{6,}\b/;
    return words.filter(word => regex.test(word));
}

const testCases = [
    ["Wonderful", "Happiness", "Joyful", "Time", "Task", "Apple"],
    ["Example", "Joyous", "Amazing", "Great", "Sunshine", "Bright"],
    ["Lovely", "Friend", "Elephant", "Mountain", "Garden"],
    ["Smile", "Peace", "Brilliant", "Cheerful", "Laughter"],
];

testCases.forEach((words, index) => {
    console.log(`Test ${index + 1}:`, filterWords(words));
});