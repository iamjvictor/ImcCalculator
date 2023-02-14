import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  formContext: {
    width:"100%",
    height:"85%",
    bottom:20,
    backgroundColor:"#d0daeb",
    alignItems:"center",
    marginTop:30,
    borderRadius:30,
  },
  form: {
    width:"100%",
    height:"auto",
    marginTop:30,
    padding:10,
  },
  text:{
    color:"black",
    fontWeight:"bold",
    paddingLeft:10,
    fontSize:18
  },
  input:{
    borderRadius:50,
    width:"90%",
    backgroundColor:"#f0fdfd",
    margin:5,
    paddingLeft:10,

  },
  textButton:{
    fontSize:20,
    color:"black",
  },
  button:{
    borderRadius:50,
    alignItems:"center",
    justifyContent:"center",
    width:"90%",
    backgroundColor:"#f0fdfd",
    paddingTop:14,
    paddingBottom:14,
    margin:30,
    marginLeft:12,
  }
});

export default styles
