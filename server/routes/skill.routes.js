import express from "express";
import {
  Add_Skill,
  Delete_Skill,
  Edit_Skill,
  Get_Skills,
} from "../controllers/skill.controller.js";
import {
  addSkillDbValidate,
  editskillDbValidate,
} from "../helpers/skillDbValidate.js";
import { skillSchemas } from "../helpers/skillSchemas.js";
import { validateBody, validateParam } from "../helpers/Validate.js";
var router = express.Router();

//Get all Skills
router.route("/all").get(Get_Skills);

//Add Subject
router
  .route("/add")
  .post(validateBody(skillSchemas.add_skill), addSkillDbValidate, Add_Skill);

//Edit Subject
router
  .route("/edit/:id")
  .put(
    validateBody(skillSchemas.edit_skill),
    validateParam(skillSchemas.edit_skill_id),
    editskillDbValidate,
    Edit_Skill
  );

//Deleted Subject
router
  .route("/delete/:id")
  .delete(
    validateParam(skillSchemas.delete_skill_id),
    Delete_Skill
  );

export default router;
