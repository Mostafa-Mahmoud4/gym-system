const db = require('../db');

const Trainer = {
    create: (data, callback) => {
        const query = 'INSERT INTO trainers SET ?';
        db.query(query, data, callback);
    },
    findAll: (callback) => {
        const query = 'SELECT * FROM trainers';
        db.query(query, callback);
    },
    findById: (id, callback) => {
        const query = 'SELECT * FROM trainers WHERE id = ?';
        db.query(query, [id], callback);
    },
    update: (id, data, callback) => {
        const query = 'UPDATE trainers SET ? WHERE id = ?';
        db.query(query, [data, id], callback);
    },
    delete: (id, callback) => {
        const query = 'DELETE FROM trainers WHERE id = ?';
        db.query(query, [id], callback);
    }
};

module.exports = Trainer;

