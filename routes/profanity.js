import express from "express";
const router = express.Router();

import { profanityDB } from "../wulgaryzmy.js";

router.get("/", function (req, res, next) {
  res.send(profanityDB.profanityList);
});

export default router;
