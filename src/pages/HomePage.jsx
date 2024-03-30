import { View, Text } from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import BooksListPage from "./BooksListPage";
const Drawer = createDrawerNavigator();

export default function HomePage(){
    return <Drawer.Navigator>
            <Drawer.Screen name="Livros Cadastrados" component={BooksListPage}/>
        </Drawer.Navigator>
}