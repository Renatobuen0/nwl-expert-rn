import { create } from 'zustand'
import { ProductProps } from '../../utils/data/products'
import * as cartInMemory from './helpers/cartInMemory'
import { createJSONStorage, persist } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage'

export type ProductCartProps = ProductProps & {
    quantity: number
}

type StateProps = {
    products: ProductCartProps[]
    addTocart: (product: ProductProps) => void
    remove: (productId: string) => void
    clear: () => void
}

export const useCartStore = create(
    persist<StateProps>(
        (set) => ({
            products: [],
            addTocart: (product) =>
                set((state) => ({
                    products: cartInMemory.AddProductToCart(
                        state.products,
                        product
                    ),
                })),

            remove: (productId: string) =>
                set((state) => ({
                    products: cartInMemory.remove(state.products, productId),
                })),

            clear: () => set({ products: [] }),
        }),

        {
            name: 'nlw-expert:cart-storage',
            storage: createJSONStorage(() => AsyncStorage),
        }
    )
)
