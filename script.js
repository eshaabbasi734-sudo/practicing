
// Q-01 Weekly Temperature Record

let temp = [30, 32, 29, 35, 31, 33, 34];

let total = 0;

console.log("Q-01 Weekly Temperature Record");

for (let i = 0; i < temp.length; i++) {
    console.log(temp[i]);
    total = total + temp[i];
}

let average = total / 7;
let count = 0;

for (let i = 0; i < temp.length; i++) {
    if (temp[i] > average) {
        count++;
    }
}

console.log("Average:", average);
console.log("Days Above Average:", count);








// Q-02 Class Test Marks

console.log("Q-02 Class Test Marks");

let marks = [78, 65, 90, 45, 88, 56, 72, 95];

console.log("Original Marks:");

for (let i = 0; i < marks.length; i++) {
    console.log(marks[i]);
}

console.log("Reverse Marks:");

for (let i = marks.length - 1; i >= 0; i--) {
    console.log(marks[i]);
}

let highest = marks[0];
let lowest = marks[0];
let passed = 0;

for (let i = 0; i < marks.length; i++) {
    if (marks[i] > highest) {
        highest = marks[i];
    }

    if (marks[i] < lowest) {
        lowest = marks[i];
    }

    if (marks[i] >= 50) {
        passed++;
    }
}

console.log("Highest Marks:", highest);
console.log("Lowest Marks:", lowest);
console.log("Passed Students:", passed);











// Q-03 Shop Sales Across Branches

console.log("Q-03 Shop Sales Across Branches");

let sales = [
    [12000, 15000, 11000, 14000],
    [10000, 18000, 16000, 13000],
    [17000, 14000, 19000, 16000]
];

let grandTotal = 0;
let highestSales = 0;
let branchName = "";

for (let i = 0; i < sales.length; i++) {

    let branchTotal = 0;

    console.log("Branch", i + 1);

    for (let j = 0; j < sales[i].length; j++) {
        console.log("Day", j + 1, sales[i][j]);
        branchTotal = branchTotal + sales[i][j];
    }

    console.log("Branch Total:", branchTotal);

    grandTotal = grandTotal + branchTotal;

    if (branchTotal > highestSales) {
        highestSales = branchTotal;
        branchName = "Branch " + (i + 1);
    }
}

console.log("All Branches Total:", grandTotal);
console.log("Highest Sales Branch:", branchName);





// Q-04 Reversing a Delivery Route

console.log("Q-04 Reversing a Delivery Route");

let stops = [2, 4, 6, 8, 10, 12];

console.log("Original Route:");

for (let i = 0; i < stops.length; i++) {
    console.log(stops[i]);
}

console.log("Reversed Route:");

for (let i = stops.length - 1; i >= 0; i--) {
    console.log(stops[i]);
}















// Q-05 Checking a Product Code

console.log("Q-05 Checking a Product Code");

let code = "LEVEL";
let reverse = "";

for (let i = code.length - 1; i >= 0; i--) {
    reverse = reverse + code[i];
}

console.log("Entered Code:", code);

if (code.toLowerCase() == reverse.toLowerCase()) {
    console.log("This is a Palindrome");
} else {
    console.log("This is not a Palindrome");
}


















// Q-06 Personalised Shopping Discount

console.log("Q-06 Personalised Shopping Discount");

function discount(price, percent) {
    let amount = price * percent / 100;
    let finalPrice = price - amount;
    return finalPrice;
}

let result = discount(5000, 20);

console.log("Original Price: Rs. 5000");
console.log("Discount: 20%");
console.log("Final Price: Rs.", result);












// Q-07 Restaurant Bill Calculator

console.log("Q-07 Restaurant Bill Calculator");

function bill(price, quantity) {
    let total = price * quantity;
    return total;
}

let billResult = bill(500, 4);

console.log("Item Price: Rs. 500");
console.log("Quantity: 4");
console.log("Total Bill: Rs.", billResult);










// Q-08 Student Grade Checker

console.log("Q-08 Student Grade Checker");

function grade(marks) {

    if (marks >= 85 && marks <= 100) {
        return "A";
    }
    else if (marks >= 70 && marks < 85) {
        return "B";
    }
    else if (marks >= 50 && marks < 70) {
        return "C";
    }
    else {
        return "Fail";
    }
}

let gradeResult = grade(90);

console.log("Student Marks: 90");
console.log("Student Grade:", gradeResult);








// Q-09 Food Delivery Charge Calculator

console.log("Q-09 Food Delivery Charge Calculator");

function delivery(amount, distance) {

    let charge = 0;

    if (amount >= 2000 && distance <= 5) {
        charge = 0;
    }
    else if (amount >= 2000 && distance > 5) {
        charge = (distance - 5) * 20;
    }
    else if (distance <= 5) {
        charge = 100;
    }
    else {
        charge = 100 + ((distance - 5) * 20);
    }

    return charge;
}

let order = 1500;
let km = 8;

let charges = delivery(order, km);

console.log("Order Amount: Rs.", order);
console.log("Distance:", km, "KM");
console.log("Delivery Charges: Rs.", charges);
console.log("Final Bill: Rs.", order + charges);







// Q-10 Weekly Sales Performance

console.log("Q-10 Weekly Sales Performance");

function weeklySales(sales) {

    let total = 0;
    let count = 0;

    for (let i = 0; i < sales.length; i++) {

        total = total + sales[i];

        if (sales[i] >= 10000) {
            count++;
        }
    }

    let average = total / 7;

    console.log("Total Weekly Sales:", total);
    console.log("Average Daily Sales:", average);
    console.log("Days Reached Target:", count);

    if (average >= 10000) {
        console.log("Weekly Target Achieved");
    }
    else {
        console.log("Weekly Target Not Achieved");
    }
}

let weekly = [12000, 8000, 15000, 9000, 11000, 7000, 13000];

weeklySales(weekly);
