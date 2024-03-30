import { createStackNavigator } from '@react-navigation/stack';
import AuthLoginContainer from '../containers/AuthLoginContainer'
import SignupPage from './SignupPage';
import BooksListPage from './BooksListPage';
import HomePage from './HomePage';

const Stack = createStackNavigator();

export default function LoginPage({action, actionRedirectToRegister}) {
    // const { navigation } = props;
    // const { params } = props.route;

    // function redirectToRegister() {
    //     navigation.navigate("Register", { redirectToLogin });
    // }

    // function redirectToLogin() {
    //     navigation.navigate("Login");
    // }

    // function redirectToHome() {
    //     navigation.navigate("Home");
    // }

    return (
//         <Stack.Navigator>
//             <Stack.Screen name="Login">
//                 {() => <AuthLoginContainer registerAction={redirectToRegister} loginSuccessAction={redirectToHome} />}
//             </Stack.Screen>
//             <Stack.Screen name="Register"
//                 component={SignupPage} />
//             <Stack.Screen name="Home"  options={{
//     headerShown: false
//   }}
//                 component={HomePage} />
//         </Stack.Navigator>
        <AuthLoginContainer action={action}/>
    )
}
