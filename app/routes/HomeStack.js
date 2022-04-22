
import { createStackNavigator } from 'react-navigation-stack'
import NavigationHeader from '../components/NavigationHeader'
import CreatePostScreen from '../screens/CreatePostScreen'
import LoginScreen from '../screens/LoginScreen'
import PostsScreen from '../screens/PostsScreen'
import ViewPostScreen from '../screens/ViewPostScreen'

const screens = {
    Posts: {
        screen: PostsScreen,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <NavigationHeader title="My Posts" navigation={navigation} />,
            }
        }
    },
    CreatePost: {
        screen: CreatePostScreen,


    }
    ,
    Login: {
        screen: LoginScreen,
        header:{
            title:"Register"
        }
    },
    ViewPost: {
        screen: ViewPostScreen
    }
}
// const HomeStack=createStackNavigator(screens, {defaultNavigationOptions: ({ navigation }) => {
//     return {
//         // headerTitle: () => <NavigationHeader title="My Posts" navigation={navigation} />,
//         // // headerStyle: {
//         // //     backgroundColor: 'red',
//         // //     flexDirection:'row',
//         // //     justifyContent:"space-between"
//         // // }
//     }}
// })
const HomeStack = createStackNavigator(screens)
export default HomeStack