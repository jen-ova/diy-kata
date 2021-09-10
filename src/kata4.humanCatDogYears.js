const humanCatDogYears = number => {
    let catYears;
    let dogYears;

    if (number === 0){
        catYears = 0;
        dogYears = 0;
    }
    if (number === 1) {
        catYears = 15; 
        dogYears = 15;
    }
    if (number === 2) {
        catYears = 15 + 9;
        dogYears = 15 + 9;
    }
    if (number >= 3) {
        const moreYears = number - 2;
        catYears = 15 + 9 + (4 * moreYears);
        dogYears = 15 + 9 + (5 * moreYears);
    }
    return [number, catYears, dogYears];
};

module.exports = humanCatDogYears;
