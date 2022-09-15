import { db } from "../configuration/dbConn";

const add_subject = async (adm) => {
  return new Promise(function (resolve, reject) {
    db.one(
      "INSERT INTO tbl_admin(first_name,last_name,email,username,password,group_id,date_added,added_by,status,manager_id) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) RETURNING id",
      [
        adm.first_name,
        adm.last_name,
        adm.email,
        adm.username,
        adm.password,
        adm.group_id,
        adm.date_added,
        adm.added_by,
        adm.status,
        adm.manager_id,
      ]
    )
      .then(function (data) {
        resolve(data);
      })
      .catch(function (err) {
        var errorText = common.getErrorText(err);
        var error = new Error(errorText);
        reject(error);
      });
  });
};
