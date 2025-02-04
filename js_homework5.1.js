function pow(x, y) {
    if (y === 0) {
        return 1;
    }
    let result = 1;
    let counter = y > 0 ? y : -y;
    while (counter > 0) {
        result *= x;
        counter--;
    }
    if (y < 0) {
        return 1 / result;
    }
    return result;
}