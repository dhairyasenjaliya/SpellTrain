import React, {
  PureComponent
} from 'react';
import {Platform, StyleSheet, Text, View,Image,ImageBackground ,TouchableOpacity} from 'react-native';  
import {Navigation} from 'react-native-navigation'; 
  
export default class App extends PureComponent { 
  render() {
    return (
      <View style={styles.container} >
         <ImageBackground source = {
           require('/Users/mymac/Development/react-native/navigation/images/bg.png')
         }
         style = {
           styles.backgroundImage
         }>
            <View style={styles.viewOne}>
              <View style={styles.viewOne}> 
              <TouchableOpacity style={styles.button}  
             onPress = {
               () => { 
                 Navigation.push(this.props.componentId, {
                   component: {
                     name: 'StartTraining',
                   }
                 });
               }
             }>   
                  <Image
                    style={styles.faceimage}
                    source = {
                      require('/Users/mymac/Development/react-native/navigation/images/mic.png')
                    }
                  /> 
                  <Text style ={styles.buttonText}>Start Training</Text> 
              </TouchableOpacity> 
              </View> 
              <View style={styles.viewOne}>
              <TouchableOpacity style={styles.button}
              onPress = {
                () => {
                  Navigation.push(this.props.componentId, {
                    component: {
                      name: 'WordList',
                    }
                  });
                }
              }  
              >   
              <Image
                    // style={styles.faceimage}
                    source = {
                      require('/Users/mymac/Development/react-native/navigation/images/bookmark.png')
                    }
                  /> 
                    <Text style={styles.buttonText}>Wordlist</Text> 
              </TouchableOpacity> 
              </View>
</View>
          <View style = {styles.viewTwo}>
              <View>
                <TouchableOpacity  style={styles.button}
                onPress = {
                  () => {
                    Navigation.push(this.props.componentId, {
                      component: {
                        name: 'Profile',
                      }
                    });
                  }
                }
                >   
                    <Image 
                      source = {
                        require('/Users/mymac/Development/react-native/navigation/images/user.png')
                      }
                    /> 
                    <Text style={styles.buttonText}>Your Profile</Text> 
                </TouchableOpacity> 
              </View>
            <View style = {styles.viewTwo}>
              <TouchableOpacity style={styles.button}
              
              onPress = {
                () => {
                  Navigation.push(this.props.componentId, {
                    component: {
                      name: 'Settings',
                    }
                  });
                }
              }

              >   
                <Image 
                      source = {
                        require('/Users/mymac/Development/react-native/navigation/images/setting.png')
                      }
                    /> 
                <Text style={styles.buttonText}>Settings</Text> 
              </TouchableOpacity>  
              </View>
          </View>  
          </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewOne: { 
    flexDirection: 'row' ,
    marginTop : 10,  
    padding :5
  },
  viewTwo: { 
    marginTop : -10, 
    flexDirection: 'row' ,
    padding :10
  },
  container: {
    flex: 1, 
    backgroundColor: '#F5FCFF',
  },
  button : { 
    justifyContent: 'center',
    alignItems: 'center',
    height : 250  ,
    width : 180  ,
    backgroundColor : 'white' ,
    
  },
  backgroundImage: { 
    flex: 1,
    alignSelf: 'stretch', 
  } 
});

 