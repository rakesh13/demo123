console.log("Welcome to Zero Waste! A Food Redistribution Platform.");
// 1️⃣ While Loop
let stock = 50;
while (stock > 0){
    console.log("Remaining packets: "+stock);
    stock -= 1
}
print("All packets distributed!");



// 2️⃣ Variables
let expiryDate = null; // No expiry date assigned
let donorName = "Ramesh";
const foodDonated = "Rice";
console.log(donorName + " donated " + quantity + " kg of " + foodDonated);

// 3️⃣ Operators
quantity = 12;
let pricePerKg = 50;
let total = quantity * pricePerKg;
console.log("Total Price: Rs." + total);

// 4️⃣ Conditional Constructs

if (stock > 50) {
    console.log("Sufficient Stock");
} else if (stock >= 20) {
    console.log("Low Stock");
} else {
    console.log("Out of Stock");
}


