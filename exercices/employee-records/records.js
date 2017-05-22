var employees = [];

function employee(Name, Jobtitle, Salary, Status ) {
    this.nom = Name,
    this.travail = Jobtitle,
    this.salaire = Salary,
    this.status = Status
    this.printEmployeeForm = function(){
console.log ("name: " + this.nom + ",  Jobtitle:  " + this.travail + ", Salary: " + this.salaire + ",  Status: " + this.status )
        
        
    }
}
var employee1 = new employee('Joe ', "scissor" ,  4000 , ' junior');
employee1.printEmployeeForm();

var employee2 = new employee('sami ', "hammer" ,  3000 , ' senior');
employee2.printEmployeeForm();

var employee3 = new employee('dog ', "toothbrush" ,  1000 , ' tool');
employee3.printEmployeeForm();

employees.push(employee1);
employees.push(employee2);
employees.push(employee3);

console.log(employee1)
console.log(employee2)
console.log(employee3)