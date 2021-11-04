const createAccount = (pin, amount=0) => {
    return {
        checkBalance: function(password) {
            if(password !== pin) {
                return 'Invalid PIN.'
            } 
            return `$${amount}`
        }, 
        deposit: function(password, newAmount) {
            if(password !== pin) {
                return 'Invalid PIN.'
            }
            // make the deposit to the account
            amount += newAmount 
            return `Successfully deposited $${newAmount}. Current balance: $${amount}.`
        },
        withdraw: function(password, withdrawAmount) {
            if(password !== pin) {
                return 'Invalid PIN.'
            }
            if(withdrawAmount > amount) {
                return 'Withdrawal amount exceeds account balance. Transaction cancelled.'
            }
            // make the widthdrawal from the account
            amount -= withdrawAmount 
            return `Successfully withdrew $${withdrawAmount}. Current balance: $${amount}.`
        }, 
        changePin: function(oldPin, newPin) {
            if(oldPin !== pin) {
                return 'Invalid PIN.'
            } 
            pin = newPin 
            return 'PIN successfully changed!'
        }
    }
}

// let account = createAccount('1234', 100); 
// console.log(account)
// console.log(account.checkBalance('oops'))
// console.log(account.checkBalance('1234'))
// console.log(account.deposit('1234', 100))
// console.log(account.widthdraw('1234', 200))
// console.log(account.changePin('1233', '0000'))
// console.log(account.changePin('1234', '0000'))
// console.log(account.checkBalance('1234'))
// console.log(account.checkBalance('0000'))

module.exports = { createAccount };
