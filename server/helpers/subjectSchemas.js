import Joi from "joi";

export const subSchemas = {
  add_subject: Joi.object().keys({
    subject: Joi.string().required().alphanum().min(4).max(12),
    fa: Joi.number().integer().positive().required().min(0).max(80),
    f_oral: Joi.number().integer().positive().required().min(0).max(20),
    sa: Joi.number().integer().positive().required().min(0).max(80),
    s_oral: Joi.number().integer().positive().required().min(0).max(20),
  }),

  edit_subject: Joi.object().keys({
    subject: Joi.string().required().alphanum().min(4).max(12),
    fa: Joi.number().integer().positive().required().min(0).max(80),
    f_oral: Joi.number().integer().positive().required().min(0).max(20),
    sa: Joi.number().integer().positive().required().min(0).max(80),
    s_oral: Joi.number().integer().positive().required().min(0).max(20),
  }),

  edit_subject_id: Joi.object().keys({
    id: Joi.number().required(),
  }),

  delete_subject_id: Joi.object().keys({
    id: Joi.number().required(),
  }),
};
