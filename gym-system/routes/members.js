const express = require('express');
const router = express.Router();
const memberController = require('../controllers/memberController');

router.post('/', memberController.addMember);
router.get('/', memberController.getAllMembers);
router.get('/:id', memberController.getMemberById);
router.put('/:id', memberController.updateMember);
router.delete('/:id', memberController.deleteMember);

module.exports = router;

