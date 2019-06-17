const express = require("express");
const router = express.Router();
const getResults= require("../punchScrapper");
//const getFullStory = require("../displayPunch");
const getLeadershipResults = require("../leadershipScrapper");
const getLindaIkejiResults = require("../lindaIkejiScrapper");
const getBusinessDayResults = require("../businessdayScrapper");


/* GET home page. */
router.get("/news/punchng", async function(req, res, next) {
  const result = await getResults(); 
  console.log(result, 'punch') 
  res.json(result);
});

// router.post("/news/punchng/story", async function(req, res, next) {
//   const url = req.body.href
//   const result = await getFullStory(url);
//   res.json(result);
// });

router.get("/news/leadershipng", async function(req, res, next) {
  const result = await getLeadershipResults();
  console.log(result, 'leadership')
  res.json(result);
});

router.get("/blog/lindaikejisblog", async function(req, res, next) {
  const result = await getLindaIkejiResults();
  console.log(result, 'linda')
  res.json(result);
});

router.get("/news/businessdayng", async function(req, res, next) {
  const result = await getBusinessDayResults();
  console.log(result, 'businessday')
  res.json(result);
});

module.exports = router;