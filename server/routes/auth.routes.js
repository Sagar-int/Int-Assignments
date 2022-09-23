import express from "express";
import passport from "passport";

import { passConfig } from "../configuration/passportConfig.js";
passConfig(passport);

var router = express.Router();

router
  .route("/signup")
  .post(
    passport.authenticate("local-signup", { session: false }),
    (req, res, next) => {
      res.json({
        user: req.user,
      });
    }
  );

router
  .route("/login")
  .post(
    passport.authenticate("local-login", { session: false }),
    (req, res, next) => {
      res.json({
        user: req.user,
        token: req.authInfo, //userToken
      });
    }
  );

export default router;
