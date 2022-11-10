/* // ==== Problem #3 ====
// The marketing team wants the car models listed alphabetically on the website. 
Execute a function to Sort all the car model names into alphabetical order and log 
the results in the console as it was returned.
*/

function problem3fn(inventory){
  let arrCarModel=[];
    for(let i=0; i<inventory.length; i++)
    {
        arrCarModel.push(inventory[i].car_model);
    }
    return arrCarModel.sort();;
};

module.exports.problem3=problem3fn;