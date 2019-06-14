import React, { PureComponent } from 'react';
import { Alert ,Button, ScrollView, TouchableOpacity, View, Text, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import DialogInput from 'react-native-dialog-input';

 export default class Todo extends PureComponent {

					constructor(props) {
						super(props);
						this.state = {
							isDialogVisible: false, 
						};
					}

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

					showDialog(isShow) {
						this.setState({ isDialogVisible: isShow });
					}

					sendInput(inputText) { 

					 this.setState({ 
							isDialogVisible: false,
						}); 
						this.props.doc.ref.update({
							title: inputText,
						});
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
									<DialogInput
										isDialogVisible={this.state.isDialogVisible}
										title={'Edit Task'}
										// message={'Message for DialogInput #1'}
										// hintInput={'HINT INPUT'}
										initValueTextInput={this.props.title}
										submitInput={inputText => {
											this.sendInput(inputText);
										}}
										closeDialog={() => {
											this.showDialog(false);
										}}
									/>
									<TouchableOpacity
										onPress={() => {
											this.showDialog(true);
										}}
										style={{ padding: 3 }}
									>
										<Icon
											style={{ left: 4, color: 'blue' }}
											size={20}
											name="edit"
										/>
									</TouchableOpacity>

									<TouchableOpacity onPress={() => this.deleteTask()}>
										<Icon
											style={{ left: 4, color: 'red' }}
											size={20}
											name="trash"
										/>
									</TouchableOpacity>

									<TouchableOpacity onPress={() => this.toggleComplete()}>
										<Text
											style={{
												left: 20,
												textDecorationLine: this.props.complete
													? 'line-through'
													: 'none',
												textDecorationStyle: 'solid',
											}}
										>
											{this.props.title}
										</Text>
									</TouchableOpacity>
									{/* <Button style={{ height:10  }} title={'delete'}/> */}
								</View>
								<View style={{ flex: 2 }}>
									{this.props.complete && (
										<Icon
											style={{ padding: 10 }}
											size={20}
											name="eye-slash"
										/>
									)}
								</View>
							</View>
						);
					}
				}

 