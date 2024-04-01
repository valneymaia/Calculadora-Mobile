import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const units = ['Celsius', 'Fahrenheit', 'Kelvin'];

const TemperatureConverter = () => {
  const [input, setInput] = useState({ value: '', unit: 'Celsius' });
  const [output, setOutput] = useState({ value: '', unit: 'Fahrenheit' });

  const convertTemperature = () => {
    let temp = parseFloat(input.value);
    let result;

    if (input.unit === output.unit) {
      result = temp;
    } else if (input.unit === 'Celsius') {
      if (output.unit === 'Fahrenheit') {
        result = (temp * 1.8) + 32;
      } else if (output.unit === 'Kelvin') {
        result = temp + 273.15;
      }
    } else if (input.unit === 'Fahrenheit') {
      if (output.unit === 'Celsius') {
        result = (temp - 32) * 5/9;
      } else if (output.unit === 'Kelvin') {
        result = ((temp - 32) * 5/9) + 273.15;
      }
    } else if (input.unit === 'Kelvin') {
      if (output.unit === 'Celsius') {
        result = temp - 273.15;
      } else if (output.unit === 'Fahrenheit') {
        result = (temp * 9/5) - 459.67;
      }
    }

    setOutput({ ...output, value: result.toFixed(2) });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conversor de Temperatura</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite a temperatura"
          keyboardType="numeric"
          onChangeText={text => setInput({ ...input, value: text })}
          value={input.value}
        />
        <View style={styles.unitContainer}>
          {units.map((unit) => (
            <TouchableOpacity
              key={unit}
              style={[styles.unitButton, input.unit === unit && styles.unitButtonSelected]}
              onPress={() => setInput({ ...input, unit })}
            >
              <Text style={styles.unitText}>{unit}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <TouchableOpacity style={styles.convertButton} onPress={convertTemperature}>
        <Text style={styles.convertButtonText}>Converter</Text>
      </TouchableOpacity>
      <View style={styles.outputContainer}>
        <TextInput
          style={styles.output}
          placeholder="Resultado"
          value={output.value}
          editable={false}
        />
        <View style={styles.unitContainer}>
          {units.map((unit) => (
            <TouchableOpacity
              key={unit}
              style={[styles.unitButton, output.unit === unit && styles.unitButtonSelected]}
              onPress={() => setOutput({ ...output, unit })}
            >
              <Text style={styles.unitText}>{unit}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#FbFcFc',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    color: '#000',
  },
  unitContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  unitButton: {
    flex: 1,
    padding: 10,
    margin: 2,
    borderRadius: 5,
    backgroundColor: '#005880',
    alignItems: 'center',
  },
  unitButtonSelected: {
    backgroundColor: '#013c58',
    color: '#013c58',
  },
  unitText: {
    fontSize: 16,
    color: '#ffffff'
  },
  convertButton: {
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
    backgroundColor: '#013c58',
    alignItems: 'center',
  },
  convertButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  outputContainer: {
    marginBottom: 20,
  },
  output: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    paddingLeft: 10,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    color: '#013c58',
  },
});

export default TemperatureConverter;
