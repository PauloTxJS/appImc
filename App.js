import * as React from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
// import { Button } from 'react-native-paper';

class App extends React.Component {

  state = {
    peso: 100,
    altura: 1.80,
    imc: 0,
    legenda: 'Indeterminado'
  };

  calcularIMC = () => {
    const result = this.state.peso / (this.state.altura * this.state.altura);

    this.setState({
      imc: result
    });

    if (result < 18.5) {
      this.setState({
        legenda: 'Abaixo do Peso'
      });
    } else if (result >= 18.5 && result < 25) {
      this.setState({
        legenda: 'Peso Normal'
      });
    } else if (result >= 25 && result < 30) {
      this.setState({
        legenda: 'Sobrepeso'
      });
    } else if (result >= 30 && result < 40) {
      this.setState({
        legenda: 'Obesidade'
      });
    } else if (result >= 40) {
      this.setState({
        legenda: 'Obesidade Grave'
      });
    }
  }

  render() {

    // const imc = 25;
    // const legenda = 'Normal';

    // imc = peso / altura 2


    return(
      <View style={styles.app}>
        <Text style={styles.legenda}>Seu IMC</Text>
        <View>
          <Text style={styles.resultado}>{this.state.imc}</Text>
          <Text style={styles.diagnostico}>{this.state.legenda}</Text>
        </View>
        <View>
          <TextInput style={styles.peso}/>
          <TextInput style={styles.altura}/>
          <Button title="Calcular" onPress={this.calcularIMC} />
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  app: {
    padding: 10
  },
  legenda: {
    textAlign: 'center',
    fontWeight: 'bold'
  },
  resultado: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold'
  },
  diagnostico: {
    textAlign: 'center',
    fontSize: 16
  },
  peso: {
    borderColor: '#000',
    borderWidth: 1
  },
  altura: {
    borderColor: '#000',
    borderWidth: 1
  }
});

export default App;
