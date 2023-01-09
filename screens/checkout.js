import React, {useState, useEffect} from 'react';
import { Text, View, FlatList, Button} from 'react-native';
import styles from '../styles';

function Checkout({ route }) {
  const { order } = route.params;
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let initialTotal = Object.values(order).reduce((acc, cur) => {
      return acc + cur.price * cur.count;
    }, 0);

    initialTotal = initialTotal.toFixed(2);

    setTotal(initialTotal);
  }, [order]);

  const checkout = () => {
    alert('Your order has been placed!');
  };

  return (
    <View style={styles.container}>
      <FlatList style={styles.list}
        data={Object.values(order)}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.name}>{item.name}</Text>
            <View>
              <Text style={styles.price}>${(item.price * item.count).toFixed(2)}</Text>
              <Text style={styles.count}>Qty {item.count}</Text>
            </View>
          </View>
        )}
      />

      <View style={styles.totalContainer}>
        <Text style={{textAlign: 'left', fontWeight: 'bold'}}>Order Total</Text>
        <Text style={{textAlign: 'right', fontWeight: 'bold'}}>${total}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Place order" color='black' onPress={() => checkout()}/>
      </View>
    </View>
  );
}

export default Checkout;