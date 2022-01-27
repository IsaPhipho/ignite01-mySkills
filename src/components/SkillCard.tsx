import React from 'react';
import {
  Text, 
  StyleSheet,  
  TouchableOpacity, 
  TouchableOpacityProps 
} from 'react-native';

interface SkillCardProps extends TouchableOpacityProps {
  skill: string
};

export function SkillCard({ skill, ...rest } : SkillCardProps){
  return (
    <TouchableOpacity 
      style={styles.buttonSkill}
      {...rest}
    >
      <Text style={styles.textSkill}>
        {skill}  
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: '#1F1E25',
    padding: 16,
    borderRadius: 48,
    marginBottom: 16
  },
  textSkill: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold'
  }
});

