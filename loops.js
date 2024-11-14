/*
Problem Statement: You are tasked with creating a JavaScript program that simulates a simple online shopping experience. The program should allow 
users to browse products, add them to a cart, and calculate the total cost of their purchase.

Task 1: Implement a conditional statement to check if a user is logged in. This doesn't need to be anything complex, a simple let loggedIn = true 
will do.

Task 2: If they are logged in, loop over the 'cart' array below and log the list of available products to the user. If they are not logged in, 
tell the user they will need to log in before they can view their cart.

let cart = ['Shirts', 'Shoes', 'Bread', 'Cell Phone', 'Candy Corn', 'The Pragmatic Programmer: Your Journey To Mastery, 20th Anniversary Edition 
(2nd Edition)', 'Tomato']
*/

let loggedIn = true

let cart = [
    'Shirts',
    'Shoes', 
    'Bread', 
    'Cell Phone', 
    'Candy Corn', 
    'The Pragmatic Programmer: Your Journey To Mastery, 20th Anniversary Edition (2nd Edition)', 
    'Tomato'
]

if (loggedIn) {
    console.log("Your cart items:");
    for (let i in cart) {
        console.log("Item: " + cart[i])
    }
}

else {
    console.log("Please sign in to view your cart.")
}


