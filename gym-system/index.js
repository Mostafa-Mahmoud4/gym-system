const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const memberRoutes = require('./routes/members');
const trainerRoutes = require('./routes/trainers');
const statsRoutes = require('./routes/stats');

app.use('/members', memberRoutes);
app.use('/trainers', trainerRoutes);
app.use('/stats', statsRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

