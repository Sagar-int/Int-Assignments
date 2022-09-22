import db from "../configuration/dbConn.js";
import { getErrorText } from "../controllers/common.js";

export const get_skills = async () => {
  try {
    const data = await db.any("Select * from tbl_skill");
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

export const add_skill = async (skill) => {
  try {
    const response = await db.any(
      "select * from tbl_skill where skill = ($1)",
      [skill.skill]
    );

    if (response.length !== 0) {
      const message = "Skill is Allready present.";
      return { message };
    } else {
      const data = await db.one(
        "INSERT INTO tbl_skill(skill, grade) VALUES($1,$2) RETURNING id",
        [skill.skill, skill.grade]
      );

      return data;
    }
  } catch (err) {
    var errorText = getErrorText(err);
    var error = new Error(errorText);
    return error;
  }
};

export const edit_skill = async (skill, skill_id) => {
  try {
    const data = await db.result(
      "UPDATE tbl_skill set skill=($1), grade=($2) where id=($3)",
      [skill.skill, skill.grade, skill_id]
    );
  } catch (err) {
    var errorText = getErrorText(err);
    var error = new Error(errorText);
    return error;
  }
};

export const delete_skill = async (skill_id) => {
  try {
    const data = await db.result("DELETE from tbl_skill where id=($1)", [
      skill_id,
    ]);
  } catch (err) {
    var errorText = getErrorText(err);
    var error = new Error(errorText);
    return error;
  }
};


//For Db Validation
export const skillExist = async (sub) => {
  try {
    const data = await db.any(
      "SELECT * from tbl_skill where skill = ($1)",
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

export const skillIdExist = async (skillId) => {
  try {
    const data = await db.any("SELECT * from tbl_skill where id = ($1)", [
      skillId,
    ]);

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
