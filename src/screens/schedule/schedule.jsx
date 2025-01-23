import { Text, View } from "react-native";
import { styles } from "./schedule.style"
import { Calendar, LocaleConfig } from "react-native-calendars";
import { ptBR } from "../../constants/calendar";
import { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import Button from "../../components/button/button";

LocaleConfig.locales["pt-br"] = ptBR;   //Traduzido a linguagem do calendario
LocaleConfig.defaultLocale = "pt-br";

function Schedule() {

    //Proj calendário: https://github.com/wix/react-native-calendars
    //Proj picker: https://github.com/react-native-picker/picker

    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().slice(0, 10));
    const [selectedHour, setSelectedHour] = useState("");

    return <View style={styles.container}>
        <View>
            <Calendar theme={styles.theme}
                onDayPress={(day) => {
                    setSelectedDate(day.dateString)
                }}
                markedDates={{
                    [selectedDate]: { selected: true }
                }}
                //Elegendo a data minima para marcação de dia
                minDate={new Date().toDateString()}
            />

            <View>
                <Text style={styles.textHour}>Horário</Text>
            </View>

            <View>
                <Picker selectedValue={selectedHour}
                    onValueChange={(itemValue, itemIndex) => {
                        setSelectedHour(itemValue)
                    }}>
                    <Picker.Item label="09:00" value="09:00" />
                    <Picker.Item label="09:30" value="09:30" />
                    <Picker.Item label="09:40" value="09:40" />
                </Picker>
            </View>

        </View>

        <View>
            <Button text="Confirmar Reserva" />
        </View>
    </View>
}

export default Schedule;