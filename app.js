import express from "express";
import createError from "http-errors";
import { fileURLToPath } from "url";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import indexRouter from "./routes/index.js";
import profanity from "./routes/profanity.js";
import searchByletter from "./routes/searchByLetter.js";
import randomWord from "./routes/randomWord.js";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/api/profanity", profanity);
app.use("/api/profanity/random", randomWord);
app.use("/api/profanity", searchByletter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

export default app;
