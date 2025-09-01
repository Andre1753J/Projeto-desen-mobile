import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";

export function Event() {
    return(
        <View>
            <TouchableOpacity style={styles.TouchableOpacity}>
                <Text style={styles.text}>botao que não faz nada</Text>
            </TouchableOpacity>
        </View>
    )
}