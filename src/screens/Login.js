 
import {Navigation} from 'react-native-navigation';   
import firebase from 'react-native-firebase';

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
} from 'react-native';  
import { LoginButton, AccessToken } from 'react-native-fbsdk';

YellowBox.ignoreWarnings(['Require cycle:']); 

class Login extends PureComponent {
	state = { email: '', password: '', errorMessage: null };

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
			Alert.alert('Please Provide Email AND Password')
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
				.catch(
					error => this.setState({ errorMessage: error.message })
					
				);
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
					<View style = {{ alignSelf:'center' ,top : 100}}>
						<LoginButton
							onLoginFinished={(error, result) => {
								if (error) {
									console.warn('login has error: ' + result.error);
								} else if (result.isCancelled) {
									console.warn('login is cancelled.');
								} else {
									AccessToken.getCurrentAccessToken().then(data => {
										console.warn(data.accessToken.toString());
									});
								}
							}}
							onLogoutFinished={() => console.log('logout.')}
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

	button: {
		top: '10%',
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

export default Login;