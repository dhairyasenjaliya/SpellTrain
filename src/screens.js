
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
  Navigation.registerComponent('SignUp', () => require('./screens/SignUp').default);  
  Navigation.registerComponent('SignUp', () => require('./screens/SignUp').default);  
  Navigation.registerComponent('Initialize', () => require('./screens/Initialize').default);  

  Navigation.registerComponent('AddTask', () => require('./screens/AddTask').default);   
  
  Navigation.registerComponent('ToDo', () => require('./screens/ToDo').default);  

}