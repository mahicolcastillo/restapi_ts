import ProductService from './services/Product.service';
import ProductDataSource from '../infrastructure/database/Product.datasource';

const productDataSource = new ProductDataSource();
const productService = new ProductService(productDataSource);

export default productService;