// An online store calculates delivery charges based on the customer's order amount and delivery distance.
// Write a JavaScript function called deliveryCharge(amount, distance) that returns the delivery fee according to these rules:
// If the order amount is ₦50,000 or more, delivery is free regardless of distance.
// Otherwise, if the distance is 5 km or less, the delivery fee is ₦1,500.
// Otherwise, if the distance is greater than 5 km but less than or equal to 15 km, the delivery fee is ₦3,000.
// Otherwise, the delivery fee is ₦5,000.

// Test cases
// Function call Expected result
// deliveryCharge(60000, 20) 0
// deliveryCharge(30000, 5) 1500

// deliveryCharge(60000, 20) 0
// deliveryCharge(30000, 5) 1500
// deliveryCharge(20000, 10) 3000
// deliveryCharge(15000, 16) 5000 
// deliveryCharge(50000, 3) 0
// deliveryCharge(30000, 15) 3000

function deliveryCharge(amount, distance) {
    if (amount >= 50000) {
        return 0; 
    } else if (distance <= 5) {
        return 1500; 
    } else if ( distance >5 && distance <= 15) {

        return 3000; 
    } else{
        return 5000; 
    }
}

console.log(deliveryCharge(30000, 15)); // 1500