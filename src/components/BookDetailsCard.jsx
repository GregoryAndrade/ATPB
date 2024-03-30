import { View, Text, Image, StyleSheet } from 'react-native';

export default function BookDetailsCard({ book }){
    return (
    <View style={styles.card}>
      <Image source={{ uri: book.cover }} style={styles.cover} />
      <View style={styles.info}>
        <Text style={styles.title}>{book.title}</Text>
        <Text style={styles.author}>{book.author}</Text>
        <Text style={styles.genre}>{book.genre}</Text>
        <Text style={styles.price}>R$ {book.price.toFixed(2)}</Text>
        <Text style={styles.rating}>Avaliação: {book.rating} / 5</Text>
        <Text style={styles.synopsis}>{book.synopsis}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 6,
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowColor: '#000',
    shadowOffset: { height: 3, width: 3 },
    elevation: 5,
  },
  cover: {
    margin: 5,
    alignSelf: 'center',
    width: 150,
    height: 200,
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
  },
  info: {
    padding: 10,
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  author: {
    fontSize: 14,
    color: 'grey',
  },
  genre: {
    fontSize: 14,
    color: 'grey',
  },
  price: {
    fontSize: 14,
    color: 'green',
  },
  rating: {
    fontSize: 14,
    color: 'orange',
  },
  synopsis: {
    fontSize: 12,
    color: 'grey',
  },
});