import {createDrawerNavigator} from 'react-navigation-drawer'
import {createAppContainer} from 'react-navigation'
import HomeStack from './HomeStack'
import AboutStack from './AboutStack'
import ConfigStack from './ConfigStack'

const NavBar={
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
const NavigationDrawer=createDrawerNavigator(NavBar)

export default createAppContainer(NavigationDrawer)