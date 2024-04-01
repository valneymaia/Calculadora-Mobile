import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Button,Text} from 'react-native-paper';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {NavigationContainer} from '@react-navigation/native';
import Calculadora from './Calculadora';
import Conversor from './conversor';
import IMC from './IMC';
import Temperatura from './Temperatura';



function BoasVindas({navigation}) {

  return (
    <View style={styles.container}>

      <View style={styles.conteudo}>
        <Image
          source={require('./assets/IMC.png')}
          style={styles.imagem}
          />
        <Image
          source={require('./assets/Conversor.png')}
          style={styles.imagem}
        />
        </View>

      <View style={styles.botoes}>
        <Button mode="contained" buttonColor = "#fff" style= {styles.botoes3}  textColor='#013c58'
            onPress={
                ()=> {
                    navigation.navigate('IMC');
                }
            }  
          >
            IMC
          </Button>   
          <Text>     </Text>

          <Button mode="contained" buttonColor = "#fff" style= {styles.botoes3}  textColor='#013c58'
            onPress={
                ()=> {
                    navigation.navigate('Conversor');
                }
            }  
          >
              Conversor
          </Button>   

      </View>

      <View style={styles.conteudo2}>

         <Image
          source={require('./assets/Calculadora.png')}
          style={styles.imagem}
        />
        <Image
          source={require('./assets/Temperatura.png')}
          style={styles.imagem}
        />
        </View>

      <View style={styles.botoes}>
        <Button mode="contained" buttonColor = "#fff" style= {styles.botoes3} textColor='#013c58'
            onPress={
                ()=> {
                    navigation.navigate('Calculadora');
                }
            }  
          >
              Calculadora
        </Button>   
        <Text>     </Text>
        <Button mode="contained" buttonColor = "#fff" style= {styles.botoes3} textColor='#013c58'
            onPress={
                ()=> {
                    navigation.navigate('Temperatura');
                }
            } 
          >
            Temperatura
          </Button>   
    
        </View>

    </View>

  );
}



const Stack = createNativeStackNavigator();



export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Menu Inicial" component={BoasVindas}/>
          <Stack.Screen name="Calculadora" component={Calculadora}/>
          <Stack.Screen name="Conversor" component={Conversor}/>
          <Stack.Screen name="IMC" component={IMC}/>
          <Stack.Screen name="Temperatura" component={Temperatura}/>
        </Stack.Navigator>
      </NavigationContainer>

  );
  
}



const styles = StyleSheet.create({
  container:  {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'red',
  },

  cabecalho: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#395886',
  },

  conteudo: {
    flex: 5,
    backgroundColor: '#013c58',
    alignItems: 'center',
    justifyContent: 'center',
  //  flexWrap: 'wrap',
    flexDirection: 'row',
    //alignContent: 'space-around',
  },

  conteudo2: {
    flex: 5,
    backgroundColor: '#013c58',
    alignItems: 'center',
    justifyContent: 'center',
  //  flexWrap: 'wrap',
    flexDirection: 'row',
    //alignContent: 'space-around',
  },

  botoes: {
    flex: 2,
    backgroundColor: '#013c58',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 7,
    paddingVertical: 6,
   // marginHorizontal: '1%',
   // marginBottom: 6,
   // minWidth: '48%',
    //textAlign: 'center',
    
  },


  botoes3: {
    width: 150,
    //backgroundColor: '#fff',
    //color: '##013c58',
    textDecorationColor: '#fff'
  },

  
  imagem: {
   justifyContent: 'center',
    width: 150,
    height: 150,
  },
  
  rodape: {
    flex: 1,
    backgroundColor: '#395886',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

});


