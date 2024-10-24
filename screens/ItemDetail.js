// screens/ItemDetail.js
import React from 'react';
import { View, Text, Image } from 'react-native';

const ItemDetail = ({ route }) => {
    const { item } = route.params;

    return (
        <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 24 }}>{item.title}</Text>
            <Image source={{ uri: item.image }} style={{ width: '100%', height: 200 }} />
            <Text style={{ fontSize: 18, marginVertical: 10 }}>{item.description}</Text>
            <Text style={{ fontSize: 18 }}>Price: ${item.price}</Text>
        </View>
    );
};

export default ItemDetail;
