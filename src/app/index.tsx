import { CategoryButton } from "@/components/Category"
import { Header } from "@/components/Header"
import { View, FlatList, Text } from "react-native"
import { CATEGORIES } from "../../utils/data/products"
import { useState } from "react"

const Home = () => {
	const [category, setCategory] = useState(CATEGORIES[0])

	const handleCategorySelect = (category: string) => {
		setCategory(category)
	}

	return (
		<View className="flex-1 pt-8">
			<Header headerTitle="Faça o seu pedido" cartItems={33} />
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
		</View>
	)
}

export default Home
