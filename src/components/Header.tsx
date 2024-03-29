import { Feather } from '@expo/vector-icons'
import { Link } from 'expo-router'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import colors from 'tailwindcss/colors'

type HeaderProps = {
    headerTitle: string
    cartItems?: number
}

export const Header = ({ headerTitle, cartItems = 0 }: HeaderProps) => {
    return (
        <View className="flex-row items-center border-b border-slate-700 pb-5 mx-5">
            <View className="flex-1">
                <Image
                    source={require('@/assets/logo.png')}
                    className="h-6 w-32"
                />
                <Text className="text-white text-xl font-heading mt-2">
                    {headerTitle}
                </Text>
            </View>
            {cartItems > 0 && (
                <Link href="/cart" asChild>
                    <TouchableOpacity className="relative" activeOpacity={0.7}>
                        <View className="bg-lime-300 w-4 h-4 rounded-full items-center justify-center top-2 z-10 -right-3.5">
                            <Text className="text-slate-900 font-bold text-xs ">
                                {cartItems}
                            </Text>
                        </View>
                        <Feather
                            name="shopping-bag"
                            size={24}
                            color={colors.white}
                        />
                    </TouchableOpacity>
                </Link>
            )}
        </View>
    )
}
