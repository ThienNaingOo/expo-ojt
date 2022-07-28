import { StyleSheet, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, { useAnimatedStyle, useSharedValue } from "react-native-reanimated";

const Pan = () => {
    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);

    const context = useSharedValue({ x: 0, y: 0 })

    const gesture = Gesture.Pan()
        .onStart(() => {
            context.value = { x: translateX.value, y: translateY.value }
        })
        .onUpdate((event) => {
            translateX.value = event.translationX + context.value.x
            translateY.value = event.translationY + context.value.y
            console.log(event.translationX + ',' + event.translationX)
        })
    
    const rStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: translateX.value }, { translateY: translateY.value }]
        }
    })

    return (
        <View style={styles.container}>
            <GestureDetector gesture={gesture}>
                <Animated.View style={[styles.circle, rStyle]} />
            </GestureDetector>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    circle: {
        height: 80,
        aspectRatio: 1,
        backgroundColor: 'black',
        borderRadius: 40,
        opacity: 0.8
    }
})
export default Pan