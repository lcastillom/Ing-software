class User {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }

    save() {
        // Logic to save the user to the database
    }

    static findById(userId) {
        // Logic to find a user by ID in the database
    }

    static delete(userId) {
        // Logic to delete a user from the database
    }
}

module.exports = User;