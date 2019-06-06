import {
  Navigation
} from 'react-native-navigation';
import {
  registerScreens
} from './src/screens';

registerScreens();
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [{
          component: {
            name: 'Login'
          }
        }],
        options: {
          topBar: {
            title: {
              text: 'Demo',
            }, 
            height: 0
          }
        }
      }
    }
  });
});
