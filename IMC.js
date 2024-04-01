import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Calculator = () => {
  const [weightDisplay, setWeightDisplay] = useState('');
  const [heightDisplay, setHeightDisplay] = useState('');
  const [resultDisplay, setResultDisplay] = useState('');
  const [legend, setLegend] = useState('');
  const [color, setColor] = useState('#000');

  const [activeDisplay, setActiveDisplay] = useState('weight');

  const handlePress = (value) => {
    if (value === '=') {
      // Calcular o IMC
      const weight = parseFloat(weightDisplay);
      const height = parseFloat(heightDisplay);
      if (!isNaN(weight) && !isNaN(height) && height !== 0) {
        const bmi = weight / Math.pow(height, 2);
        setResultDisplay(bmi.toFixed(2).toString());
        updateLegend(bmi);
      
      } else  {
        setResultDisplay('Erro');
      }
    } else if (value === 'AC') {
      // Limpar todos os displays
      setWeightDisplay('');
      setHeightDisplay('');
      setResultDisplay('');
    } else if (value === 'DEL') {
      // Limpar o último caractere do display ativo
      if (activeDisplay === 'weight') {
        setWeightDisplay(weightDisplay.slice(0, -1));
      } else {
        setHeightDisplay(heightDisplay.slice(0, -1));
      }
    } else if (value === 'switch') {
      // Trocar entre os displays de peso e altura
      setActiveDisplay(activeDisplay === 'weight' ? 'height' : 'weight');
    } 
    
    else if (value === '.') {
      if (activeDisplay === 'weight') {
        setWeightDisplay(weightDisplay + '.');
      }
      else {
        setHeightDisplay(heightDisplay + '.');
      }
    }
    else {
      // Atualizar o display correspondente
      if (activeDisplay === 'weight') {
        if (isNaN(value)) {
          // Se não for um número, considerar como operação de limpeza
          setWeightDisplay('');
        } else if (weightDisplay.length < 5) {
          // Limitar o número de caracteres para 5
          setWeightDisplay(weightDisplay + value);
        }
      } else {
        if (isNaN(value)) {
          // Se não for um número, considerar como operação de limpeza
          setHeightDisplay('');
        } else if (heightDisplay.length < 5) {
          // Limitar o número de caracteres para 5
          setHeightDisplay(heightDisplay + value);
        }
      }
    }
  };

  
  const updateLegend = (bmi) => {
    if (bmi < 18.5) {
      setLegend('Magreza');
      setColor('#26ABE3');
    } else if (bmi >= 18.5 && bmi < 25) {
      setLegend('Normal');
      setColor('#259E4D');
    } else if (bmi >= 25 && bmi < 30) {
      setLegend('Sobrepeso');
      setColor('#6B7F37');
    } else if (bmi >= 30 && bmi < 40) {
      setLegend('Obesidade');
      setColor('#F0A91D');
    } else if (bmi >= 40) {
      setLegend('Obesidade Grave');
      setColor('#9A0000');
    } else {
      // Default color if BMI is not within any range
      setColor('#000');
    }
  };

  const buttons = [
    ['7', '8', '9', 'DEL'],
    ['4', '5', '6', 'AC'],
    ['1', '2', '3', '='],
    ['0', '.', '', '']
  ];

  return (
    <View style={styles.container}>
      <View style={styles.displayRow}>
        <Text style={styles.displayLabel}>Peso(kg):</Text>
        <Text style={styles.display}>{weightDisplay}</Text>
      </View>
      <View style={styles.displayRow}>
        <Text style={styles.displayLabel}>Altura(m):</Text>
        <Text style={styles.display}>{heightDisplay}</Text>
      </View>

      <View style={styles.displayRow}>
        <Text style={styles.displayLabel}>IMC:</Text>
        <Text style={styles.display}>{resultDisplay}</Text>
      </View>

      <View style={styles.displayRow}>
      <Text style={styles.displayLabel}>Legenda:</Text>
         <Text style={[styles.displayLegendaImc, { color: color }]}>{legend}</Text>
      </View>

      
      {buttons.map((row, rowIndex) => (
  <View key={rowIndex} style={styles.row1}>
    {row.map((value, index) => (
      <TouchableOpacity key={`${rowIndex}-${index}`} style={styles.button} onPress={() => handlePress(value)}>
        <Text style={styles.buttonText}>{value}</Text>
      </TouchableOpacity>
    ))}
  </View>
))}
  

      <View style={styles.switchButtonContainer}>
        <TouchableOpacity style={styles.switchButton} onPress={() => handlePress('switch')}>
          <Text style={styles.switchButtonText}>
            Trocar Display
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fbfcfc',
  },

  displayRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  displayLabel: {
    color: '#000',
    fontSize: 18,
    marginRight: 10,
    width: 100,
  },

  display: {
    flex: 1,
    height: 60,
    borderColor: '#353d48',
    borderWidth: 1,
    fontSize: 36,
    color: '#000',
    textAlign: 'right',
    paddingRight: 10,
  },
  displayLegendaImc: {
    flex: 1,
    height: 40,
    borderColor: '#353d48',
    borderWidth: 1,
    fontSize: 24,
    color: '#fff',
    textAlign: 'right',
    paddingRight: 14,
  },

  row1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },

  button: {
    width: '24%',
    height: 80,
    backgroundColor: '#013c58',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },

  buttonText: {
    fontSize: 24,
    color: '#fff',
  },
  switchButtonContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  
  switchButton: {
    padding: 10,
    backgroundColor: '#013c58',
    borderRadius: 8,
  },
  switchButtonText: {
    fontSize: 18,
    color: '#fff',
  },

});

export default Calculator;
