const User = require("../models/User");

const getUserProfile = async (req, res) => {
  try {
    const userEmail = req.user.email;
    const userProfile = await User.getUserById(userEmail);

    // Specify the fields that should be returned
    const allowedFields = ["name", "phone", "location", "department", "joinDate", "subjects", "education"];
    const filteredProfile = {};

    allowedFields.forEach(field => {
      if (userProfile[field] !== undefined) {
        filteredProfile[field] = userProfile[field];
      }
    });

    res.status(200).json(filteredProfile);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
const updateUserProfile = async (req, res) => {
  try {
    const userEmail = req.user.email;
    const { name, phone, location, department, joinDate, subjects, education } = req.body;

    const userData = { name, phone, location, department, joinDate, subjects, education };
    await User.updateUser(userEmail, userData);

    res.status(200).json({ message: "Profile updated successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getUserProfile, updateUserProfile };
