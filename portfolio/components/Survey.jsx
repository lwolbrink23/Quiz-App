import { Text, View, Button, TextInput } from 'react-native';
import { useState } from 'react'

export default function Survey({ navigation }){

    function toFinalPage() {
        navigation.navigate("FinalPage", { value })
    }
    const [value, setValue] = useState('')
    return (
        <View style={{alignItems: 'center'}}>
            <Text>How was your experience?</Text>
            <TextInput
            editable
            multiline
            numberOfLines={5}
            value={value}
            onChangeText={setValue}
            style={{padding: 10, backgroundColor:"#bebebe" }}
            placeholder='type here'
            />
            <Button title="Submit" onPress={toFinalPage}></Button>
      </View>
    )
}