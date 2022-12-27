import React, {useState} from "react"
import {View, Text, TextInput, Button} from "react-native";
import Result from "../Result";


export default function Form(){

const [height, setHeight] = useState(null)
const [weight, setWeight] = useState(null)
const [message, setMessage] = useState("Preencha os campos")
const [imc, setImc] = useState(null)
const [textButton, setTextButton] = useState("calcular")


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
    <View>

        <Text>Altura</Text> 
        <TextInput 
        onChangeText={setHeight}
        value={height}
        placeholder="EX: 1.65"
        keyboardType="numeric"
        />

        <Text>Peso</Text> 
        <TextInput 
        onChangeText={setWeight}
        value={weight}
        placeholder="EX: 86.8"
        keyboardType="numeric"
        />

        <Button
        onPress={()=> validation()}
         title={textButton}
         />

        <Result message={message} imc={imc}/>
    </View>
)

}
