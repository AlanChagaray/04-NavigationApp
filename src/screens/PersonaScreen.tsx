import React from 'react'
import { useEffect, useContext } from 'react';
import { View, Text } from 'react-native';
import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../nav/StackNavigator';
import { AuthContext, AuthState } from '../context/AuthContext';
import { authReducer } from '../context/authReducer';


interface Props extends StackScreenProps<RootStackParams,'PersonaScreen'>{};

export const PersonaScreen = ( { route , navigation}: Props ) => {

    const params = route.params;

    const { changeUserName } = useContext(AuthContext)

    useEffect(() => {
        navigation.setOptions({
            title: params.name
        })
    },[]);
    
    useEffect(() => {
        changeUserName(params.name);
    }, []);
    

  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>{JSON.stringify( params ,null , 3)}</Text>
    </View>
  )
}
