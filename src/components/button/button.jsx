import { Alert, Text, TouchableOpacity } from "react-native";
import { styles } from "./buttons.style.js";

function Button(props) {

    function TesteClick() {
        Alert.alert("Clicou no botão")
    }
    return <TouchableOpacity onPress={TesteClick} style={styles.btn}>
        <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
}

export default Button;