// The in property just makes type narrowing easier
function checkAdmin(account) {
    // This doesnt work because its not guaranteed account to be admin
    // return account.isAdmin;
    // The in keyword checks if the property exists in the account for example
    // This works because it only returns isAdmin when the accunt has isAdmin property on it
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
}
export {};
