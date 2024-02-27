import { Text, View, StyleSheet, SafeAreaView, Pressable} from 'react-native'
import React from "react"

export default function Test() {
    return (
        <Text style={styles.test}>Test PLS WORK</Text>
    )
}

const styles = StyleSheet.create({
    test: {
        fontSize: 25,
        color: "white",
    }
})