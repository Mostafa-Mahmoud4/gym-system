const Member = require('../models/memberModel');

const addMember = (req, res) => {
    const data = req.body;
    Member.create(data, (err, result) => {
        if (err) return res.status(500).json(err);
        res.status(201).json(result);
    });
};

const getAllMembers = (req, res) => {
    Member.findAll((err, results) => {
        if (err) return res.status(500).json(err);
        res.status(200).json(results);
    });
};

const getMemberById = (req, res) => {
    const id = req.params.id;
    Member.findById(id, (err, result) => {
        if (err) return res.status(500).json(err);
        if (result.length === 0) return res.status(404).json({ message: 'Member not found' });

        const member = result[0];
        const today = new Date().toISOString().split('T')[0];
        if (member.membership_to < today) {
            return res.status(403).json({ message: 'This member is not allowed to enter the gym' });
        }
        res.status(200).json(member);
    });
};

const updateMember = (req, res) => {
    const id = req.params.id;
    const data = req.body;
    Member.update(id, data, (err, result) => {
        if (err) return res.status(500).json(err);
        res.status(200).json(result);
    });
};

const deleteMember = (req, res) => {
    const id = req.params.id;
    Member.softDelete(id, (err, result) => {
        if (err) return res.status(500).json(err);
        res.status(200).json(result);
    });
};

module.exports = {
    addMember,
    getAllMembers,
    getMemberById,
    updateMember,
    deleteMember
};

