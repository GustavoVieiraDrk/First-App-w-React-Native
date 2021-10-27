import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { TouchableHighlight, TouchableOpacity, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [valorA, setValorA] = React.useState(0);
  const [valorB, setValorB] = React.useState(0);
  const [resultado, setResultado] = React.useState(0);

  const sum = (evento) => {
    let x = parseInt(valorA) + parseInt(valorB);
    setResultado(x);
  } 

  const sub = (evento) => {
    let x = parseInt(valorA) - parseInt(valorB);
    setResultado(x);
  } 

  const mult = (evento) => {
    let x = parseInt(valorA) * parseInt(valorB);
    setResultado(x);
  } 

  const divide = (evento) => {
    let x = parseInt(valorA) / parseInt(valorB);
    setResultado(x);
  }  

  return (
    <View style={styles.container}>
      
      <View style={styles.containerEntrada}>
        <TextInput 
          placeholder="Valor A"
          keyboardType="numeric"
          style={styles.campoDeEntrada}
          onChangeText={(valor) => setValorA(valor)}
        />
        
        <TextInput 
          placeholder="Valor B"
          keyboardType="numeric"
          style={styles.campoDeEntrada}
          onChangeText={(valor) => setValorB(valor)}
        />
      </View>

      <TouchableOpacity
        style={styles.estiloBotao}
        onPress={sum}
      >
        <Text
          style={styles.estiloTextoBotao}
        >
          Somar
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.estiloBotao}
        onPress={sub}
      >
        <Text
          style={styles.estiloTextoBotao}
        >
          subtração
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.estiloBotao}
        onPress={mult}
      >
        <Text
          style={styles.estiloTextoBotao}
        >
          multiplicação
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.estiloBotao}
        onPress={divide}
      >
        <Text
          style={styles.estiloTextoBotao}
        >
          divisão
        </Text>
      </TouchableOpacity>

      <Text style={styles.textoResultado}>
        {resultado}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D1F2EB',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    margin: 10,
  }, 
  containerEntrada: {
    flexDirection: "row"
  },
  campoDeEntrada: {
    fontSize: 40,
    width: "50%",
    height: 80,
    paddingLeft: 10,
    textAlign: "center"
  },
  estiloBotao: {
    backgroundColor: "#6495ED",
    width: "100%"
  },
  estiloTextoBotao: {
    fontSize: 25,
    fontWeight: "bold",
    padding: 30,
    alignSelf: "center",
  },
  textoResultado: {
    color: 'grey',
    fontSize: 60,
    padding: 15
  }
});
