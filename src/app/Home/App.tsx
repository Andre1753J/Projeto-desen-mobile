import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, Button, Touchable, TouchableOpacity } from 'react-native';
import { useState, useEffect } from "react";
import { styles } from "./styles.ts";
import { Event } from "../../components/Event"

export default function App() {
  const [valorGato, setValorGato] = useState<number>(0);
  const [salvarGato, setSalvar] = useState<boolean>(false);
  const [gato, setGato] = useState<boolean>(true);
  const [big, bang] = useState<boolean>(false);
  const [mensagem, setMensagem] = useState<string>("Volte no tempo")
  const imagens = [require("../../img/gato.jpeg"), require("../../img/explosion-cats.jpeg"),
  require("../../img/salvarGato.jpg"), require("../../img/bigBangGato.jpg"),
  require("../../img/bobCaverna.png")
  ];
  const [toque, setToque] = useState<boolean>(true)
  // const styles = getStyle

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pam Pam Pam... PAAAAAAAAM</Text>
      <TextInput style={styles.input} placeholder='escreva algo' placeholderTextColor={"#202"} />
      <Image style={styles.Imagens} source={imagens[valorGato]} />
      {big && <View>
        <Text style={styles.text}>Voltou demais D:</Text>
        <Text style={styles.text}>Reajustando...</Text>
        <Event tela={toque} mudarTela={setToque}></Event>
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
            const intervalo = setTimeout(() => {
              // console.log("começo")
              bang(false)
              const random = Math.round(Math.random()*10);
              console.log(random)
              console.log(toque)
              if (random >= 1 && toque) {
                setMensagem("Volte no tempo")
                setValorGato(0);
                setGato(true)
                setSalvar(false)
              } else {
                setMensagem("Volte pro tempo certo")
                setToque(true)
                setValorGato(4)
              }
            }, 3000);
          }}>
            <Text style={styles.text}>{mensagem}</Text>
          </TouchableOpacity>
        </View>}
      </View>}
    </View>
  );
}

// View == div && section
//Button == button
//Text == p