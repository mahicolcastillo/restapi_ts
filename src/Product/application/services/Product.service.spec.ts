import ProductService from './Product.service';

describe('Test product.service', () => {
    describe('getAll', () => {
        test('should return array of objects of products', async() => {
            const productRepository: any = {
                getAll: jest.fn().mockResolvedValue([
                    { id: 1 },
                    { id: 2 },
                ])
            };

            const productService = new ProductService(productRepository);
            const response = await productService.getAll();
            
            expect(Array.isArray(response.data)).toBe(true);
        });

        test('should return status code 200', async() => {  
            const productRepository: any = {
                getAll: jest.fn().mockResolvedValue([
                    { id: 1 },
                    { id: 2 },
                ])
            };

            const productService = new ProductService(productRepository);
            const response = await productService.getAll();
            
            expect(response.status).toBe(200);
        });

        test('should return status code 500', async() => {
            const productRepository: any = {
            };

            const productService = new ProductService(productRepository);
            const response = await productService.getAll();

            expect(response.status).toBe(500);
        });

        test('should return string error', async() => {
            const productRepository: any = {
            };

            const productService = new ProductService(productRepository);
            const response = await productService.getAll();

            expect(typeof response.error).toBe("string");
        });
    });
});