import { View, Pressable, Text, StyleSheet, Platform } from 'react-native'

function CategoryGridTile({ title, color, onPressed, navigation }) {
    return <View style={[Style.gridItem, { backgroundColor: color }]}>
        <Pressable android_ripple={{ color: 'rgba(0,0,0,0.15)' }}
            onPress={onPressed}
            style={({ pressed }) => [Style.buttonStyle,
            pressed ? Style.buttonPressed : null]}>
            <View style={[Style.innerContainer, { backgroundColor: color }]}>
                <Text style={Style.title}>{title}</Text>
            </View>
        </Pressable>
    </View>
}
export default CategoryGridTile;

const Style = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 8,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
    },
    buttonStyle: {
        flex: 1,
        borderRadius: 8,
        overflow: 'hidden',
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    buttonPressed: {
        opacity: 0.5,
    },
});
