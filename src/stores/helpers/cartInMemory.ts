import { ProductProps } from '../../../utils/data/products'
import { ProductCartProps } from '../CartStore'

export const AddProductToCart = (
    products: ProductCartProps[],
    newProduct: ProductProps
) => {
    const productExisting = products.find(({ id }) => newProduct.id === id)
    if (productExisting) {
        return products.map((product) => {
            return product.id === productExisting.id
                ? { ...product, quantity: product.quantity + 1 }
                : product
        })
    }

    return [...products, { ...newProduct, quantity: 1 }]
}

export const remove = (
    products: ProductCartProps[],
    productRemoveId: string
) => {
    const updatedProducts = products.map((product) =>
        product.id === productRemoveId
            ? {
                  ...product,
                  quantity: product.quantity > 1 ? product.quantity - 1 : 0,
              }
            : product
    )

    return updatedProducts.filter((product) => product.quantity > 0)
}
