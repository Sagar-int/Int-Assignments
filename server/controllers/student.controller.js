import { encode } from "html-entities";
import config from "../configuration/config.js";
import { statusCode } from "./common.js";
import {
  add_student,
  delete_student,
  edit_student,
  get_students,
} from "../models/student.model.js";

export const Get_Students = async (req, res, next) => {
  try {
    const data = await get_students();

    if (data.success) {
      return res
        .status(statusCode.success.ok)
        .json({
          status: 1,
          data: data.results,
        })
        .end();
    }
  } catch (err) {
    return res
      .status(statusCode.clientError.bad_request)
      .json({
        status: 3,
        message: config.errorText.value,
      })
      .end();
  }
};

export const Add_Student = async (req, res, next) => {
  try {
    const { name, dob, roll_no, std_class, division } = req.body;

    const studentobj = {
      name: encode(name),
      dob: encode(dob),
      roll_no: encode(roll_no),
      std_class: encode(std_class),
      division: encode(division),
    };

    const data = await add_student(studentobj);
    return res
      .status(statusCode.success.created)
      .json({
        status: 1,
        data: data,
      })
      .end();
  } catch (error) {
    res
      .status(statusCode.clientError.bad_request)
      .json({
        status: 3,
        message: config.errorText.value,
      })
      .end();
  }
};

export const Edit_Student = async (req, res, next) => {
  try {
    const studentId = req.params.id;
    const { name, dob, roll_no, std_class, division } = req.body;

    const studentobj = {
      name: encode(name),
      dob: encode(dob),
      roll_no: encode(roll_no),
      std_class: encode(std_class),
      division: encode(division),
    };

    const data = await edit_student(studentobj, studentId);
    return res
      .status(statusCode.success.ok)
      .json({
        status: 1,
        message: "Student Successfully Edited",
      })
      .end();
  } catch (error) {
    res
      .status(statusCode.clientError.bad_request)
      .json({
        status: 3,
        message: config.errorText.value,
      })
      .end();
  }
};

export const Delete_Student = async (req, res, next) => {
  try {
    const studentId = req.params.id;

    const data = await delete_student(studentId);
    return res
      .status(statusCode.success.ok)
      .json({
        status: 1,
        data: "Student Successfully Deleted",
      })
      .end();
  } catch (error) {
    res
      .status(statusCode.clientError.bad_request)
      .json({
        status: 3,
        message: config.errorText.value,
      })
      .end();
  }
};
