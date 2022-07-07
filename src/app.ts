class Department {
  employees: string[] = [];

  constructor
  (private readonly id: string, public name: string) {
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    // validation etc
    // this.id = 'd2';
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
  }

  addEmployee(name:string){
     if(name==='Maria'){
       return
     }
     this.employees.push(name)
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }
}

const hobbies = ['Sports','Cinema','Animals']
const extraHobbies = ['Swimming','walking']
extraHobbies.push(...hobbies)
console.log(extraHobbies)

const person={
  name: 'Daniela',
  age: 34
}
const newPerson = { ...person }
console.log(newPerson)

const add = (...numbers:number[]) => {
  let total=0
  for(let number of numbers){
    total+=number
  }
  return total
}
console.log(add(5,2,3))
console.log(add(5,2,3,4))

const addNumbers = add(1,2,3,4,5)
console.log(addNumbers)

const it = new ITDepartment('d1', ['Max']);

it.addEmployee('Maria');
it.addEmployee('Manu');

it.describe();
it.name = 'NEW NAME';
it.printEmployeeInformation();

console.log(it);

const accounting = new AccountingDepartment('d2', []);

accounting.addReport('Something went wrong...');

accounting.printReports();