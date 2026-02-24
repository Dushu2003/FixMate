import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LightColors } from '../constants/color';
import LocationButton from './locatiobButton';
import Icon from 'react-native-vector-icons/Ionicons';


const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>FixMate</Text>
      <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
        <LocationButton />
     <Icon name="notifications-outline" size={30}   color={LightColors.primary.brand}/>
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop:2,
    flexDirection: "row",
    justifyContent:"space-between",
  },

  logo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: LightColors.primary.brand,
    marginBottom: 8,
  },
});