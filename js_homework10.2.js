function filterWords(sentence) {
    const regex = /\b[b-zB-Z]{6,}\b/g;
    return sentence.match(regex) || [];
}

console.log('Test 1:', filterWords("Wonderful Happiness Joyful Time Task Apple"));
console.log('Test 2:', filterWords("Example Joyous Amazing Great Sunshine Bright"));
console.log('Test 3:', filterWords("Lovely Friend Elephant Mountain Garden"));
console.log('Test 4:', filterWords("Smile Peace Brilliant Cheerful Laughter"));
console.log('Test 5:', filterWords("Aa Aa Aa"));