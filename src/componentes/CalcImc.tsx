import React, {useState} from "react";
import {Text, View, TextInput, Button, Alert} from "react-native";
import Padrao from "../estilos/Padrao";

function CalcImc(props: any){
    const [peso, setPeso] = useState ('');
    const [altura, setAltura] = useState('');

    const pesoCalc = parseFloat(peso);
    const alturaCalc = parseFloat(altura);

    const resultado = (pesoCalc/(alturaCalc*alturaCalc));

    let result = '';

    if(resultado < 18.5){
        result = "Abaixo do peso"
    }else if(resultado >= 18.5 && resultado <= 24.9){
        result = "Peso adequado"
    }else if(resultado >= 25 && resultado <= 29.9){
        result = "Acima do peso"
    }else if(resultado >= 30 && resultado <= 39.9){
        result = "Obeso"
    }else if(resultado >= 40){
        result = "Obesidade grave"
    }
    
    return (
        <>
        <Text style={Padrao.titu}>Calcula IMC</Text>
            <TextInput
                placeholder={props.placeholder1}
                style={Padrao.input}
                value={peso}
                onChangeText={peso => setPeso(peso)}
            />
            <TextInput
                placeholder={props.placeholder2}
                style={Padrao.input}
                value={altura}
                onChangeText={altura => setAltura(altura)}
            />
            <Button title="Calcular"
                onPress={() => Alert.alert("Resultado: " + String(resultado) + "\nClasse: " +result) }
            />        
        </>
         )
}
export default (props: any) => (
    <>
        {
            CalcImc(props)
        }
    </>
)