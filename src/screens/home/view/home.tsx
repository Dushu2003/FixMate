import { View, StyleSheet, ScrollView } from 'react-native';
import React from 'react';

import HomeHeader from '../../../components/homeHeader';
import Divider from '../../../components/devider';

import { professionsData } from '../data';
import HomeProfessionCard from '../../../components/homeProfessionCard';


const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <HomeHeader />
      <Divider />

      <View style={styles.grid}>
        {professionsData.map(item => (
          <HomeProfessionCard
            key={item.id}
            title={item.title}
            icon={item.icon}
            bgColor={item.bgColor}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap', 
    justifyContent: 'space-between',
    padding: 16,
    paddingVertical:10
  },
});