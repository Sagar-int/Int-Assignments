import db from "../configuration/dbConn.js";
import { getErrorText } from "../controllers/common.js";

export const get_students = async () => {
  try {
    const data = await db.any(
      "SELECT id, student, fa, f_oral, sa, s_oral  FROM tbl_student"
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

export const add_student = async (student) => {
  try {
    const data = await db.one(
      "INSERT INTO tbl_student(name,dob,roll_no,std_class,division) VALUES($1,$2,$3,$4,$5) RETURNING id name",
      [
        student.name,
        student.dob,
        student.roll_no,
        student.std_class,
        student.division,
      ]
    );

    return data;
  } catch (err) {
    var errorText = getErrorText(err);
    var error = new Error(errorText);
    return error;
  }
};

export const edit_student = async (student, student_id) => {
  try {
    const data = await db.result(
      "UPDATE tbl_student set name=($1),dob=($2),roll_no=($3),std_class=($4),division=($5) where id=($6)",
      [
        student.name,
        student.dob,
        student.roll_no,
        student.std_class,
        student.division,
        student_id,
      ]
    );

    return data;
  } catch (err) {
    var errorText = getErrorText(err);
    var error = new Error(errorText);
    return error;
  }
};

export const delete_student = async (student_id) => {
  try {
    const data = await db.result("DELETE from tbl_student where id=($1)", [
      student_id,
    ]);
    return data;
  } catch (err) {
    var errorText = getErrorText(err);
    var error = new Error(errorText);
    return error;
  }
};

//For Db Validation
export const studentExist = async (studentName) => {
  try {
    const data = await db.any(
      "SELECT * from tbl_student where name = ($1)",
      [studentName]
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

export const studentIdExist = async (studentId) => {
  try {
    const data = await db.any("SELECT * from tbl_student where id = ($1)", [
      studentId,
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
