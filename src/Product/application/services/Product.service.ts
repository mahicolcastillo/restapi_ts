import { HTTP_STATUS } from '../../../utils/http';
import { IResponse } from '../../../utils/IResponse';
import ProductRepository from '../../domain/Product.repository';
import ProductEntity from '../../domain/Product.entity';

class ProductService {
    constructor(public productRepository: ProductRepository){}

    async getAll(): Promise<IResponse<ProductEntity[]>> {
        try {
            const productModel = await this.productRepository.getAll();
            return { status: HTTP_STATUS.OK, data: productModel };
        } catch (e) {
            return { status: HTTP_STATUS.INTERNAL_ERROR, error: e.message };
        }
    }
}

export default ProductService;