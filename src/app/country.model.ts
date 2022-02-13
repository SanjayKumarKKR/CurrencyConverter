import { Currency } from "./currency.model";
export class Countries {
    constructor(id:number, isoAlpha2: string, isoAlpha3:string, isoNumeric:number, currency: Currency, name:string, flag:string){
        this.id = id;
        this.isoAlpha2=isoAlpha2;
        this.isoAlpha3=isoAlpha3;
        this.isoNumeric=isoNumeric
        this.currency =currency;
        this.name =name;
        this.flag = flag;
    }
    isoAlpha2: string;
    isoAlpha3:string;
    flag:string;
    isoNumeric:number;
    id:number;
    currency: Currency;
    name: string;
}