function daysRequired(inputArray, difference) {
    let days = 1;
    let min = inputArray[0];
    let max = inputArray[0];

    for (let i = 1; i < inputArray.length; i++) {
        let newMin = Math.min(min, inputArray[i]);
        let newMax = Math.max(max, inputArray[i]);

        if (newMax - newMin > difference) {
            days++;
            min = inputArray[i];
            max = inputArray[i];
        } else {
            min = newMin;
            max = newMax;
        }
    }
    return days;
}
console.log(daysRequired([1,2,3,4,8,6,7,5,2,7], 3)) // 4
console.log(daysRequired([8,5,2,7], 3))             // 3
console.log(daysRequired([1,2,8,6,7,5,5,2,7], 3))   // 4
console.log(daysRequired([2,5,9,2,1,4], 4))         // 3
console.log(daysRequired([1, 12, 10, 4, 5, 2], 2))  // 4
console.log(daysRequired([2,5,9,7,2,1,4], 4))       // 3
console.log(daysRequired([1,1,1,1,1,1,1], 4))       // 1