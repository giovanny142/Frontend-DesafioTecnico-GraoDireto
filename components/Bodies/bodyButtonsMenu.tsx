import { Box, Button, NativeBaseProvider, VStack, Image } from 'native-base'
import React from 'react'
import { View, Text } from '../Themed'
import { Header } from 'react-native/Libraries/NewAppScreen'
import { StyleSheet, Pressable, StatusBar, SafeAreaView } from 'react-native';


export function ButtonsDetailsRestaurant() {
    return (
        <VStack>

            <View style={styles.bodyHeader} >
                <View style={styles.divButtons}>
                    <Button style={styles.button}> <Text style={styles.textButtons}> Entradas </Text> </Button>
                    <Button style={styles.button}> <Text style={styles.textButtons}> Bebidas </Text> </Button>
                    <Button style={styles.button}> <Text style={styles.textButtons}> Sobremesa </Text> </Button>
                </View>
            </View>
        </VStack>
    )
}

const styles = StyleSheet.create({
    bodyHeader: {
        backgroundColor: '#4E6C50',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        padding: 10,
    },
    button: {
        alignSelf: 'flex-end',
        width: '35%',
        borderRadius: 20,
        backgroundColor: '#263A29',
        margin: 5,
        marginTop: -3
    },
    divButtons: {
        //justifyContent: 'space-between',
        display: 'flex',

        paddingLeft: 15,
        paddingRight: 15,
        flexDirection: 'row',
        backgroundColor: '#4E6C50',
        justifyContent: 'center'
    },
    textButtons: {
        textAlign: 'center',
        justifyContent: 'center',
        margin: -20,
        fontSize: 16,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
        fontStyle: 'italic'
    },
})