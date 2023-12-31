import React from 'react'
import {View,Text, Button} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any,any>{}; 

export const Pagina2Screen = ( { navigation }:Props) => {
  return (
    <View style={ styles.globalMargin}>
        <Text style={styles.title}>Pagina 2</Text>
        <Button
            title = "Regresar"
            onPress = { () => navigation.pop()}
        />
        <Button
            title = "Ir a pagina 3"
            onPress = { () => navigation.navigate("Pagina3Screen")}
        />
    </View>
  )
}
