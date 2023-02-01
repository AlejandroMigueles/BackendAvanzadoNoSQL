const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({ message : 'Bienvenido a la API de tareas' });
});

router.post('/', (req, res) => {
    res.status(201).json({ message : 'Tarea creada' });
});

router.put('/:id', (req, res) => {
    res.status(200).json({ message : `Tarea ${req.params.id} actualizada` });
});

router.delete('/:id', (req, res) => {
    res.status(200).json({ message : `Tarea ${req.params.id} borrada` });
});

module.exports = router;


