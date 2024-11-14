/*
Task 1: Create a function to handle deposits into a bank account. Essentially, adding money to your bank account.

Task 2: Implement a function to handle withdrawals from a bank account. Essentially, taking money out of your bank account.

Task 3: Develop a function to check the current balance of the account. Lastly, show much much money you have left.
*/

let account = 100

const adding = (account, deposit) => account + deposit;
account = adding(account, 100);
console.log(account)



const remove = (account, withdrawal) => account - withdrawal
account = remove(account, 50)
console.log(account)

const balance = (account)
console.log("Balance: " + account)