class Prop {
  name:string;
  age:number
  workers:string[]=[]
  
  constructor(n:string,a:number){
  this.name=n;
  this.age=a
}
addWorkers(worker:string){
  this.workers.push(worker)
}
printWorkers(){
  console.log(this.workers.length)
  console.log(this.workers)
}
}

const account=new Prop('Daniela',24)

account.addWorkers('Michal')
account.addWorkers('Eryk')
account.workers[2]='Ewa'
console.log(account)