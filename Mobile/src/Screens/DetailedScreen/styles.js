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
    alignItems: 'center',
  },
  img: {
    width: 380,
    height: 200,
    resizeMode: 'cover',

    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  title: {
    fontSize: 30,
    color: '#D9D9D9',

    marginTop: 20,
    marginLeft: 15,
  },
  div: {
    backgroundColor: '#B1FF92',

    marginTop: 25,
    marginBottom: 25,
  },
  level: {
    fontSize: 25,
    color: '#FFA378',

    alignSelf: 'flex-end',

    marginRight: 20,
  },
  tagView: {
    flexDirection: 'row',
    alignSelf: 'flex-start',

    marginLeft: 5,
    marginBottom: 40,
    marginHorizontal: 25,

    flexWrap: 'wrap',
  },
  tagTitle: {
    color: '#B1FF92',
    fontSize: 22,

    alignSelf: 'flex-start',
    marginLeft: 20,
    marginBottom: 25,
  },
  tagText: {
    color: '#1D1D1D',
    backgroundColor: '#B1FF92',

    marginHorizontal: 15,
    marginBottom: 15,
    padding: 5,
    fontSize: 20,

    borderRadius: 8,

    alignSelf: 'center',
  },
});
export default styles;
