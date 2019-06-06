import React, {
  PureComponent
} from 'react';
import {
  TextInput,
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Picker,
  Dimensions
} from 'react-native';
import CardView from 'react-native-rn-cardview';
  
const { width,height } = Dimensions.get('window');  

export default class App extends PureComponent {
  render() {  
    return (
      <View style={styles.container}>
         <ImageBackground source={require('/Users/mymac/Development/react-native/navigation/images/bg.png')} style={styles.backgroundImage} > 
          <CardView  style={styles.card} cardElevation={55}
                          maxCardElevation={26}  
                          radius={5}
          >
          <View style = {styles.heading}> 
            <Text style = {{ fontSize : 20, fontFamily: 'Chiller', fontWeight : '600' , left : 10 , color : '#ffffff'  }}>Your Profile</Text>
          </View>

          <View style = {
            { 
              top: 10,
              padding: 5,
              borderBottomColor: 'grey',
              borderBottomWidth: 1, 
            }
          } >
          <Text>UserName</Text>
            <TextInput style = {{   } }> Dhairya </TextInput>
          </View>

            <View style = {
              { 
                top: 10,
                padding: 5 ,
                borderBottomColor: 'grey',
                borderBottomWidth: 1, 
              }
            }>
          <Text>Email</Text>
            <TextInput style = {{ }}> dhairyapatel143@gmail.com </TextInput>
          </View>

           <View style = {
             { 
               top: 10,
               padding: 5,
               borderBottomColor: 'grey',
               borderBottomWidth: 1, 
             }
           } >
          <Text>Words Spelled Correctly</Text>
            <TextInput style = {{ }}> 0 </TextInput>
          </View>

            <View style = {
              {  
                top: 10,
                padding: 5,
                borderBottomColor: 'grey',
                borderBottomWidth: 1, 
              }
            } >
          <Text>Total Words</Text>
            <TextInput style = {{ }}> 0</TextInput>
          </View>

          <View style = {
            { 
              top: 10,
              padding: 5,
              borderBottomColor: 'grey',
              borderBottomWidth: 1, 
            }
          } >
          <Text>Longest Streak</Text>
             <TextInput style = {{ }}> 0 </TextInput>
          </View>

          <TouchableOpacity
              style = {
                {
                  backgroundColor: '#10c8f0',
                  width: width - 120,
                  marginTop: 30,
                  left: 35,
                  padding: 15,
                  borderRadius: 30 ,
                  shadowOpacity: 0.57,
                  shadowRadius: 16.00,
                  shadowColor: "#000",
                  elevation: 12,
                }
              }
          >
              <Text style = {{ fontSize: 20 , color : '#ffffff' , alignSelf :'center' , fontWeight : '400'}} >View Leaderboard</Text>
          </TouchableOpacity>


          </CardView>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  heading:{
      padding : 20,
      backgroundColor: '#10c8f0',
  },
  
  card :{ 
    marginTop:15,
    shadowOpacity: 0.57,
    shadowRadius: 16.00,
    shadowColor: "#000",
    elevation: 12,
  },

  container: {
    flex: 1, 
    backgroundColor: '#F5FCFF',
  },
   
  backgroundImage: { 
    flex: 1,
    alignSelf: 'stretch', 
  } 
});

