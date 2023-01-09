import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import  Order  from './screens/order';
import  Checkout from './screens/checkout';
import styles from './styles';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              if (route.name === 'Order') {
                return (
                  <MaterialCommunityIcons name="french-fries" size={size} color={color} />
                );
              } else if (route.name === 'Checkout') {
                return (
                  <MaterialCommunityIcons name="cash-register" size={size} color={color} />
                );
              }
            },
            tabBarLabel: () => {
              if (route.name === 'Order') {
                return (
                  <Text style={styles.tabBarLabel}>Order</Text>
                );
              } else if (route.name === 'Checkout') {
                return (
                  <Text style={styles.tabBarLabel}>Checkout</Text>
                );
              }
            },
            tabBarInactiveTintColor: 'gray',
            tabBarActiveTintColor: '#FFC72C',
            headerStyle: [styles.shadow, styles.header],
            headerTitleStyle: styles.headerTitle,

          })}
        >
          <Tab.Screen name="Order" component={Order}/>
          <Tab.Screen name="Checkout" component={Checkout}/>
        </Tab.Navigator>
      </NavigationContainer>
  );
}

