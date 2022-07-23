import { Request, Response } from 'express';
import ProductService from '../../application/services/Product.service';

const ProductController = (productService: ProductService) => ({
    getAllProducts: async(req: Request, res: Response) => {
        const { status, data, error } = await productService.getAll();
        res.status(status).json({ data, error });
    },
});

export default ProductController;