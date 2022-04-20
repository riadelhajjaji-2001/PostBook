
import {createStackNavigator} from 'react-navigation-stack'
import AboutScreen from '../screens/AboutScreen'
const screens={
    About:{
        screen:AboutScreen,
    }
}
const AboutStack=createStackNavigator(screens)
export default AboutStack