import db from "../configuration/dbConn.js";
import { getErrorText } from "../controllers/common.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import config from "../configuration/config.js";

export const emailExists = async (email) => {
  try {
    const data = await db.any("SELECT * FROM users WHERE email=$1", [email]);

    if (data.length == 0) return false;
    return data[0];
  } catch (err) {
    var errorText = getErrorText(err);
    var error = new Error(errorText);
    return error;
  }
};

export const createUser = async (email, password) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const data = await db.any(
      "INSERT INTO users(email, password) VALUES ($1, $2) RETURNING id, email, password",
      [email, hash]
    );

    if (data.length == 0) return false;
    return data;
  } catch (err) {
    var errorText = getErrorText(err);
    var error = new Error(errorText);
    return error;
  }
};

export const matchPassword = (password, hashPassword) => {
  const match = bcrypt.compareSync(password, hashPassword);
    // console.log("config.jwtSecret===>",config.jwtSecret);
  return match;
};

export const userToken = (user) => {
  const token = jwt.sign(
    { userId: user.id, email_id: user.email },
    config.jwtSecret,
    { expiresIn: Math.round((new Date().getTime()) / 1000) + (24 * 60 * 60) }
  );
  return token;
};
