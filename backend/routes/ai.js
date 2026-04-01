const express = require("express");
const router = express.Router();
const axios = require("axios");

const apiKey = require("../middleware/apiKey");

router.post("/", apiKey, async (req, res) => {
  try {
    const { prompt } = req.body;

    const encoded = encodeURIComponent(prompt);

    const response = await axios.get(
      `https://text.pollinations.ai/${encoded}`
    );

    res.json({
      success: true,
      data: response.data
    });

  } catch (err) {
    res.status(500).json({
      success: false
    });
  }
});

module.exports = router;
