import { Supplier } from "./supplier";
import { PoItem } from "./po-item";

export class PurchaseOrder {
    constructor(
        public id?:number,
        public supplierId?:number,
        public invoiceNumber?:string,
        public deliveryDate?:Date,
        public receivedDate?:Date,
        public otherDetails?:string ,
        public purchaseOrderItems?:PoItem[]

    ){}

}
