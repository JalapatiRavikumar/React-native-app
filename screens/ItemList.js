// screens/ItemList.js
import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useItems } from '../context/ItemContext';

const ItemList = () => {
    const { items } = useItems();
    const navigation = useNavigation();

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('ItemDetail', { item })}>
            <View style={{ padding: 20, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
                <Text style={{ fontSize: 18 }}>{item.title}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <FlatList
            data={items}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
        />
    );
};

export default ItemList;
