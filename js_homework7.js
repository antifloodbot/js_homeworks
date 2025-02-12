function price(services) {
    let total = 0;
    for (const key in services) {
        const cost = parseInt(services[key]);
        total += cost;
    }
    return total;
}

function minPrice(services) {
    return Math.min(...Object.values(services).map(value => parseInt(value)));
}

function maxPrice(services) {
    return Math.max(...Object.values(services).map(value => parseInt(value)))
}