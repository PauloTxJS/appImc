import * as React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { Button } from 'react-native-paper';

class App extends React.Component {
  render() {
    return(
      <View style={styles.app}>
        <Text style={styles.legenda}>Seu IMC</Text>
        <View>
          <Text style={styles.resultado}>25</Text>
          <Text style={styles.diagnostico}>Normal</Text>
        </View>
        <View>
          <TextInput style={styles.peso}/>
          <TextInput style={styles.altura}/>
          <Button>Calcular</Button>
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
