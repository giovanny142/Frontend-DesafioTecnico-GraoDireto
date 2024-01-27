import { Box, Button, useToast, VStack, Image, Modal, Center, TextArea, Input, Icon } from 'native-base'
import { useState } from 'react'
import { View, Text } from '../../Themed'
import { StyleSheet, Pressable, StatusBar } from 'react-native';
import Constants from 'expo-constants'
import { Ionicons, FontAwesome, MaterialIcons } from '@expo/vector-icons';

export function HeaderListRestaurant({onChangeText, value}: any) {

    return (
        <VStack>
            <View style={styles.header}>
                <Input value={value} onChangeText={onChangeText} w={{
                    base: "100%",
                }} InputRightElement={<Pressable>
                    <Icon as={<MaterialIcons name='search' />} size={5} mr="2" color="muted.400" />
                </Pressable>} placeholder="Buscar restaurante" fontSize={15} />
            </View>
        </VStack>
    )
}

const styles = StyleSheet.create({
    header: {
        paddingTop: Constants.statusBarHeight + 5,
        padding: 10,
        backgroundColor: '#e8e8dc',
        paddingLeft: 12,
        paddingRight: 12,
        justifyContent: 'space-between',
        display: 'flex',
        flexDirection: 'row',
    }
})