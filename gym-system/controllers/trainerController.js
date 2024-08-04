const Trainer = require('../models/trainerModel');
const Member = require('../models/memberModel');

const addTrainer = (req, res) => {
    const data = req.body;
    Trainer.create(data, (err, result) => {
        if (err) return res.status(500).json(err);
        res.status(201).json(result);
    });
};

const getAllTrainers = (req, res) => {
    Trainer.findAll((err, trainers) => {
        if (err) return res.status(500).json(err);

        const trainersWithMembers = trainers.map(trainer => {
            return new Promise((resolve, reject) => {
                Member.findAll((err, members) => {
                    if (err) reject(err);
                    const trainerMembers = members.filter(member => member.trainer_id === trainer.id);
                    resolve({ ...trainer, members: trainerMembers });
                });
            });
        });

        Promise.all(trainersWithMembers).then(results => {
            res.status(200).json(results);
        }).catch(err => res.status(500).json(err));
    });
};

const getTrainerById = (req, res) => {
    const id = req.params.id;
    Trainer.findById(id, (err, result) => {
        if (err) return res.status(500).json(err);
        if (result.length === 0) return res.status(404).json({ message: 'Trainer not found' });

        Member.findAll((err, members) => {
            if (err) return res.status(500).json(err);
            const trainerMembers = members.filter(member => member.trainer_id === id);
            res.status(200).json({ ...result[0], members: trainerMembers });
        });
    });
};

const updateTrainer = (req, res) => {
    const id = req.params.id;
    const data = req.body;
    Trainer.update(id, data, (err, result) => {
        if (err) return res.status(500).json(err);
        res.status(200).json(result);
    });
};

const deleteTrainer = (req, res) => {
    const id = req.params.id;
    Trainer.delete(id, (err, result) => {
        if (err) return res.status(500).json(err);
        res.status(200).json(result);
    });
};

module.exports = {
    addTrainer,
    getAllTrainers,
    getTrainerById,
    updateTrainer,
    deleteTrainer
};

