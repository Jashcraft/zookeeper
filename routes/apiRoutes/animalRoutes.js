const router = require('express').Router();
const { filterByQuery, findById, createNewAnimal, validateAnimal } = require('../../lib/animals');
const { animals } = require('../../data/animals');

router.get('/animals', (req, res) => {
    let results = animals;
    if (req.query) {
        results = filterByQuery(req.query, results);
        console.log(req);
    }
    res.json(results);
});

router.get('/animals/:id', (req, res) => {
    const result = findById(req.params.id, animals);
    res.json(result);
});

router.post('/animals', (req, res) => {
    //req.body is where our incoming content wil be
    req.body.id = animals.length.toString();
    if (!validateAnimal(req.body)){
        req.statusCode(400).send('The Animal is not properly formatted.');
    } else {
    const animal = createNewAnimal(req.body, animals);
    res.json(animal);
    }
});


module.exports = router;