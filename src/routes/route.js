const express = require('express');
const { Router } = require('express');
const collageController = require('../Controller/collegeController')
const internController = require('../Controller/internController')
const router = express.Router();

const collegeModel = require('../Models/collegeModel')

router.post("/colleges", collageController.Collage) 

router.post('/interns', internController.Intern)

router.get('/collegeDetail', internController.collegeDetail)




module.exports = router;