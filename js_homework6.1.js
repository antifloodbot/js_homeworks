function validateProbability(count) {
    let listOfNumbers = [];
    let listOfEvenNumbers = [];
    let listOfOddNumbers = [];
    for (let i = 1; i <= count; i++) {
        let randomNumber = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
        listOfNumbers.push(randomNumber);
        if (randomNumber % 2 === 0) {
            listOfEvenNumbers.push(randomNumber);
        } else {
            listOfOddNumbers.push(randomNumber);
        }
    }
    const even = Math.round((listOfEvenNumbers.length / count) * 100);
    const odd = Math.round((listOfOddNumbers.length / count) * 100);
    console.log("Amount of generated numbers: " + listOfNumbers.length);
    console.log("Amount of generated Even numbers: " + listOfEvenNumbers.length);
    console.log("Amount of generated Odd numbers: " + listOfOddNumbers.length);
    console.log(`Percentage of Even and Odd is: ${even}%${odd}`);
}