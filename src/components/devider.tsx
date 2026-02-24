import React from 'react';
import { View, StyleSheet } from 'react-native';

interface Props {
  color?: string;      // optional
  lineWidth?: number;  // optional
}

const Divider: React.FC<Props> = ({ color, lineWidth }) => {
  return (
    <View
      style={[
        styles.line,
        {
          backgroundColor: color || 'gray', 
          height: lineWidth || 1,   
        },
      ]}
    />
  );
};

export default Divider;

const styles = StyleSheet.create({
  line: {
    width: '100%',
    marginVertical: 2,
  },
});