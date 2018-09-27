import { PoItem } from "./po-item";
import { SoItem } from "./so-item";

export class SalesOrder {
    constructor(
        public id ?: number,
        public  soItems ?: SoItem[],
    
    ){}
}
