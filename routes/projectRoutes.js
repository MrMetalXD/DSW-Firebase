const express = require('express');

const projectController  = require('../controllers/projectController');

// const authenticateToken = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/',projectController.getAllProjects);
router.post('/',projectController.createProject);

module.exports = router;
