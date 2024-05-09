/*list of values we have initiallty been given*/
const radius = 5;
const PI =3.1415
const area = PI * radius * radius;
const plantareaspace = 0.8;
const week1 = 20
const week2 = 40
const week3 = 80

/* Area of plant math*/
/*This is where we multiply # of flowers times space availble
const week1 = flowerspace * week1plants*/

const area_of_plants_week_1 = plantareaspace * week1;
const area_of_plants_week_2 = plantareaspace * week2; 
const area_of_plants_week_3 = plantareaspace * week3;

/*above this link shows formula used to get total area of 
plants for each week listed. from here , take this number, multiply by 
const area, and multiply by 100 to get perfentage of space the plants take up each week.*/

const week_1percentage = area_of_plants_week_1/area *100;
const week_2percentage = area_of_plants_week_2/area *100;
const week_3percentage = area_of_plants_week_3/area *100;

/* above is where we used the formula each week to get total area percentage
of space plants take up, compared to total area.*/



function plantgrowth(percentage)
{if (percentage>80){
    console.log ("pruned")
} 
if (percentage<80&&percentage>50)
{
console.log("monitored")
}
if (percentage<50){
console.log("planted")
}

}

plantgrowth(week_1percentage)
plantgrowth(week_2percentage)
plantgrowth(week_3percentage)
console.log (week_3percentage)
//** this is the end of part one above part two starts below */

const week10 = 100 * 2**10;
const Week_one = 100;
console.log (week10)
const week10_area = plantareaspace * week10;
console.log (week10_area);

 

try {
   if(week10_area > area)
   {throw "way too small my friend"}  
}
catch (error) {
    console.log(error);
}