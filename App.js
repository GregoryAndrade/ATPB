import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import BooksListPage from './src/pages/BooksListPage';
import Routes from './src/routes';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name={Routes.Home} component={BooksListPage} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}