const express = require("express");

const router = express.Router();

const Car = require('../controllers/Car');

//Get all cars.
router.get('/', async (req,res) => {

    let cars = await new Car().getCars();

    return res.render('home',{
        cars
    });

});


//Create a car.
router.post('/car', async (req,res) => {

    let {title} = req.body;

    await new Car().createCar({title},res);

    return res.redirect('/')

});

//Update a car.
router.put('/cars/:carId', async (req,res) => {

    let {carId} = req.params;

    await new Car().updateCar(carId,res);

    let cars = await new Car().getCars();

    return res.render('home',{
        cars
    });

});

//Delete a car.
router.delete('/cars/:carId', async (req,res) => {

    let {carId} = req.params;

    await new Car().deleteCar(carId);

    let cars = await new Car().getCars();

    return res.render('home',{
        cars
    });
    
});

module.exports = router;