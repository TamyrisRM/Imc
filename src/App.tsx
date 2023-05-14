import React, {Component} from "react";
import { View, Text, StyleSheet } from "react-native";
import CalcImc from "./componentes/CalcImc";
import Padrao from "./estilos/Padrao";

export default class App extends Component {
    render() {
        return (
            <View style={Padrao.default}>
                <CalcImc placeholder1 = "Peso" placeholder2 = "Altura" />
            </View>
        )
    }
}
