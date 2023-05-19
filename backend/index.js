const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const r=await axios.put(
      "https://api.chatengine.io/users/",
      {username: username, secret: username,first_name: username },
      { headers: { "Private-Key": "ee5937b7-7e2f-4510-a699-0710d2ff474d" } }
    );
    return res.status(r.status).json(r.data);
  } catch (error) {
    return res.status(error.response.status).json(error.response.data);
  }
});

app.listen(3001);