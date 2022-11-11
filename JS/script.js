const courseList = [
  {code: "ACIT 1620", name: "Web Fundamental Technologies"},
  {code: "ACIT 1515", name: "Scripting for IT"},
  {code: "ACIT 1420", name: "Intro to System Admin"},
]

let ask;
// let ask = prompt('enter');
// console.log(ask)

do{
ask = prompt('enter');
}while(ask.length != 4 || isNaN(ask));

for (let course in courseList){
  c = courseList[course]["code"];
  d = courseList[course]["name"];
  if(c.includes(ask)){
    console.log(`Yes I am taking the course ${c} - ${d}`);
    break;
  }
  // else if(!(c.includes(ask))){
  //   continue;
  // }
  else{
    courseList.push({code: ask, name: null});
    console.log("New course number added.");
    continue;
  }
};
console.log(courseList)


// for(let crs in courseList){
//   let d = courseList[crs]["code"];
//   let e = courseList[crs]["name"];
//   if(d.includes(ask)) {
//     console.log(`Yes I am taking the course ${d} - ${e}`);
//   }else if(ask > 0 || ask.length != 4) {
//     let ask = prompt();
// }
// }
