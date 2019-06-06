import {PureComponent} from 'react'; 
import {Navigation} from 'react-native-navigation'; 

import React, {
  Component
} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableHighlight
} from 'react-native';


var Dimensions = require('Dimensions');
var {
  width,
  height
} = Dimensions.get('window');

class AddPost extends PureComponent { 

  render() {
    return (
    <View style={styles.container}> 
        <ImageBackground source = {
          require('/Users/mymac/Development/react-native/navigation/images/bg.png')
        }
        style = {
          styles.backgroundImage
        } >
         
                <Image
                  style={styles.faceimage}
                  source={require('/Users/mymac/Development/react-native/navigation/images/face.png')}
                /> 

                <Text style={styles.spelltrain}> SpellTrain </Text>  
                <Text style={styles.master}> Master the art of spelling </Text> 

                <TouchableHighlight style = {
                  styles.button
                }
                onPress = {
                  () => {
                    Navigation.push(this.props.componentId, {
                      component: {
                        name: 'Home',
                      }
                    });
                  }
                } >
                <Text style={styles.buttonText}>Login with Amazon</Text> 
                </TouchableHighlight>
                <Text style={styles.amazon} > What is Amazon Alexa?</Text>

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
    fontWeight: '100'
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
    alignSelf: 'center'
  },
  backgroundImage: {
    flex: 1,
    alignSelf: 'stretch',
  }
});

export default AddPost;