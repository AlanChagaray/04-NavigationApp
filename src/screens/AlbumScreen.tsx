import React from 'react'
import {useContext} from 'react'
import { Text, View , Button} from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { styles } from '../theme/appTheme';

export const AlbumScreen = () => {

  const { singOut , authState:{isLoggedIn}} = useContext(AuthContext)

  return (
      <View>
        <Text style={styles.title}>AlbumScreen</Text>
        {
          isLoggedIn ? <Button title='Sing Out' onPress={singOut}/> : null
        }
      </View>
  )
}
