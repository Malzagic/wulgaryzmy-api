import express from "express";
const router = express.Router();

import { profanityDB } from "../wulgaryzmy.js";

router.get("/", function (req, res, next) {
  const length = profanityDB.profanityList.length;
  const random = Math.floor(Math.random() * length) + 1;

  res.send({random: profanityDB.profanityList[random]})
});

export default router;
