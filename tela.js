import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Calculator = () => {
  const [display, setDisplay] = useState('');

  const handlePress = (value) => {
    if (value === '=') {
      setDisplay(eval(display).toString());
    }
    else {
      setDisplay(display + value);
    }
  };

  const buttons = [
    ['7', '8', '9', '/'],
    ['4', '5', '6', '*'],
    ['1', '2', '3', '-'],
    ['0', '.', '=', '+']
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.display}>{display}</Text>
      {buttons.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((value) => (
            <TouchableOpacity key={value} style={styles.button} onPress={() => handlePress(value)}>
              <Text style={styles.buttonText}>{value}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#101010',
  },
  display: {
    height: 80,
    borderColor: '#707070',
    borderWidth: 1,
    marginBottom: 20,
    fontSize: 36,
    color: '#fff',
    textAlign: 'right',
    paddingRight: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    width: '24%',
    height: 80,
    backgroundColor: '#303030',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 24,
    color: '#fff',
  },
});

export default Calculator;