import { useState, useRef } from 'react'
import { CategoryButton } from '@/components/Category'
import { Header } from '@/components/Header'
import { View, FlatList, SectionList, Text } from 'react-native'
import { CATEGORIES, MENU, ProductProps } from '../../utils/data/products'
import Product from '@/components/Product'
import { Link } from 'expo-router'
import { useCartStore } from '@/stores/CartStore'

const Home = () => {
    const cartStore = useCartStore()
    const sectionListRef = useRef<SectionList<ProductProps>>(null)
    const [category, setCategory] = useState(CATEGORIES[0])

    const handleCategorySelect = (category: string) => {
        setCategory(category)
        const sectionIndex = CATEGORIES.findIndex((item) => item === category)
        if (sectionListRef.current) {
            sectionListRef.current.scrollToLocation({
                sectionIndex,
                itemIndex: 0,
                viewOffset: 100,
                animated: true,
            })
        }
    }
    const cartQuantityItems = cartStore.products.reduce(
        (total, product) => total + product.quantity,
        0
    )

    return (
        <View className="flex-1 pt-8">
            <Header
                headerTitle="Faça o seu pedido"
                cartItems={cartQuantityItems}
            />
            <FlatList
                data={CATEGORIES}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                    <CategoryButton
                        title={item}
                        isSelect={item === category}
                        onPress={() => handleCategorySelect(item)}
                    />
                )}
                horizontal
                className="max-h-10 mt-5"
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ gap: 12, paddingHorizontal: 20 }}
            />

            <SectionList
                ref={sectionListRef}
                sections={MENU}
                keyExtractor={(item) => item.id}
                stickySectionHeadersEnabled={false}
                renderItem={({ item }) => (
                    <Link href={`/product/${item.id}`} asChild>
                        <Product data={item} />
                    </Link>
                )}
                renderSectionHeader={({ section: { title } }) => (
                    <Text className="text-xl text-white font-heading mt-8 mb-3">
                        {title}
                    </Text>
                )}
                className="flex-1 p-5"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 100 }}
            />
        </View>
    )
}

export default Home
