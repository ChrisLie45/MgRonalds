import React, {useState, createContext} from 'react';
import { Text, View, FlatList, Button} from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from '../styles';

const menuItems = require('../menu.json').menuItems;

function Order() {
  
  const [itemCount, setItemCount] = useState(0);
  const [order, setOrder] = useState([]);
  const navigation = useNavigation();
  
  const addItem = (item) => {
    setItemCount((itemCount) => itemCount + 1);

    setOrder((order) => {
      return {
        ...order,
        [item.id]: { ...item, count: order[item.id] ? order[item.id].count + 1 : 1 }
      };
    });
    console.log(order);
  };

  const checkout = () => {
    navigation.navigate('Checkout', {order});
  };

  return (
    <View style={styles.container}>
      <FlatList style={styles.list}
        data={menuItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} onPress={() => addItem(item)}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>${item.price}</Text>
          </TouchableOpacity>
        )}
      />

      <View style={styles.buttonContainer}>
        <Button title={`Checkout (${itemCount})`} color='black' onPress={() => checkout()}/>
      </View>
    </View>
  );
}

export default Order;