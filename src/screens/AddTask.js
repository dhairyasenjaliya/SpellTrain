import React, { PureComponent } from 'react';
import firebase from 'react-native-firebase';
import { FlatList, TouchableHighlight, View, Text, TextInput, Button } from 'react-native';
import Todo from './ToDo'; 

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
		console.disableYellowBox = true;
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
				key: 'Atnb0ag3y0rN8rJd80Iw',
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

	render() {
		if (this.state.loading) {
			return null; // or render a loading icon
		}

		return (
			<View style={{ flex: 1 }}>
				<TextInput
					placeholder={'Add TODO'}
					value={this.state.textInput}
					onChangeText={text => this.updateTextInput(text)}
				/>

				{/* <Button
					title={'Add'}
					disabled={!this.state.textInput.length}
					onPress={() => this.addTodo()}
					
				/> */}

				<TouchableHighlight
					style={{
						backgroundColor: '#E53935',
						borderRadius: 100,
						padding: 20,
						width: 70,
						height: 70,
						left: 300,
					}}
					onPress={() => this.addTodo()}
				>
					<Text>Add Task</Text>
				</TouchableHighlight>

				<FlatList data={this.state.todos} renderItem={({ item }) => <Todo {...item} />} />

				<Button title={'Go Back'} color="#E53935" onPress={() => this.addTodo()} />
			</View>
		);
	}
}
 export default AddTask;