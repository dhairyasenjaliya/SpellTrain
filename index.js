import {
  Navigation
} from 'react-native-navigation';
import {
  registerScreens
} from './src/screens';

import { YellowBox } from 'react-native'; 

YellowBox.ignoreWarnings(['Require cycle:']);

registerScreens();
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
		root: {
			stack: {
				children: [
					{
						component: {
							name: 'AddTask',
						},
					},
				],
				options: {
					topBar: {
						title: {
							text: 'Demo',
						},
						height: 0,
					},
				},
			},
		},
  });
});
