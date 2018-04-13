export interface Prod {
    name: string;
    price: number;
    inventory: number;
}

export class ProdInv implements Prod {
    name: string ='';
    price: number ;
    inventory: number

    constructor(values: Prod){
        Object.assign(this,values);
    }
}

var task = {} as Prod;

var ct = new ProdInv(task)

console.log(ct);