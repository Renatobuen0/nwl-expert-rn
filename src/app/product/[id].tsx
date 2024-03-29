import { Redirect, useLocalSearchParams, useNavigation } from 'expo-router'
import { Image, Text, View } from 'react-native'
import { PRODUCTS } from '../../../utils/data/products'
import { formatCurrency } from '../../../utils/functions/formatCurrency'
import { Button } from '@/components/Button'
import { Feather } from '@expo/vector-icons'
import { LinkButton } from '@/components/LinkButton'
import { useCartStore } from '@/stores/CartStore'

const Product = () => {
    const cardStore = useCartStore()
    const { id } = useLocalSearchParams()
    const navigation = useNavigation()
    const product = PRODUCTS?.find((item) => item?.id === id)

    const handleAddProductToCart = () => {
        if (product) {
            cardStore.addTocart(product)
            navigation.goBack()
        }
    }

    if (!product) {
        return <Redirect href="/" />
    }

    return (
        <View className="flex-1">
            <Image
                source={product.cover}
                className="w-full h-52"
                resizeMode="cover"
            />

            <View className="flex-1 mt-8 p-5">
                <Text className="text-xl text-white font-heading ">
                    {product.title}
                </Text>
                <Text className="text-lime-400 font-heading my-2 text-2xl">
                    {formatCurrency(product.price)}
                </Text>
                <Text className="text-slate-400 font-body text-base leading-6 mb-6">
                    {product.description}
                </Text>
                {product?.ingredients?.map((ingredient) => (
                    <Text
                        key={ingredient}
                        className="text-slate-400 font-body text-base leading-6"
                    >
                        {'\u2022'}
                        {ingredient}
                    </Text>
                ))}
            </View>
            <View className="p-5 pb-8 gap-5">
                <Button onPress={handleAddProductToCart}>
                    <Button.Icon>
                        <Feather name="plus-circle" size={20} />
                    </Button.Icon>

                    <Button.Text>Adicionar ao pedido</Button.Text>
                </Button>

                <LinkButton title="Voltar ao cardápio" href="/" />
            </View>
        </View>
    )
}
export default Product
