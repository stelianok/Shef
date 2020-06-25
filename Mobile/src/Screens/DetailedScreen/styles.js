import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',

    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#1D1D1D',

    marginVertical: 50,

    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  img: {
    width: 355,
    height: 200,
    resizeMode: 'cover',

    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  title: {
    fontSize: 24,
    color: '#D9D9D9',
  },
});
export default styles;
