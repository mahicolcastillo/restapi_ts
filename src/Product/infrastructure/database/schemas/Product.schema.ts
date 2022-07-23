import { Schema, model } from 'mongoose';
import Product from '../../../domain/Product.entity';

const productSchema = new Schema<Product>({
    name            : {type: String, required: true},
    sku             : {type: String, required: true},
    salePrice       : {type: Number, required: true},
    purchasePrice   : {type: Number, required: true},
    status          : {type: Boolean, default: true},
});

export default model<Product>('Product', productSchema);