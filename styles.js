import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#FFC72C',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  headerTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  tabBarLabel: {
    fontWeight: 'bold',
    color: 'black',
  },
  list: {
    flex: 1,
    width: '100%',
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  name: {
    fontSize: 16,
  },
  count: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  price: {
    fontSize: 16,
    color: '#888',
    textAlign: 'right',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  buttonContainer: {
    backgroundColor: '#FFC72C',
    width: '100%',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: 20,
  },
});

export default styles;
