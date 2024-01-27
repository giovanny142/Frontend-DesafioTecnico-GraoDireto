import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import { Icon, Input, Pressable, Stack, Image, View, Button } from "native-base";
import { useState } from "react";
import { StyleSheet } from "react-native";

export function Login() {
    const navigation: any = useNavigation();
    const [show, setShow] = useState(false);

    return (
        <View style={styles.container}>
            <Stack style={styles.login} space={4} w="100%" alignItems="center">
                <Input w={{
                    base: "75%",
                    md: "25%"
                }} InputLeftElement={<Icon as={<MaterialIcons name="person" />} size={5} ml="2" color="muted.400" />} placeholder="E-mail" />
                <Input w={{
                    base: "75%",
                    md: "25%"
                }} type={show ? "text" : "password"} InputRightElement={<Pressable onPress={() => setShow(!show)}>
                    <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" />
                </Pressable>} placeholder="Senha" />
                <Button onPress={() => navigation.navigate('listRestaurants')}>Entrar</Button>
            </Stack>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: '#4E6C50',
        // borderRadius: 300,
        // // marginTop: 350,
        // alignItems: 'center',
        // alignContent: 'center',
        // justifyContent: 'center'
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#263A29',
    },
    login: {
        backgroundColor: '#4E6C50',
        borderRadius: 100,
        borderTopWidth: 40,
        borderBottomWidth: 40,
        borderColor: '#4E6C50'
    }
})
