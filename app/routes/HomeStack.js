
import {createStackNavigator} from 'react-navigation-stack'
import PostsScreen from '../screens/PostsScreen'
import ViewPostScreen from '../screens/ViewPostScreen'

const screens={
    Posts:{
        screen:PostsScreen,
    },
    ViewPost:{
        screen:ViewPostScreen
    }

}
const HomeStack=createStackNavigator(screens)

export default HomeStack