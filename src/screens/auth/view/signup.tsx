import { View, Text, Button } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Signup'>;

const Signup = ({ navigation }: Props) => {
  return (
    <View>
      <Text>Signup Screen</Text>

      {/* Switch back to Login — replace */}
      <Button
        title="Go to Login"
        onPress={() => navigation.replace('Login')}
      />

      {/* Optional Back */}
      <Button
        title="Back"
        onPress={() => navigation.canGoBack() && navigation.goBack()}
      />

    </View>
  )
}

export default Signup