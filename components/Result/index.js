import React from "react"
import {View, Text} from "react-native";
import styles from "./style";


export default function Result(props){
return(
    <View style={styles.boxResult}>
        <Text style={styles.message}>{props.message}</Text> 
        <Text style={styles.message}>{props.imc}</Text> 
    </View>
)

}