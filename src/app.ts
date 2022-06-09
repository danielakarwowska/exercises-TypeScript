class Prop {
  name:string;
  age:number
  
  constructor(arg:string,n:number){
  this.name=arg;
  this.age=n}
}

const account=new Prop('Daniela',24)

console.log(account)