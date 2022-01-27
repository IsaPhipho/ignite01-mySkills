import React, { useState, useEffect } from "react";
import { View, 
  Text, 
  StyleSheet, 
  TextInput, 
  Platform, 
  FlatList
} from 'react-native';

import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

interface SkillData {
  id: string;
  name: string;
}

export function Home(){
  const [newSkill, setNewSkill] = useState(''); /* armazena nova skill*/
  const [mySkills, setMySkills] = useState<SkillData[]>([]); /*  armazena todas as skills*/

  function handleAddNewSkill(){
    const data = {
      id: String(new Date().getTime()),
      name: newSkill
    }

    setMySkills(oldState => [...oldState, data]);
  }

  function handleRemoveSkill(id: string) {
    setMySkills(oldState => oldState.filter(
      skill => skill.id !== id
    ))
  }

  useEffect(() => {}, [])

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Olá, Paula!
      </Text>

      <TextInput
        style={styles.input}
        placeholder="New skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />

      <Button 
        title="Add"
        onPress={handleAddNewSkill}
      />
      

      <Text style={[styles.title, { marginTop: 48, marginBottom: 24}]}>
        My Skills
      </Text>
 
      <FlatList
        data={mySkills}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <SkillCard 
            skill={item.name}
            onPress={() => handleRemoveSkill(item.id)}
          />
        )} 
      />
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 30,
    paddingVertical: 70
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#1F1E25',
    color: '#fff',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15: 10,
    marginTop: 32,
    borderRadius: 8
  },
});

