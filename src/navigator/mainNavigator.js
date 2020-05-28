import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile54022Navigator from '../features/UserProfile54022/navigator';
import Tutorial54021Navigator from '../features/Tutorial54021/navigator';
import NotificationList53993Navigator from '../features/NotificationList53993/navigator';
import Settings53992Navigator from '../features/Settings53992/navigator';
import Settings53984Navigator from '../features/Settings53984/navigator';
import UserProfile53982Navigator from '../features/UserProfile53982/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
UserProfile54022: { screen: UserProfile54022Navigator },
Tutorial54021: { screen: Tutorial54021Navigator },
NotificationList53993: { screen: NotificationList53993Navigator },
Settings53992: { screen: Settings53992Navigator },
Settings53984: { screen: Settings53984Navigator },
UserProfile53982: { screen: UserProfile53982Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
