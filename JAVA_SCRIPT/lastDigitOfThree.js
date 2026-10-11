// Logic-1 -- lastDigitOfThree
// Given three ints, a b c, return true if two or more of them have the same rightmost digit. The ints are non-negative. Note: the % "mod" operator computes the remainder, e.g. 17 % 10 is 7.

// Examples

// lastDigitOfThree(23, 19, 13) → true
// lastDigitOfThree(23, 19, 12) → false
// lastDigitOfThree(23, 19, 3) → true



function lastDigitOfThree(a, b, c) {
    if(a % 10 === b % 10 || a % 10 === c % 10 || b % 10 === c % 10){
        return true;
    }else{
        return false;
    }
}