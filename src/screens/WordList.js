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
  Dimensions,
  CheckBox
} from 'react-native';
import CardView from 'react-native-rn-cardview';
  
const { width,height } = Dimensions.get('window');  

export default class App extends PureComponent {
  render() {  
    return (
      <View style={styles.container}>
         <ImageBackground source={require('/Users/mymac/Development/react-native/navigation/images/bg.png')} style={styles.backgroundImage} > 
          <CardView  style={styles.card} cardElevation={90}
                          maxCardElevation={26}  
                          radius={5}
          >
          <View style = {styles.heading}> 
            <Text style = {{ fontSize : 20, fontFamily: 'Chiller', fontWeight : '600' , left : 10 , color : '#ffffff'  }}>New Wordlist</Text>
          </View>

          <View style = {
            { 
              left : 20,
              top: 10,
              padding: 5,
              borderBottomColor: '#f2f2f2',
              borderBottomWidth: 1, 
            }
          } >
            <Text>Wordlist Title</Text>
            <TextInput  > Dhairya's Words </TextInput>
          </View>

            <View style = {
              { 
                left :20,
                top: 10,
                padding: 5 ,
                borderBottomColor: '#f2f2f2',
                borderBottomWidth: 1, 
              }
            }>
            <Text>Add a New Word</Text>
             <TextInput style = {{ }}> 9Stack </TextInput>  
          </View>

           {/* <View style = {
              {                 
                top:  20,
                padding: 5 ,
                borderBottomColor: '#f2f2f2',
                borderBottomWidth: 1, 
              }
            }></View> */}


            <View style = {{flexDirection : "row" , top :30 , left :20}}> 
              <CheckBox style ={{top:5}}  title = 'Click'/>
              <Text style ={{top:10}} >Enable SpellChecker</Text>
              <TouchableOpacity 
              style = 
              {{  
                backgroundColor :'#f5807f'  ,
                left : 40,
                width : 100,
                borderRadius: 3,
              }}> 
                <Text style = {{ color : '#ffffff' , alignSelf:'center' , padding :10 ,fontSize:15 , fontWeight:'500' }}>Add</Text>
              </TouchableOpacity>
            </View> 

          <View style = {
              {                 
                top: 30,
                padding: 5 ,
                borderBottomColor: '#f2f2f2',
                borderBottomWidth: 1, 
              }
          }></View>


              <View style = {{ left : 30 , top : 50  }}>
                <Text style = {{ fontSize : 20 }} >Current WordList</Text>

                  <View style = { styles.list }> 
                    <Text style = {
                      {
                        fontSize: 15,
                        fontWeight: 'bold'
                      }
                    }> Bird </Text>
                  
                    <Image 
                      style = {{  
                          top :5,                        
                          left : 250
                      }}
                      source={require('/Users/mymac/Development/react-native/navigation/images/delete.png')}
                    />   
                  </View> 

                   <View style = { styles.list }> 
                    <Text style = {
                      {
                        fontSize: 15,
                        fontWeight: 'bold'
                      }
                    }> Ranch </Text>
                  
                    <Image 
                      style = {{  
                          top :5,                        
                          left : 235
                      }}
                      source={require('/Users/mymac/Development/react-native/navigation/images/delete.png')}
                    />   
                  </View> 

                   <View style = { styles.list }> 
                    <Text style = {
                      {
                        fontSize: 15,
                        fontWeight: 'bold'
                      }
                    }> Spoopy </Text>
                  
                    <Image 
                      style = {{  
                          top :5,                        
                          left : 227
                      }}
                      source={require('/Users/mymac/Development/react-native/navigation/images/delete.png')}
                    />   
                  </View> 

                   <View style = { styles.list }> 
                    <Text style = {
                      {
                        fontSize: 15,
                        fontWeight: 'bold'
                      }
                    }> Cringe </Text>
                  
                    <Image 
                      style = {{  
                          top :5,                        
                          left : 233
                      }}
                      source={require('/Users/mymac/Development/react-native/navigation/images/delete.png')}
                    />   
                  </View> 

                   <View style = { styles.list }> 
                    <Text style = {
                      {
                        fontSize: 15,
                        fontWeight: 'bold'
                      }
                    }> Triggered </Text>
                  
                    <Image 
                      style = {{  
                          top :5,                        
                          left : 212
                      }}
                      source={require('/Users/mymac/Development/react-native/navigation/images/delete.png')}
                    />   
                  </View> 

                   <View style = { styles.list }> 
                    <Text style = {
                      { 
                        fontSize: 15,
                        fontWeight: 'bold'
                      }
                    }> Broken </Text>
                  
                    <Image 
                      style = {{  
                          top :5,                        
                          left : 230
                      }}
                      source={require('/Users/mymac/Development/react-native/navigation/images/delete.png')}
                    />   
                  </View> 

              </View>

              

          
          <TouchableOpacity
              style = {
                {
                  top : 60,
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

  list : {
      flexDirection: 'row', 
      top: 15
  },

  heading:{
      padding : 20,
      backgroundColor: '#f5807f',
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

