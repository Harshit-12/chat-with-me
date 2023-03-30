const express = require("express");
const {
  registerUser,
  authUser,
  allUsers,
} = require("../controllers/userControllers");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

// router.route("/").get(protect, allUsers);
// router.route("/").post( function (req, res) {
//    registerUser;
// });
// router.route("/").post((req, res) => {
//   registerUser;
// });
router.route("/").post(registerUser).get(protect,allUsers);
router.post("/login", authUser);
// router.route("/").get(allUsers);
module.exports = router; 