 
// import firebase from 'react-native-firebase'
// import {PureComponent} from 'react'
// import { Navigation } from 'react-native-navigation'; 


// export default class Loading extends PureComponent {

//   componentDidMount() {
//     firebase.auth().onAuthStateChanged(user => {

//       this.props.navigation.navigate(user ? 'Home' : 'SignUp')

//     })    
//   }

// }
// export default Loading




import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
// import firebase from 'react-native-firebase';
import Navigation from 'react-native-navigation'

export default class Loading extends React.Component {


  componentDidMount() {
    // firebase.auth().onAuthStateChanged(user => { 
    //   this.props.navigation.navigate(user ? 'Home' : 'SignUp')  
    // })    

      Navigation.push(this.props.componentId, {
        component: {
          name: 'Home',
        },
		  });

  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Loading</Text>
        <ActivityIndicator size="large" />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})