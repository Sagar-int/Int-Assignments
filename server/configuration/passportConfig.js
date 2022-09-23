import { Strategy as LocalStrategy } from "passport-local";
import {
  emailExists,
  createUser,
  matchPassword,
  userToken,
} from "../models/auth.model.js";

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
          const token = userToken(user)
          return done(null, { id: user.id, email: user.email},token);
        } catch (error) {
          return done(error, false);
        }
      }
    )
  );
};
