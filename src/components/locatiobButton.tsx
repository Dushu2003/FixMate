import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { LightColors } from '../constants/color';
import Icon from 'react-native-vector-icons/Ionicons';

const LocationButton = () => {
    return (
        <View style={styles.container}>
            <Icon name="location" size={22} color={LightColors.primary.brand} />
            <Text style={styles.text}>Ganganagar, Rajasthan</Text>
        </View>
    );
};

export default LocationButton;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: LightColors.primary.brand,
    },
    text: {
        fontSize: 12,
        fontWeight: '500',
        color: LightColors.primary.brand,
        marginLeft: 6,
    },
});