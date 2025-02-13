var services = {
    "стрижка": "60 грн",
    "гоління": "40 грн",
    "Миття голови": "100 грн",
    "Розбити скло": "200 грн",

    price() {
        let total = 0;
        Object.keys(this).forEach(key => {
            if (typeof this[key] === "string") {
                total += parseInt(this[key]);
            }
        });
        return total;
    },

    minPrice() {
        let min = Infinity;
        Object.keys(this).forEach(key => {
            if (typeof this[key] === "string") {
                const cost = parseInt(this[key]);
                if (cost < min) min = cost;
            }
        });
        return min;
    },

    maxPrice() {
        let max = -Infinity;
        Object.keys(this).forEach(key => {
            if (typeof this[key] === "string") {
                const cost = parseInt(this[key]);
                if (cost > max) max = cost;
            }
        });
        return max;
    }
};