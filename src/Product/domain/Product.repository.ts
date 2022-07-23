import Product from './Product.entity';

interface ProductRepository {
    getAll(): Promise<Product[]>;
}

export default ProductRepository;