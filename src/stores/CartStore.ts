import { create } from "zustand"
import { ProductProps } from "../../utils/data/products"
import * as cartInMemory from "./helpers/cartInMemory"

export type ProductCartProps = ProductProps & {
	quantity: number
}

type StateProps = {
	products: ProductCartProps[]
	addTocart: (product: ProductProps) => void
}

export const useCartStore = create<StateProps>((set) => ({
	products: [],
	addTocart: (product) => set((state) => ({ products: cartInMemory.AddProductToCart(state.products, product) })),
}))
