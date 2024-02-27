import { Text, View, StyleSheet, SafeAreaView, Pressable} from 'react-native'
import React from "react"

import Test from "./components/Test"

export default function App() {
    return (
        <>
            <SafeAreaView>
                <View style={styles.container}>
                    <Test />
                </View>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        paddingTop: 25,
        backgroundColor: "#0b1a25"
    },
})



// https://github.com/dragonslayrr/expo-web-test.git