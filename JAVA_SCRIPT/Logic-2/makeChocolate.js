// Logic-2 -- makeChocolate
// We want make a package of goal kilos of chocolate. We have small bars (1 kilo each) and big bars (5 kilos each). Return the number of small bars to use, assuming we always use big bars before small bars. Return -1 if it can't be done.

// Examples

// makeChocolate(4, 1, 9) → 4
// makeChocolate(4, 1, 10) → -1
// makeChocolate(4, 1, 7) → 2

function makeChocolate(small, big, goal) {
    let maxBigBars = Math.floor(goal / 5);
    let bigBarsUsed = Math.min(maxBigBars, big);
    let remainingGoal = goal - (bigBarsUsed * 5);
    return remainingGoal <= small ? remainingGoal : -1;
}