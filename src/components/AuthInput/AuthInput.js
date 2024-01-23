import { SafeAreaView, Text, TextInput } from 'react-native'
import React from 'react'
import styles from "./AuthInput.style"

const AuthInput = (props) => {
    return (
        <SafeAreaView style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder={props.placeholder}
                onChangeText={props.onChangeText}
                keyboardType={props.keyboardType}
                secureTextEntry={props.secureTextEntry}
            />
        </SafeAreaView>
    )
}

export default AuthInput