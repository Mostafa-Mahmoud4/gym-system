const Member = require('../models/memberModel');

const getAllRevenues = (req, res) => {
    Member.findAll((err, members) => {
        if (err) return res.status(500).json(err);
        const totalRevenue = members.reduce((sum, member) => sum + parseFloat(member.membership_cost), 0);
        res.status(200).json({ totalRevenue });
    });
};

const getTrainerRevenues = (req, res) => {
    const trainerId = req.params.id;
    Member.findAll((err, members) => {
        if (err) return res.status(500).json(err);
        const trainerMembers = members.filter(member => member.trainer_id == trainerId);
        const totalRevenue = trainerMembers.reduce((sum, member) => sum + parseFloat(member.membership_cost), 0);
        res.status(200).json({ totalRevenue });
    });
};

module.exports = {
    getAllRevenues,
    getTrainerRevenues
};

