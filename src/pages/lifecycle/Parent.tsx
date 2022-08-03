import React, { Component, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Child from "./Child";

const Parent = () => {
    const [childShow, setChildShow] = useState(true)
    const [counter, setCounter] = useState(0)

    const unMount = () => setChildShow(false)

    return (
        <View>
            <Text>Welcome to React Native Life Cycle</Text>
            {
                childShow && <Child counter={counter} />
            }
            <TouchableOpacity onPress={unMount}><Text>Unmount</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => setCounter(counter + 1)}><Text>Increase</Text></TouchableOpacity>
        </View>
    )

}

export default Parent