import React,{useContext} from 'react'
import { Text, View, Button } from 'react-native';
import { AuthContext} from '../context/AuthContext';
import { styles } from '../theme/appTheme';

export const ContactScreen = () => {
  
  const {singIn, authState :{ isLoggedIn }} = useContext(AuthContext)
  
  return (
      <View>
        <Text style={styles.title}>ContactScreen</Text>
        {
          !isLoggedIn ? <Button title='Sing In' onPress={singIn}/> : null
        }
      </View>
  )
}
