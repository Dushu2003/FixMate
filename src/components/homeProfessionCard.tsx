import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


interface Props{
    title:string,
    icon:string,
    bgColor:string,

}

const HomeProfessionCard : React.FC<Props> = ({ title, icon, bgColor }) => {
  return (
    <View style={[styles.card, { backgroundColor: bgColor || '#CFE0F5' }]}>
      <Icon name={icon} size={48} color="#0F2A44" />
      <Text style={styles.label}>{title}</Text>
    </View>
  );
};

export default HomeProfessionCard;

const styles = StyleSheet.create({
  card: {
    width: 100,
    height: 100,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical:10,
  },

  label: {
    marginTop: 10,
    fontSize: 15,
    fontWeight: '600',
    color: '#0F2A44',
  },
});