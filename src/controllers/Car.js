const db = require('../config/db');

class Car {

    //get all cars.
    async getCars(){

        let results = await db.query(
            `SELECT * FROM cars`
        ).catch(console.log);

        return results.rows;
    };

    //create a car.
    async createCar(car){

        await db.query('INSERT INTO cars (title, checked) VALUES ($1, $2)',[car.title,false])
        .catch(console.log);

        return;        
    };

    //update a car.
    async updateCar(carId){

        //get the previous car.
        let original_car = await db.query(
            `SELECT * FROM cars WHERE id=$1`,[parseInt(carId)]
        ).catch(console.log);

        //update
        await db.query(`UPDATE cars SET checked=$1 WHERE id=$2`,[!original_car.rows[0].checked,parseInt(carId)])
        .catch(console.log);

        return;
    };

    //delete a car.
    async deleteCar(carId){
        
        //delete car
        await db.query(`DELETE FROM cars WHERE id=$1`,[parseInt(carId)])
        .catch(console.log);

        return;        
    };

};

module.exports = Car;