const reachDestination = (distance, speed) => {
    const journeyTime = distance / speed;
    const roundUpJourneyTime = Math.round(journeyTime * 2) / 2;
    return "I should be there in " + (roundUpJourneyTime) + " hours.";
};

module.exports = reachDestination;
