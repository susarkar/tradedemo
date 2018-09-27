import { PurchaseOrder } from "./purchase-order";

export class Supplier {
    constructor(
        public id?:number,
        public name?:string,
        public phone?:string,
        public email?:string,
        public otherDetails?:string
    ) {}
    
}
