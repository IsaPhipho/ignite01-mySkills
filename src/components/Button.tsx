import React from "react";
import {
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  TouchableOpacityProps
} from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  title: string
};

export function Button({ title, ...rest } : ButtonProps) {
  return (
    <TouchableOpacity 
        style={styles.button}
        activeOpacity={.7}
        {...rest}
      >
      <Text style={styles.buttonText}>
        { title }
      </Text>
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#A370F7',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
});