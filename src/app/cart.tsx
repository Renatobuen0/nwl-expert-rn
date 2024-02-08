import { Header } from '@/components/Header'
import { ProductCartProps, useCartStore } from '@/stores/CartStore'
import { Alert, ScrollView, Text, View, Linking } from 'react-native'
import Product from '@/components/Product'
import { formatCurrency } from '../../utils/functions/formatCurrency'
import { Input } from '@/components/Input'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Button } from '@/components/Button'
import { Feather } from '@expo/vector-icons'
import { LinkButton } from '@/components/LinkButton'
import { useState } from 'react'
import { useNavigation } from 'expo-router'
const whatsappNumber = process.env.WHATSAPP_NUMBER

const Cart = () => {
    const [address, setAddress] = useState('' as string)
    const navigation = useNavigation()
    const cartStore = useCartStore()
    const totalPrice = formatCurrency(
        cartStore.products.reduce(
            (total, product) => total + product.price * product.quantity,
            0
        )
    )

    const handleRemoveProduct = (product: ProductCartProps) => {
        Alert.alert(
            'Remover produto',
            `Deseja remover o produto ${product.title} do carrinho?`,
            [
                {
                    text: 'Cancelar',
                    style: 'cancel',
                },
                {
                    text: 'Remover',
                    onPress: () => {
                        cartStore.remove(product.id)
                    },
                },
            ]
        )
    }

    const handleSendOrder = () => {
        if (cartStore.products.length === 0) {
            Alert.alert(
                'Carrinho vazio',
                'Adicione produtos ao carrinho para enviar o pedido.'
            )
        } else if (address.trim().length === 0) {
            Alert.alert(
                'Endereço não informado',
                'Informe o endereço de entrega para enviar o pedido.'
            )
        } else {
            const products = cartStore.products
                .map((product) => `\n${product.quantity}-${product.title} `)
                .join('')

            const message = `🍔 Novo Pedido \n Olá, gostaria de fazer o pedido dos seguintes produtos:\n${products}\n\nEndereço de entrega: ${address} \nTotal: ${totalPrice}`

            console.log('🚀 ~ handleSendOrder ~ message:', message)
            Linking.openURL(
                `whatsapp://send?text=${message}&phone=${whatsappNumber}`
            )
            cartStore.clear()
            navigation.goBack()
        }
    }

    return (
        <View className="flex-1 pt-8">
            <Header headerTitle="Seu Carrinho" />
            <KeyboardAwareScrollView>
                <ScrollView>
                    <View className="p-5 flex-1">
                        {cartStore.products.length > 0 ? (
                            <View className="border-b border-slate-700">
                                {cartStore.products.map((product) => (
                                    <Product
                                        key={product.id}
                                        data={product}
                                        onPress={() =>
                                            handleRemoveProduct(product)
                                        }
                                    />
                                ))}
                            </View>
                        ) : (
                            <Text className="font-body text-slate-400 text-center my-8">
                                Seu carrinho está vazio.
                            </Text>
                        )}

                        <View className="flex-row gap-2 items-center mt-5 mb-4">
                            <Text className="text-white text-xl font-subtitle">
                                Total:
                            </Text>
                            <Text className="text-lime-400 text-2xl font-heading">
                                {totalPrice}
                            </Text>
                        </View>

                        <Input
                            placeholder="Informe o endereço de entrega com rua, bairro, CEP, número e complemento..."
                            blurOnSubmit={true}
                            onSubmitEditing={handleSendOrder}
                            returnKeyType="next"
                            onChangeText={setAddress}
                        />
                    </View>
                </ScrollView>
            </KeyboardAwareScrollView>
            <View className=" p-5 gap-5">
                <Button onPress={handleSendOrder}>
                    <Button.Text>Enviar pedido</Button.Text>
                    <Button.Icon>
                        <Feather name="arrow-right-circle" size={20} />
                    </Button.Icon>
                </Button>
                <LinkButton href="/" title="Voltar ao cardápio" />
            </View>
        </View>
    )
}

export default Cart
