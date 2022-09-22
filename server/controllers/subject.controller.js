import {
  add_subject,
  delete_subject,
  edit_subject,
  get_subjects,
} from "../models/subject.model.js";
import { encode } from "html-entities";
import config from "../configuration/config.js";
import { statusCode } from "./common.js";

export const Get_Subjects = async (req, res, next) => {
  try {
    const data = await get_subjects();

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

export const Add_Subject = async (req, res, next) => {
  try {
    const { subject, fa, f_oral, sa, s_oral } = req.body;
    const FA = Number(fa);
    const F_ORAL = Number(f_oral);
    const SA = Number(sa);
    const S_ORAL = Number(s_oral);

    const total_mark = FA + F_ORAL + SA + S_ORAL;
    const subobj = {
      subject: encode(subject),
      fa: encode(fa),
      f_oral: encode(f_oral),
      sa: encode(sa),
      s_oral: encode(s_oral),
      total_mark: encode(total_mark),
    };

    const data = await add_subject(subobj);
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

export const Edit_Subject = async (req, res, next) => {
  try {
    const subId = req.params.id;
    const { subject, fa, f_oral, sa, s_oral } = req.body;

    const subobj = {
      subject: encode(subject),
      fa: encode(fa),
      f_oral: encode(f_oral),
      sa: encode(sa),
      s_oral: encode(s_oral),
    };

    const data = await edit_subject(subobj, subId);
    return res
      .status(statusCode.success.ok)
      .json({
        status: 1,
        message: "Subject Successfully Edited",
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

export const Delete_Subject = async (req, res, next) => {
  try {
    const subId = req.params.id;

    const data = await delete_subject(subId);
    return res
      .status(statusCode.success.ok)
      .json({
        status: 1,
        data: "Subject Successfully Deleted",
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
