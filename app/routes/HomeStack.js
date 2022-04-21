
import {createStackNavigator} from 'react-navigation-stack'
import NavigationHeader from '../components/NavigationHeader'
import CreatePostScreen from '../screens/CreatePostScreen'
import PostsScreen from '../screens/PostsScreen'
import ViewPostScreen from '../screens/ViewPostScreen'

const screens={
    Posts:{
        screen:PostsScreen,
    },
    ViewPost:{
        screen:ViewPostScreen
    },
    CreatePost:{
        screen:CreatePostScreen,
       
}}
const HomeStack=createStackNavigator(screens, {defaultNavigationOptions: ({ navigation }) => {
    return {
        headerTitle: () => <NavigationHeader title="My Posts" navigation={navigation} />,
        headerStyle: {
            backgroundColor: 'red',
            flexDirection:'row',
            justifyContent:"space-between"
        }
    }}
})

export default HomeStack