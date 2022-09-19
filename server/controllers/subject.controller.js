import {
  add_subject,
  delete_subject,
  edit_subject,
  get_subjects,
} from "../models/subject.model.js";
// const Entities = require('html-entities').AllHtmlEntities;
// const entities = new Entities();
import { encode } from "html-entities";
import config from "../configuration/config.js";

export const Get_Subjects = async (req, res, next) => {
  try {
    await get_subjects()
      .then((data) => {
        res
          .status(200)
          .json({
            status: 1,
            data: data,
          })
          .end();
      })
      .catch((err) => {
        res
          .status(400)
          .json({
            status: 3,
            message: config.errorText.value,
          })
          .end();
      });
  } catch (err) {
    res
      .status(400)
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

    const subobj = {
      subject: encode(subject),
      fa: encode(fa),
      f_oral: encode(f_oral),
      sa: encode(sa),
      s_oral: encode(s_oral),
    };

    await add_subject(subobj)
      .then(function (data) {
        res
          .status(200)
          .json({
            status: 1,
            data: data,
          })
          .end();
      })
      .catch((err) => {
        res
          .status(400)
          .json({
            status: 3,
            message: config.errorText.value,
          })
          .end();
      });
  } catch (error) {
    res
      .status(400)
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

    await edit_subject(subobj, subId)
      .then(() => {
        res
          .status(200)
          .json({
            status: 1,
            data: "Subject Successfully Edited",
          })
          .end();
      })
      .catch((err) => {
        res
          .status(400)
          .json({
            status: 3,
            message: config.errorText.value,
          })
          .end();
      });
  } catch (error) {
    res
      .status(400)
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

    await delete_subject(subId)
      .then(() => {
        res
          .status(200)
          .json({
            status: 1,
            data: "Subject Successfully Deleted",
          })
          .end();
      })
      .catch((err) => {
        res
          .status(400)
          .json({
            status: 3,
            message: config.errorText.value,
          })
          .end();
      });
  } catch (error) {
    res
      .status(400)
      .json({
        status: 3,
        message: config.errorText.value,
      })
      .end();
  }
};
