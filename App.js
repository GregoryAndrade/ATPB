import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BooksListPage from './src/pages/BooksListPage';
import Routes from './src/routes';
import LoginPage from './src/pages/LoginPage'
import SignupPage from './src/pages/SignupPage';
import { useState } from 'react';

const Drawer = createDrawerNavigator();

export default function App() {
  const [isLoggedUser, setIsLoggedUser] = useState(false);

  console.log(isLoggedUser);
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        {!isLoggedUser && 
          <Drawer.Screen name="Acessar" >
           {() => <LoginPage action={setIsLoggedUser}/>}
          </Drawer.Screen>}
        {!isLoggedUser && <Drawer.Screen name="Registrar-se" component={SignupPage}/>}
        {isLoggedUser && <Drawer.Screen name="Livros Cadastrados" component={BooksListPage}/>}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}