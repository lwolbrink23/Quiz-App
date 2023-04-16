import { Text, View, Button } from 'react-native';


export default function FinalPage({ navigation, route }){
    const { value } = route.params;

    function goHome() {
        navigation.navigate("Home")
    }

    return (
        <View style={{alignItems: 'center'}}>
            <Text>Thank you for your submission.</Text>
            <Text>Your Response: {value}</Text>
            <Button title="Go to Home" onPress={goHome}></Button>
      </View>
    )
}