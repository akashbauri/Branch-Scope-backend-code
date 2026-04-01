const express = require("express");
const router = express.Router();
const db = require("../config/firebase");
const { success, error } = require("../utils/response");

router.get("/", async (req, res) => {
  try {
    const snapshot = await db.collection("programs").get();

    const data = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    success(res, data);
  } catch (err) {
    error(res, err.message);
  }
});

module.exports = router;
