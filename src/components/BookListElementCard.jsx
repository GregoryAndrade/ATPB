import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

export default function BookListElementCard({book, action}){
const { title, author, genre, price, cover } = book;
const imgConfig = { uri: cover }

    return (
        <Pressable onPress={() => action(book)}>
            <View style={styles.container}>
                <Image style={styles.cardImage} source={imgConfig} />
                <View style={styles.cardInfo}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.author}>{author}</Text>
                    <Text style={styles.author}>{genre}</Text>
                </View>
                <View>
                    <Text style={styles.listItem}>R$ {price.toFixed(2)}</Text>
                </View>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        marginHorizontal: 2,
        marginVertical: 1,
        flexDirection: 'row',
        shadowColor: '#000',
        shadowRadius: 3.84,
        shadowOffset: {
            width: 0, height: 2
        },
        shadowOpacity: 0.25,
        elevation: 1
    },
    cardImage: {
        width: 100,
        height: 150,
    },
    cardInfo: {
        flexGrow: 1,
    },
    listItem: {
        padding: 4,
        margin: 2,
    },
    description: {
        width: '50%',
    },
    title:{
        margin: 2,
        fontSize: 16
    },
    author:{
        margin: 2,
        fontSize: 14,
        color: 'gray',
        opacity: 0.8
    }
})