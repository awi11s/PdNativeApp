import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
import { MainPage } from '../pages/MainPage';
import { LoginPage } from '../pages/Login';
import { SignUp } from '../pages/SignUp';

const Stack = createStackNavigator();

export const MainNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Main" component={MainPage} />
                <Stack.Screen name="Login" component={LoginPage} />
                <Stack.Screen name="SignUp" component={SignUp} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}