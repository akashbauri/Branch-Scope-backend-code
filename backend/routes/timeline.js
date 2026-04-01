const express = require("express");
const router = express.Router();
const db = require("../config/firebase");
const { success, error } = require("../utils/response");

router.get("/:program_id", async (req, res) => {
  try {
    const snapshot = await db
      .collection("timeline_entries")
      .where("program_id", "==", req.params.program_id)
      .get();

    const data = snapshot.docs.map(doc => doc.data());

    data.sort((a, b) => a.semester - b.semester);

    success(res, data);
  } catch (err) {
    error(res, err.message);
  }
});

module.exports = router;
