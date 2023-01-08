const router = require("express").Router();
const Dashboard = require("../models/Dashboard");
const fetchAdmin = require("../middleware/fetchAdmin");
const { validator, body, validationResult } = require("express-validator");

const jwtkey = process.env.JWT_SECRET_KEY;

//get dashboard
router.get("/getall", fetchAdmin, async (req, res) => {
  try {
    const adminId = req.admin;
    console.log("Fetch Dashboard by " + adminId);
    const dashboard = await Dashboard.find();
    res.json({ dashboard });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//addWhatsNew
router.post(
  "/addnewannouncement",
  [
    body("title", "Enter valid title").exists(),
    body("link", "Enter a valid link").isURL(),
  ],
  fetchAdmin,
  async (req, res) => {
    try {
      const adminId = req.admin;
      console.log("Add Announcement by " + adminId);

      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.json({ error: errors.errors });
      }
      const { title, link } = req.body;
      const anns =await  Dashboard.updateOne(
        {},
        { $push: { announcements: { title, link, addedBy: adminId } } },
        { upsert: true }
      );
      res.json({ anns });
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
);

//updateAnnouncement
router.post(
  "/updateannouncement",
  [
    body("title", "Enter valid title").exists(),
    body("link", "Enter a valid link").isURL(),
    body("hidden").isBoolean(),
  ],
  fetchAdmin,
  async (req, res) => {
    try {
      const adminId = req.admin;
      console.log("Update Announcement by " + adminId);

      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.json({ error: errors.errors });
      }
      const { title, link, hidden, id } = req.body;

      const anns = await Dashboard.findOne();
      if (!anns.announcements || !anns.announcements.id(id)) {
        return res.status(404).json("Announcement not found");
      }
      anns.announcements
        .id(id)
        .set({ title, link, hidden, lastUpdatedBy: adminId });
      anns.save();
      res.json({ announcements: anns.announcements });
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
);

router.post("/setannouncementtimeout", fetchAdmin, async (req, res) => {
  try {
    if (!req.body.timeout) {
      return res.status.json({ error: "Timeout not found" });
    }
    await Dashboard.findOneAndUpdate(
      {},
      { $set: { announcementTimeout: req.body.timeout } },
      { upsert: true }
    );
    return res.json({ message: "Timeout Updated" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;