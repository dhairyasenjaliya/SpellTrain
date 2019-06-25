import React, { PureComponent } from 'react';
import firebase from 'react-native-firebase';
import { Navigation } from 'react-native-navigation'; 

import {
	FlatList,
	ImageBackground, 
	StyleSheet,
	TouchableHighlight,
	View,
	Text,
	TextInput,
	Button,
} from 'react-native';
import Todo from './ToDo'; 
import Icon from 'react-native-vector-icons/dist/FontAwesome';

class AddTask extends PureComponent {
	constructor() {
		super();
		this.ref = firebase.firestore().collection('Todo');
		this.state = {
			textInput: '',
			loading: true,
			todos: [],
		};
		this.unsubscribe = null;
		// console.disableYellowBox = true;
	}

	componentDidMount() {
		this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
	}

	componentWillUnmount() {
		this.unsubscribe();
	}

	onCollectionUpdate = querySnapshot => {
		const todos = [];
		querySnapshot.forEach(doc => {
			const { title, complete } = doc.data();

			todos.push({
				key: 'ECUNbzoxn1eEnSexMBCx',
				doc, // DocumentSnapshot
				title,
				complete,
			});
		});

		this.setState({
			todos,
			loading: false,
		});
	};

	addTodo() {
		this.ref.add({
			title: this.state.textInput,
			complete: false,
		});
		this.setState({
			textInput: '',
		});
	}

	updateTextInput(value) {
		this.setState({ textInput: value });
	}

	FlatListItemSeparator = () => {
		return (
			//Item Separator
			<View style={{ height: 0.5, width: '100%', backgroundColor: '#C8C8C8' }} />
		);
	};

		render() {
			if (this.state.loading) {
				return null; // or render a loading icon
		}

		return (
			<ImageBackground
				source={require('../../images/bg.png')}
				style={styles.backgroundImage}
			>
				<View style={styles.Card}>
					<TextInput
						placeholder={'Add Tasks'}
						value={this.state.textInput}
						onChangeText={text => this.updateTextInput(text)}
						style={{
							color: 'black',
							// backgroundColor: 'red',
							width: '70%',
							top: 20,
						}}
						textAlign={'center'}
						multiline={true}
					/>
					<TouchableHighlight
						style={{
							backgroundColor: !this.state.textInput.length ? '#263238' : '#E53935',
							borderRadius: 100,
							padding: 20,
							width: 70,
							height: 70,
							left: 260,
							top: -30,
						}}
						disabled={!this.state.textInput.length}
						onPress={() => this.addTodo()}
					>
						<Icon
							style={{
								color: '#ffffff',
								padding: 8,
							}}
							size={15}
							name="plus"
						/>
					</TouchableHighlight>

					<FlatList
						data={this.state.todos}
						ItemSeparatorComponent={this.FlatListItemSeparator}
						renderItem={({ item }) => <Todo {...item} />}
						keyExtractor={(item, index) => index.toString()}
						style={{ padding: 5  ,bottom : 40 }}
					/>
				</View>

				<TouchableHighlight
					style={{
						backgroundColor: '#E53935',
						padding: 20,
						width: '70%',
						borderRadius: 40,
						alignSelf: 'center',
						top: 40,
					}}
					onPress={() => {
						Navigation.push(this.props.componentId, {
							component: {
								name: 'Home',
							},
						});
					}}
				>
					<Text style={{ color: 'white', alignSelf: 'center', fontSize: 15 }}>Homee</Text>
				</TouchableHighlight>
			</ImageBackground>
		);
	}
}

const styles = StyleSheet.create({
	backgroundImage: {
		flex: 1,
		alignSelf: 'stretch',
	},
	Card : { 
		top : 80,
		backgroundColor : '#ffffff',
		borderRadius : 20,
		width :350,
		// left : 20,
		alignSelf:'center',  
		height : 600
	}
})

 export default AddTask;