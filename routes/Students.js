const express = require("express");
const router = express.Router();

const { Students } = require("../models");
router.post("/create", async (req, res) => {
  const student = req.body;
  await Students.create(student);
  res.json(student);
});

router.get("/all-students", async (req, res) => {
  const listOfStudents = await Students.findAll();
  res.json( listOfStudents );
});

module.exports = router;
