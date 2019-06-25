import React, {
  PureComponent
} from 'react';
import {Platform, StyleSheet, Text, View,Image,ImageBackground ,TouchableOpacity ,ScrollView} from 'react-native';  
import {Navigation} from 'react-native-navigation'; 
// import firebase from 'react-native-firebase'; 

export default class App extends PureComponent { 

	// state = { currentUser: null }
  // componentDidMount() {
  //   const { currentUser } = firebase.auth()
	// 	this.setState({ currentUser })
	// 	console.warn(this.state.currentUser)
	// }

  render() {
    return (
		<View style={styles.container}>
			<ScrollView>
				<ImageBackground source={require('../../images/bg.png')} style={styles.backgroundImage}>
					<View style={styles.viewOne}>
						<View style={styles.viewOne}>
							<TouchableOpacity
								style={styles.button}
								onPress={() => {
									Navigation.push(this.props.componentId, {
										component: {
											name: 'StartTraining',
										},
									});
								}}
							>
								<Image style={styles.faceimage} source={require('../../images/mic.png')} />
								<Text style={styles.buttonText}>Start Training</Text>
							</TouchableOpacity>
						</View>
						<View style={styles.viewOne}>
							<TouchableOpacity
								style={styles.button}
								onPress={() => {
									Navigation.push(this.props.componentId, {
										component: {
											name: 'WordList',
										},
									});
								}}
							>
								<Image
									// style={styles.faceimage}
									source={require('../../images/bookmark.png')}
								/>
								<Text style={styles.buttonText}>Wordlist</Text>
							</TouchableOpacity>
						</View>
					</View>
					<View style={styles.viewTwo}>
						<View>
							<TouchableOpacity
								style={styles.button}
								onPress={() => {
									Navigation.push(this.props.componentId, {
										component: {
											name: 'Profile',
										},
									});
								}}
							>
								<Image source={require('../../images/user.png')} />
								<Text style={styles.buttonText}>Your Profile</Text>
							</TouchableOpacity>
						</View>
						<View style={styles.viewTwo}>
							<TouchableOpacity
								style={styles.button}
								onPress={() => {
									Navigation.push(this.props.componentId, {
										component: {
											name: 'Camera',
										},
									});
								}}
							>
								<Image
									style={{ height: 65, width: 65 }}
									source={require('../../images/camera.png')}
								/>
								<Text style={styles.buttonText}>Camera</Text>
							</TouchableOpacity>
						</View>
					</View>

					<View style={styles.viewThree}>
						<View style={styles.viewOne}>
							<TouchableOpacity
								style={styles.button}
								onPress={() => {
									Navigation.push(this.props.componentId, {
										component: {
											name: 'Map',
										},
									});
								}}
							>
								<Image style={{ height: 70, width: 70 }} source={require('../../images/map.png')} />
								<Text style={styles.buttonText}>Map</Text>
							</TouchableOpacity>
						</View>

						<View style={styles.viewOne}>
							<TouchableOpacity
								style={styles.button}
								onPress={() => {
									Navigation.push(this.props.componentId, {
										component: {
											name: 'FireBase',
										},
									});
								}}
							>
								<Image
									style={{ height: 70, width: 70 }}
									source={require('../../images/firebase.png')}
								/>
								<Text style={styles.buttonText}>FireBase Notification</Text>
							</TouchableOpacity>
						</View>
					</View>

					<View style={styles.viewFour}>
						<View style={styles.viewOne}>
							<TouchableOpacity
								style={styles.button}
								onPress={() => {
									Navigation.push(this.props.componentId, {
										component: {
											name: 'AddTask',
										},
									});
								}}
							>
								<Image
									style={{ height: 70, width: 70 }}
									source={require('../../images/todo.png')}
								/>
								<Text>TODO </Text>
								<Text>(FireBase Cloud Storage)</Text>
							</TouchableOpacity>
						</View>

						<View style={styles.viewOne}>
							<TouchableOpacity
								style={styles.button}
								onPress={() => {
									Navigation.push(this.props.componentId, {
										component: {
											name: 'AddTask',
										},
									});
								}}
							>
								<Image style={{ height: 70, width: 70 }} source={require('../../images/firebase.png')} />
								<Text style={styles.buttonText}>FireBase Notification</Text>
							</TouchableOpacity>
						</View>
					</View>
				</ImageBackground>
			</ScrollView>
		</View>
	);
  }
}

const styles = StyleSheet.create({

	viewFour: {
		flexDirection: 'row',
		marginTop: -20,
		padding: 5,
	},
	
	viewThree: {
		flexDirection: 'row',
		marginTop: -30,
		padding: 5,
	},

	viewOne: {
		flexDirection: 'row',
		marginTop: 10,
		padding: 5,
	},
	viewTwo: {
		marginTop: -10,
		flexDirection: 'row',
		padding: 10,
	},
	container: {
		flex: 1,
		backgroundColor: '#F5FCFF',
	},
	button: {
		justifyContent: 'center',
		alignItems: 'center',
		height: 250,
		width: 180,
		backgroundColor: 'white',
	},
	backgroundImage: {
		flex: 1,
		alignSelf: 'stretch',
	},
});

 