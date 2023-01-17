//updating a user.
function updateUser(userId){

    //contact server
    return $.ajax({
        method:'put',
        
        url:`/users/${userId}`,

        contentType:'application/json',

        cache:false,

        error: error => {

            console.error(error);

        }
                
    });

};

//deleting a user.
function deleteCar(carId) {

    //contact server
    return $.ajax({
        method:'delete',

        url:`/cars/${carId}`,

        contentType:'application/json',

        cache:false,

        success: () => {

            location.reload()

        },

        error: error => {

            console.error(error);

        }
    });
}