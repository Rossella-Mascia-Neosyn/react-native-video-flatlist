import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootStackParamList } from './rootStackParamList.type';
import HomeScreen from '../screen/HomeScreen';
import VideoScreen from '../screen/VideoScreen';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator<RootStackParamList>();

export type NavigationProviderProps = {

}
const NavigationProvider: React.FC<NavigationProviderProps> = () => {

    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Video" component={VideoScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};
export default NavigationProvider;
