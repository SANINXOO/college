import { Router } from "express";
import * as controller from "./controller.js";
import Auth from "./Auth.js";

const router=Router();

router.route("/adduser").post(controller.addUser);
router.route("/login").post(controller.login);
router.route("/home").get(Auth,controller.home);
router.route("/addstaff").post(controller.addStaff);
router.route("/getstaff").get(controller.getStaff);
router.route("/getstaffdetails/:id").post(controller.getStaffulldata);
router.route("/delstaffdata/:id").delete(controller.delStaffData);
router.route("/editstaffdetails/:id").patch(controller.editStaffdetails);
router.route("/stafflogin").post(controller.staffLogin);
router.route("/getusername/:phone").get(controller.forgotUsername);
router.route("/forgotpwd/:phone").patch(controller.staffFrgtPwd);
router.route("/addstudent").post(controller.addStudent)
router.route("/getstudent").get(controller.getStudent);
router.route("/delstudentdata/:id").delete(controller.delStudentData);
router.route("/getstudentfulldetails/:id").post(controller.getStudentfulldata);
router.route("/editstudentdetails/:id").patch(controller.EditStudentDetails);
router.route("/studentlogin").post(controller.StudentLogin);
router.route("/getdetsilsloginedstudent").get(Auth,controller.GetDtsilsLoginedStudent);




export default router;