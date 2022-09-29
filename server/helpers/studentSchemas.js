import Joi from "joi";

export const subSchemas = {
  add_student: Joi.object().keys({
    name: Joi.string().required().alphanum().min(4).max(12),
    dob: Joi.date()
      .max("01-01-2003")
      .iso()
      .messages({ "date.format": `Date format is YYYY-MM-DD` })
      .required(),
    roll_no: Joi.string().required().alphanum().min(4).max(12),
    std_class: Joi.string().required().alphanum().min(2).max(4),
    division: Joi.number().integer().positive().required().min(0).max(20),
  }),

  edit_student: Joi.object().keys({
    name: Joi.string().required().alphanum().min(4).max(12),
    dob: Joi.date()
      .max("01-01-2003")
      .iso()
      .messages({ "date.format": `Date format is YYYY-MM-DD` })
      .required(),
    roll_no: Joi.string().required().alphanum().min(4).max(12),
    std_class: Joi.string().required().alphanum().min(2).max(4),
    division: Joi.number().integer().positive().required().min(0).max(20),
  }),

  edit_student_id: Joi.object().keys({
    id: Joi.number().required(),
  }),

  delete_student_id: Joi.object().keys({
    id: Joi.number().required(),
  }),
};
