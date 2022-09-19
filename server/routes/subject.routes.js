import express from 'express';
import  {Add_Subject, Delete_Subject, Edit_Subject, Get_Subjects}  from '../controllers/subject.controller.js';
var router = express.Router();

//Get all Subjects
router.route('/all').get(Get_Subjects);

//Add Subject
router.route('/add').post(Add_Subject);

//Edit Subject
router.route('/edit/:id').put(Edit_Subject);

//Deleted Subject
router.route('/delete/:id').delete(Delete_Subject);



export default router;