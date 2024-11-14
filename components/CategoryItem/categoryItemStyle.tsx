import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width:"100%",
    height:160,
    backgroundColor:"ddd",
    borderRadius:12,
    marginBottom:12,
  },
  ImageLayer:{
    width:"50%",
    height:160,
    borderRadius:12,
  },
  blackColorLayer:{
    width:"100%",
    height:160,
    borderRadius:12,
    backgroundColor:"000",
    marginTop:-160,
    opacity:0.4
  },
  textLayer:{
    width:"100%",
    height:160,
    borderRadius:12,
    marginTop:-160,
    justifyContent:'center',
    alignItems:'center',
  },
  text:{
    fontSize:24,
    color:"#fff",
    fontWeight:"bold"
  }
});