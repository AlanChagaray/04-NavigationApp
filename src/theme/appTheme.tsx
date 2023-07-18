import { StyleSheet } from "react-native";

export const colors = {
    primary: "#5856D6",
    secondary: "blue"
}

export const styles = StyleSheet.create({
    globalMargin : { 
        marginHorizontal:20
     },
     title: {
        fontSize : 30,
        marginBottom: 10
     },
     avatarContainer: {
      alignItems: 'center',
      marginTop: 20
  },
  avatar: {
      width: 150,
      height: 150,
      borderRadius: 100
  },
  userButton: {
    backgroundColor: 'red',
    width: 100,
    height: 100,
    borderRadius: 10,
    justifyContent: 'center',
    paddingHorizontal: 30
  },
  userContainer: {
    flexDirection:'row'
   },
  userName:{
    justifyContent: 'center'
  },
  menuContainer: {
      marginVertical: 30,
      marginHorizontal: 50,
  },
  menuBoton: {
      marginVertical: 10
  },
  menuTexto: {
      fontSize: 20
  }
});