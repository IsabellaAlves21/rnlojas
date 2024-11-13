import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection:"row",
    gap:16,
    marginBottom: 8    
  },
  text:{
    color:"#777"
  },
  image:{
    width: 100,
    height: 100,
    borderRadius:12
  },
  textContainer:{
    flex:1
  },
  destaque:{
    fontWeight:'bold',
    color: "#E67A31"
  }
});