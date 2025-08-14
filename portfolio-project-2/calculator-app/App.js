import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native';

export default function App() {
  const [displayValue, setDisplayValue] = useState('0');

  const handlePress = (buttonValue) => {
    if (buttonValue === 'AC') {
      setDisplayValue('0');
    } else if (buttonValue === 'C') {
      setDisplayValue(displayValue.slice(0, -1) || '0');
    } else if (buttonValue === '=') {
      try {
        // Avoid using eval in production apps, this is for demonstration purposes
        const result = eval(displayValue.replace(/%/g, '/100'));
        setDisplayValue(String(result));
      } catch (error) {
        setDisplayValue('Error');
      }
    } else {
      setDisplayValue(displayValue === '0' ? buttonValue : displayValue + buttonValue);
    }
  };

  const renderButton = (value, style, textStyle) => (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={() => handlePress(value)}
    >
      <Text style={[styles.buttonText, textStyle]}>{value}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.displayContainer}>
        <Text style={styles.displayText}>{displayValue}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.row}>
          {renderButton('AC', styles.specialButton, styles.specialButtonText)}
          {renderButton('C', styles.specialButton, styles.specialButtonText)}
          {renderButton('%', styles.specialButton, styles.specialButtonText)}
          {renderButton('/', styles.operatorButton)}
        </View>
        <View style={styles.row}>
          {renderButton('7')}
          {renderButton('8')}
          {renderButton('9')}
          {renderButton('*', styles.operatorButton)}
        </View>
        <View style={styles.row}>
          {renderButton('4')}
          {renderButton('5')}
          {renderButton('6')}
          {renderButton('-', styles.operatorButton)}
        </View>
        <View style={styles.row}>
          {renderButton('1')}
          {renderButton('2')}
          {renderButton('3')}
          {renderButton('+', styles.operatorButton)}
        </View>
        <View style={styles.row}>
          {renderButton('0', { flex: 2 })}
          {renderButton('.')}
          {renderButton('=', styles.operatorButton)}
        </View>
      </View>
      <View style={styles.adContainer}>
        <Text style={styles.adText}>Advertisement</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1e',
    justifyContent: 'flex-end',
  },
  displayContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 20,
  },
  displayText: {
    fontSize: 72,
    color: '#fff',
    fontWeight: '300',
  },
  buttonsContainer: {
    paddingBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#505050',
    height: 80,
    width: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  buttonText: {
    fontSize: 32,
    color: '#fff',
  },
  operatorButton: {
    backgroundColor: '#ff9500',
  },
  specialButton: {
    backgroundColor: '#d4d4d2',
  },
  specialButtonText: {
    color: '#1c1c1e',
  },
  adContainer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#555',
    alignItems: 'center',
  },
  adText: {
    color: '#555',
  },
});
