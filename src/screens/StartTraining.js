import React, {
  PureComponent
} from 'react';
import {Platform, Button, StyleSheet, Text, View,Image,ImageBackground ,TouchableOpacity ,Picker,Dimensions} from 'react-native'; 
import CardView from 'react-native-rn-cardview';
  
const { width,height } = Dimensions.get('window');  

export default class App extends PureComponent {
  render() {  
    return (
      <View style={styles.container}>
         <ImageBackground source={require('/Users/mymac/Development/react-native/navigation/images/bg.png')} style={styles.backgroundImage} > 
            <View style = {styles.head}>
                <Text style = {{ color:'white' , fontSize:20, fontWeight:'bold' }}>Start Training</Text>
            </View> 
         <CardView  style={styles.card} cardElevation={50}
                          maxCardElevation={26}
                          backgroundColor={'#ffffff'}>
              <Text>Correct : 10 </Text>
              <Text>Total :  10</Text>
                <View style = { styles.align }>
                    <TouchableOpacity>
                      <Image 
                          style = { styles.image }
                          source={require('/Users/mymac/Development/react-native/navigation/images/microphone.png')}
                      />  
                    </TouchableOpacity>
                </View>
              <Text style = {{ marginTop : 60 , color : '#9b9b9b' }}>   Tap Microphone to begin speaking with Alexa</Text>
        </CardView>

        <CardView style={styles.card2} 
              cardElevation={50}
              maxCardElevation={26}                         
              backgroundColor='white'
              
        >
          <Text style = {{ color : '#9b9b9b' ,padding : 15 }}  >Commands List </Text>
            <View style={{borderRadius: 5,width: width - 100  , borderWidth: 0.5,padding:15, borderColor: '#bdc3c7',marginHorizontal:20 }}>
                <Picker 
                    style={{height: 20 , width : width - 120 , color : '#4a4a4a'}}>
                    <Picker.Item label="Ask Spell Train to start a game" value="Ask Spell Train to start a game" />
                    <Picker.Item label="OK Google" value="OK Google" />
                </Picker>  
            </View>
        </CardView>
          <TouchableOpacity style = {{ top :-40 }}> 
              <Text style={styles.button}> <Image source={require('/Users/mymac/Development/react-native/navigation/images/loading.png')}/> Processing...</Text> 
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
  image : {
      height : 120,
      width : 120
  },

  align :{
    marginTop : 50, 
    left:95
  },

  button : { 
    backgroundColor : '#98d8e7' ,
    padding:15,
    color :'white',
    fontSize:20,
    fontWeight:'bold',
    width:width - 55,
    alignSelf:'center'
  },

  head : {  
      marginTop : 100, 
      backgroundColor : '#ffa800',
      height:50,
      width : width - 50,
      alignSelf: 'center', 
      padding:10
  },  
  card : {
      marginTop : -39,  
      padding:15, 
  },
  card2 : {
   width: width,
   marginTop : -75
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
 