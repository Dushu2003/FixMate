import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { IStackParamsList } from './types';

export const Stack = createNativeStackNavigator<IStackParamsList>();