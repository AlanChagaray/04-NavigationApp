import React from 'react'
import {View,Text, Button} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { colors, styles } from '../theme/appTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props extends StackScreenProps<any,any>{}; 

export const Pagina1Screen = ( { navigation }:Props) => {
  return (
    <View style={ styles.globalMargin}>
        <Text style={styles.title}>Pagina 1</Text>
        <Button
            title = "Ir a pagina 2"
            onPress = { () => navigation.navigate("Pagina2Screen")}
        />

        <Text>Navegar con argumentos</Text>
        <View style={styles.userContainer }>
        <TouchableOpacity style={styles.userButton} 
          onPress = { () => navigation.navigate("PersonaScreen",{
            id: 1,
            name: 'Pedro'
          })} >
            <Text >Pedro</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.userButton}
          onPress = { () => navigation.navigate("PersonaScreen",{
            id: 2,
            name: 'Maria'
          })} >
            <Text>Maria</Text>
        </TouchableOpacity>
        </View>
    </View>
  )
}
