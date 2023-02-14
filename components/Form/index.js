import React, {useState} from "react"
import {View, Text, TextInput, TouchableOpacity} from "react-native";
import Result from "../Result";
import styles from "./style";

export default function Form(){

const [height, setHeight] = useState(null)
const [weight, setWeight] = useState(null)
const [message, setMessage] = useState("Preencha os campos")
const [imc, setImc] = useState(null)
const [textButton, setTextButton] = useState("Calcular")


function calculaImc(){
    return setImc((weight/(height*height)).toFixed(2))
}

function validation(){
    if (weight != null && height !=null) {
        calculaImc()
        setHeight(null)
        setWeight(null)
        setMessage("Seu IMC é: ")
        setTextButton("Calcular Novamente")
        return
        
    }
    setImc(null)
    setTextButton("Calcular")
    setMessage("Preencha os campos vazios")
}


return(
    <View style={styles.formContext}>

        <Text style={styles.text}>Altura</Text> 
        <TextInput 
        style={styles.input}
        onChangeText={setHeight}
        value={height}
        placeholder="EX: 1.65"
        keyboardType="numeric"
        />

        <Text style={styles.text}>Peso</Text> 
        <TextInput 
        style={styles.input}
        onChangeText={setWeight}
        value={weight}
        placeholder="EX: 86.8"
        keyboardType="numeric"
        />

        <TouchableOpacity 
        style={styles.button}
        onPress={
            () => {validation()}
        }>
        <Text style={styles.textButton}>{textButton}</Text>
        </TouchableOpacity>

        <Result message={message} imc={imc}/>
    </View>
)

}
