import Product from "../../domain/Product.entity";
import ProductRepository from "../../domain/Product.repository";
import ProductSchema from "./schemas/Product.schema";

class ProductDataSource implements ProductRepository {
    public async getAll(): Promise<Product[]> {
        const productSchema: Product[] = await ProductSchema.find();
        return productSchema;
    }
}

export default ProductDataSource;