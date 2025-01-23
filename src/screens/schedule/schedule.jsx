import { Text, View } from "react-native";
import { styles } from "./schedule.style"
import { Calendar, LocaleConfig } from "react-native-calendars";
import { ptBR } from "../../constants/calendar";
import { useState } from "react";

LocaleConfig.locales["pt-br"] = ptBR;   //Traduzido a linguagem do calendario
LocaleConfig.defaultLocale = "pt-br";

function Schedule() {

    //Projeto calendário:
    //https://github.com/wix/react-native-calendars

    const [selected, setSelected] = useState("");

    return <View style={styles.container}>
        <Calendar theme={styles.theme}
            onDayPress={(day) => {
                setSelected(day.dateString)
            }}
            markedDates={{
                [selected]: { selected: true }
            }}
            //Elegendo a data minima para marcação de dia
            minDate={new Date().toDateString()}
        />
    </View>
}

export default Schedule;