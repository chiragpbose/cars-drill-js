/*
// ==== Problem #5 ====
// The car lot manager needs to find out how many cars are older than the year 2000.
 Using the array you just obtained from the previous problem, 
 find out how many cars were made before the year 2000 
 and return the array of older cars and log its length.
*/
function problem5fn(inventory){   
    let arr=[];
    for(let i=0; i<inventory.length; i++)
    {
        arr.push(inventory[i].car_year);
    }
    let arrOP=[];
    for(let j=0; j<arr.length; j++)
    {
        if(arr[j]>=2000) arrOP.push(arr[j]);
    }
    return arrOP.length;
}

module.exports.problem5=problem5fn;