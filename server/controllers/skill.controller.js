import { encode } from "html-entities";
import config from "../configuration/config.js";
import {
  add_skill,
  delete_skill,
  edit_skill,
  get_skills,
} from "../models/skill.model.js";
import { statusCode } from "./common.js";

export const Get_Skills = async (_, res) => {
  try {
    const data = await get_skills();
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
    res
      .status(statusCode.clientError.bad_request)
      .json({
        status: 3,
        message: config.errorText.value,
      })
      .end();
  }
};

export const Add_Skill = async (req, res) => {
  try {
    const { skill, grade } = req.body;

    const skillobj = {
      skill: encode(skill),
      grade: encode(grade),
    };

    const data = await add_skill(skillobj);
    return res
      .status(statusCode.success.created)
      .json({
        status: 1,
        data: data,
      })
      .end();
  } catch (error) {
    res
      .status(statusCode.success.ok)
      .json({
        status: 3,
        message: config.errorText.value,
      })
      .end();
  }
};

export const Edit_Skill = async (req, res, next) => {
  try {
    const skillId = req.params.id;
    const { skill, grade } = req.body;

    const skillobj = {
      skill: encode(skill),
      grade: encode(grade),
    };

    const data = await edit_skill(skillobj, skillId);
    return res
      .status(statusCode.success.ok)
      .json({
        status: 1,
        data: "Skill Successfully Edited",
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

export const Delete_Skill = async (req, res, next) => {
  try {
    const skillId = req.params.id;

    const data = await delete_skill(skillId);
    return res
      .status(statusCode.success.ok)
      .json({
        status: 1,
        data: "Skill Successfully Deleted",
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
