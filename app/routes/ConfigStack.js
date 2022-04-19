
import {createStackNavigator} from 'react-navigation-stack'
import ConfigScreen from '../screens/ConfigScreen'
const screens={
    Config:{
        screen:ConfigScreen,
    },
   

}
const ConfigStack=createStackNavigator(screens)
export default ConfigStack