import db from "../configuration/dbConn.js";
import { getErrorText } from "../controllers/common.js";

export const get_subjects = async () => {
  try {
    const data = await db.any(
      "SELECT id, subject, fa, f_oral, sa, s_oral  FROM tbl_subject"
    );

    if (data.length > 0) {
      return { success: true, results: data };
    } else {
      return { success: false };
    }
  } catch (err) {
    var errorText = getErrorText(err);
    var error = new Error(errorText);
    return error;
  }
};

export const add_subject = async (sub) => {
  try {
    const data = await db.one(
      "INSERT INTO tbl_subject(subject,fa,f_oral,sa,s_oral, total_mark) VALUES($1,$2,$3,$4,$5,$6) RETURNING id",
      [sub.subject, sub.fa, sub.f_oral, sub.sa, sub.s_oral, sub.total_mark]
    );

    return data;
  } catch (err) {
    var errorText = getErrorText(err);
    var error = new Error(errorText);
    return error;
  }
};

export const edit_subject = async (sub, sub_id) => {
  try {
    const data = await db.result(
      "UPDATE tbl_subject set subject=($1),sa=($2),s_oral=($3),fa=($4),f_oral=($5) where id=($6)",
      [sub.subject, sub.fa, sub.f_oral, sub.sa, sub.s_oral, sub_id]
    );

    return data;
  } catch (err) {
    var errorText = getErrorText(err);
    var error = new Error(errorText);
    return error;
  }
};

export const delete_subject = async (sub_id) => {
  try {
    const data = await db.result("DELETE from tbl_subject where id=($1)", [
      sub_id,
    ]);
    return data;
  } catch (err) {
    var errorText = getErrorText(err);
    var error = new Error(errorText);
    return error;
  }
};


//For Db Validation
export const subjectExist = async (sub) => {
  try {
    const data = await db.any(
      "SELECT * from tbl_subject where subject = ($1)",
      [sub]
    );

    if (data.length > 0) {
      return { success: true };
    } else {
      return { success: false };
    }
  } catch (err) {
    var errorText = getErrorText(err);
    var error = new Error(errorText);
    return error;
  }
};

export const subjectIdExist = async (subId) => {
  try {
    const data = await db.any("SELECT * from tbl_subject where id = ($1)", [
      subId,
    ]);

    console.log("data-->", data);

    if (data.length === 0) {
      return { fail: true };
    } else {
      return { fail: false };
    }
  } catch (err) {
    var errorText = getErrorText(err);
    var error = new Error(errorText);
    return error;
  }
};
