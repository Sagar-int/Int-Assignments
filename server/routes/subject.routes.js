import express from "express";
import {
  Add_Subject,
  Delete_Subject,
  Edit_Subject,
  Get_Subjects,
} from "../controllers/subject.controller.js";
import { addSubjectDbValidate, editSubjectDbValidate } from "../helpers/subjectDbValidate.js";
import { subSchemas } from "../helpers/subjectSchemas.js";
import { validateBody, validateParam } from "../helpers/Validate.js";
var router = express.Router();

//Get all Subjects
router.route("/all").get(Get_Subjects);

//Add Subject
router
  .route("/add")
  .post(
    validateBody(subSchemas.add_subject),
    addSubjectDbValidate,
    Add_Subject
  );

//Edit Subject
router
  .route("/edit/:id")
  .put(
    validateBody(subSchemas.edit_subject),
    validateParam(subSchemas.edit_subject_id),
    editSubjectDbValidate,
    Edit_Subject
  );

//Deleted Subject
router
  .route("/delete/:id")
  .delete(validateParam(subSchemas.delete_subject_id), Delete_Subject);

export default router;
