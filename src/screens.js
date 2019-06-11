
import {
  Navigation
} from 'react-native-navigation';

export function registerScreens() {

  Navigation.registerComponent('Login', () => require('./screens/Login').default);
  Navigation.registerComponent('Home', () => require('./screens/Home').default); 
  Navigation.registerComponent('StartTraining', () => require('./screens/StartTraining').default);

  Navigation.registerComponent('Profile', () => require('./screens/Profile').default);
  Navigation.registerComponent('Camera', () => require('./screens/Camera').default);
  Navigation.registerComponent('WordList', () => require('./screens/WordList').default);
  Navigation.registerComponent('Map', () => require('./screens/Map').default);
  Navigation.registerComponent('FireBase', () => require('./screens/FireBase').default);  
}