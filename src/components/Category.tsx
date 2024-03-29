import { Pressable, Text, PressableProps } from 'react-native'
import { clsx } from 'clsx'
type CategoryButtonProps = PressableProps & {
    title: string
    isSelect?: boolean
}

export const CategoryButton = ({
    title,
    isSelect,
    ...rest
}: CategoryButtonProps) => {
    return (
        <Pressable
            {...rest}
            className={clsx(
                'bg-slate-800 px-4 justify-center rounded-md h-10',
                isSelect && 'border-2 border-lime-300'
            )}
        >
            <Text className="text-slate-100 font-subtitle text-sm">
                {title}
            </Text>
        </Pressable>
    )
}
