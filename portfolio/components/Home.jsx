import { Text, View, Button } from 'react-native';
import { useState, useCallback } from 'react'
import { Input } from '@rneui/themed';

export default function Home({ navigation }){

    // useState variables
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("");

    // navigation module used here to move to the Question component
    function handleSubmit() {
        navigation.navigate('Question', { firstName, lastName, email })
    }
    
    // validating the email function
    let validateEmail = useCallback(() => {
        if (!/.+@.+\..{2,3}/.test(email)) {
        setEmailError("Error: Make sure your email includes an @ and a '.'");
        } else {
        setEmailError("");
        }
    }, [email]);

    // if this variable becomes true, the "Submit" button enables
    const isButtonEnabled =
    firstName.length > 0 &&
    lastName.length > 0 &&
    email.length > 0 &&
    emailError.length == ""

    return (
        <View>
            <Input
            placeholder="First Name"
            value={firstName}
            onChangeText={setFirstName}
            />
            <Input
            placeholder="Last Name"
            value={lastName}
            onChangeText={setLastName}
            />
            <Input
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            onBlur={validateEmail}
            errorMessage={emailError}
            />
            <Button title="Submit" onPress={handleSubmit} disabled={!isButtonEnabled} />
        </View>
    )
}