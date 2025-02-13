var services = {
    "стрижка": "60 грн",
    "гоління": "40 грн",
    "Миття голови": "100 грн",
    "Розбити скло": "200 грн",

    price() {
        let total = 0;
        for (const key in this) {
            if (typeof this[key] === "string") {
                const cost = parseInt(this[key]);
                total += cost;
            }
        }
        return total;
    },

    minPrice() {
        let minArray = [];
        for (const key in this) {
            if (typeof this[key] === "string") {
                const cost = parseInt(this[key]);
                minArray.push(cost);
            }
        }
        let min = minArray[0];
        for (let i = 1; i < minArray.length; i++) {
            if (minArray[i] < min) {
                min = minArray[i];
            }
        }
        return min;
    },

    maxPrice() {
        let maxArray = [];
        for (const key in this) {
            if (typeof this[key] === "string") {
                const cost = parseInt(this[key]);
                maxArray.push(cost);
            }
        }
        let max = maxArray[0];
        for (let i = 1; i < maxArray.length; i++) {
            if (maxArray[i] > max) {
                max = maxArray[i];
            }
        }
        return max;
    }
};