import express from "express";
const router = express.Router();

import { profanityDB } from "../wulgaryzmy.js";

router.get("/:letter", function (req, res, next) {
  const letter = req.params.letter;
  const firstLetter = letter.charAt(0);

  const selectedProfanityList = profanityDB.profanityList.filter(
    (curse) => curse.charAt(0) === firstLetter
  );

  res.send(selectedProfanityList);
});

export default router;
