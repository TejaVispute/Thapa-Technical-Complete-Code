const express = require("express");
const router = new express.Router();
const Student = require("../models/students");


router.post("/students", async (req, res) => {
    try {
        const user = new Student(req.body);
        const createuser = await user.save();
        res.status(201).send(createuser);
    } catch (error) { res.status(400).send(error) }
});


// read data using get method

router.get("/students", async (req, res) => {
    try {
        const studentsData = await Student.find();
        res.send(studentsData);
    } catch (error) {
        res.send(error);
    }
});


// Get individual student data using id

router.get("/students/:id", async (req, res) => {

    try {
        const _id = req.params.id;
        const studentdata = await Student.findById({ _id });
        if (!studentdata) {
            return res.status(404).send();
        } else {
            res.send(studentdata);
        }

    } catch (error) {
        res.status(500).send(error);
    }
});




// update students by their id
router.patch("/students/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const updateStudents = await Student.findByIdAndUpdate(_id, req.body, { new: true });
        res.send(updateStudents)
    } catch (error) {
        res.status(404).send(error);
    }
});



// delete the student from db by id

router.delete("/students/:id", async (req, res) => {
    try {
        const deleteStudent = await Student.findByIdAndDelete(req.params.id);
        if (!req.params.id) {
            return res.status(400).send();
        }
        res.send(deleteStudent)
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;