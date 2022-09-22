import { encode } from "html-entities";
import { isEmptyObj } from "../controllers/common.js";
import { subjectExist, subjectIdExist } from "../models/subject.model.js";

export const addSubjectDbValidate = async (req, res, next) => {
  const { subject } = req.body;
  const subobj = {
    subject: encode(subject),
  };

  let err = {};
  const subExist = await subjectExist(subobj.subject);


  if (subExist.success) {
    err.subject = "Subject allready exists";
  }
  if (isEmptyObj(err)) { 
    next();
  } else {
    let return_err = { status: 2, errors: err };
    return res.status(409).json(return_err);
  }
};

export const editSubjectDbValidate = async (req, res, next) => {
  const subId = req.params.id;
 
  let err = {};
  const subIdExist = await subjectIdExist(subId);

  if (subIdExist.fail) {
    err.id = "id you are enetering does not exists";
  }
  console.log("subIdExist-->", subIdExist, err);
  if (isEmptyObj(err)) { 
    next();
  } else {
    let return_err = { status: 2, errors: err };
    return res.status(409).json(return_err);
  }
};
