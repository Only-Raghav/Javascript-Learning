// Destructuring Objects 

const course = {
    coursename: "js in hindi",
    price: "999",
    teacher: "raghav"

}

//  for accessing data we do ==>>> 
// course.teacher  or course["price"];
// but we have one more syntax 

const {teacher} = course;

console.log(teacher);  // raghav

// giving another name like this
const {teacher: master} = course;

console.log(master);  // raghav