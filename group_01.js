var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];

var employees = [atticus, jem, boo, scout];

loop(employees);

function loop(array) {
 for (i = 0; i <4; i++) {
   console.log(final(array[i]));
 }
}

function sti (employee) {
var bonus = 0;

if (employee[3] <=2) {
     bonus = 0;
}
if (employee[3] == 3) {
    bonus = bonus + 0.04;
}
else if (employee[3] == 4) {
    bonus = bonus + 0.06;
}
else if (employee[3] == 5) {
    bonus = bonus + 0.10;
}

if(employee[1].length == 4) {
bonus = bonus + 0.05;
}

if(employee[2] > 65000) {
 bonus = bonus - 0.01;
}

if(bonus>0.13) {
        bonus = 0.13;
    }

if (employee[3] <=2) {
      bonus = 0;
 }

return bonus;
}

function percentage (employee) {
    var percent = (totalBonus/(employee[2]))*100;
    return percent;
}

function final (employee) {
 var array = [];
 array.push(employee[0]);
 array.push(sti(employee));
 array.push(parseInt(employee[2])+parseInt(employee[2]*sti(employee)));
 array.push(Math.round(sti(employee)*parseInt(employee[2])));
 return array;
}
