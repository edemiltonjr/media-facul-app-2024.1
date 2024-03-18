import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './style'

export default function index() {
    // Hooks para manibulação de variáveis e estados
    const [mediaEtapa1, setMediaEtapa1] = useState(null);
    const [mediaEtapa2, setMediaEtapa2] = useState(null);
    const [media, setMedia] = useState("MÉDIA");
    const [msgResultado, setResultado] = useState("RESULTADO");

    function calcularMedia(){
        let mediaFinal = (Number.parseFloat(mediaEtapa1) + Number.parseFloat(mediaEtapa2)) / 2
        setMedia(mediaFinal)
        resultado(mediaFinal)
    }

    function resultado(media) {
        if (media >= 7){
            setResultado("APROVADO!");
        }else if(media < 7 && media >=3) {
            setResultado("RECUPERAÇÃO!")
        }else{
            setResultado("REPROVADO!")
        }
    }

    return (
        <View style={styles.form}>
            <View>
                <Text style={styles.label}>Média etapa 1</Text>
                <TextInput style={styles.input}
                 onChangeText={setMediaEtapa1}>
                </TextInput>
            </View>
            <View>
                <Text style={styles.label}>Média etapa 2</Text>
                <TextInput style={styles.input}
                onChangeText={setMediaEtapa2}
                ></TextInput>
            </View>
            <TouchableOpacity style={styles.btn}
              onPress={() => calcularMedia()}
            >
                <Text style={styles.btnText}>Calcular</Text>
            </TouchableOpacity>

            <View>
                <Text style={styles.media}>{media}</Text>
                <Text style={styles.resultado}>{msgResultado}</Text>
            </View>
        </View>
    )
}