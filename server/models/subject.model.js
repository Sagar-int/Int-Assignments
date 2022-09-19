import db from "../configuration/dbConn.js";
import { getErrorText } from "../controllers/common.js";

export const get_subjects = async () => {
  return new Promise(function (resolve, reject) {
    db.any("Select * from tbl_subject")
      .then(function (data) {
        resolve(data);
      })
      .catch(function (err) {
        console.log("erroe1-->", err);
        var errorText = common.getErrorText(err);
        var error = new Error(errorText);
        reject(error);
      });
  });
};

export const add_subject = async (sub) => {
  return new Promise(function (resolve, reject) {
    db.one(
      "INSERT INTO tbl_subject(subject,fa,f_oral,sa,s_oral) VALUES($1,$2,$3,$4,$5) RETURNING id",
      [sub.subject, sub.fa, sub.f_oral, sub.sa, sub.s_oral]
    )
      .then(function (data) {
        console.log("data-->", data);
        resolve(data);
      })
      .catch(function (err) {
        console.log("erroe2-->", err);
        var errorText = getErrorText(err);
        var error = new Error(errorText);
        reject(error);
      });
  });
};

export const edit_subject = async (sub, sub_id) => {
  return new Promise(function (resolve, reject) {
    db.result(
      "UPDATE tbl_subject set subject=($1),sa=($2),s_oral=($3),fa=($4),f_oral=($5) where id=($6)",
      [sub.subject, sub.fa, sub.f_oral, sub.sa, sub.s_oral, sub_id]
    )
      .then(function (data) {
        resolve(data);
      })
      .catch(function (err) {
        var errorText = getErrorText(err);
        var error = new Error(errorText);
        reject(error);
      });
  });
};

export const delete_subject = async (sub_id) => {
  return new Promise(function (resolve, reject) {
    db.result(
      "DELETE from tbl_subject where id=($1)",
      [sub_id]
    )
      .then(function (data) {
        resolve(data);
      })
      .catch(function (err) {
        var errorText = getErrorText(err);
        var error = new Error(errorText);
        reject(error);
      });
  });
};
