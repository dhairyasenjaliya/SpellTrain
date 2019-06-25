 
import {Navigation} from 'react-native-navigation';   
import firebase from 'react-native-firebase';

import { GoogleSignin, GoogleSigninButton, statusCodes } from 'react-native-google-signin';

import React, { PureComponent } from 'react';
import { 
	StyleSheet,
	Text,
	View,
	Image,
	ImageBackground,
	TouchableHighlight,
	TextInput,
	Alert,
	YellowBox, 
	Button 
} from 'react-native';  

import { LoginButton, AccessToken, LoginManager } from 'react-native-fbsdk'; 
	 
import SplashScreen from 'react-native-splash-screen';

YellowBox.ignoreWarnings(['Require cycle:']); 

class Login extends PureComponent {
	state = { user: null, userInfo: '', email: '', password: '', errorMessage: null };

	// For Console eror In fb

	_onFBButtonPress() {
	 LoginManager.logInWithReadPermissions(['public_profile', 'email'])
			.then(result => {
				console.log('result', result);
				if (!result.isCancelled) {
					return AccessToken.getCurrentAccessToken();
				}
			})
			.then(data => {
				console.log('data', data);
			})
			.catch(error => console.log(`Login fail with error: ${error}`));
	}

	handleSignUp = () => {
		if (this.state.email == '' || this.state.password == '') {
			console.warn('EMpty');
		} else {
			firebase
				.auth()
				.createUserWithEmailAndPassword(this.state.email, this.state.password)
				.then(() => {
					Navigation.push(this.props.componentId, {
						component: {
							name: 'Home',
						},
					});
				})
				.catch(error => this.setState({ errorMessage: error.message }));
		}
	};

	handleLogin = () => {
		if (this.state.email === '' || this.state.password === '') {
			Alert.alert('Please Provide Email AND Password');
		} else {
			const { email, password } = this.state;
			firebase
				.auth()
				.signInWithEmailAndPassword(email, password)
				.then(() => {
					Navigation.push(this.props.componentId, {
						component: {
							name: 'Home',
						},
					});
				})
				.catch(error => this.setState({ errorMessage: error.message }));
		}
	};

	validate = text => {
		console.log(text);
		let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if (reg.test(text) === false) {
			console.warn('Email is Not Correct');
			this.setState({ email: text });
			return false;
		} else {
			this.setState({ email: text });
			console.warn('Email is Correct');
		}
	};

	componentDidMount() {

		setTimeout(() => {
			SplashScreen.hide();
		}, 100);

		GoogleSignin.configure({
			//It is mandatory to call this method before attempting to call signIn()
			scopes: ['https://www.googleapis.com/auth/drive.readonly'],
			// Repleace with your webClientId generated from Firebase console
			webClientId: '86734367320-b8arsdhcurk3erfkdh1h2jrtm0pplbhv.apps.googleusercontent.com',
		});
	}
	_signIn = async () => {
		//Prompts a modal to let the user sign in into your application.
		try {
			await GoogleSignin.hasPlayServices({
				//Check if device has Google Play Services installed.
				//Always resolves to true on iOS.
				showPlayServicesUpdateDialog: true,
			});
			const userInfo = await GoogleSignin.signIn();
			console.log('User Info --> ', userInfo);
			this.setState({ user: userInfo.user });
		} catch (error) {
			console.log('Message', error.message);
			if (error.code === statusCodes.SIGN_IN_CANCELLED) {
				console.log('User Cancelled the Login Flow');
			} else if (error.code === statusCodes.IN_PROGRESS) {
				console.log('Signing In');
			} else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
				console.log('Play Services Not Available or Outdated');
			} else {
				console.log('Some Other Error Happened');
			}
		}
	};
	_getCurrentUser = async () => {
		//May be called eg. in the componentDidMount of your main component.
		//This method returns the current user
		//if they already signed in and null otherwise.
		try {
			const userInfo = await GoogleSignin.signInSilently();
			this.setState({ userInfo });
		} catch (error) {
			console.error(error);
		}
	};
	_signOut = async () => {
		//Remove user session from the device.
		try {
			await GoogleSignin.revokeAccess();
			await GoogleSignin.signOut();
			this.setState({ user: null }); // Remove the user from your app's state as well
		} catch (error) {
			console.error(error);
		}
	};
	_revokeAccess = async () => {
		//Remove your application from the user authorized applications.
		try {
			await GoogleSignin.revokeAccess();
			console.log('deleted');
		} catch (error) {
			console.error(error);
		}
	};

	render() {
		let path2 = '../../images/face.png';
		return (
			<View style={styles.container}>
				<ImageBackground
					source={require('../../images/bg.png')}
					style={styles.backgroundImage}
				>
					<Image
						style={styles.faceimage}
						source={this.state.user == null ? require(path2) : { uri: this.state.user.photo }}
					/>

					<Text style={styles.spelltrain}> SpellTrain </Text>
					<Text style={styles.master}> Master the art of spelling </Text>
					<View style={styles.Input}>
						<TextInput
							placeholder="Email"
							autoCapitalize="none"
							// style={styles.textInput}
							style={
								this.state.errorMessage === 'Email is Not Correct'
									? styles.errorValidation
									: styles.textInput
							}
							onChangeText={
								// email => this.setState({ email })
								text => this.validate(text)
							}
							value={this.state.email}
						/>
						<TextInput
							secureTextEntry
							placeholder="Password"
							autoCapitalize="none"
							style={styles.textInput}
							onChangeText={password => this.setState({ password })}
							value={this.state.password}
						/>
					</View>
					<View style={{ top: 50 }}>
						<TouchableHighlight
							style={styles.button}
							onPress={() => {
								{
									this.handleLogin();
								}
							}}
						>
							<Text style={styles.buttonText}>Login with Amazon</Text>
						</TouchableHighlight>
					</View>
					<TouchableHighlight
						style={styles.button}
						onPress={() => {
							{
								this.handleSignUp();
							}
						}}
					>
						<Text style={styles.buttonText}>SignUp</Text>
					</TouchableHighlight>
					<View style={{ alignSelf: 'center', top: 100, flexDirection: 'row' }}>
						{/* <LoginButton
							onLoginFinished={(error, result) => {
								if (error) {
									console.warn('login has error: ' + result.error);
								} else if (result.isCancelled) {
									console.warn('login is cancelled.');
								} else {
									AccessToken.getCurrentAccessToken().then(data => {
										console.warn(data.accessToken.toString());
										console.warn(data);

									});
								}
							}}
							onLogoutFinished={() => console.log('logout.')}
						/> */}

						<TouchableHighlight
							style={styles.facebook}
							onPress={() => {
								{
									this._onFBButtonPress();
								}
							}}
						>
							<Text style={styles.fbText}>FaceBook</Text>
						</TouchableHighlight>

						{/* <Button
							onPress={() => this._onFBButtonPress()}
							buttonStyle={'buttonFb'}
							labelStyle={'buttonFbText'}
							title="Login"
						/> */}

						<GoogleSigninButton
							style={{ width: 192, height: 40, top: -3 }}
							size={GoogleSigninButton.Size.Wide}
							color={GoogleSigninButton.Color.Dark}
							onPress={this.state.user == null ? this._signIn : this._signOut}
							disabled={this.state.isSigninInProgress}
						/>
					</View>
					{/* <Text style={styles.amazon} > What is Amazon Alexa?</Text> */}
				</ImageBackground>
			</View>
		);
	}
}


const styles = StyleSheet.create({
	errorValidation: {
		height: 40,
		width: '80%',
		borderColor: 'red',
		borderWidth: 1,
		top: 10,
		bottom: 10,
	},

	textInput: {
		height: 40,
		width: '80%',
		borderColor: 'gray',
		borderWidth: 1,
		top: 10,
		bottom: 10,
	},
	Input: {
		marginTop: '40%',
		left: 40,
	},
	amazon: {
		top: '10%',
		alignSelf: 'center',
		color: 'white',
		fontSize: 20,
		fontWeight: 'bold',
	},

	facebook: {
		width: 180,
		height: 35,
		alignItems: 'center',
		backgroundColor: '#3b5998',
		borderRadius: 5,
	},

	fbText: {
		color: '#ffffff',
		fontSize: 18,
		fontWeight: 'bold',
		top: 5,
	},
	button: {
		top: '10%',
		width: 320,
		height: 60,
		alignItems: 'center',
		backgroundColor: '#ffffff',
		borderRadius: 30,
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
		height: 120,
		width: 120,
		borderRadius: 100,
		top: '15%',
		alignSelf: 'center',
	},
	backgroundImage: {
		flex: 1,
		alignSelf: 'stretch',
	},
});


export default Login;