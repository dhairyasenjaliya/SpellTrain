import React, { PureComponent } from 'react';
import { Navigation } from 'react-native-navigation';
 
import { YellowBox, Alert, StyleSheet, Text, View, Image, ImageBackground, TouchableHighlight } from 'react-native';
import firebase  from 'react-native-firebase';   

import type, { Notification, NotificationOpen } from 'react-native-firebase';

YellowBox.ignoreWarnings(['Require cycle:']);

var Dimensions = require('Dimensions');
var { width, height } = Dimensions.get('window');
 
class FireBase extends PureComponent {
 

	async componentDidMount() {  
		
				const channel = new firebase.notifications.Android.Channel(
					'channelId',
					'Channel Name',
					firebase.notifications.Android.Importance.Max
				).setDescription('A natural description of the channel');
				firebase.notifications().android.createChannel(channel);

					this.unsubscribeFromNotificationListener = firebase.notifications().onNotification(notification => {
					this.setState({
						notifData: notification.body,
					});

					const localNotification = new firebase.notifications.Notification({ 
						show_in_foreground: true,
					})
					.setNotificationId(notification.notificationId)
					.setTitle(notification.title)
					.setSubtitle(notification.subtitle)
					.setBody(notification.body)
					.setData(notification.data)
					.android.setAutoCancel(true)
					.android.setChannelId('channelId')
					.android.setColor('#000000')
					.android.setPriority(firebase.notifications.Android.Priority.High);

				firebase
					.notifications()
					.displayNotification(localNotification)
					.catch(err => console.error(err));
			});
	}

	render() {
		return (
			<View style={styles.container}>
				<ImageBackground
					source={require('/Users/mymac/Development/react-native/navigation/images/bg.png')}
					style={styles.backgroundImage}
				>
					<Image
						style={styles.faceimage}
						source={require('/Users/mymac/Development/react-native/navigation/images/face.png')}
					/>

					<Text style={styles.spelltrain}> FireBase </Text>
					<Text style={styles.master}> Notification HERE </Text>

					<TouchableHighlight
						style={styles.button}
						onPress={() => {
							Navigation.push(this.props.componentId, {
								component: {
									name: 'Home',
								},
							});
						}}
					>
						<Text style={styles.buttonText}>Home</Text>
					</TouchableHighlight>
				</ImageBackground>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	amazon: {
		top: '30%',
		alignSelf: 'center',
		color: 'white',
		fontSize: 20,
		fontWeight: 'bold',
	},

	button: {
		top: '27%',
		width: 320,
		height: 60,
		alignItems: 'center',
		backgroundColor: '#ffffff',
		borderRadius: 100,
		alignSelf: 'center',
	},
	buttonText: {
		color: '#ffa800',
		top: '30%',
		fontSize: 18,
		fontWeight: 'bold',
	},
	master: {
		alignSelf: 'center',
		top: '19%',
		fontSize: 25,
		color: 'white',
		fontWeight: '100',
	},

	spelltrain: {
		alignSelf: 'center',
		top: '18%',
		fontSize: 40,
		color: 'white',
		fontWeight: 'bold',
	},
	container: {
		flex: 1,
	},
	faceimage: {
		top: '15%',
		alignSelf: 'center',
	},
	backgroundImage: {
		flex: 1,
		alignSelf: 'stretch',
	},
});

export default FireBase;
