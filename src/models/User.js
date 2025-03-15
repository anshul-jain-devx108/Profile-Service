const { db } = require("../config/firebase");

class User {
  static async getUserById(email) {
    const userRef = db.collection("users").doc(email);
    const userDoc = await userRef.get();

    if (!userDoc.exists) {
      throw new Error("User not found");
    }

    return userDoc.data();
  }

  static async updateUser(email, userData) {
    const userRef = db.collection("users").doc(email);
    await userRef.update(userData);
    return { message: "User updated successfully" };
  }
}

module.exports = User;
