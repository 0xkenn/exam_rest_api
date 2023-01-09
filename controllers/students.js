// Import models
const Student = require('../models/student');

// Get all students
exports.getAllStudents = (req, res) => {
  Student.find({})
    .populate('teacher')
    .exec((err, students) => {
      if (err) res.status(500).send(err);
      res.status(200).json(students);
    });
};

// Get student by ID
exports.getStudentById = (req, res) => {
  Student.findById(req.params.id)
    .populate('teacher')
    .exec((err, student) => {
      if (err) res.status(500).send(err);
      if (!student) res.status(404).send('Student not found');
      res.status(200).json(student);
    });
};

// Create new student
