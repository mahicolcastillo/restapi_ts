import ProductController from './Product.controller';

describe('Testing product.controller endpoint', () => {
    describe('getAllProducts', () => {
        test('should return an array of products', async() => {
            const productService: any = {
                getAll: jest.fn().mockResolvedValue({
                    status: 200,
                    data: [{ id: 1 }, { id: 2 }],
                    error: {},
                })
            };

            const res: any = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };

            await ProductController(productService).getAllProducts(undefined, res);

            expect(Array.isArray(res.json.mock.calls[0][0].data)).toBe(true);
        });

        test('should return an status code 200', async() => { 
            const productService: any = {
                getAll: jest.fn().mockResolvedValue({
                    status: 200,
                    data: [{ id: 1 }, { id: 2 }],
                    error: {},
                })
            };

            const res:any = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };

            await ProductController(productService).getAllProducts(undefined, res);

            expect(res.status.mock.calls).toEqual([
                [200]
            ]);
        });
    });
});