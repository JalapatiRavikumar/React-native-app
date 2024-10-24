// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ItemProvider } from './context/ItemContext';
import ItemList from './screens/ItemList';
import ItemDetail from './screens/ItemDetail';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <ItemProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="ItemList">
                    <Stack.Screen name="ItemList" component={ItemList} />
                    <Stack.Screen name="ItemDetail" component={ItemDetail} />
                </Stack.Navigator>
            </NavigationContainer>
        </ItemProvider>
    );
}
