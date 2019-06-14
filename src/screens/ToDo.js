import React, { PureComponent } from 'react';
import { Alert ,Button, ScrollView, TouchableOpacity, View, Text, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

 export default class Todo extends PureComponent {
					// toggle a todo as completed or not via update()

					toggleComplete() {
						this.props.doc.ref.update({
							complete: !this.props.complete,
						});
					}

					deleteTask() {
						this.props.doc.ref.delete({
							complete: !this.props.complete,
						});
					}

					editTask(){
					 
			
							// this.props.doc.ref.update({
							// 	complete: !this.props.complete,
							// });
					}

					render() {
						return (
							<View
								style={{
									flex: 1,
									height: 48,
									flexDirection: 'row',
									alignItems: 'center',
								}}
							>
								<View style={{ flex: 8, flexDirection: 'row' }}>
									<TouchableOpacity onPress={() => this.editTask()}>
										<Icon style={{ color: 'red' }} size={20} name="edit" />
									</TouchableOpacity>

									<TouchableOpacity onPress={() => this.deleteTask()}>
										<Icon
											style={{ left: 4, color: 'red' }}
											size={20}
											name="trash"
										/>
									</TouchableOpacity>

									<TouchableOpacity onPress={() => this.toggleComplete()}>
										<Text style={{ left: 20 }}>{this.props.title}</Text>
									</TouchableOpacity>
									{/* <Button style={{ height:10  }} title={'delete'}/> */}
								</View>
								<View style={{ flex: 2 }}>
									{this.props.complete && (
										<Icon style={{ padding: 10 }} size={20} name="eye-slash" />
									)}
								</View>
							</View>
						);
					}
				}

 