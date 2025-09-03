import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";
import React from "react";

type Props = {
    tela: boolean,
    mudarTela: React.Dispatch<React.SetStateAction<boolean>>
}

export function Event({tela, mudarTela}:Props) {
    return(
        <View>
            <TouchableOpacity style={styles.TouchableOpacity} onPress={() => {
                mudarTela(false)
                console.log("apertou")
            }}>
                <Text style={styles.text}>NÃO TOQUE</Text>
            </TouchableOpacity>
        </View>
    )
}