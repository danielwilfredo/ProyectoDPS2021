import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const Buttons = props => {
    const content = (
        <View style={[styles.button, {backgroundColor: props.color}]}>
            <Text style={styles.text}>{props.text}</Text>
        </View>
    )

    return <TouchableOpacity onPress={props.onPress}>{content}</TouchableOpacity>
}

const styles = StyleSheet.create({
    button:{
        padding: 16,
        width: 200,
        borderRadius: 24,
        alignItems: 'center',
        height: 50,
        justifyContent: 'center'
    },
    text:{
        color:'black',
        fontSize: 18
    },
    
})

export default Buttons;
