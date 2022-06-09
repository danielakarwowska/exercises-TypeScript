"use strict";
class Prop {
    constructor(n, a) {
        this.workers = [];
        this.name = n;
        this.age = a;
    }
    addWorkers(worker) {
        this.workers.push(worker);
    }
    printWorkers() {
        console.log(this.workers.length);
        console.log(this.workers);
    }
}
const account = new Prop('Daniela', 24);
account.addWorkers('Michal');
account.addWorkers('Eryk');
account.workers[2] = 'Ewa';
console.log(account);
//# sourceMappingURL=app.js.map