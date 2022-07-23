export default interface Product {
    _id?            : string;
    name            : string;
    sku             : string;
    salePrice       : number;
    purchasePrice   : number;
    status?         : boolean;
}