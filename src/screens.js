
import {
  Navigation
} from 'react-native-navigation';

export function registerScreens() {

  Navigation.registerComponent('Login', () => require('./screens/Login').default);
  Navigation.registerComponent('Home', () => require('./screens/Home').default); 
  Navigation.registerComponent('StartTraining', () => require('./screens/StartTraining').default);

  Navigation.registerComponent('Profile', () => require('./screens/Login').default);
  Navigation.registerComponent('Settings', () => require('./screens/Settings').default);
  Navigation.registerComponent('WordList', () => require('./screens/WordList').default);

}