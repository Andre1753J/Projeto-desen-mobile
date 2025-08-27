import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, Button, Touchable, TouchableOpacity } from 'react-native';
import { useState, useEffect } from "react";

export default function App() {
  const [valorGato, setValorGato] = useState<number>(0);
  const [salvarGato, setSalvar] = useState<boolean>(false);
  const [gato, setGato] = useState<boolean>(true);
  const [big, bang] = useState<boolean>(false);
  const imagens = [require("./gato.jpeg"), require("./explosion-cats.jpeg"), require("./salvarGato.jpg"), require("./bigBang.jpg")];

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pam Pam Pam... PAAAAAAAAM</Text>
      <TextInput style={styles.input} placeholder='escreva algo' placeholderTextColor={"#202"} />
      <Image style={styles.Imagens} source={imagens[valorGato]} />
      {big && <View>
        <Text style={styles.text}>Voltou demais D:</Text>
        <Text style={styles.text}>Reajustando...</Text>
      </View>}

      {!big && <View>
        {gato && <View>
          {salvarGato &&
            <Button title="Salve-o" onPress={() => {
              setValorGato(2)
              setGato(false)
            }} />
          }
          {!salvarGato &&
            <TouchableOpacity style={styles.Button} onPress={() => {
              setValorGato(1);
              setSalvar(true)
            }}>
              <Text style={styles.text}>gato explode</Text>
            </TouchableOpacity>
          }
        </View>}
        {!gato && <View>
          <TouchableOpacity style={styles.Button} onPress={() => {
            bang(true)
            setValorGato(3)
            setGato(true)
            setSalvar(false)
            setInterval(()=>{
              bang(false)
              setValorGato(0);
            },3000)
          }}>
            <Text style={styles.text}>Volte no tempo</Text>
          </TouchableOpacity>
        </View>}
      </View>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: "#999",
    fontSize: 25,
    textAlign: "center"
  },
  input: {
    backgroundColor: "#999",
    width: 200,
    borderRadius: 20
  },
  Button: {
    width: "100%",
    backgroundColor: "#fff"
  },
  Imagens: {
    width: 200,
    height: 200,
    borderRadius: 20
  }
});

// View == div && section
//Button == button
//Text == p