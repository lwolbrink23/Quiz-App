import { Text, View, Button } from 'react-native';
import { useState, useCallback } from 'react'
import { Input } from '@rneui/themed';

export default function Home({ navigation }){

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")

    function handleSubmit() {
        navigation.navigate('Question', { firstName, lastName, email })
    }

    const [emailError, setEmailError] = useState("");
    // validating the email function
    let validateEmail = useCallback(() => {
        if (!/.+@.+\..{2,3}/.test(email)) {
        setEmailError("Error: Make sure your email includes an @ and a '.'");
        } else {
        setEmailError("");
        }
    }, [email]);

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
            placeholder="Email Name"
            value={email}
            onChangeText={setEmail}
            onBlur={validateEmail}
            errorMessage={emailError}
            />
            <Button title="Submit" onPress={handleSubmit} disabled={!isButtonEnabled} />
        </View>
    )
}