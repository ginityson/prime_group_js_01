function Employee(employeeName, employeeNum, employeeAnnual, employeeRating) {
  this.name = employeeName,
  this.num = employeeNum,
  this.annual = employeeAnnual,
  this.rating = employeeRating;
}

var atticusEmployee = new Employee('Atticus', '2405', '47000', 3);
var jemEmployee = new Employee('Jem', '62347', '63500', 4);
var booEmployee = new Employee('Boo', '11435', '54000', 3);
var scoutEmployee = new Employee('Scout', '6243', '74750', 5);

var employees = [atticusEmployee, jemEmployee, booEmployee, scoutEmployee];

loop(employees);

function loop(array) {
for (var i = 0; i <4; i++) {
console.log(final(array[i]));
}
}

function sti (employee) {
var bonus = 0;

if (employee.rating <= 2) {
    bonus = 0;
}
if (employee.rating == 3) {
   bonus = bonus + 0.04;
} else if (employee.rating == 4) {
   bonus = bonus + 0.06;
} else if (employee.rating == 5) {
   bonus = bonus + 0.10;
}
if(employee.num.length == 4) {
bonus = bonus + 0.05;
}
if(employee.annual > 65000) {
bonus = bonus - 0.01;
}
if(bonus > 0.13) {
   bonus = 0.13;
}
if (employee.rating <= 2) {
bonus = 0;
}
return bonus;
}

function final (employee) {
var array = [];
array.push(employee.name);
array.push(sti(employee));
array.push(parseInt(employee.annual)+parseInt(employee.annual*sti(employee)));
array.push(Math.round(sti(employee)*parseInt(employee.annual)));
return array;
}
