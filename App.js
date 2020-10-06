import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

class App extends React.Component {

  state = {
    peso: 100,
    altura: 1.80,
    imc: 0,
    legenda: 'Indeterminado',
    cor: '#bdc3c7'
  };

  calcularIMC = () => {
    const result = this.state.peso / (this.state.altura * this.state.altura);

    this.setState({
      imc: result.toFixed(1)
    });

    if (result < 18.5) {
      this.setState({
        legenda: 'Abaixo do Peso',
        cor: '#e74c3c'
      });
    } else if (result >= 18.5 && result < 25) {
      this.setState({
        legenda: 'Peso Normal',
        cor: '#2ecc71'
      });
    } else if (result >= 25 && result < 30) {
      this.setState({
        legenda: 'Sobrepeso',
        cor: '#f1c40f'
      });
    } else if (result >= 30 && result < 40) {
      this.setState({
        legenda: 'Obesidade',
        cor: '#e67e22'
      });
    } else if (result >= 40) {
      this.setState({
        legenda: 'Obesidade Grave',
        cor: '#e74c3c'
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

        <View style={[styles.painel, {backgroundColor: this.state.cor}]}>
          <Text style={styles.resultado}>{this.state.imc}</Text>
          <Text style={styles.diagnostico}>{this.state.legenda}</Text>
        </View>

        <View>
          <TextInput 
            style={styles.peso}
            label="Peso"
            onChangeText={value => {
              this.setState({
                peso: value.replace(',', '.')
              })
            }}  
          />
          <TextInput 
            style={styles.altura}
            label="Altura"
            onChangeText={value => {
              this.setState({
                altura: value.replace(',', '.')
              })
            }} 
          />
          <Button mode='contained' onPress={this.calcularIMC}>Calcular</Button>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  app: {
    padding: 10
  },
  painel: {
    alignSelf: 'center',
    borderRadius: 5,
    width: 150,
    marginVertical: 10,
    padding: 8
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
    marginVertical: 10
  },
  altura: {
    marginVertical: 10
  }
});

export default App;
