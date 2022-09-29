import { Strategy as LocalStrategy } from "passport-local";
import { Strategy as JwtStrategy } from "passport-jwt";
import { ExtractJwt } from "passport-jwt";

import {
  emailExists,
  createUser,
  matchPassword,
  userToken,
} from "../models/auth.model.js";
import config from "./config.js";

export const passConfig = (passport) => {
  passport.use(
    "local-signup",
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
      },
      async (email, password, done) => {
        try {
          const userExists = await emailExists(email);

          if (userExists) {
            return done(null, false);
          }

          const user = await createUser(email, password);
          return done(null, user);
        } catch (error) {
          done(error);
        }
      }
    )
  );

  passport.use(
    "local-login",
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
      },
      async (email, password, done) => {
        try {
          const user = await emailExists(email);
          if (!user) return done(null, false);
          const isMatch = matchPassword(password, user.password);
          if (!isMatch) return done(null, false);
          const token = "Bearer " + userToken(user);
          return done(null, { id: user.id, email: user.email }, token);
        } catch (error) {
          return done(error, false);
        }
      }
    )
  );
};

export const passTokenConfig = (passport) => {

  passport.use(
    "jwt",
    new JwtStrategy(
      {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: config.jwtSecret,
      },
      async (jwt_payload, done) => {
        try {
          console.log("jwt_payload===>", jwt_payload);
          const userExists = await emailExists(jwt_payload.email_id);
          if (userExists) {
            return done(null, true);
          }
          return done(null, false);
        } catch (error) {
          done(error);
        }
      }
    )
  );
};
