import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'

export default function index() {
    return (
        <View style={styles.form}>
            <View>
                <Text style={styles.label}>Média etapa 1</Text>
                <TextInput style={styles.input}></TextInput>
            </View>
            <View>
                <Text style={styles.label}>Média etapa 2</Text>
                <TextInput style={styles.input}></TextInput>
            </View>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>Calcular</Text>
            </TouchableOpacity>
        </View>
    )
}