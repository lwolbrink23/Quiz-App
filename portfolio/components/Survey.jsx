import { Text, View, Button, TextInput } from 'react-native';
import { useState } from 'react'

export default function Survey({ navigation }){

    const [value, setValue] = useState('')
    const [submitted, setSubmitted] = useState(false)

    function showResponse() {
        setSubmitted(true)
    }

    function goHome() {
        navigation.navigate("Home")
    }
    
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
            <Button title="Submit" onPress={showResponse}></Button>
            {submitted && (
                <View style={{alignItems: 'center'}}>
                    <Text>Thank you for your submission.</Text>
                    <Text>Your Response: {value}</Text>
                    <Button title="Go to Home" onPress={goHome}></Button>
                </View>
            )}
      </View>
    )
}