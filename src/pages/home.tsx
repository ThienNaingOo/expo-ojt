import { Dimensions, StyleSheet, View } from "react-native";
import { Gesture, GestureDetector, GestureHandlerRootView } from "react-native-gesture-handler";
import Animated, { useAnimatedStyle, useDerivedValue, useSharedValue, withSpring } from "react-native-reanimated";

interface AnimatedPosition {
    x: Animated.SharedValue<number>;
    y: Animated.SharedValue<number>;
}

const useFollowAnimatedPosition = ({ x, y }: AnimatedPosition) => {
    const followX = useDerivedValue(() => {
        return withSpring(x.value);
    });

    const followY = useDerivedValue(() => {
        return withSpring(y.value);
    });

    const rStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: followX.value }, { translateY: followY.value }],
        };
    });

    return { followX, followY, rStyle };
};

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const SIZE = 80;

const Home = () => {
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
            console.log(event.translationX + '')
        })

    const followX = useDerivedValue(() => {
        return withSpring(translateX.value)
    })

    const followY = useDerivedValue(() => {
        return withSpring(translateY.value)
    })

    const {
        followX: blueFollowX,
        followY: blueFollowY,
        rStyle: rBlueCircleStyle,
    } = useFollowAnimatedPosition({
        x: translateX,
        y: translateY,
    });

    const {
        followX: redFollowX,
        followY: redFollowY,
        rStyle: cyanCircleStyle,
    } = useFollowAnimatedPosition({
        x: blueFollowX,
        y: blueFollowY,
    });

    const { rStyle: redCircleStyle } = useFollowAnimatedPosition({
        x: redFollowX,
        y: redFollowY,
    });

    const rStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: followX.value }, { translateY: followY.value }]
        }
    })

    return (
        <View style={styles.container}>
            <Animated.View
                style={[
                    styles.circle,
                    { backgroundColor: 'red' },
                    redCircleStyle,
                ]}
            />
            <Animated.View
                style={[styles.circle, { backgroundColor: 'cyan' }, cyanCircleStyle]}
            />
            <GestureDetector gesture={gesture}>
                <Animated.View style={[styles.circle, { opacity: 1 }, rBlueCircleStyle]} />
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
        position: 'absolute',
        height: SIZE,
        aspectRatio: 1,
        backgroundColor: 'black',
        borderRadius: SIZE / 2,
        opacity: 0.8,
    },
})
export default Home