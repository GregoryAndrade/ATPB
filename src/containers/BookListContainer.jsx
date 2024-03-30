import { Text, View, TextInput, FlatList, StyleSheet } from "react-native";
import BookListElementCard from '../components/BookListElementCard'
import RNPickerSelect from 'react-native-picker-select';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import { MaterialIcons } from '@expo/vector-icons';
import { useState, useEffect } from 'react';
import { ActivityIndicator } from "react-native";

function converter(data) {
    const ids = Object.keys(data);
    const events = Object.values(data);
    const eventsList = events.map((event, index) => {
        return {
            _id: ids[index],
            ...event
        }
    });
    return eventsList;
}

export default function BookListContainer({ action }) {
    const items = [];
    const [searchTerm, setSearchTerm] = useState("");
    const [filtroSelect, setFiltroSelect] = useState("author");
    const [selectedItems, setSelectedItems] = useState([]);
    const url = "https://t3t4-dfe-pb-grl-m1-default-rtdb.firebaseio.com";
    const resource = "books";
    const [books, setBooks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(`${url}/${resource}.json`)
            .then(res => res.json())
            .then(resJson => {
                const convertedList = converter(resJson);
                setBooks(convertedList);
            }).finally(_ => setIsLoading(false));
    }, []);

    function renderItem({ item }) {
        return <BookListElementCard
            book={item}
            action={action} />
    }

    const filteredBooks = books.filter((book) => {
        const titleMatch = book.title
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
        const authorMatch = book.author
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
        const genreMatch =
            selectedItems.length === 0 ||
            selectedItems.some((genre) => book.genre.includes(genre));

        if (filtroSelect) {
            switch (filtroSelect) {
                case "title":
                    return titleMatch && genreMatch;;
                case "author":
                    return authorMatch && genreMatch;
            }
        }
    }
    );

    let genders = {
        name: 'Genero',
        id: 0,
        children: [
        ],
    }

    const distinctGenre = [...new Set(filteredBooks.map(book => book.genre))];

    distinctGenre.map((genre) => {
        genders.children.push({ id: genre, name: genre })
    })

    items.push(genders);

    const onSelectedItemsChange = (selectedItems) => {
        setSelectedItems(selectedItems);
    };

    if(isLoading){
        return <ActivityIndicator/>
    }else{
        if (books?.length > 0) {
            return (
                <View style={styles.container}>
                    <View>
                        <RNPickerSelect
                            placeholder={{}}
                            onValueChange={(value) => setFiltroSelect(value)}
                            items={[
                                { label: 'Autor', value: 'author' },
                                { label: 'Titúlo', value: 'title' },
                            ]}
                        />
                    </View>
                    <View>
                        <TextInput
                            style={styles.seachInput}
                            placeholder="Digite sua busca..."
                            value={searchTerm}
                            onChangeText={text => setSearchTerm(text)}
                        />
                    </View>
    
                    <View>
                        <SectionedMultiSelect
                            items={items}
                            uniqueKey="id"
                            IconRenderer={MaterialIcons}
                            subKey="children"
                            selectText="Selecione os Generos.."
                            showDropDowns={false}
                            readOnlyHeadings={false}
                            onSelectedItemsChange={onSelectedItemsChange}
                            selectedItems={selectedItems}
                        />
                    </View>
                    <FlatList
                        style={styles.container}
                        data={filteredBooks}
                        renderItem={renderItem}
                        keyExtractor={(item) => item._id}
                    />
                </View>
            )
        } else {
    
            return (<Text>Nenhum livro cadastrado!</Text>);
        }
    }

}

const styles = StyleSheet.create({
    container: {
        padding: 3,
        flex: 1,
    },
    seachInput: {
        backgroundColor: 'white',
        padding: 10,
        margin: 3
    }
})