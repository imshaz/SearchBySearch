
import {createDrawerNavigator} from 'react-navigation'; 
import Dashboard from './Dashboard'
import Tabs from './BottomTabNavigator'; 

const drawerNav= createDrawerNavigator({

    Dashboard:{screen:Tabs}
})




export default drawerNav;