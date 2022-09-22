import Joi from "joi";

export const skillSchemas = {
  add_skill: Joi.object().keys({
    skill: Joi.string().required().alphanum().min(4).max(12),
    grade: Joi.string().required().alphanum().min(1).max(3),
  }),

  edit_skill: Joi.object().keys({
    skill: Joi.string().required().alphanum().min(4).max(12),
    grade: Joi.string().required().alphanum().min(1).max(3),
  }),

  edit_skill_id: Joi.object().keys({
    id: Joi.number().required(),
  }),

  delete_skill_id: Joi.object().keys({
    id: Joi.number().required(),
  }),
};
