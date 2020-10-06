import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

class App extends React.Component {

  state = {
    weight: 0,
    height: 0,
    imc: 0,
    subtitle: 'Indeterminate',
    cor: '#bdc3c7'
  };

  calculateIMC = () => {
    const result = this.state.weight / (this.state.height * this.state.height);

    this.setState({
      imc: result.toFixed(1)
    });

    if (result < 18.5) {
      this.setState({
        subtitle: 'Under weight',
        color: '#e74c3c',
        weight: 0,
        height: 0
      });
      
    } else if (result >= 18.5 && result < 25) {
      this.setState({
        subtitle: 'Normal weight',
        color: '#2ecc71',
      });
      
    } else if (result >= 25 && result < 30) {
      this.setState({
        subtitle: 'Overweight',
        color: '#f1c40f',
        weight: 0,
        height: 0,
      });
    } else if (result >= 30 && result < 35) {
      this.setState({
        subtitle: 'Grade 1 obesity',
        color: '#e67e22',
        weight: 0,
        height: 0,
      });
    } else if (result >= 35 && result < 40) {
      this.setState({
        subtitle: 'Grade 2 obesity - Severe',
        color: '#e74c3c',
        weight: 0,
        height: 0,  
      });
    } else {
      this.setState({
        subtitle: 'Grade 3 obesity - Morbid',
        color: '#e74c3c',
        weight: 0,
        height: 0,
      });
    }
  }

  render() {

    return(
      <View style={styles.app}>
        <Text style={styles.subtitle}>Your IMC</Text>

        <View style={[styles.panel, {backgroundColor: this.state.color}]}>
          <Text style={styles.result}>{this.state.imc}</Text>
          <Text style={styles.diagnosis}>{this.state.subtitle}</Text>
        </View>

        <View>
          <TextInput 
            style={styles.weight}
            label="Weight"
            onChangeText={value => {
              this.setState({
                weight: value.replace(',', '.')
              })
            }}  
          />
          <TextInput 
            style={styles.height}
            label="Height"
            onChangeText={value => {
              this.setState({
                height: value.replace(',', '.')
              })
            }} 
          />
          <Button mode='contained' onPress={this.calculateIMC}>Calculate</Button>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  app: {
    padding: 10
  },
  panel: {
    alignSelf: 'center',
    borderRadius: 5,
    width: 150,
    marginVertical: 10,
    padding: 8
  },
  subtitle: {
    textAlign: 'center',
    fontWeight: 'bold'
  },
  result: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold'
  },
  diagnosis: {
    textAlign: 'center',
    fontSize: 16
  },
  weight: {
    marginVertical: 10
  },
  height: {
    marginVertical: 10
  }
});

export default App;
