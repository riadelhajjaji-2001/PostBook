import {createDrawerNavigator} from 'react-navigation-drawer'
import {createAppContainer} from 'react-navigation'
import HomeStack from './HomeStack'
import AboutStack from './AboutStack'
import ConfigStack from './ConfigStack'

const navBar={
    Home:{
        screen:HomeStack
    },
    About:{
        screen:AboutStack
    },
    Config:{
        screen:ConfigStack
    }

}
const NavigationDrawer=createDrawerNavigator(navBar)

export default createAppContainer(NavigationDrawer)