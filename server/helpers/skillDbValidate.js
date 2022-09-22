import { encode } from "html-entities";
import { isEmptyObj } from "../controllers/common.js";
import { skillExist, skillIdExist } from "../models/skill.model.js";


export const addSkillDbValidate = async (req, res, next) => {
  const { skill } = req.body;
  const skillobj = {
    skill: encode(skill),
  };

  let err = {};
  const skill_exist = await skillExist(skillobj.skill);


  if (skill_exist.success) {
    err.skill = "skill allready exists";
  }
  if (isEmptyObj(err)) { 
    next();
  } else {
    let return_err = { status: 2, errors: err };
    return res.status(409).json(return_err);
  }
};

export const editskillDbValidate = async (req, res, next) => {
  const skillId = req.params.id;
 
  let err = {}; 
  const skill_id_exist = await skillIdExist(skillId);

  if (skill_id_exist.fail) {
    err.id = "id you are enetering does not exists";
  }
  if (isEmptyObj(err)) { 
    next();
  } else {
    let return_err = { status: 2, errors: err };
    return res.status(409).json(return_err);
  }
};
