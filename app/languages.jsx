import { FlatList, Text, View, StyleSheet } from 'react-native';
import Component from '../src/Component.jsx';
import data from '../src/data.js';

const func = ({ item }) => {
    return <Component progLang={item.language} exp={item.exp} image={item.img} stl={styles}/>
};

export default function Languages() {
  return (
    <View style={styles.container}>
      <FlatList data={data} renderItem={func}></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
  imgContainer: {
    width: 100, 
    height: 100, 
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '100%',
    height: '100%',
    justifyContent: 'center', 
    alignItems: 'center',
    resizeMode: 'contain',
  }
});