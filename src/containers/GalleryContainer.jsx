import { View, Text, FlatList, StyleSheet, Image } from "react-native";

export default function GalleryContainer({ photos }) {
    const phothosToRender = [...new Set(photos)]
    
    function renderItem({ item }) {
        return <Image
            style={styles.img}
            source={{uri: item}} />
    }
    return (
        <FlatList
            style={styles.container}
            data={phothosToRender}
            renderItem={renderItem}
            keyExtractor={(item) => item}
        />
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignContent: 'center',
        alignSelf: 'center'
    },
    img:{
        margin: 2,
        height: 350,
        width: 350
    }
})