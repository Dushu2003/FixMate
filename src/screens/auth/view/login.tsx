import { View, Text, Button } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

const Login = ({ navigation }: Props) => {
  return (
    <View>
      <Text>Login Screen</Text>

      {/* Switch to Signup — replace (no stacking) */}
      <Button
        title="Go to Signup"
        onPress={() => navigation.replace('Signup')}
      />

    </View>
  )
}

export default Login