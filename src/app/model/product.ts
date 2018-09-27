
export class Product {
    constructor(
        public id ? : number,
        public manufacturerId?:number,
        public name?:string,
        public description?:string,
        public otherDetails?:string,
        public unit?:string,
        public precentProfit?: number,
        public inStock?: number,
    ){}

}
