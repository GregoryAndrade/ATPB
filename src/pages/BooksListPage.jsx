import { useState, useEffect } from "react";
import BookListContainer from "../containers/BookListContainer";
import { ActivityIndicator } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BookDetailsContainer from "../containers/BookDetailsContainer";
import Routes from '../routes';

const Stack = createNativeStackNavigator();

export default function BooksListPage(props) {
    const { navigation } = props;

    function selectBook(book) {
        navigation.navigate(Routes.BookDetails, { ...book })
    };
    
    return (
        <Stack.Navigator initialRouteName={Routes.Home}>
            <Stack.Screen name={Routes.BooksPage}>
                {() => <BookListContainer action={selectBook} />}
            </Stack.Screen>
            <Stack.Screen
                name={Routes.BookDetails}
                component={BookDetailsContainer} />
        </Stack.Navigator>
    );
}