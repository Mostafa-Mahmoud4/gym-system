const db = require('../db');

const Member = {
    create: (data, callback) => {
        const query = 'INSERT INTO members SET ?';
        db.query(query, data, callback);
    },
    findAll: (callback) => {
        const query = 'SELECT * FROM members';
        db.query(query, callback);
    },
    findById: (id, callback) => {
        const query = 'SELECT * FROM members WHERE id = ?';
        db.query(query, [id], callback);
    },
    update: (id, data, callback) => {
        const query = 'UPDATE members SET ? WHERE id = ?';
        db.query(query, [data, id], callback);
    },
    softDelete: (id, callback) => {
        const query = 'UPDATE members SET status = "freeze" WHERE id = ?';
        db.query(query, [id], callback);
    }
};

module.exports = Member;

